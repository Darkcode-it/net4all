"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import myImage from "../../assets/images/my.jpg"
import "./Header.css"

/**
 * کامپوننت هدر اصلی سایت
 * شامل معرفی شخصی، هدف سایت و دعوت به عمل
 * @returns {JSX.Element} کامپوننت هدر
 */
const Header = () => {
  // وضعیت انیمیشن متن
  const [isVisible, setIsVisible] = useState(false)
  // متن‌های چرخشی برای نمایش تخصص‌ها
  const [currentSpecialty, setCurrentSpecialty] = useState(0)

  /**
   * لیست تخصص‌های امنیت شبکه
   */
  const specialties = ["امنیت شبکه", " ", "تحلیل آسیب‌پذیری", "پاسخ به حوادث", "امنیت سایبری"]

  /**
   * فعال‌سازی انیمیشن هنگام بارگذاری
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  /**
   * چرخش خودکار متن تخصص‌ها
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [specialties.length])

  /**
   * اسکرول نرم به بخش دوره‌ها
   */
  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses")
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="header" role="banner">
      {/* پس‌زمینه انیمیشن‌دار */}
      <div className="header__background">
        <div className="header__background-pattern"></div>
        <div className="header__floating-elements">
          <div className="header__floating-element header__floating-element--1">🔒</div>
          <div className="header__floating-element header__floating-element--2">🛡️</div>
          <div className="header__floating-element header__floating-element--3">🔐</div>
          <div className="header__floating-element header__floating-element--4">⚡</div>
          <div className="header__floating-element header__floating-element--5">🌐</div>
        </div>
      </div>

      <div className="header__container">
        <div className={`header__content ${isVisible ? "header__content--visible" : ""}`}>
          {/* بخش اصلی متن */}
          <div className="header__main">
            <div className="header__badge">
              <span className="header__badge-icon">🎯</span>
              <span className="header__badge-text">متخصص امنیت شبکه</span>
            </div>

            <h1 className="header__title">
              <span className="header__title-main"> آموزش شبکه با زبان  چوپونی</span>
              <span className="header__title-highlight">
                {specialties[currentSpecialty]}
                <span className="header__title-cursor">|</span>
              </span>
            </h1>

            <p className="header__description">

              سلام! من <strong> رسولی</strong>
              هستم متخصص در امنیت و شبکه 
              در این پلتفرم، تجربیات و دانش خودم را در این زمینه با زبان ساده و بدونه پیچ و خم  با شما به اشتراک می‌گذارم
            </p>
            <span className="header__highlight-text">Network+
              ▼
              Cisco (CCNA)
              ▼
              MikroTik
              ▼
              SANS
              ▼
              PWK</span>

            <div className="header__features">
              <div className="header__feature">
                <span className="header__feature-icon">📚</span>
                <span className="header__feature-text">آموزش‌های کاربردی </span>
              </div>
              <div className="header__feature">
                <span className="header__feature-icon">🏆</span>
                <span className="header__feature-text">مدارک معتبر بین‌المللی خودم ندارم تا به توبدم</span>
              </div>
              <div className="header__feature">
                <span className="header__feature-icon">🔧</span>
                <span className="header__feature-text">آزمایشگاه‌های عملی و شبیه‌سازی</span>
              </div>
            </div>

            {/* دکمه‌های عمل */}
            <div className="header__actions">
              <button onClick={scrollToCourses} className="header__btn header__btn--primary">
                <span className="header__btn-icon">🚀</span>
                شروع یادگیری
              </button>
              <Link to="https://darkcode-it.github.io/whoami/" className="header__btn header__btn--secondary">
                <span className="header__btn-icon">👨‍💻</span>
                درباره من
              </Link>
            </div>

            {/* آمار و اعداد */}
            <div className="header__stats">
              <div className="header__stat">
                <span className="header__stat-number">500+</span>
                <span className="header__stat-label">دانشجوی موفق</span>
              </div>
              <div className="header__stat">
                <span className="header__stat-number">50+</span>
                <span className="header__stat-label">ساعت آموزش</span>
              </div>
              <div className="header__stat">
                <span className="header__stat-number">15+</span>
                <span className="header__stat-label">پروژه عملی</span>
              </div>
              <div className="header__stat">
                <span className="header__stat-number">98%</span>
                <span className="header__stat-label">رضایت دانشجویان</span>
              </div>
            </div>
          </div>

          {/* بخش تصویری */}
          <div className="header__visual">
            <div className="header__avatar">
              <div className="header__avatar-image">
                <img src={myImage} alt="رسولی - متخصص امنیت شبکه" className="header__avatar-img" />
              </div>
              <div className="header__avatar-status">
                <span className="header__status-dot"></span>
                <span className="header__status-text">آنلاین</span>
              </div>
            </div>

            {/* کارت‌های تخصص */}
            <div className="header__expertise-cards">
              <div className="header__expertise-card header__expertise-card--cisco">
                <span className="header__card-icon">🔧</span>
                <span className="header__card-title">Cisco CCNA</span>
              </div>
              <div className="header__expertise-card header__expertise-card--security">
                <span className="header__card-icon">🛡️</span>
                <span className="header__card-title">Security+</span>
              </div>
              <div className="header__expertise-card header__expertise-card--penetration">
                <span className="header__card-icon">⚔️</span>
                <span className="header__card-title">Penetration Testing</span>
              </div>
            </div>
          </div>
        </div>

        {/* اسکرول اندیکیتور */}
        <div className="header__scroll-indicator">
          <div className="header__scroll-text">اسکرول کنید</div>
          <div className="header__scroll-arrow">↓</div>
        </div>
      </div>
    </header>
  )
}

export default Header
