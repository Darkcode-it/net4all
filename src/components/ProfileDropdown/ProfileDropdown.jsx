// src/components/ProfileDropdown.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const ProfileDropdown = ({ onClose }) => {
  const { user, logout } = useAuth();

  return (
    <div className={styles.profileDropdown} onClick={(e) => e.stopPropagation()}>
      <div className={styles.profileInfo}>
        <div className={styles.avatar}>{user.name.charAt(0)}</div>
        <div>
          <div className={styles.profileName}>{user.name}</div>
          <div className={styles.profileEmail}>{user.email}</div>
        </div>
      </div>
      
      <ul className={styles.profileMenu}>
        <li>
          <Link to="/profile" className={styles.profileLink} onClick={onClose}>
            <span className={styles.profileIcon}>👤</span>
            پروفایل من
          </Link>
        </li>
        <li>
          <Link to="/courses" className={styles.profileLink} onClick={onClose}>
            <span className={styles.profileIcon}>🎓</span>
            دوره‌های من
          </Link>
        </li>
        <li>
          <Link to="/settings" className={styles.profileLink} onClick={onClose}>
            <span className={styles.profileIcon}>⚙️</span>
            تنظیمات
          </Link>
        </li>
        <li>
          <button 
            className={`${styles.profileLink} ${styles.logoutButton}`}
            onClick={() => {
              logout();
              onClose();
            }}
          >
            <span className={styles.profileIcon}>🚪</span>
            خروج
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;