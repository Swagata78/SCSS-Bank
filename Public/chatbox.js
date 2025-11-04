<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SCSS Bank – AI Assistant</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      transition: background 0.3s, color 0.3s;
    }
    header {
      background-color: #003366;
      color: white;
      padding: 20px;
      text-align: center;
      position: relative;
    }
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      overflow: hidden;
      height: 100%;
    }
    .chat-log {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      border-bottom: 1px solid #e0e0e0;
      scroll-behavior: smooth;
    }
    .chat-entry {
      margin-bottom: 15px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .chat-entry.user {
      flex-direction: row-reverse;
    }
    .chat-entry .avatar img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
    }
    .chat-entry .bubble {
      padding: 10px 15px;
      border-radius: 16px;
      max-width: 75%;
      line-height: 1.4;
      position: relative;
    }
    .chat-entry.bot .bubble {
      background-color: #e6f0ff;
      color: #003366;
    }
    .chat-entry.user .bubble {
      background-color: #007bff;
      color: white;
    }
    .bubble.typing::after {
      content: '';
      display: inline-block;
      width: 1em;
      animation: dots 1.5s steps(3, end) infinite;
    }
    @keyframes dots {
      0% { content: ''; }
      33% { content: '.'; }
      66% { content: '..'; }
      100% { content: '...'; }
    }
    .timestamp {
      font-size: 0.75rem;
      color: #999;
      margin-top: 2px;
    }
    .chat-input {
      display: flex;
      flex-direction: column;
      border-top: 1px solid #e0e0e0;
      padding: 10px;
      gap: 10px;
    }
    .chat-input-row {
      display: flex;
      gap: 10px;
    }
    .chat-input input[type="text"] {
      flex: 1;
      border: 1px solid #ccc;
      padding: 15px;
      font-size: 16px;
      border-radius: 6px;
      outline: none;
    }
    .chat-input button {
      padding: 15px;
      background-color: #003366;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .theme-toggle {
      position: absolute;
      top: 20px;
      right: 20px;
      background: #fff;
      color: #003366;
      border: 1px solid #003366;
      border-radius: 6px;
      padding: 5px 10px;
      cursor: pointer;
    }
    body.dark-mode {
      background-color: #1a1a1a;
      color: white;
    }
    body.dark-mode .chat-container {
      background-color: #2c2c2c;
    }
    body.dark-mode .chat-entry.bot .bubble {
      background-color: #444;
      color: #ddd;
    }
    body.dark-mode .chat-entry.user .bubble {
      background-color: #0056b3;
    }
    .tools {
      display: flex;
      gap: 10px;
    }
    .tools button {
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      color: #333;
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 16px;
    }
    body.dark-mode .tools button {
      background-color: #444;
      color: white;
      border-color: #666;
    }

    /* Floating Chat Button */
    #chat-toggle-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #003366;
      color: white;
      width: 60px;
      height: 60px;
      font-size: 28px;
      border-radius: 50%;
      text-align: center;
      line-height: 60px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      cursor: pointer;
      z-index: 10000;
    }
    .chat-wrapper {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 350px;
      max-height: 85vh;
      display: none;
      z-index: 9999;
    }
    .chat-wrapper.active {
      display: block;
    }
  </style>
</head>
<body onload="startBot()">

<!-- Floating Button -->
<div id="chat-toggle-button" onclick="toggleChat()" title="Chat with SCSS Assistant">💬</div>

<!-- Collapsible Chat Box -->
<div class="chat-wrapper" id="chat-wrapper">
  <div class="chat-container">
    <header>
      <h2>🤖 SCSS Bank AI Assistant</h2>
      <p>Your smart banking support 24/7</p>
      <button class="theme-toggle" onclick="toggleTheme()">🌓 Theme</button>
    </header>
    <div class="chat-log" id="chatLog"></div>
    <div class="chat-input">
      <div class="tools">
        <input type="file" id="fileInput" accept="image/*" onchange="handleFile(event)" style="display:none">
        <button onclick="document.getElementById('fileInput').click()" aria-label="Upload image">📷 Image</button>
        <button onclick="startVoiceRecognition()" aria-label="Voice input">🎤 Voice</button>
        <button onclick="clearChatHistory()" aria-label="Clear chat">🧹 Clear</button>
      </div>
      <div class="chat-input-row">
        <input type="text" id="userInput" placeholder="Type your message here..." onkeydown="if(event.key==='Enter'){sendMessage()}" />
        <button onclick="sendMessage()" aria-label="Send message">Send</button>
      </div>
    </div>
  </div>
</div>

<script>
function toggleChat() {
  const wrapper = document.getElementById('chat-wrapper');
  wrapper.classList.toggle('active');
}

// Keep your original JS (like startBot, appendMessage, sendMessage, etc.) BELOW THIS
// ... all existing JavaScript functions go here (same as your current script)
</script>

<!-- Paste all your existing chatbot JavaScript here -->
<script>
// Your full existing chatbot logic continues...
</script>
</body>
</html>
