# کامپوننت لاگین - Net4All

## 📁 ساختار فایل‌ها

```
src/pages/
├── Login.jsx          # کامپوننت اصلی لاگین
├── Login.css          # استایل‌های CSS
└── README.md          # این فایل راهنما
```

## 🚀 ویژگی‌های امنیتی

### 1. اعتبارسنجی سمت کلاینت
- ✅ اعتبارسنجی ایمیل با regex
- ✅ بررسی طول رمز عبور (حداقل 8 کاراکتر)
- ✅ نمایش خطاهای اعتبارسنجی به کاربر

### 2. محافظت در برابر حملات
- ✅ محدودیت تعداد تلاش‌های ورود (5 بار)
- ✅ جلوگیری از ارسال‌های مکرر فرم
- ✅ استفاده از `noValidate` برای کنترل دستی اعتبارسنجی

### 3. امنیت DOM
- ✅ استفاده از `aria-describedby` برای دسترسی‌پذیری
- ✅ `role="alert"` برای پیام‌های خطا
- ✅ `aria-label` برای دکمه‌های تعاملی

## 🎨 ویژگی‌های UI/UX

### 1. طراحی مدرن
- ✅ گرادیان‌های زیبا و انیمیشن‌ها
- ✅ افکت‌های glassmorphism
- ✅ المان‌های شناور متحرک

### 2. تجربه کاربری
- ✅ نمایش/مخفی کردن رمز عبور
- ✅ انیمیشن loading
- ✅ بازخورد بصری برای تعاملات

### 3. دسترسی‌پذیری
- ✅ پشتیبانی از keyboard navigation
- ✅ High contrast mode
- ✅ Reduced motion support
- ✅ Dark mode support

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: 480px - 768px
- **Small Mobile**: < 480px

### ویژگی‌های Responsive
- ✅ Grid layout انعطاف‌پذیر
- ✅ Font size های متغیر
- ✅ Padding و margin های تطبیقی
- ✅ دکمه‌های تمام عرض در موبایل

## 🏗️ BEM Methodology

### Block: `login`
- Element: `__background`, `__container`, `__content`
- Modifier: `--loading`, `--error`

### مثال‌های BEM
```css
.login__input--error
.login__submit-btn--loading
.login__floating-element--1
```

## 🔧 نحوه استفاده

### 1. Import کردن
```jsx
import Login from './pages/Login';
```

### 2. استفاده در Router
```jsx
<Route path="/login" element={<Login />} />
```

### 3. دسترسی به صفحه
```
http://localhost:3000/login
```

## 🛡️ نکات امنیتی اضافی

### برای Production
1. **HTTPS**: حتماً از HTTPS استفاده کنید
2. **CSP**: Content Security Policy تنظیم کنید
3. **Rate Limiting**: محدودیت نرخ درخواست در سرور
4. **CSRF Protection**: محافظت در برابر CSRF
5. **Input Sanitization**: پاکسازی ورودی‌ها در سرور

### کدهای JavaScript
```javascript
// مثال برای اعتبارسنجی ایمیل
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// مثال برای محدودیت تلاش‌های ورود
if (loginAttempts >= 5) {
  // مسدود کردن ورود
}
```

## 🎯 SEO Optimization

### Meta Tags (در index.html)
```html
<meta name="description" content="ورود به حساب کاربری Net4All">
<meta name="keywords" content="لاگین, ورود, حساب کاربری">
<meta name="robots" content="noindex, nofollow">
```

### Semantic HTML
- ✅ استفاده از `<form>` برای فرم
- ✅ `<label>` برای فیلدها
- ✅ `<button>` برای دکمه‌ها
- ✅ `<input>` با type مناسب

## 🔄 State Management

### State های اصلی
```javascript
const [formData, setFormData] = useState({
  email: '',
  password: '',
  rememberMe: false
});

const [errors, setErrors] = useState({});
const [isLoading, setIsLoading] = useState(false);
const [loginAttempts, setLoginAttempts] = useState(0);
```

## 🎨 Customization

### تغییر رنگ‌ها
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ffd700;
  --error-color: #f56565;
}
```

### تغییر انیمیشن‌ها
```css
@keyframes loginSlideUp {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
```

## 📝 نکات مهم

1. **کامنت‌های فارسی**: تمام کامنت‌ها به فارسی نوشته شده‌اند
2. **نام‌گذاری متغیرها**: از camelCase استفاده شده
3. **کد تمیز**: رعایت اصول clean code
4. **Performance**: بهینه‌سازی برای عملکرد بهتر
5. **Accessibility**: رعایت استانداردهای دسترسی‌پذیری

## 🚀 Deployment

### Build کردن
```bash
npm run build
```

### تست کردن
```bash
npm run dev
```

### دسترسی به صفحه لاگین
```
http://localhost:3000/login
``` 