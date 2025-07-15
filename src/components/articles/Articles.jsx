// src/pages/Articles.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Articles.module.css';
import StudentSurvey from '../StudentSurvey/StudentSurvey'; // Added import for StudentSurvey

// داینامیک لود کردن همه مقالات از پوشه data
const modules = import.meta.glob('./data/article*.json', { eager: true });
const articles = Object.values(modules);

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
  // const articles = [article1]; // حذف ایمپورت تکی مقاله

  // دسته‌بندی‌ها
  const categories = [
    "همه",
    "Network+",
    "Cisco (CCNA)",
    "MikroTik",
    "SANS",
    "PWK",
    "NEW"
  ];

  // state برای دسته انتخاب‌شده
  const [selectedCategory, setSelectedCategory] = useState("همه");

  // فیلتر مقالات بر اساس دسته
  const filteredArticles = selectedCategory === "همه"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

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
        {/* منوی دسته‌بندی */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '8px',
                border: selectedCategory === cat ? '2px solid #667eea' : '1px solid #ccc',
                background: selectedCategory === cat ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#fff',
                color: selectedCategory === cat ? '#fff' : '#2d3748',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s',
                margin: '0.2rem',
                minWidth: '90px',
              }}
            >
              {cat}
            </button>
          ))}
        </nav>
        {/* لیست مقالات */}
        <div className={styles.articlesGrid}>
          {filteredArticles.map((article) => (
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
      {/* 👇 اضافه کردن کامپوننت نظرسنجی دانشجوها */}
      <StudentSurvey />
    </section>
  );
};

export default Articles;