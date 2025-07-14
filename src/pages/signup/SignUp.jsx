import React, { useState, useRef } from 'react';
import styles from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'invalid' | null
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const navigate = useNavigate();

  // اعتبارسنجی ایمیل
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // اعتبارسنجی رمز عبور قوی
  const isStrongPassword = (password) => {
    return password.length >= 8;
  };

  // اعتبارسنجی فرم
  const validateForm = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = 'نام کاربری الزامی است';
    if (!form.email) errs.email = 'ایمیل الزامی است';
    else if (!isValidEmail(form.email)) errs.email = 'ایمیل معتبر نیست';
    if (!form.password) errs.password = 'رمز عبور الزامی است';
    else if (!isStrongPassword(form.password)) errs.password = 'رمز عبور باید حداقل ۸ کاراکتر باشد';
    if (!form.confirmPassword) errs.confirmPassword = 'تکرار رمز عبور الزامی است';
    else if (form.password !== form.confirmPassword) errs.confirmPassword = 'رمز عبور و تکرار آن یکسان نیستند';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      // شبیه‌سازی موفقیت یا خطا
      const isSuccess = Math.random() > 0.2;
      if (isSuccess) {
        setStatus('success');
        setForm({ username: '', email: '', password: '', confirmPassword: '' });
        if (formRef.current) formRef.current.reset();
      } else {
        setStatus('error');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.signUpPage}>
      <div className={styles.glassCard}>
        <form
          ref={formRef}
          className={styles.signUpForm}
          onSubmit={handleSubmit}
          aria-label="فرم ثبت نام"
          noValidate
        >
          <div className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>📝</span>
              <span>Net4All</span>
            </div>
            <h1 className={styles.title}>ثبت نام</h1>
            <p className={styles.subtitle}>برای ساخت حساب کاربری جدید، فرم زیر را تکمیل کنید.</p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>نام کاربری</label>
            <input
              id="username"
              name="username"
              type="text"
              className={`${styles.input} ${errors.username ? styles.inputError : ''}`}
              placeholder="نام کاربری"
              value={form.username}
              onChange={handleChange}
              required
              autoFocus
              aria-required="true"
              aria-invalid={!!errors.username}
              aria-describedby={errors.username ? 'username-error' : undefined}
            />
            {errors.username && (
              <div id="username-error" className={styles.errorMsg} role="alert">{errors.username}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>ایمیل</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              placeholder="example@domain.com"
              value={form.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <div id="email-error" className={styles.errorMsg} role="alert">{errors.email}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>رمز عبور</label>
            <input
              id="password"
              name="password"
              type="password"
              className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
              placeholder="رمز عبور (حداقل ۸ کاراکتر)"
              value={form.password}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password && (
              <div id="password-error" className={styles.errorMsg} role="alert">{errors.password}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>تکرار رمز عبور</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
              placeholder="تکرار رمز عبور"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
            />
            {errors.confirmPassword && (
              <div id="confirmPassword-error" className={styles.errorMsg} role="alert">{errors.confirmPassword}</div>
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
                در حال ثبت نام...
              </>
            ) : (
              'ثبت نام'
            )}
          </button>

          {status === 'success' && (
            <div className={styles.successMsg} role="alert">
              <span className={styles.successIcon} aria-hidden="true">✓</span>
              ثبت نام با موفقیت انجام شد! اکنون می‌توانید وارد شوید.
            </div>
          )}
          {status === 'error' && (
            <div className={styles.errorMsg} role="alert">
              <span className={styles.errorIcon} aria-hidden="true">!</span>
              خطا در ثبت نام. لطفاً دوباره تلاش کنید.
            </div>
          )}

          <div className={styles.backToLogin}>
            <span>حساب دارید؟ </span>
            <button
              type="button"
              onClick={() => navigate('/login')}
              className={styles.loginLink}
              aria-label="ورود به حساب کاربری"
            >
              ورود به حساب کاربری
            </button>
          </div>
        </form>
        <div className={styles.illustration}>
          <div className={styles.circle}></div>
          <div className={styles.lockIcon}>👤</div>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 