const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MongoDB Connection 
mongoose.connect('mongodb+srv://Chiu9980:Chinmayee%4028@chinmayee.hlbjcxt.mongodb.net/authApp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// MongoDB Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phone: String,
});
const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/views/login.html'));
app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'));
app.get('/forgot', (req, res) => res.sendFile(__dirname + '/views/forgot.html'));

// Signup
app.post('/signup', async (req, res) => {
  const { username, email, password, phone } = req.body;
  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.send('Username already exists!');
  }
  const user = new User({ username, email, password, phone });
  await user.save();
  res.send('Signup successful! <a href="/">Go to Login</a>');
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    return res.send('Wrong username or password! <a href="/">Try again</a>');
  }

  // Redirect to index.html after successful login
  res.redirect('/banks.html');
});

// Forgot
app.post('/forgot', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.send('Email not found!');
  }
  // Simulate sending email
  res.send(`Password reset link sent to ${email} (Simulated)`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
