import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Navbar from "src/components/Navbar/navbar.jsx";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Essa ferramenta está em andamento! Estamos trabalhando o mais rápido para trazer o melhor para você!', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputValue('');

    // Simulação de resposta do bot
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: `Você disse: "${inputValue}". Infelizmente não posso te ajudar no momento :(`,
        sender: 'bot'
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
    <Navbar />
    <div className="chatbot-container">
      <header className="chatbot-header">
        <h1>Meu Chatbot</h1>
      </header>
      <div className="chatbot-messages">
        {messages.map(message => (
          <div
            key={message.id}
            className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
    </>
  );
};

export default ChatbotPage;