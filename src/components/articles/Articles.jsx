// src/pages/Articles.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Articles.module.css';

// اعتبارسنجی URL برای جلوگیری از حملات XSS
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

const Articles = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // داده‌های مقالات
  const articles = [
    {
      id: 1,
      title: "مبانی شبکه‌های کامپیوتری",
      subtitle: "آشنایی با مفاهیم اولیه شبکه و پروتکل‌های ارتباطی",
      readingTime: "8 دقیقه",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      pdfUrl: "#",
      schemaType: "Article"
    },
    {
      id: 2,
      title: "امنیت شبکه و تهدیدات سایبری",
      subtitle: "بررسی انواع حملات و روش‌های محافظت از شبکه",
      readingTime: "12 دقیقه",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80",
      pdfUrl: "#",
      schemaType: "TechArticle"
    },
    {
      id: 3,
      title: "پیکربندی روترهای سیسکو",
      subtitle: "آموزش جامع پیکربندی و مدیریت روترهای Cisco",
      readingTime: "15 دقیقه",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      pdfUrl: "#",
      schemaType: "TechArticle"
    },
    {
      id: 4,
      title: "شبکه‌های بی‌سیم و امنیت WiFi",
      subtitle: "راه‌اندازی و امن‌سازی شبکه‌های بی‌سیم",
      readingTime: "10 دقیقه",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      pdfUrl: "#",
      schemaType: "TechArticle"
    },
    {
      id: 5,
      title: "تست نفوذ و ارزیابی امنیتی",
      subtitle: "مفاهیم و تکنیک‌های تست نفوذ شبکه",
      readingTime: "18 دقیقه",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      pdfUrl: "#",
      schemaType: "Article"
    },
    {
      id: 6,
      title: "مدیریت ترافیک شبکه",
      subtitle: "بهینه‌سازی و کنترل ترافیک شبکه‌های سازمانی",
      readingTime: "14 دقیقه",
      image: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=600&q=80",
      pdfUrl: "#",
      schemaType: "TechArticle"
    }
  ];

  /**
   * مدیریت دانلود PDF با رعایت اصول امنیتی
   * @param {string} pdfUrl - آدرس فایل PDF
   * @param {string} title - عنوان مقاله
   */
  const handleDownload = (pdfUrl, title) => {
    if (isValidUrl(pdfUrl)) {
      // باز کردن در تب جدید با رعایت امنیت
      const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    } else {
      console.error(`URL ناامن برای مقاله: ${title}`);
      // در اینجا می‌توانید یک notification به کاربر نشان دهید
    }
  };

  /**
   * هدایت به صفحه مقاله
   * @param {number} articleId - شناسه مقاله
   */
  const handleReadArticle = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  // شبیه‌سازی لودینگ داده‌ها
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.articlesSection}>
      <div className={styles.articlesContainer}>
        <header className={styles.articlesHeader}>
          <h1 className={styles.articlesTitle}>📚 مقالات آموزشی</h1>
          <p className={styles.articlesSubtitle}>
            مجموعه‌ای از بهترین مقالات آموزشی در حوزه شبکه و امنیت سایبری
          </p>
        </header>
        
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <article 
              key={article.id} 
              className={`${styles.articleCard} ${isLoading ? styles.articleCardLoading : ''}`}
              itemScope
              itemType={`http://schema.org/${article.schemaType}`}
            >
              <div className={styles.articleImageContainer}>
                <img 
                  src={article.image} 
                  alt={`تصویر مقاله ${article.title}`}
                  className={styles.articleImage}
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250/667eea/ffffff?text=مقاله+آموزشی';
                  }}
                />
                <div className={styles.articleOverlay}>
                  <div className={styles.readingTime}>
                    <span className={styles.readingIcon} aria-hidden="true">⏱️</span>
                    {article.readingTime}
                  </div>
                </div>
              </div>
              
              <div className={styles.articleContent}>
                <h2 className={styles.articleTitle} itemProp="headline">{article.title}</h2>
                <p className={styles.articleSubtitle} itemProp="description">{article.subtitle}</p>
                
                <div className={styles.articleActions}>
                  <button 
                    className={`${styles.articleActionButton} ${styles.readMoreBtn}`}
                    onClick={() => handleReadArticle(article.id)}
                    aria-label={`مطالعه مقاله ${article.title}`}
                  >
                    <span className={styles.btnIcon} aria-hidden="true">📖</span>
                    مطالعه مقاله
                  </button>
                  
                  <button 
                    className={`${styles.articleActionButton} ${styles.downloadPdfBtn}`}
                    onClick={() => handleDownload(article.pdfUrl, article.title)}
                    aria-label={`دانلود PDF مقاله ${article.title}`}
                  >
                    <span className={styles.btnIcon} aria-hidden="true">📄</span>
                    دانلود PDF
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;