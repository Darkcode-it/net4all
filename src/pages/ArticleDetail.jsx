import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // داده‌های مقالات (در حالت واقعی از API دریافت می‌شود)
  const articlesData = [
    {
      id: 1,
      title: "مبانی شبکه‌های کامپیوتری",
      subtitle: "آشنایی با مفاهیم اولیه شبکه و پروتکل‌های ارتباطی",
      readingTime: "8 دقیقه",
      image: "/src/assets/images/network-basics.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/15",
      category: "شبکه",
      content: `
        <h2>مقدمه</h2>
        <p>شبکه‌های کامپیوتری مجموعه‌ای از کامپیوترها و تجهیزات مرتبط هستند که از طریق کانال‌های ارتباطی به یکدیگر متصل شده‌اند. این شبکه‌ها امکان اشتراک‌گذاری منابع، اطلاعات و ارتباطات را فراهم می‌آورند.</p>
        
        <h2>انواع شبکه‌ها</h2>
        <h3>1. شبکه محلی (LAN)</h3>
        <p>شبکه‌های محلی معمولاً در یک ساختمان یا مجموعه محدود قرار دارند و سرعت انتقال داده در آن‌ها بالا است.</p>
        
        <h3>2. شبکه گسترده (WAN)</h3>
        <p>شبکه‌های گسترده مناطق جغرافیایی وسیعی را پوشش می‌دهند و معمولاً از خطوط تلفن یا ماهواره استفاده می‌کنند.</p>
        
        <h2>پروتکل‌های شبکه</h2>
        <p>پروتکل‌ها قوانین و استانداردهایی هستند که نحوه ارتباط بین دستگاه‌ها را تعریف می‌کنند:</p>
        <ul>
          <li><strong>TCP/IP:</strong> پروتکل اصلی اینترنت</li>
          <li><strong>HTTP:</strong> برای انتقال صفحات وب</li>
          <li><strong>FTP:</strong> برای انتقال فایل‌ها</li>
          <li><strong>SMTP:</strong> برای ارسال ایمیل</li>
        </ul>
        
        <h2>توپولوژی شبکه</h2>
        <p>توپولوژی نحوه اتصال دستگاه‌ها در شبکه را مشخص می‌کند:</p>
        <ul>
          <li><strong>ستاره‌ای:</strong> همه دستگاه‌ها به یک مرکز متصل می‌شوند</li>
          <li><strong>حلقه‌ای:</strong> دستگاه‌ها در یک حلقه به هم متصل می‌شوند</li>
          <li><strong>اتوبوسی:</strong> همه دستگاه‌ها روی یک خط مشترک قرار می‌گیرند</li>
        </ul>
        
        <h2>نتیجه‌گیری</h2>
        <p>درک مبانی شبکه‌های کامپیوتری برای هر متخصص IT ضروری است. این دانش پایه‌ای برای یادگیری مفاهیم پیشرفته‌تر شبکه و امنیت سایبری محسوب می‌شود.</p>
      `
    },
    {
      id: 2,
      title: "امنیت شبکه و تهدیدات سایبری",
      subtitle: "بررسی انواع حملات و روش‌های محافظت از شبکه",
      readingTime: "12 دقیقه",
      image: "/src/assets/images/cybersecurity.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/20",
      category: "امنیت",
      content: `
        <h2>مقدمه</h2>
        <p>امنیت شبکه یکی از مهم‌ترین جنبه‌های مدیریت شبکه‌های کامپیوتری است. با افزایش تهدیدات سایبری، نیاز به درک عمیق‌تر از اصول امنیتی بیش از پیش احساس می‌شود.</p>
        
        <h2>انواع تهدیدات سایبری</h2>
        <h3>1. حملات DoS/DDoS</h3>
        <p>حملات انکار سرویس با هدف غیرفعال کردن سرویس‌های شبکه انجام می‌شوند.</p>
        
        <h3>2. حملات Man-in-the-Middle</h3>
        <p>در این نوع حملات، مهاجم بین دو طرف ارتباط قرار می‌گیرد و اطلاعات را رهگیری می‌کند.</p>
        
        <h3>3. حملات فیشینگ</h3>
        <p>حملات فیشینگ با هدف فریب کاربران و سرقت اطلاعات حساس انجام می‌شوند.</p>
        
        <h2>روش‌های محافظت</h2>
        <ul>
          <li><strong>فایروال:</strong> کنترل ترافیک ورودی و خروجی</li>
          <li><strong>رمزنگاری:</strong> محافظت از داده‌ها در حین انتقال</li>
          <li><strong>احراز هویت:</strong> تأیید هویت کاربران</li>
          <li><strong>نظارت مداوم:</strong> مانیتورینگ فعالیت‌های مشکوک</li>
        </ul>
        
        <h2>بهترین شیوه‌های امنیتی</h2>
        <p>برای حفظ امنیت شبکه، رعایت موارد زیر ضروری است:</p>
        <ul>
          <li>به‌روزرسانی منظم نرم‌افزارها</li>
          <li>استفاده از رمزهای قوی</li>
          <li>آموزش کارکنان</li>
          <li>پشتیبان‌گیری منظم</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "پیکربندی روترهای سیسکو",
      subtitle: "آموزش جامع پیکربندی و مدیریت روترهای Cisco",
      readingTime: "15 دقیقه",
      image: "/src/assets/images/cisco-router.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/25",
      category: "سیسکو",
      content: `
        <h2>مقدمه</h2>
        <p>روترهای سیسکو از محبوب‌ترین تجهیزات شبکه در جهان هستند. یادگیری پیکربندی این روترها برای متخصصان شبکه ضروری است.</p>
        
        <h2>مراحل اولیه پیکربندی</h2>
        <h3>1. اتصال به روتر</h3>
        <p>برای اتصال به روتر سیسکو می‌توانید از کنسول، SSH یا Telnet استفاده کنید.</p>
        
        <h3>2. تنظیم نام دستگاه</h3>
        <pre><code>Router> enable
Router# configure terminal
Router(config)# hostname R1</code></pre>
        
        <h3>3. تنظیم رمز عبور</h3>
        <pre><code>R1(config)# enable secret mypassword
R1(config)# line console 0
R1(config-line)# password consolepass</code></pre>
        
        <h2>پیکربندی رابط‌ها</h2>
        <p>هر رابط روتر باید آدرس IP و subnet mask داشته باشد:</p>
        <pre><code>R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# no shutdown</code></pre>
        
        <h2>پیکربندی مسیریابی</h2>
        <h3>مسیریابی استاتیک</h3>
        <pre><code>R1(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.254</code></pre>
        
        <h3>مسیریابی دینامیک</h3>
        <pre><code>R1(config)# router ospf 1
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0</code></pre>
        
        <h2>نظارت و عیب‌یابی</h2>
        <p>دستورات مفید برای نظارت بر روتر:</p>
        <ul>
          <li><code>show ip interface brief</code> - نمایش وضعیت رابط‌ها</li>
          <li><code>show ip route</code> - نمایش جدول مسیریابی</li>
          <li><code>ping</code> - تست اتصال</li>
          <li><code>traceroute</code> - ردیابی مسیر</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "شبکه‌های بی‌سیم و امنیت WiFi",
      subtitle: "راه‌اندازی و امن‌سازی شبکه‌های بی‌سیم",
      readingTime: "10 دقیقه",
      image: "/src/assets/images/wireless-network.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/02/01",
      category: "شبکه بی‌سیم",
      content: `
        <h2>مقدمه</h2>
        <p>شبکه‌های بی‌سیم امروزه بخش جدایی‌ناپذیر زندگی روزمره ما هستند. درک اصول امنیتی این شبکه‌ها برای محافظت از اطلاعات ضروری است.</p>
        
        <h2>استانداردهای WiFi</h2>
        <ul>
          <li><strong>802.11a:</strong> فرکانس 5GHz، سرعت تا 54Mbps</li>
          <li><strong>802.11b:</strong> فرکانس 2.4GHz، سرعت تا 11Mbps</li>
          <li><strong>802.11g:</strong> فرکانس 2.4GHz، سرعت تا 54Mbps</li>
          <li><strong>802.11n:</strong> فرکانس 2.4/5GHz، سرعت تا 600Mbps</li>
          <li><strong>802.11ac:</strong> فرکانس 5GHz، سرعت تا 3.5Gbps</li>
          <li><strong>802.11ax (WiFi 6):</strong> بهبود عملکرد در محیط‌های شلوغ</li>
        </ul>
        
        <h2>روش‌های رمزنگاری</h2>
        <h3>1. WEP (Wired Equivalent Privacy)</h3>
        <p>روش قدیمی و ناامن که دیگر توصیه نمی‌شود.</p>
        
        <h3>2. WPA (WiFi Protected Access)</h3>
        <p>جایگزین امن‌تر برای WEP با استفاده از TKIP.</p>
        
        <h3>3. WPA2</h3>
        <p>استاندارد فعلی با استفاده از AES و CCMP.</p>
        
        <h3>4. WPA3</h3>
        <p>جدیدترین استاندارد با امنیت بالاتر.</p>
        
        <h2>بهترین شیوه‌های امنیتی</h2>
        <ul>
          <li>استفاده از رمزهای قوی و پیچیده</li>
          <li>غیرفعال کردن WPS</li>
          <li>تغییر SSID پیش‌فرض</li>
          <li>فیلتر کردن آدرس‌های MAC</li>
          <li>مخفی کردن SSID</li>
          <li>استفاده از VLAN برای مهمانان</li>
        </ul>
        
        <h2>عیب‌یابی مشکلات رایج</h2>
        <p>مشکلات رایج شبکه‌های بی‌سیم و راه‌حل‌های آن‌ها:</p>
        <ul>
          <li><strong>سرعت پایین:</strong> بررسی تداخل فرکانسی</li>
          <li><strong>قطع شدن اتصال:</strong> بررسی فاصله و موانع</li>
          <li><strong>عدم اتصال:</strong> بررسی تنظیمات رمزنگاری</li>
        </ul>
      `
    },
    {
      id: 5,
      title: "تست نفوذ و ارزیابی امنیتی",
      subtitle: "مفاهیم و تکنیک‌های تست نفوذ شبکه",
      readingTime: "18 دقیقه",
      image: "/src/assets/images/penetration-testing.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/02/05",
      category: "تست نفوذ",
      content: `
        <h2>مقدمه</h2>
        <p>تست نفوذ فرآیند ارزیابی امنیتی سیستم‌ها با شبیه‌سازی حملات واقعی است. این فرآیند به شناسایی نقاط ضعف و بهبود امنیت کمک می‌کند.</p>
        
        <h2>انواع تست نفوذ</h2>
        <h3>1. تست نفوذ خارجی</h3>
        <p>ارزیابی امنیتی از دیدگاه مهاجم خارجی که به شبکه دسترسی ندارد.</p>
        
        <h3>2. تست نفوذ داخلی</h3>
        <p>ارزیابی امنیتی از دیدگاه کاربر داخلی یا مهاجمی که به شبکه دسترسی دارد.</p>
        
        <h3>3. تست نفوذ فیزیکی</h3>
        <p>ارزیابی امنیت فیزیکی ساختمان‌ها و تجهیزات.</p>
        
        <h2>مراحل تست نفوذ</h2>
        <h3>1. برنامه‌ریزی و شناسایی</h3>
        <ul>
          <li>تعریف محدوده تست</li>
          <li>جمع‌آوری اطلاعات</li>
          <li>شناسایی هدف‌ها</li>
        </ul>
        
        <h3>2. اسکن و شمارش</h3>
        <ul>
          <li>اسکن پورت‌ها</li>
          <li>شناسایی سرویس‌ها</li>
          <li>بررسی نسخه‌های نرم‌افزار</li>
        </ul>
        
        <h3>3. بهره‌برداری</h3>
        <ul>
          <li>استفاده از آسیب‌پذیری‌ها</li>
          <li>دسترسی به سیستم‌ها</li>
          <li>ارتقای امتیازات</li>
        </ul>
        
        <h3>4. گزارش‌دهی</h3>
        <ul>
          <li>مستندسازی یافته‌ها</li>
          <li>ارائه توصیه‌ها</li>
          <li>برنامه بهبود امنیت</li>
        </ul>
        
        <h2>ابزارهای تست نفوذ</h2>
        <ul>
          <li><strong>Nmap:</strong> اسکن شبکه و پورت</li>
          <li><strong>Metasploit:</strong> فریم‌ورک تست نفوذ</li>
          <li><strong>Wireshark:</strong> تحلیل ترافیک شبکه</li>
          <li><strong>Burp Suite:</strong> تست امنیت وب</li>
          <li><strong>OWASP ZAP:</strong> اسکنر آسیب‌پذیری وب</li>
        </ul>
        
        <h2>ملاحظات قانونی و اخلاقی</h2>
        <p>تست نفوذ باید با رعایت موارد زیر انجام شود:</p>
        <ul>
          <li>اجازه کتبی از مالک سیستم</li>
          <li>تعریف محدوده دقیق تست</li>
          <li>محرمانه نگه داشتن اطلاعات</li>
          <li>عدم آسیب به سیستم‌ها</li>
        </ul>
      `
    },
    {
      id: 6,
      title: "مدیریت ترافیک شبکه",
      subtitle: "بهینه‌سازی و کنترل ترافیک شبکه‌های سازمانی",
      readingTime: "14 دقیقه",
      image: "/src/assets/images/network-traffic.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/02/10",
      category: "مدیریت شبکه",
      content: `
        <h2>مقدمه</h2>
        <p>مدیریت ترافیک شبکه یکی از مهم‌ترین جنبه‌های مدیریت شبکه‌های سازمانی است. این فرآیند شامل نظارت، کنترل و بهینه‌سازی ترافیک شبکه برای بهبود عملکرد و امنیت است.</p>
        
        <h2>مفاهیم کلیدی</h2>
        <h3>1. Quality of Service (QoS)</h3>
        <p>QoS مجموعه‌ای از تکنیک‌ها برای تضمین کیفیت سرویس برای انواع مختلف ترافیک است.</p>
        
        <h3>2. Bandwidth Management</h3>
        <p>مدیریت پهنای باند شامل کنترل و تخصیص منابع شبکه به کاربران و سرویس‌های مختلف است.</p>
        
        <h3>3. Traffic Shaping</h3>
        <p>شکل‌دهی ترافیک فرآیند کنترل نرخ ارسال داده‌ها برای جلوگیری از ازدحام است.</p>
        
        <h2>استراتژی‌های مدیریت ترافیک</h2>
        <h3>1. اولویت‌بندی ترافیک</h3>
        <ul>
          <li><strong>Voice:</strong> بالاترین اولویت برای VoIP</li>
          <li><strong>Video:</strong> اولویت بالا برای ویدیو کنفرانس</li>
          <li><strong>Data:</strong> اولویت متوسط برای ترافیک داده</li>
          <li><strong>Background:</strong> کمترین اولویت برای دانلودها</li>
        </ul>
        
        <h3>2. کنترل پهنای باند</h3>
        <ul>
          <li>تعیین محدودیت سرعت برای کاربران</li>
          <li>تخصیص پهنای باند به سرویس‌های مختلف</li>
          <li>کنترل ترافیک در ساعات اوج</li>
        </ul>
        
        <h3>3. فیلترینگ محتوا</h3>
        <ul>
          <li>مسدود کردن سایت‌های غیرمجاز</li>
          <li>کنترل دسترسی به شبکه‌های اجتماعی</li>
          <li>فیلتر کردن محتوای نامناسب</li>
        </ul>
        
        <h2>ابزارهای مدیریت ترافیک</h2>
        <ul>
          <li><strong>Wireshark:</strong> تحلیل ترافیک شبکه</li>
          <li><strong>PRTG:</strong> مانیتورینگ شبکه</li>
          <li><strong>SolarWinds:</strong> مدیریت شبکه</li>
          <li><strong>Nagios:</strong> نظارت بر سرویس‌ها</li>
        </ul>
        
        <h2>بهترین شیوه‌ها</h2>
        <ul>
          <li>نظارت مداوم بر ترافیک شبکه</li>
          <li>تعریف سیاست‌های QoS مناسب</li>
          <li>به‌روزرسانی منظم پیکربندی‌ها</li>
          <li>آموزش کاربران در مورد استفاده بهینه</li>
          <li>برنامه‌ریزی برای رشد آینده</li>
        </ul>
        
        <h2>نتیجه‌گیری</h2>
        <p>مدیریت مؤثر ترافیک شبکه نیاز به ترکیبی از ابزارهای مناسب، سیاست‌های درست و نظارت مداوم دارد. این فرآیند به بهبود عملکرد، امنیت و تجربه کاربری کمک می‌کند.</p>
      `
    }
  ];

  useEffect(() => {
    // شبیه‌سازی دریافت داده از API
    const fetchArticle = () => {
      const foundArticle = articlesData.find(art => art.id === parseInt(id));
      if (foundArticle) {
        setArticle(foundArticle);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  const handleDownload = () => {
    if (article?.pdfUrl) {
      window.open(article.pdfUrl, '_blank');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="article-loading">
        <div className="loading-spinner"></div>
        <p>در حال بارگذاری مقاله...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>مقاله یافت نشد</h2>
        <p>متأسفانه مقاله مورد نظر شما یافت نشد.</p>
        <button onClick={handleBack} className="back-btn">
          بازگشت به صفحه اصلی
        </button>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <div className="article-container">
        {/* Header */}
        <div className="article-header">
          <button onClick={handleBack} className="back-button">
            <span className="back-icon">←</span>
            بازگشت
          </button>
          
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{article.publishDate}</span>
          </div>
        </div>

        {/* Article Content */}
        <article className="article-content">
          <header className="article-title-section">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-subtitle">{article.subtitle}</p>
            
            <div className="article-info">
              <div className="article-author">
                <span className="author-icon">👤</span>
                {article.author}
              </div>
              <div className="article-reading-time">
                <span className="time-icon">⏱️</span>
                {article.readingTime}
              </div>
            </div>
          </header>

          {/* حذف بخش عکس */}
          {/* <div className="article-image-container">
            <img 
              src={article.image} 
              alt={article.title}
              className="article-main-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400/667eea/ffffff?text=تصویر+مقاله';
              }}
            />
          </div> */}

          <div 
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="article-actions">
            <button onClick={handleDownload} className="download-pdf-btn">
              <span className="btn-icon">📄</span>
              دانلود نسخه PDF
            </button>
            
            <button onClick={handleBack} className="back-to-articles-btn">
              <span className="btn-icon">📚</span>
              بازگشت به مقالات
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail; 