import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "../ProfilePage.css";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate(); // Хук для навигации

  return (
    <div className="profile-container">
      {/* Шапка */}
      <div className="header">
        <span className="back-icon" onClick={() => navigate("/")}>
          <ArrowBackIcon style={{ cursor: "pointer" }} />
        </span>
        <div className="header-title">Edit Profile</div>
      </div>

      {/* Контент */}
      <div className="profile-content">
        {/* Фото профиля */}
        <div className="profile-photo">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="profile-avatar"
          />
          <button className="upload-button">
            <CameraAltIcon style={{ fontSize: "16px" }} />
          </button>
        </div>

        {/* Полное имя */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" defaultValue="Tony Jackobson" />
        </div>

        {/* Имя пользователя */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" defaultValue="@tony" />
          <small>Minimum length is 5 characters</small>
        </div>

        {/* Биография */}
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" defaultValue="Subtitle 1"></textarea>
          <small>Any details about you</small>
        </div>

        {/* Кнопка сохранения */}
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}

export default ProfilePage;
