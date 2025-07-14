// src/pages/ForgetPassword.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForgetPassword.module.css';

/**
 * صفحه فراموشی رمز عبور
 * 
 * ویژگی‌ها:
 * - اعتبارسنجی ایمیل با Regex پیشرفته
 * - مدیریت حالت‌های مختلف (در حال ارسال، موفق، خطا)
 * - طراحی کاملاً رسپانسیو
 * - رعایت اصول امنیتی و دسترسی‌پذیری
 * - انیمیشن‌های ظریف
 * 
 * @returns {JSX.Element} صفحه فراموشی رمز عبور
 */
const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'invalid' | null
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);
  
  // Regex پیشرفته برای اعتبارسنجی ایمیل
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  /**
   * مدیریت ارسال فرم
   * @param {React.FormEvent} e - رویداد فرم
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // اعتبارسنجی ایمیل
    if (!isValidEmail(email)) {
      setStatus('invalid');
      return;
    }
    
    setLoading(true);
    setStatus(null);
    
    // شبیه‌سازی ارسال درخواست به سرور
    setTimeout(() => {
      // شبیه‌سازی پاسخ سرور
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setStatus('success');
        // پاک کردن فرم پس از موفقیت
        setEmail('');
        if (formRef.current) formRef.current.reset();
      } else {
        setStatus('error');
      }
      
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.forgetPasswordPage}>
      <div className={styles.glassCard}>
        <form 
          ref={formRef}
          className={styles.forgetPasswordForm} 
          onSubmit={handleSubmit}
          aria-label="فرم بازیابی رمز عبور"
          noValidate
        >
          <div className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🔒</span>
              <span>Net4All</span>
            </div>
            <h1 className={styles.title}>فراموشی رمز عبور</h1>
            <p className={styles.subtitle}>
              ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود.
            </p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              ایمیل شما
            </label>
            <input
              id="email"
              type="email"
              className={`${styles.input} ${status === 'invalid' ? styles.inputError : ''}`}
              placeholder="example@domain.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
              aria-required="true"
              aria-invalid={status === 'invalid'}
              aria-describedby={status === 'invalid' ? "email-error" : undefined}
            />
            {status === 'invalid' && (
              <div id="email-error" className={styles.errorMsg} role="alert">
                لطفاً یک ایمیل معتبر وارد کنید
              </div>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner} aria-hidden="true"></span>
                در حال ارسال...
              </>
            ) : (
              'ارسال لینک بازیابی'
            )}
          </button>

          {status === 'success' && (
            <div className={styles.successMsg} role="alert">
              <span className={styles.successIcon} aria-hidden="true">✓</span>
              لینک بازیابی رمز عبور به ایمیل شما ارسال شد. لطفاً صندوق ورودی خود را بررسی کنید.
            </div>
          )}
          
          {status === 'error' && (
            <div className={styles.errorMsg} role="alert">
              <span className={styles.errorIcon} aria-hidden="true">!</span>
              خطا در ارسال ایمیل. لطفاً دوباره تلاش کنید.
            </div>
          )}

          <div className={styles.backToLogin}>
            <span>یادتان آمد؟ </span>
            <button 
              type="button" 
              onClick={() => navigate('/login')} 
              className={styles.loginLink}
              aria-label="بازگشت به صفحه ورود"
            >
              ورود به حساب کاربری
            </button>
          </div>
        </form>
        
        <div className={styles.illustration}>
          <div className={styles.circle}></div>
          <div className={styles.lockIcon}>🔑</div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;