import React, { useState } from 'react';
import '../ChatView.css';

// Импорты иконок
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function ChatView({ onBack }) {
  const [messages, setMessages] = useState([]); // Список сообщений
  const [newMessage, setNewMessage] = useState(''); // Новое сообщение
  const [dropdownVisible, setDropdownVisible] = useState(false); // Видимость меню

  // Отправка сообщения
  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    const timestamp = new Date().toLocaleTimeString().slice(0, 8); // Часы:минуты:секунды
    setMessages((prev) => [...prev, { text: newMessage, time: timestamp }]);
    setNewMessage('');
  };

  // Переключение видимости выпадающего меню
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        {/* Иконка "Назад" */}
        <span className="material-icons back-icon" onClick={onBack}>
          <ArrowBackIcon />
        </span>
        <img
          src="https://via.placeholder.com/40"
          alt="avatar"
          className="avatar"
          style={{ borderRadius: '50%', marginRight: '10px' }}
        />
        <div className="profile-info">
          <div className="name">Дима Масалов</div>
          <div className="status">Был в сети 2 часа назад</div>
        </div>
        <div className="menu-icons">
          {/* Иконка "Поиск" */}
          <span className="material-icons">
            <SearchIcon />
          </span>
          {/* Иконка "Еще" */}
          <span className="material-icons more-icon" onClick={toggleDropdown}>
            <MoreVertIcon />
          </span>
          <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`} id="dropdownMenu">
            <div>Info</div>
            <div>Mute</div>
          </div>
        </div>
      </div>
      <div className="message-list" id="messageList">
        {messages.map((message, index) => (
          <div key={index} className="message-item sent">
            <span>[{message.time}] {message.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        {/* Иконка "Прикрепить файл" */}
        <span className="material-icons attach-icon">
          <AttachFileIcon />
        </span>
        <input
          type="text"
          id="messageInput"
          placeholder="Введите сообщение"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()} 
        />
        <button id="sendMessageButton" onClick={sendMessage}>
          Отправить
        </button>
      </div>
    </div>
  );
}

export default ChatView;
