import React from 'react';
import '../App.css';

// Импорт иконок
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EditIcon from '@mui/icons-material/Edit';

// Данные чатов
const chatData = [
  {
    id: 1,
    name: 'Дима Масалов',
    message: 'Привет, как дела?',
    time: '10:45',
    status: 'done_all',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    name: 'Иван Петров',
    message: 'До встречи!',
    time: '09:30',
    status: 'done',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 3,
    name: 'Мария Смирнова',
    message: 'Спасибо за помощь!',
    time: '08:15',
    status: 'done_all',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 4,
    name: 'Алексей Кузнецов',
    message: 'img_12-12-24',
    time: '07:50',
    status: 'done_all',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 5,
    name: 'Юлия Федорова',
    message: 'Отправила документы.',
    time: '07:00',
    status: 'done',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 6,
    name: 'Дмитрий Соколов',
    message: 'Когда встречаемся?',
    time: '06:30',
    status: 'done_all',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 7,
    name: 'Ольга Попова',
    message: 'Хорошего дня!',
    time: '06:00',
    status: 'done',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 8,
    name: 'Егор Лебедев',
    message: 'Проверь почту.',
    time: '05:30',
    status: 'done_all',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 9,
    name: 'Виктория Григорьева',
    message: 'Отлично, до завтра.',
    time: '05:00',
    status: 'done',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 10,
    name: 'Сергей Никитин',
    message: 'Скоро выезжаю.',
    time: '04:30',
    status: 'done_all',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 11,
    name: 'Алина Крылова',
    message: 'Жду твой ответ.',
    time: '04:00',
    status: 'done',
    avatar: 'https://via.placeholder.com/40',
  },
];

// Компонент списка чатов
function ChatList({ onSelectChat }) {
  // Функция для выбора иконки статуса
  const getStatusIcon = (status) => {
    switch (status) {
      case 'done':
        return <DoneIcon />;
      case 'done_all':
        return <DoneAllIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="chat-list-container">
      {/* Заголовок */}
      <div className="header">
        <span className="material-icons back-icon">
          <MenuIcon />
        </span>
        <div className="header-title">Messenger</div>
        <span className="material-icons search-icon">
          <SearchIcon />
        </span>
      </div>

      {/* Список чатов */}
      <div className="chat-items">
        {chatData.map((chat) => (
          <div
            className="chat-item"
            key={chat.id}
            onClick={() => onSelectChat(chat)}
          >
            <img src={chat.avatar} alt="avatar" className="avatar" />
            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-message">{chat.message}</div>
            </div>
            <div className="chat-status">
              <span className="time">{chat.time}</span>
              <span className="status-icon">{getStatusIcon(chat.status)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка создания нового чата */}
      <div className="floating-button">
        <span className="material-icons">
          <EditIcon />
        </span>
      </div>
    </div>
  );
}

export default ChatList;
