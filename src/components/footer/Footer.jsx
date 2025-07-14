"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

/**
 * کامپوننت فوتر اصلی سایت
 * شامل لینک‌ها، اطلاعات تماس، خبرنامه و اطلاعات قانونی
 * @returns {JSX.Element} کامپوننت فوتر
 */
const Footer = () => {
  // وضعیت فرم خبرنامه
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  /**
   * مدیریت ثبت‌نام در خبرنامه
   * @param {Event} e - رویداد فرم
   */
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()

    // اعتبارسنجی ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("لطفاً ایمیل معتبری وارد کنید")
      return
    }

    setIsLoading(true)

    try {
      // شبیه‌سازی ارسال به سرور
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubscribed(true)
      setEmail("")

      // نمایش پیام موفقیت
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    } catch (error) {
      console.error("خطا در ثبت‌نام:", error)
      alert("خطایی رخ داد. لطفاً دوباره تلاش کنید.")
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * اسکرول به بالای صفحه
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer" role="contentinfo">
      {/* ب��ش اصلی فوتر */}
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__content">
            {/* بخش اول: درباره سایت */}
            <div className="footer__section footer__section--about">
              <div className="footer__brand">
                <Link to="/" className="footer__logo">
                  <span className="footer__logo-text">Net4All</span>
                </Link>
                <p className="footer__tagline"> مرجع آموزش امنیت شبکه با زبان چوپونی </p>
              </div>

              <p className="footer__description">
                پلتفرم جامع آموزش امنیت شبکه با زبان چوپونی بدونه پیچ وخم 
                من متعهد به ارائه بهترین کیفیت آموزش هستم
              </p>

              {/* شبکه‌های اجتماعی */}
              <div className="footer__social">
                <h4 className="footer__social-title"> من اینجاهم هستم  </h4>
                <div className="footer__social-links">
                  <a
                    href="https://t.me/net4all"
                    className="footer__social-link footer__social-link--telegram"
                    aria-label="تلگرام Net4All"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer__social-icon">📱</span>
                    <span className="footer__social-text">تلگرام</span>
                  </a>
                </div>
              </div>
            </div>

            {/* بخش دوم: لینک‌های سریع */}
            <div className="footer__section footer__section--links">
              <h3 className="footer__section-title">لینک‌های سریع</h3>
              <nav className="footer__nav" role="navigation" aria-label="لینک‌های فوتر">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <Link to="/" className="footer__nav-link">
                      <span className="footer__nav-icon">🏠</span>
                      صفحه اصلی
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="https://github.com/Darkcode-it" className="footer__nav-link">
                      <span className="footer__nav-icon">👨‍💻</span>
                      درباره من
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="/courses" className="footer__nav-link">
                      <span className="footer__nav-icon">📚</span>
                      دوره‌های آموزشی
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="https://darkcode-it.github.io/whoami/" className="footer__nav-link">
                      <span className="footer__nav-icon">📝</span>
                      وبلاگ
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="https://t.me/darkcodeit" className="footer__nav-link">
                      <span className="footer__nav-icon">📞</span>
                      تماس با من
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="/faq" className="footer__nav-link">
                      <span className="footer__nav-icon">❓</span>
                      سوالات متداول
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* بخش سوم: دوره‌های آموزشی */}
            <div className="footer__section footer__section--courses">
              <h3 className="footer__section-title">دوره‌های آموزشی</h3>
              <nav className="footer__nav" role="navigation" aria-label="دوره‌های آموزشی">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <Link to="/network-plus" className="footer__nav-link">
                      <span className="footer__nav-icon">🌐</span>
                      CompTIA Network+
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="/cisco" className="footer__nav-link">
                      <span className="footer__nav-icon">🔧</span>
                      Cisco CCNA
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="/mikrotik" className="footer__nav-link">
                      <span className="footer__nav-icon">📡</span>
                      MikroTik MTCNA
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="/sans" className="footer__nav-link">
                      <span className="footer__nav-icon">🛡️</span>
                      SANS Security
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="/pwk" className="footer__nav-link">
                      <span className="footer__nav-icon">⚔️</span>
                      PWK/OSCP
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link to="/labs" className="footer__nav-link">
                      <span className="footer__nav-icon">🧪</span>
                      آزمایشگاه‌های عملی
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* بخش چهارم: اطلاعات تماس و خبرنامه */}
            <div className="footer__section footer__section--contact">
              <h3 className="footer__section-title">تماس و خبرنامه</h3>

              {/* اطلاعات تماس */}
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <span className="footer__contact-icon">📧</span>
                  <div className="footer__contact-info">
                    <span className="footer__contact-label">ایمیل:</span>
                    <a href="mailto:darkcodeit@protonmail.com" className="footer__contact-link">
                    darkcodeit@protonmail.com
                    </a>
                  </div>
                </div>

                <div className="footer__contact-item">
                  <span className="footer__contact-icon">📞</span>
                  <div className="footer__contact-info">
                    <span className="footer__contact-label">تلفن:</span>
                    <a href="tel:+982112345678" className="footer__contact-link">
                      ۰۲۱-۱۲۳۴۵۶۷۸
                    </a>
                  </div>
                </div>

                <div className="footer__contact-item">
                  <span className="footer__contact-icon">📍</span>
                  <div className="footer__contact-info">
                    <span className="footer__contact-label">آدرس:</span>
                    <span className="footer__contact-text"> من بچه دهاتیم  تو کردستان زندگی میکنم</span>
                  </div>
                </div>

                <div className="footer__contact-item">
                  <span className="footer__contact-icon">🕒</span>
                  <div className="footer__contact-info">
                    <span className="footer__contact-label">ساعات کاری:</span>
                    <span className="footer__contact-text">شنبه تا چهارشنبه، ۹-۱۷</span>
                  </div>
                </div>
              </div>

              {/* فرم خبرنامه */}
              <div className="footer__newsletter">
                <h4 className="footer__newsletter-title">عضویت در خبرنامه</h4>
                <p className="footer__newsletter-description">از آخرین اخبار، مقالات و دوره‌های جدید باخبر شوید</p>

                <form onSubmit={handleNewsletterSubmit} className="footer__newsletter-form">
                  <div className="footer__newsletter-input-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ایمیل خود را وارد کنید"
                      className="footer__newsletter-input"
                      required
                      disabled={isLoading || isSubscribed}
                      aria-label="ایمیل برای خبرنامه"
                    />
                    <button
                      type="submit"
                      className={`footer__newsletter-btn ${isLoading ? "footer__newsletter-btn--loading" : ""} ${isSubscribed ? "footer__newsletter-btn--success" : ""}`}
                      disabled={isLoading || isSubscribed}
                      aria-label="عضویت در خبرنامه"
                    >
                      {isLoading ? (
                        <span className="footer__newsletter-spinner">⏳</span>
                      ) : isSubscribed ? (
                        <span className="footer__newsletter-success">✅</span>
                      ) : (
                        <span className="footer__newsletter-icon">📨</span>
                      )}
                    </button>
                  </div>

                  {isSubscribed && (
                    <p className="footer__newsletter-success-message">✅ با موفقیت در خبرنامه عضو شدید!</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* بخش پایینی فوتر */}
      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__bottom-content">
            {/* کپی‌رایت */}
            <div className="footer__copyright">
              <p className="footer__copyright-text">© ۲۰۲۴ Net4All. تمامی حقوق محفوظ است.</p>
              <p className="footer__copyright-subtext">طراحی و توسعه با ❤️  خودم بوده  Net4All</p>
            </div>

            {/* لینک‌های قانونی */}
            <div className="footer__legal">
              <nav className="footer__legal-nav" role="navigation" aria-label="لینک‌های قانونی">
                <Link to="/privacy" className="footer__legal-link">
                  حریم خصوصی
                </Link>
                <Link to="/terms" className="footer__legal-link">
                  شرایط استفاده
                </Link>
                <Link to="/cookies" className="footer__legal-link">
                  سیاست کوکی‌ها
                </Link>
                <Link to="/sitemap" className="footer__legal-link">
                  نقشه سایت
                </Link>
              </nav>
            </div>

            {/* دکمه بازگشت به بالا */}
            <button onClick={scrollToTop} className="footer__scroll-top" aria-label="بازگشت به بالای صفحه">
              <span className="footer__scroll-icon">⬆️</span>
              <span className="footer__scroll-text">بالا</span>
            </button>
          </div>

          {/* مجوزها و گواهینامه‌ها */}
          <div className="footer__certifications">
            <div className="footer__cert-item">
              <span className="footer__cert-icon">🏆</span>
              <span className="footer__cert-text">مجوز رسمی آموزش</span>
            </div>
            <div className="footer__cert-item">
              <span className="footer__cert-icon">🔒</span>
              <span className="footer__cert-text">SSL محافظت شده</span>
            </div>
            <div className="footer__cert-item">
              <span className="footer__cert-icon">✅</span>
              <span className="footer__cert-text">تایید شده توسط CompTIA</span>
            </div>
            <div className="footer__cert-item">
              <span className="footer__cert-icon">🛡️</span>
              <span className="footer__cert-text">امنیت تضمین شده</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
