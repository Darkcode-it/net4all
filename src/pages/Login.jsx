import React, { useState, useEffect } from 'react';
import './Login.css';

/**
 * کامپوننت صفحه لاگین
 * شامل فرم ورود با اعتبارسنجی و امنیت بالا
 */
const Login = () => {
  // State management با استفاده از useState
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);

  // اعتبارسنجی ایمیل
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // اعتبارسنجی پسورد
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // مدیریت تغییرات فرم
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: inputValue
    }));

    // پاک کردن خطاها هنگام تایپ
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // اعتبارسنجی فرم
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'ایمیل معتبر نیست';
    }

    if (!formData.password) {
      newErrors.password = 'رمز عبور الزامی است';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'رمز عبور باید حداقل 8 کاراکتر باشد';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // مدیریت ارسال فرم
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // جلوگیری از ارسال‌های مکرر
    if (isLoading) return;
    
    // بررسی تعداد تلاش‌های ورود
    if (loginAttempts >= 5) {
      setErrors({ general: 'تعداد تلاش‌های ورود بیش از حد مجاز است. لطفاً 15 دقیقه صبر کنید.' });
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // شبیه‌سازی API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // در اینجا کد واقعی API call قرار می‌گیرد
      console.log('Login attempt:', { email: formData.email, rememberMe: formData.rememberMe });
      
      // موفقیت در ورود
      alert('ورود موفقیت‌آمیز بود!');
      
    } catch (error) {
      setLoginAttempts(prev => prev + 1);
      setErrors({ general: 'خطا در ورود. لطفاً دوباره تلاش کنید.' });
    } finally {
      setIsLoading(false);
    }
  };

  // مدیریت نمایش/مخفی کردن پسورد
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Reset form on component mount
  useEffect(() => {
    setFormData({
      email: '',
      password: '',
      rememberMe: false
    });
    setErrors({});
  }, []);

  return (
    <div className="login">
      {/* Background Pattern */}
      <div className="login__background">
        <div className="login__background-pattern"></div>
      </div>

      {/* Floating Elements */}
      <div className="login__floating-elements">
        <div className="login__floating-element login__floating-element--1">🔐</div>
        <div className="login__floating-element login__floating-element--2">⚡</div>
        <div className="login__floating-element login__floating-element--3">🛡️</div>
        <div className="login__floating-element login__floating-element--4">🔒</div>
      </div>

      {/* Main Container */}
      <div className="login__container">
        <div className="login__content">
          {/* Header Section */}
          <div className="login__header">
            <div className="login__logo">
              <span className="login__logo-icon">🌐</span>
              <h1 className="login__logo-text">Net4All</h1>
            </div>
            <h2 className="login__title">خوش آمدید</h2>
            <p className="login__subtitle">برای ادامه، وارد حساب کاربری خود شوید</p>
          </div>

          {/* Form Section */}
          <form className="login__form" onSubmit={handleSubmit} noValidate>
            {/* Error Message */}
            {errors.general && (
              <div className="login__error-message" role="alert">
                <span className="login__error-icon">⚠️</span>
                {errors.general}
              </div>
            )}

            {/* Email Field */}
            <div className="login__field">
              <label htmlFor="email" className="login__label">
                <span className="login__label-icon">📧</span>
                ایمیل
              </label>
              <div className="login__input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`login__input ${errors.email ? 'login__input--error' : ''}`}
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <div id="email-error" className="login__field-error" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="login__field">
              <label htmlFor="password" className="login__label">
                <span className="login__label-icon">🔑</span>
                رمز عبور
              </label>
              <div className="login__input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`login__input ${errors.password ? 'login__input--error' : ''}`}
                  placeholder="رمز عبور خود را وارد کنید"
                  autoComplete="current-password"
                  required
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  className="login__password-toggle"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'مخفی کردن رمز عبور' : 'نمایش رمز عبور'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
                {errors.password && (
                  <div id="password-error" className="login__field-error" role="alert">
                    {errors.password}
                  </div>
                )}
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="login__options">
              <label className="login__checkbox-wrapper">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="login__checkbox"
                />
                <span className="login__checkbox-custom"></span>
                <span className="login__checkbox-label">مرا به خاطر بسپار</span>
              </label>
              <a href="#forgot-password" className="login__forgot-link">
                فراموشی رمز عبور؟
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`login__submit-btn ${isLoading ? 'login__submit-btn--loading' : ''}`}
              disabled={isLoading || loginAttempts >= 5}
            >
              {isLoading ? (
                <>
                  <span className="login__loading-spinner"></span>
                  در حال ورود...
                </>
              ) : (
                <>
                  <span className="login__submit-icon">🚀</span>
                  ورود به حساب
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="login__divider">
            <span className="login__divider-text">یا</span>
          </div>

          {/* Social Login */}
          <div className="login__social">
            <button className="login__social-btn login__social-btn--google">
              <span className="login__social-icon">🔍</span>
              ورود با گوگل
            </button>
            <button className="login__social-btn login__social-btn--github">
              <span className="login__social-icon">🐙</span>
              ورود با گیت‌هاب
            </button>
          </div>

          {/* Footer */}
          <div className="login__footer">
            <p className="login__footer-text">
              حساب کاربری ندارید؟{' '}
              <a href="#register" className="login__footer-link">
                ثبت نام کنید
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 