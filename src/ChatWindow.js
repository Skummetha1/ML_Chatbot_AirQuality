import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (newMessage.trim()) {
      const message = newMessage;
      setMessages([...messages, { type: 'text', content: `You: ${message}` }]);
      setNewMessage('');
  
      try {
        const response = await axios.post('http://localhost:9000/query', { query: message });
        const serverResponse = response.data.response;
  
        let displayMessage = '';
        let imageData = null;
  
        if (typeof serverResponse === 'object') {
          if (serverResponse.message) {
            displayMessage = serverResponse.message;
          } 
          if (serverResponse.image_data) {
            imageData = serverResponse.image_data;
          } 
          if (Array.isArray(serverResponse)) {
            displayMessage = serverResponse[0];
          } else if (serverResponse.response) {
            displayMessage = Array.isArray(serverResponse.response)
              ? serverResponse.response.join(' ')
              : serverResponse.response;
          }
        } else {
          displayMessage = serverResponse;
        }
  
        setMessages(prevMessages => [
          ...prevMessages,
          { type: 'text', content: `PurifAI: ${displayMessage}` }
        ]);
  
        if (imageData) {
          setMessages(prevMessages => [
            ...prevMessages,
            { type: 'image', content: imageData }
          ]);
        }
      } catch (error) {
        console.error('There was a problem sending the message:', error);
        setMessages(prevMessages => [
          ...prevMessages,
          { type: 'text', content: 'PurifAI: Error sending message' }
        ]);
      }
    }
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat-window">
     <div className="messages">
  {messages.map((msg, index) => (
    <div key={index} className={`message ${msg.content.startsWith('You:') ? 'you' : 'purifai'}`}>
      {msg.type === 'text' ? (
        msg.content
      ) : msg.type === 'image' ? (
        <img src={`data:image/png;base64,${msg.content}`} alt="Heatmap" style={{ maxWidth: '100%', marginTop: '10px' }} />
      ) : null}
    </div>
  ))}
  <div ref={messagesEndRef} />
</div>
      <form onSubmit={handleSendMessage} className="send-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;