import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ChatList from "./components/ChatList";
import ChatView from "./components/ChatView";
import ProfilePage from "./components/ProfilePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Маршрут для списка чатов */}
          <Route path="/" element={<ChatList />} />
          {/* Маршрут для просмотра чата */}
          <Route path="/chat/:id" element={<ChatView />} />
          {/* Маршрут для страницы профиля */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


