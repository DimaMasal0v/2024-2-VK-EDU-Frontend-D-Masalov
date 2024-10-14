const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const moreIcon = document.querySelector('.more-icon');
const dropdownMenu = document.getElementById('dropdownMenu');

// Загружаем сообщения из localStorage
const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.forEach(addMessageToList);
};

// Сохраненяем сообщение в localStorage
const saveMessage = (text, type) => {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ text, type, time: new Date().toLocaleTimeString() });
    localStorage.setItem('messages', JSON.stringify(messages));
};

// Добавляем сообщение в список
const addMessageToList = ({ text, type, time }) => {
    const messageItem = document.createElement('div');
    messageItem.className = `message-item ${type}`;
    messageItem.textContent = `[${time}] ${text}`;
    messageList.appendChild(messageItem);
    messageList.scrollTop = messageList.scrollHeight; // Прокрутка вниз
};

// Обработчик отправки сообщения
const sendMessage = () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messageType = 'sent';
        addMessageToList({ text: messageText, type: messageType, time: new Date().toLocaleTimeString() });
        saveMessage(messageText, messageType);
        messageInput.value = '';
    }
};

// Показ/скрытие выпадающего меню
moreIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Закрытие выпадающего меню при клике вне его
window.addEventListener('click', (e) => {
    if (!e.target.closest('.more-icon') && !e.target.closest('.dropdown-menu')) {
        dropdownMenu.classList.remove('show');
    }
});

// События
sendMessageButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Инициализация
loadMessages();
