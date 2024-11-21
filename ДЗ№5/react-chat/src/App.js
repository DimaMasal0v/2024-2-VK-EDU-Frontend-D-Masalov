import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatView from './components/ChatView';
import './App.css';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackToChatList = () => {
    setSelectedChat(null);
  };

  return (
    <div className="App">
      {selectedChat ? (
        <ChatView chat={selectedChat} onBack={handleBackToChatList} />
      ) : (
        <ChatList onSelectChat={handleChatSelect} />
      )}
    </div>
  );
}

export default App;

