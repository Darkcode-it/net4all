// src/components/Panel.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Panel.module.css';

const Panel = () => {
  const [activeTab, setActiveTab] = useState('favorites');
  
  const dummyFavorites = [
    { 
      id: 1, 
      title: 'مبانی شبکه‌های کامپیوتری', 
      link: '/article/1',
      category: 'شبکه',
      date: '۱۴۰۲/۰۵/۱۲',
      readingTime: '۸ دقیقه'
    },
    { 
      id: 2, 
      title: 'امنیت شبکه و تهدیدات سایبری', 
      link: '/article/2',
      category: 'امنیت',
      date: '۱۴۰۲/۰۴/۲۸',
      readingTime: '۱۲ دقیقه'
    },
  ];

  const dummySavedArticles = [
    { 
      id: 3, 
      title: 'پیکربندی روترهای سیسکو', 
      link: '/article/3',
      category: 'شبکه',
      date: '۱۴۰۲/۰۳/۱۵',
      readingTime: '۱۵ دقیقه'
    },
    { 
      id: 4, 
      title: 'شبکه‌های بی‌سیم و امنیت WiFi', 
      link: '/article/4',
      category: 'امنیت',
      date: '۱۴۰۲/۰۲/۲۰',
      readingTime: '۱۰ دقیقه'
    },
    { 
      id: 5, 
      title: 'تست نفوذ و ارزیابی امنیتی', 
      link: '/article/5',
      category: 'امنیت',
      date: '۱۴۰۲/۰۱/۰۵',
      readingTime: '۱۸ دقیقه'
    },
  ];

  const userStats = {
    articlesRead: 24,
    certificates: 3,
    learningHours: 42
  };

  return (
    <div className={styles.panelContainer}>
      <div className={styles.userProfileCard}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>م</div>
          <div className={styles.userInfo}>
            <h2 className={styles.userName}>محمد رسولی</h2>
            <p className={styles.userEmail}>mohammad@example.com</p>
          </div>
        </div>
        
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📚</div>
            <div className={styles.statValue}>{userStats.articlesRead}</div>
            <div className={styles.statLabel}>مقاله مطالعه شده</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🏆</div>
            <div className={styles.statValue}>{userStats.certificates}</div>
            <div className={styles.statLabel}>گواهینامه</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>⏱️</div>
            <div className={styles.statValue}>{userStats.learningHours}</div>
            <div className={styles.statLabel}>ساعت آموزش</div>
          </div>
        </div>
      </div>
      
      <div className={styles.tabsContainer}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'favorites' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          <span className={styles.tabIcon}>❤️</span>
          لیست علاقه‌مندی‌ها
        </button>
        
        <button 
          className={`${styles.tabButton} ${activeTab === 'saved' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <span className={styles.tabIcon}>📁</span>
          مقالات ذخیره‌شده
        </button>
      </div>
      
      <div className={styles.contentArea}>
        {activeTab === 'favorites' && (
          <div className={styles.articlesList}>
            {dummyFavorites.map(item => (
              <Link to={item.link} key={item.id} className={styles.articleCard}>
                <div className={styles.articleHeader}>
                  <div className={styles.categoryTag}>{item.category}</div>
                  <div className={styles.date}>{item.date}</div>
                </div>
                <h3 className={styles.articleTitle}>{item.title}</h3>
                <div className={styles.articleFooter}>
                  <div className={styles.readingTime}>
                    <span className={styles.clockIcon}>⏱️</span>
                    {item.readingTime}
                  </div>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionButton}>
                      <span className={styles.buttonIcon}>🗑️</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {activeTab === 'saved' && (
          <div className={styles.articlesList}>
            {dummySavedArticles.map(item => (
              <Link to={item.link} key={item.id} className={styles.articleCard}>
                <div className={styles.articleHeader}>
                  <div className={styles.categoryTag}>{item.category}</div>
                  <div className={styles.date}>{item.date}</div>
                </div>
                <h3 className={styles.articleTitle}>{item.title}</h3>
                <div className={styles.articleFooter}>
                  <div className={styles.readingTime}>
                    <span className={styles.clockIcon}>⏱️</span>
                    {item.readingTime}
                  </div>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionButton}>
                      <span className={styles.buttonIcon}>🗑️</span>
                    </button>
                    <button className={styles.actionButton}>
                      <span className={styles.buttonIcon}>📤</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <div className={styles.quickActions}>
        <button className={styles.quickActionButton}>
          <span className={styles.actionIcon}>⚙️</span>
          تنظیمات حساب
        </button>
        <button className={styles.quickActionButton}>
          <span className={styles.actionIcon}>🔒</span>
          تغییر رمز عبور
        </button>
        <button className={styles.quickActionButton}>
          <span className={styles.actionIcon}>📝</span>
          دوره‌های من
        </button>
      </div>
    </div>
  );
};

export default Panel;