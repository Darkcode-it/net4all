# 🌐 Net4All - پلتفرم جامع آموزش شبکه و امنیت

<div align="center">

![Net4All Logo](https://img.shields.io/badge/Net4All-Platform-blue?style=for-the-badge&logo=network)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**پلتفرم جامع آموزش شبکه و امنیت سایبری** | **Comprehensive Network & Cybersecurity Learning Platform**

[🚀 Live Demo](https://darkcode-it.github.io/net4all) | [📖 Documentation](./docs/) | [🔧 Setup](#setup) | [🎯 Features](#features)

</div>

---

## 📋 فهرست مطالب | Table of Contents

- [🎯 ویژگی‌ها | Features](#features)
- [🏗️ ساختار پروژه | Project Structure](#project-structure)
- [⚡ تکنولوژی‌ها | Technologies](#technologies)
- [🚀 راه‌اندازی | Setup](#setup)
- [📱 قابلیت‌های رابط کاربری | UI Features](#ui-features)
- [🔐 سیستم احراز هویت | Authentication](#authentication)
- [📚 محتوای آموزشی | Learning Content](#learning-content)
- [🎨 طراحی و تجربه کاربری | Design & UX](#design--ux)
- [📱 ریسپانسیو | Responsive Design](#responsive-design)
- [♿ دسترسی‌پذیری | Accessibility](#accessibility)
- [🔧 توسعه | Development](#development)
- [📦 استقرار | Deployment](#deployment)
- [🤝 مشارکت | Contributing](#contributing)
- [📄 مجوز | License](#license)

---

## 🎯 ویژگی‌ها | Features

### 🌟 ویژگی‌های اصلی | Core Features

- **📚 آموزش جامع شبکه** | Comprehensive Network Education
  - Network+ Certification
  - Cisco CCNA (200-301)
  - MikroTik MTCNA
  - SANS Security Courses
  - PWK/OSCP Preparation

- **🎨 رابط کاربری مدرن** | Modern UI/UX
  - طراحی زیبا و حرفه‌ای | Beautiful & Professional Design
  - انیمیشن‌های نرم و روان | Smooth Animations
  - تجربه کاربری بهینه | Optimized User Experience

- **📱 کاملاً ریسپانسیو** | Fully Responsive
  - سازگار با تمام دستگاه‌ها | Compatible with All Devices
  - منوی موبایل پیشرفته | Advanced Mobile Menu
  - طراحی تطبیقی | Adaptive Design

- **🔐 سیستم احراز هویت** | Authentication System
  - ورود و ثبت‌نام کاربران | User Login & Registration
  - مدیریت جلسه | Session Management
  - محافظت از مسیرها | Route Protection

### 🛠️ ویژگی‌های فنی | Technical Features

- **⚡ عملکرد بالا** | High Performance
  - Vite برای سرعت بالا | Vite for High Speed
  - Code Splitting | تقسیم کد
  - Lazy Loading | بارگذاری تنبل

- **🎯 SEO بهینه** | SEO Optimized
  - Meta Tags | تگ‌های متا
  - Structured Data | داده‌های ساختاریافته
  - Sitemap | نقشه سایت

- **♿ دسترسی‌پذیری** | Accessibility
  - ARIA Labels | برچسب‌های ARIA
  - Keyboard Navigation | ناوبری با کیبورد
  - Screen Reader Support | پشتیبانی از صفحه‌خوان

---

## 🏗️ ساختار پروژه | Project Structure

```
net4all/
├── 📁 src/                          # کدهای اصلی | Source Code
│   ├── 📁 components/               # کامپوننت‌ها | Components
│   │   ├── 📁 footer/              # فوتر | Footer
│   │   ├── 📁 header/              # هدر | Header
│   │   └── 📁 menu/                # منو | Menu
│   ├── 📁 context/                 # Context API | کانتکست
│   ├── 📁 hooks/                   # Custom Hooks | هوک‌های سفارشی
│   ├── 📁 pages/                   # صفحات | Pages
│   ├── 📁 services/                # سرویس‌ها | Services
│   ├── 📁 styles/                  # استایل‌ها | Styles
│   └── 📁 utils/                   # ابزارها | Utilities
├── 📁 docs/                        # مستندات | Documentation
├── 📁 examples/                    # مثال‌ها | Examples
├── 📁 exercises/                   # تمرینات | Exercises
├── 📁 public/                      # فایل‌های عمومی | Public Files
└── 📁 tests/                       # تست‌ها | Tests
```

---

## ⚡ تکنولوژی‌ها | Technologies

### 🎯 Frontend Stack
- **React 19.1.0** - کتابخانه رابط کاربری | UI Library
- **Vite 7.0.4** - ابزار ساخت سریع | Fast Build Tool
- **React Router DOM 7.6.3** - مسیریابی | Routing
- **CSS3** - استایل‌دهی پیشرفته | Advanced Styling

### 🛠️ Development Tools
- **ESLint 9.30.1** - بررسی کیفیت کد | Code Quality
- **TypeScript Support** - پشتیبانی از تایپ‌اسکریپت
- **GitHub Pages** - استقرار خودکار | Auto Deployment

### 🎨 Design & UX
- **BEM Methodology** - روشولوژی CSS
- **CSS Grid & Flexbox** - لایه‌بندی مدرن
- **CSS Custom Properties** - متغیرهای CSS
- **Backdrop Filter** - افکت‌های پس‌زمینه

---

## 🚀 راه‌اندازی | Setup

### 📋 پیش‌نیازها | Prerequisites

- Node.js (v18 یا بالاتر | or higher)
- npm یا yarn | or yarn

### 🔧 نصب و راه‌اندازی | Installation

```bash
# کلون کردن پروژه | Clone the repository
git clone https://github.com/darkcode-it/net4all.git
cd net4all

# نصب وابستگی‌ها | Install dependencies
npm install

# اجرای پروژه در حالت توسعه | Run in development mode
npm run dev

# ساخت پروژه برای تولید | Build for production
npm run build

# پیش‌نمایش نسخه تولید | Preview production build
npm run preview
```

### 🌐 دسترسی به پروژه | Access the Project

- **توسعه | Development**: `http://localhost:5173`
- **تولید | Production**: `https://darkcode-it.github.io/net4all`

---

## 📱 قابلیت‌های رابط کاربری | UI Features

### 🎨 منوی اصلی | Main Navigation

```jsx
// منوی ریسپانسیو با زیرمنوها
<Menu>
  <Dropdown title="Network+">
    <Item>مبانی شبکه</Item>
    <Item>پروتکل‌ها</Item>
    <Item>امنیت شبکه</Item>
  </Dropdown>
</Menu>
```

### 🌟 ویژگی‌های منو | Menu Features

- **منوی ریسپانسیو** | Responsive Menu
- **زیرمنوهای تعاملی** | Interactive Dropdowns
- **انیمیشن‌های نرم** | Smooth Animations
- **پشتیبانی از کیبورد** | Keyboard Support
- **منوی همبرگر موبایل** | Mobile Hamburger Menu

### 🎯 کامپوننت‌های اصلی | Core Components

- **Header** - هدر سایت با لوگو و اطلاعات
- **Menu** - منوی اصلی با زیرمنوها
- **Footer** - فوتر با لینک‌های مفید
- **Login** - صفحه ورود کاربران

---

## 🔐 سیستم احراز هویت | Authentication

### 🛡️ ویژگی‌های امنیتی | Security Features

- **Context API** برای مدیریت وضعیت | for State Management
- **Route Protection** برای صفحات خصوصی | for Private Pages
- **Session Management** مدیریت جلسه | Session Management
- **Token-based Auth** احراز هویت مبتنی بر توکن | Token-based Authentication

### 🔧 پیاده‌سازی | Implementation

```jsx
// استفاده از Context برای احراز هویت
const { user, login, logout } = useAuth();

// محافظت از مسیرها
<ProtectedRoute>
  <PrivatePage />
</ProtectedRoute>
```

---

## 📚 محتوای آموزشی | Learning Content

### 🎓 دوره‌های موجود | Available Courses

#### 🌐 Network+
- مبانی شبکه | Network Basics
- پروتکل‌های شبکه | Network Protocols
- امنیت شبکه | Network Security
- عیب‌یابی شبکه | Network Troubleshooting

#### 🏢 Cisco CCNA
- CCNA 200-301 | CCNA 200-301
- Switching & Routing | Switching & Routing
- VLAN Configuration | VLAN Configuration
- Network Lab | آزمایشگاه شبکه

#### 🔧 MikroTik
- MTCNA Certification | گواهینامه MTCNA
- RouterOS Configuration | پیکربندی RouterOS
- Wireless Networks | شبکه‌های بی‌سیم
- Firewall Setup | راه‌اندازی فایروال

#### 🛡️ SANS Security
- GIAC Security | امنیت GIAC
- Penetration Testing | تست نفوذ
- Digital Forensics | پزشکی قانونی دیجیتال
- Incident Response | پاسخ به حوادث

#### ⚔️ PWK/OSCP
- OSCP Preparation | آمادگی OSCP
- Buffer Overflow | سرریز بافر
- Web Application Security | امنیت برنامه‌های وب
- Privilege Escalation | ارتقای امتیازات

---

## 🎨 طراحی و تجربه کاربری | Design & UX

### 🎯 اصول طراحی | Design Principles

- **Minimalism** - طراحی مینیمال | Minimal Design
- **Consistency** - یکپارچگی | Design Consistency
- **Accessibility** - دسترسی‌پذیری | Universal Access
- **Performance** - عملکرد بهینه | Optimal Performance

### 🌈 پالت رنگی | Color Palette

```css
/* رنگ‌های اصلی | Primary Colors */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--secondary-color: #2d3748;
--accent-color: #667eea;
--background-color: rgba(255, 255, 255, 0.95);
```

### ✨ انیمیشن‌ها | Animations

- **Smooth Transitions** - انتقال‌های نرم
- **Hover Effects** - افکت‌های هاور
- **Loading States** - حالت‌های بارگذاری
- **Micro-interactions** - تعاملات ریز

---

## 📱 ریسپانسیو | Responsive Design

### 📱 موبایل | Mobile (320px - 768px)
- منوی همبرگر | Hamburger Menu
- طراحی عمودی | Vertical Layout
- فونت‌های بهینه | Optimized Fonts
- لمس‌پذیری | Touch-friendly

### 📱 تبلت | Tablet (768px - 1024px)
- منوی تطبیقی | Adaptive Menu
- اندازه‌های متوسط | Medium Sizes
- چیدمان متعادل | Balanced Layout

### 🖥️ دسکتاپ | Desktop (1024px+)
- منوی کامل | Full Menu
- فضای گسترده | Wide Space
- ویژگی‌های پیشرفته | Advanced Features

---

## ♿ دسترسی‌پذیری | Accessibility

### 🎯 ویژگی‌های دسترسی | Accessibility Features

- **ARIA Labels** - برچسب‌های ARIA
- **Keyboard Navigation** - ناوبری با کیبورد
- **Screen Reader Support** - پشتیبانی از صفحه‌خوان
- **High Contrast Mode** - حالت کنتراست بالا
- **Reduced Motion** - کاهش حرکت

### 🔧 پیاده‌سازی | Implementation

```jsx
// برچسب‌های ARIA
<button aria-label="باز کردن منو" aria-expanded={isOpen}>
  <span className="hamburger-icon" />
</button>

// ناوبری با کیبورد
<div role="navigation" aria-label="منوی اصلی">
  <a href="/" tabIndex="0">صفحه اصلی</a>
</div>
```

---

## 🔧 توسعه | Development

### 📝 اسکریپت‌های توسعه | Development Scripts

```bash
# اجرای سرور توسعه | Development server
npm run dev

# بررسی کیفیت کد | Code linting
npm run lint

# ساخت پروژه | Build project
npm run build

# پیش‌نمایش نسخه تولید | Preview production
npm run preview
```

### 🎯 استانداردهای کدنویسی | Coding Standards

- **ESLint Configuration** - پیکربندی ESLint
- **BEM Methodology** - روشولوژی BEM
- **Component Structure** - ساختار کامپوننت
- **File Organization** - سازماندهی فایل‌ها

### 🧪 تست | Testing

```bash
# اجرای تست‌ها | Run tests
npm test

# تست‌های واحد | Unit tests
npm run test:unit

# تست‌های یکپارچگی | Integration tests
npm run test:integration
```

---

## 📦 استقرار | Deployment

### 🚀 GitHub Pages

```bash
# استقرار خودکار | Auto deployment
npm run deploy
```

### 🔧 پیکربندی | Configuration

```json
{
  "homepage": "https://darkcode-it.github.io/net4all",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 🌐 دامنه سفارشی | Custom Domain

برای استفاده از دامنه سفارشی، فایل `CNAME` را در پوشه `public` ایجاد کنید:

```
your-domain.com
```

---

## 🤝 مشارکت | Contributing

### 📋 نحوه مشارکت | How to Contribute

1. **Fork** پروژه | Fork the project
2. **Clone** مخزن | Clone the repository
3. **Branch** جدید ایجاد کنید | Create a new branch
4. **Commit** تغییرات | Commit your changes
5. **Push** به شاخه | Push to the branch
6. **Pull Request** ایجاد کنید | Create a Pull Request

### 🎯 دستورالعمل‌های مشارکت | Contribution Guidelines

- کد تمیز و قابل خواندن بنویسید | Write clean, readable code
- تست‌های مناسب اضافه کنید | Add appropriate tests
- مستندات را به‌روزرسانی کنید | Update documentation
- استانداردهای پروژه را رعایت کنید | Follow project standards

### 🐛 گزارش باگ | Bug Reports

برای گزارش باگ‌ها، لطفاً از [Issues](../../issues) استفاده کنید و شامل موارد زیر باشید:

- توضیح کامل مشکل | Complete problem description
- مراحل تکرار | Reproduction steps
- اطلاعات سیستم | System information
- اسکرین‌شات (در صورت نیاز) | Screenshots (if needed)

---

## 📄 مجوز | License

این پروژه تحت مجوز **MIT** منتشر شده است.

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Dark Code IT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 تماس | Contact

- **🌐 وب‌سایت | Website**: [Net4All](https://darkcode-it.github.io/net4all)
- **📧 ایمیل | Email**: [info@darkcode-it.com](mailto:info@darkcode-it.com)
- **🐙 GitHub**: [@darkcode-it](https://github.com/darkcode-it)
- **💼 LinkedIn**: [Dark Code IT](https://linkedin.com/company/darkcode-it)

---

<div align="center">

### 🌟 با تشکر از شما برای استفاده از Net4All! | Thank you for using Net4All!

**⭐ اگر این پروژه برایتان مفید بود، لطفاً ستاره بدهید! | If this project helped you, please give it a star!**

[![GitHub stars](https://img.shields.io/github/stars/darkcode-it/net4all?style=social)](https://github.com/darkcode-it/net4all/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/darkcode-it/net4all?style=social)](https://github.com/darkcode-it/net4all/network)
[![GitHub issues](https://img.shields.io/github/issues/darkcode-it/net4all)](https://github.com/darkcode-it/net4all/issues)

</div>
