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
      title: "انواع شبکه‌های کامپیوتری - راهنمای جامع",
      subtitle: "آشنایی کامل با انواع شبکه‌ها بر اساس مساحت، رسانه، معماری و توپولوژی",
      readingTime: "15 دقیقه",
      image: "/src/assets/images/network-basics.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/15",
      category: "شبکه",
      content: `
        <div class="network-intro">
          <h2>🌐 مقدمه: دنیای نامرئی شبکه‌ها</h2>
          <p>یه دنیای نامرئی از کامپیوترهاست که با سیم و بی‌سیم به هم وصل شدن و اطلاعات رو مثل نامه جابجا می‌کنن. اینترنت همون جاده‌ایه که همه‌ی این کامپیوترها باهاش به هم وصل میشن!</p>
        </div>

        <div class="network-types-section">
          <h2>🏢 انواع شبکه بر اساس مساحت جغرافیایی</h2>
          
          <div class="network-card">
            <h3>📱 PAN (Personal Area Network)</h3>
            <p><strong>محدوده:</strong> ۱-۱۰ متر</p>
            <p><strong>مثال:</strong> اتصال هندزفری به گوشی با بلوتوث</p>
          </div>

          <div class="network-card">
            <h3>📶 LAN (Local Area Network)</h3>
            <p><strong>محدوده:</strong> اتاق/ساختمان</p>
            <p><strong>مثال:</strong> وای‌فای خانه یا شرکت</p>
          </div>

          <div class="network-card">
            <h3>🏛️ CAN (Campus Area Network)</h3>
            <p><strong>محدوده:</strong> دانشگاه/پارک صنعتی</p>
            <p><strong>مثال:</strong> شبکه دانشگاه تهران</p>
          </div>

          <div class="network-card">
            <h3>🌆 MAN (Metropolitan Area Network)</h3>
            <p><strong>محدوده:</strong> یک شهر</p>
            <p><strong>مثال:</strong> شبکه ATM بانک‌های مشهد</p>
          </div>

          <div class="network-card">
            <h3>🌍 WAN (Wide Area Network)</h3>
            <p><strong>محدوده:</strong> بین شهرها و کشورها</p>
            <p><strong>مثال:</strong> اینترنت (ایران به اروپا)</p>
          </div>

          <div class="network-card">
            <h3>🛰️ GAN (Global Area Network)</h3>
            <p><strong>محدوده:</strong> کل کره زمین</p>
            <p><strong>مثال:</strong> شبکه ماهواره‌ای استارلینک</p>
          </div>
        </div>

        <div class="media-types-section">
          <h2>🔌 انواع شبکه بر اساس رسانه ارتباطی</h2>
          
          <div class="media-card">
            <h3>🔗 باسیم (Wired)</h3>
            <p><strong>رسانه:</strong> کابل مسی/نوری</p>
            <p><strong>مثال:</strong> شبکه کامپیوترها با کابل LAN</p>
          </div>

          <div class="media-card">
            <h3>📡 بی‌سیم (Wireless)</h3>
            <p><strong>رسانه:</strong> امواج رادیویی</p>
            <p><strong>مثال:</strong> وای‌فای (Wi-Fi)</p>
          </div>

          <div class="media-card">
            <h3>🔀 ترکیبی (Hybrid)</h3>
            <p><strong>رسانه:</strong> کابل + امواج</p>
            <p><strong>مثال:</strong> شرکت‌های بزرگ</p>
          </div>
        </div>

        <div class="architecture-section">
          <h2>🏗️ انواع شبکه بر اساس معماری</h2>
          
          <div class="arch-card">
            <h3>👑 Client-Server</h3>
            <p><strong>توضیح:</strong> یک سرور مرکزی به همه سرویس می‌دهد</p>
            <p><strong>مثال:</strong> سایت دیجی‌کالا</p>
          </div>

          <div class="arch-card">
            <h3>🤝 Peer-to-Peer (P2P)</h3>
            <p><strong>توضیح:</strong> همه دستگاه‌ها هم سرور هم کلاینت هستند</p>
            <p><strong>مثال:</strong> اشتراک‌گذاری فایل در تلگرام</p>
          </div>
        </div>

        <div class="access-section">
          <h2>🔒 انواع شبکه بر اساس سطح دسترسی</h2>
          
          <div class="access-card">
            <h3>🏢 Intranet</h3>
            <p><strong>دسترسی:</strong> داخلی (فقط اعضای سازمان)</p>
            <p><strong>مثال:</strong> شبکه داخلی بانک‌ها</p>
          </div>

          <div class="access-card">
            <h3>👥 Extranet</h3>
            <p><strong>دسترسی:</strong> محدود برای کاربران خارجی</p>
            <p><strong>مثال:</strong> پنل مشتریان شرکت</p>
          </div>

          <div class="access-card">
            <h3>🌐 Internet</h3>
            <p><strong>دسترسی:</strong> عمومی</p>
            <p><strong>مثال:</strong> اینترنت</p>
          </div>
        </div>

        <div class="topology-section">
          <h2>🔗 انواع شبکه بر اساس توپولوژی (چیدمان)</h2>
          
          <div class="topology-card">
            <h3>⭐ Star (ستاره‌ای)</h3>
            <p><strong>شکل:</strong> همه دستگاه‌ها به یک نقطه مرکزی وصل</p>
            <p><strong>بهترین کاربرد:</strong> شبکه‌های اداری</p>
          </div>

          <div class="topology-card">
            <h3>🔄 Ring (حلقه‌ای)</h3>
            <p><strong>شکل:</strong> داده در یک حلقه گردش می‌کند</p>
            <p><strong>بهترین کاربرد:</strong> شبکه‌های صنعتی</p>
          </div>

          <div class="topology-card">
            <h3>🚌 Bus (اتوبوسی)</h3>
            <p><strong>شکل:</strong> همه به یک خط مشترک وصل</p>
            <p><strong>بهترین کاربرد:</strong> شبکه‌های کوچک (منسوخ شده)</p>
          </div>

          <div class="topology-card">
            <h3>🕸️ Mesh (مش)</h3>
            <p><strong>شکل:</strong> هر دستگاه به چندین دستگاه دیگر متصل</p>
            <p><strong>بهترین کاربرد:</strong> شبکه‌های نظامی/اورژانسی</p>
          </div>
        </div>

        <div class="special-networks-section">
          <h2>🎯 شبکه‌های خاص (بر اساس کاربرد)</h2>
          
          <div class="special-card">
            <h3>💾 SAN (Storage Area Network)</h3>
            <p><strong>کاربرد:</strong> اتصال سرورها به هاردهای مشترک</p>
          </div>

          <div class="special-card">
            <h3>🔐 VPN (Virtual Private Network)</h3>
            <p><strong>کاربرد:</strong> ایجاد تونل امن روی اینترنت</p>
          </div>

          <div class="special-card">
            <h3>🧠 SDN (Software Defined Network)</h3>
            <p><strong>کاربرد:</strong> مدیریت هوشمند شبکه با نرم‌افزار</p>
          </div>
        </div>

        <div class="internet-section">
          <h2>🌐 اینترنت چیست؟ (ساده‌ترین تعریف)</h2>
          <div class="internet-explanation">
            <p>یه دنیای نامرئی از کامپیوترهاست که با سیم و بی‌سیم به هم وصل شدن و اطلاعات رو مثل نامه جابجا می‌کنن.</p>
          </div>

          <h3>🚀 چطوری کار می‌کنه؟</h3>
          <div class="internet-steps">
            <div class="step-card">
              <h4>📱 مرحله ۱: شروع از دستگاه شما</h4>
              <p>تو با کلیک روی یه لینک (مثلاً google.com) می‌گی: «می‌خوام این رو ببینم!»</p>
            </div>

            <div class="step-card">
              <h4>🏢 مرحله ۲: سرویس‌دهنده اینترنت (ISP)</h4>
              <p>مثل شرکت تلفن محله‌تون! (مثلاً ایرانسل، شاتل، ...) کارش اینه: «پیغام تو رو به مقصد برسونه!»</p>
            </div>

            <div class="step-card">
              <h4>🏛️ مرحله ۳: سرورها (کامپیوترهای غول‌پیکر)</h4>
              <p>این‌ها مثل کتابخانه‌های دیجیتال هستن که اطلاعات سایتها رو نگه می‌دارن.</p>
            </div>

            <div class="step-card">
              <h4>🔄 مرحله ۴: بازگشت جواب</h4>
              <p>سرور گوگل می‌گه: «اوکی! صفحه‌ی اصلی‌ام رو برات می‌فرستم.» این اطلاعات از طریق کابل‌های زیردریایی یا ماهواره برمی‌گرده.</p>
            </div>
          </div>
        </div>

        <div class="data-journey-section">
          <h2>🕵️‍♂️ سفر داده‌ها: از گوشی تا سرور (مثل داستان پلیسی!)</h2>
          <div class="journey-explanation">
            <p><strong>مثال:</strong> فرض کن می‌خوای "گور بابای ترامپ" رو تو گوگل سرچ کنی. اینم سفر داده‌ها:</p>
          </div>

          <div class="journey-steps">
            <div class="journey-card">
              <h4>📱 مرحله ۱: شروع ماجرا (از گوشی تو)</h4>
              <p>گوشی تو درخواست رو بسته‌بندی می‌کنه (یه بستهٔ داده به اسم Packet درست می‌کنه)</p>
              <p class="tech-details">فرستنده: 192.168.1.10 (آدرس IP گوشی تو) | گیرنده: 142.250.185.206 (IP گوگل)</p>
            </div>

            <div class="journey-card">
              <h4>🏠 مرحله ۲: عبور از روتر خونه (اولین ایست بازرسی)</h4>
              <p>روتر خونه‌ت آدرس گیرنده رو می‌بینه و می‌گه: این آدرس مال خونه‌ی ما نیست! باید بره بیرون!</p>
              <p class="tech-details">آدرس فرستنده رو عوض می‌کنه → Public IP خونه‌ت رو می‌ذاره</p>
            </div>

            <div class="journey-card">
              <h4>🔥 مرحله ۳: رد شدن از فایروال (دروازه بانِ شبکه)</h4>
              <p>فایروال چک می‌کنه بسته خطرناک نباشه. اگر مشکلی نداشت، می‌گه: برو بیرون ✅</p>
              <p class="tech-details">اگر مشکوک بود، می‌گه: ورود ممنوع! ❌</p>
            </div>

            <div class="journey-card">
              <h4>🌐 مرحله ۴: سفر در اینترنت (جاده‌های بین‌المللی)</h4>
              <p>بستهٔ داده وارد شبکه‌ی ISP می‌شه و از روترهای بزرگ عبور می‌کنه</p>
              <p class="tech-details">ممکنه از کابل‌های زیردریایی یا ماهواره رد بشه</p>
            </div>

            <div class="journey-card">
              <h4>🏢 مرحله ۵: رسیدن به سرور گوگل (مقر اصلی)</h4>
              <p>سرور گوگل بسته رو باز می‌کنه و عکس‌های مورد نظر رو از دیتابیسش پیدا می‌کنه</p>
              <p class="tech-details">یه بستهٔ جدید می‌سازه (پاسخ تو)</p>
            </div>

            <div class="journey-card">
              <h4>🔙 مرحله ۶: بازگشت به تو (مسیر برگشت)</h4>
              <p>پاسخ گوگل همون مسیر رو برعکس می‌آد و به گوشی تو می‌رسه</p>
              <p class="tech-details">کل این فرآیند کمتر از ۱ ثانیه طول می‌کشه! 🚀</p>
            </div>
          </div>

          <div class="timing-note">
            <p><strong>⏱️ کل این فرآیند چقدر طول می‌کشه؟</strong> معمولاً کمتر از ۱ ثانیه! (مثل فرستادن یه نامه با موشک!) 🚀</p>
          </div>
        </div>

        <div class="addresses-section">
          <h2>🆔 IP و MAC Address (دو کارت شناسایی متفاوت)</h2>
          
          <div class="address-comparison">
            <div class="address-card">
              <h3>🆔 IP Address</h3>
              <h4>کد ملی بین‌المللی</h4>
              <p>نشون‌دهندهٔ محل دستگاه تو کل دنیای اینترنت</p>
              <div class="example-box">
                <p><strong>مثال:</strong> 192.168.1.10 (IPv4) یا 2001:db8::1 (IPv6)</p>
              </div>
              <ul>
                <li>توسط روترها استفاده میشه</li>
                <li>تغییرپذیره</li>
                <li>برای مسیریابی بین شبکه‌ها</li>
        </ul>
            </div>

            <div class="address-card">
              <h3>🏷️ MAC Address</h3>
              <h4>شمارهٔ سریال دستگاه</h4>
              <p>نشون‌دهندهٔ هویت سخت‌افزار شبکه</p>
              <div class="example-box">
                <p><strong>مثال:</strong> A4:C3:F0:85:1B:92 (همیشه ۱۲ رقم هگزادسیمال)</p>
              </div>
              <ul>
                <li>توسط سوییچ‌ها استفاده میشه</li>
                <li>ثابته</li>
                <li>روی سخت‌افزار حک شده</li>
        </ul>
            </div>
          </div>

          <div class="arp-explanation">
            <h4>🧩 چطور IP و MAC با هم کار می‌کنن؟</h4>
            <p><strong>ARP Protocol:</strong> وقتی گوشی می‌خواد داده بفرسته، اول با ARP فریاد می‌زنه: «آهای! هرکی IPش 192.168.1.20 هست، MAC آدرسش رو بده!» و بعد داده‌ها تو یه پاکت (Packet) قرار می‌گیرن که هم IP هم MAC آدرس داره.</p>
          </div>
        </div>

        <div class="router-switch-section">
          <h2>🏙️ روتر و سوییچ (دو شغل متفاوت تو شهر!)</h2>
          
          <div class="device-comparison">
            <div class="device-card">
              <h3>🚕 سوییچ (Switch)</h3>
              <h4>راننده‌ی تاکسی شهری</h4>
              <div class="device-details">
                <div>
                  <strong>کارش چیه؟:</strong>
                  <p>داده‌ها رو فقط تو همون محلۀ خودش (شبکۀ محلی یا LAN) جابجا می‌کنه</p>
                </div>
                <div>
                  <strong>چطوری کار می‌کنه؟:</strong>
                  <p>MAC آدرس (شمارۀ پلاک ماشین دستگاه‌ها)</p>
                </div>
                <div>
                  <strong>مثال:</strong>
                  <p>از گوشی تو به پرینتر خونه یا لپ‌تاپ رفیقت تو همون وای‌فای</p>
                </div>
                <div>
                  <strong>ویژگی:</strong>
                  <p>فقط تو محلۀ خودش بلده مسیر بده!</p>
                </div>
              </div>
            </div>

            <div class="device-card">
              <h3>🚌 روتر (Router)</h3>
              <h4>راننده‌ی اتوبوس بین‌شهری</h4>
              <div class="device-details">
                <div>
                  <strong>کارش چیه؟:</strong>
                  <p>داده‌ها رو از شهر شما (شبکۀ خانگی) به شهرهای دیگه (اینترنت) می‌بره</p>
                </div>
                <div>
                  <strong>چطوری کار می‌کنه؟:</strong>
                  <p>IP آدرس (نشانی پستیِ دستگاه‌ها)</p>
                </div>
                <div>
                  <strong>مثال:</strong>
                  <p>وقتی گوگل رو تو گوشی باز می‌کنی، روتر پیغام رو می‌بره به سرورهای گوگل</p>
                </div>
                <div>
                  <strong>ویژگی:</strong>
                  <p>بلده بهترین مسیر رو انتخاب کنه (مثل GPS)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="collaboration-example">
            <h4>🚦 مثال واقعی از همکاری این دو:</h4>
            <div class="example-list">
              <p><strong>فرستادن فایل به هم‌اتاقی:</strong> سوییچ با MAC آدرس مستقیم می‌فرسته ✅</p>
              <p><strong>فرستادن فایل به دوست در مشهد:</strong> سوییچ → روتر → ISP → روتر مشهد → سوییچ اونجا</p>
              <p class="important-note"><strong>💡 نکته:</strong> مودم‌هایی که ما داریم همشون "روتر + سوییچ" هستن!</p>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h2>🎯 نتیجه‌گیری</h2>
          <p>حالا دیگه می‌دونی که شبکه‌ها چقدر متنوع و جذابن! از PAN کوچیک گرفته تا GAN عظیم، هر کدوم کاربرد خاص خودشون رو دارن. یادت باشه که اینترنت همون جاده‌ایه که همه‌ی این شبکه‌ها رو به هم وصل می‌کنه و داده‌ها با سرعت نور سفر می‌کنن! 🚀</p>
        </div>
      `
    },
    {
      id: 2,
      title: "پروتکل‌های شبکه و مدل OSI - درس دوم",
      subtitle: "آشنایی با پروتکل‌ها، مدل OSI، TCP/IP و HTTP/HTTPS",
      readingTime: "12 دقیقه",
      image: "/src/assets/images/network-protocols.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/16",
      category: "شبکه",
      content: `
        <div class="network-intro">
          <h2>🌐 پروتکل‌های شبکه و مدل OSI</h2>
          <p>در این درس با زبان مشترک کامپیوترها آشنا می‌شویم!</p>
        </div>

        <div class="protocols-section">
          <h2>📚 تعریف علمی و ساده</h2>
          
          <div class="protocol-definition">
            <h3>پروتکل (Protocol)</h3>
            <p>قوانین و استانداردهای ارتباطی بین دستگاه‌ها در شبکه. مثلاً «زبان مشترکی» که کامپیوترها با آن صحبت می‌کنند.</p>
            <div class="code-example">
              <code>مثال: HTTP برای وب، FTP برای انتقال فایل</code>
            </div>
          </div>

          <div class="standard-definition">
            <h3>استاندارد (Standard)</h3>
            <p>سندهای فنی تعریف‌شده توسط سازمان‌های جهانی (مثل IEEE، ISO) که تضمین می‌کنند همه دستگاه‌ها «یک زبان» را بفهمند.</p>
            <div class="code-example">
              <code>مثال: استاندارد Wi-Fi (IEEE 802.11)</code>
            </div>
          </div>
        </div>

        <div class="osi-model-section">
          <h2>🏗️ مدل OSI (Open Systems Interconnection)</h2>
          <p>یک مدل ۷ لایه‌ای که مراحل انتقال داده را از فرستنده تا گیرنده توصیف می‌کند:</p>
          
          <div class="osi-layers">
            <div class="layer">
              <h4>📮 کاربرد (Application) - لایه ۷</h4>
              <p>نرم‌افزارها (مثل مرورگر)</p>
              <small>گیرنده نامه رو باز می‌کنه و می‌خونه (مرورگر)</small>
            </div>
            
            <div class="layer">
              <h4>🔒 نمایش (Presentation) - لایه ۶</h4>
              <p>رمزگذاری/فشرده‌سازی داده</p>
              <small>نامه به رمز نوشته شده (رمزگذاری)</small>
            </div>
            
            <div class="layer">
              <h4>🤝 نشست (Session) - لایه ۵</h4>
              <p>مدیریت اتصال</p>
              <small>فرستنده و گیرنده با تلفن هماهنگ می‌کنن کی خونه باشن!</small>
            </div>
            
            <div class="layer">
              <h4>✉️ انتقال (Transport) - لایه ۴</h4>
              <p>تضمین تحویل داده (مثل TCP)</p>
              <small>پست تضمین می‌کنه نامه حتماً می‌رسه (TCP)</small>
            </div>
            
            <div class="layer">
              <h4>🗺 شبکه (Network) - لایه ۳</h4>
              <p>مسیریابی (مثل IP)</p>
              <small>نامه رو سوار هواپیمای بین‌المللی میشه (IP/مسیریابی)</small>
            </div>
            
            <div class="layer">
              <h4>🛡 پیوند داده (Data Link) - لایه ۲</h4>
              <p>کنترل خطا + MAC</p>
              <small>پستچی چک می‌کنه نامه پاره نشده باشه (کنترل خطا)</small>
            </div>
            
            <div class="layer">
              <h4>🏢 فیزیکی (Physical) - لایه ۱</h4>
              <p>کابل/سیگنال</p>
              <small>پستچی نامه رو با پا می‌بره! (کابل/سیگنال)</small>
            </div>
          </div>
        </div>

        <div class="tcp-ip-section">
          <h2>🌍 مدل TCP/IP</h2>
          <p>مدل ۴ لایه‌ای کاربردی‌تر که پایه‌ی اینترنت است (مثل پست پیشتاز):</p>
          
          <div class="tcp-layers">
            <div class="layer">
              <h4>📬 کاربرد (Application) - لایه ۴</h4>
              <p>HTTP, FTP, DNS</p>
              <small>گیرنده نامه رو می‌خونه (مثلاً در Gmail)</small>
            </div>
            
            <div class="layer">
              <h4>📞 انتقال (Transport) - لایه ۳</h4>
              <p>TCP (قابلاعتماد) / UDP (سریع)</p>
              <small>شرکت پست تلفن می‌زنه به گیرنده: «امروز خونه‌ای؟» (TCP/UDP)</small>
            </div>
            
            <div class="layer">
              <h4>🌍 اینترنت (Internet) - لایه ۲</h4>
              <p>IP (آدرس‌دهی)</p>
              <small>نامه سوار هواپیمای بین‌المللی میشه (IP)</small>
            </div>
            
            <div class="layer">
              <h4>🛵 لینک شبکه (Network Link) - لایه ۱</h4>
              <p>سخت‌افزار (اترنت/وای‌فای)</p>
              <small>پیک موتوری نامه رو از تو خیابون می‌بره (اترنت/وای‌فای)</small>
            </div>
          </div>
        </div>

        <div class="protocols-explanation">
          <h2>⚡ توضیح کوچه‌بازاری HTTP/TCP/UDP</h2>
          
          <div class="http-explanation">
            <h3>🚦 HTTP: چراغ راهنمایی</h3>
            <p>تصور کن وبسایت‌ها خیابون‌های شهرن! HTTP مثل چراغ راهنما می‌مونه که:</p>
            <ul>
              <li>فقط با سبز شدن (200 OK) می‌تونی عبور کنی (صفحه وب باز میشه)</li>
              <li>اگر قرمز (404 Not Found) بشه، می‌گی: «راه بسته! برگردیم»</li>
        </ul>
          </div>
          
          <div class="tcp-explanation">
            <h3>☎️ TCP: راننده‌ی عاشق یا احمق</h3>
            <p>فرض کن داده‌ها مسافران تاکسی هستن:</p>
        <ul>
              <li>قبل حرکت: راننده (TCP) به مسافر (سرور) تلفن می‌زنه (SYN): «سوار میشی؟»</li>
              <li>مسافر جواب می‌ده (SYN-ACK): «آره، بیا!»</li>
              <li>راننده می‌گه (ACK): «دارم می‌رسونمت!» ✅</li>
              <li>هربار موقع رسیدن مسافر به مقصد، دوباره تماس می‌گیره: «چی شد رسیدی؟ سالم رسید چیزیت که نشده؟» (تأییدیه ACK)</li>
              <li>اگر جواب نده (خطا)، برمی‌گرده مسافر رو دوباره برمیداره میبره! (ارسال مجدد)</li>
        </ul>
          </div>
          
          <div class="udp-explanation">
            <h3>🏍💨 UDP: پیک موتوری بی‌قانون</h3>
            <p>اینا آدمای عجول و پرخاشگر شبکه‌ان:</p>
            <ul>
              <li>بسته‌ای که گرفته رو پرتاب می‌کنه تو خیابون و فرار می‌کنه! (بدون تأییدیه)</li>
              <li>اگر بسته گم شد (Packet Loss)، اهمیتی نمی‌ده: «برو گمشو! وقت ندارم»</li>
              <li>ترافیک نمی‌شناسه: تو شلوغ‌ترین خیابون‌ها هم با سرعت می‌ره (مثلاً پخش زنده فوتبال)</li>
              <li>وقتی رسید فقط داد می‌زنه: «رسید؟» ولی صبر نمی‌کنه جواب بشنوه! میره</li>
            </ul>
          </div>
        </div>

        <div class="https-section">
          <h2>🔒 HTTP vs HTTPS</h2>
          
          <div class="http-vs-https">
            <div class="http-side">
              <h3>🔓 HTTP = نامه‌نگاری معمولی</h3>
              <p>نامه رو بدون پاکت می‌نویسی میدی بره دست دوست دخترت! (داده‌ها رمزگذاری نشده). پستچی (روترها) و همسایه‌ها (هکرها) می‌تونن بخوننش و به فاک میری!</p>
              <div class="example">
                <small>مثال: «سلام عشقم میایی بریم خونه مادر بزرگم باهم بریم حمام کسی خونه نیست لولشون آب گرفته» → هرکی ببینه، میاد همکاری میکنه در بازکردن لوله! 😂</small>
              </div>
            </div>
            
            <div class="https-side">
              <h3>🔐 HTTPS = نامه با صندوق امن</h3>
              <div class="https-steps">
                <p>۱. قبل از فرستادن: نامه رو تو یه صندوق فلزی قفل می‌کنی (رمزگذاری SSL)</p>
                <p>۲. تأیید هویت فرستنده: یه مُهر دولتی (گواهی SSL) روی صندوق می‌زنی</p>
                <p>۳. در مسیر: اگر دزد بخواد صندوق رو باز کنه یا عوض کنه، غیرممکنه!</p>
              </div>
              <div class="example">
                <small>حتی اگه هکر نامه رو ببینه، فقط یه مشت حروف بی‌معنی می‌بینه: X5gH#k@9d%</small>
                <p>الان میتونی بری خونه مادر بزرگت لوله بازکنی بدون ترس...</p>
              </div>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h2>✅ جمع‌بندی</h2>
          <div class="summary-cards">
            <div class="summary-card">
              <h4>HTTP</h4>
              <p>قوانین ورود به وبسایت‌ها (🚦)</p>
            </div>
            <div class="summary-card">
              <h4>TCP</h4>
              <p>آدمِ باوجدان شبکه که با تماس‌های مکرر مطمئن میشه کار درسته! (☎️)</p>
            </div>
            <div class="summary-card">
              <h4>UDP</h4>
              <p>آدمِ بی‌حوصله بی‌وجدان که بسته رو پرت میکنه و میره! (🏍💨)</p>
            </div>
          </div>
        </div>
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
      id: 3,
      title: "امنیت شبکه - درس سوم",
      subtitle: "مفاهیم امنیت شبکه، فایروال، رمزگذاری و تهدیدات امنیتی",
      readingTime: "10 دقیقه",
      image: "/src/assets/images/network-security.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/17",
      category: "شبکه",
      content: `
        <div class="network-intro">
          <h2>🔒 امنیت شبکه - محافظت از دنیای دیجیتال</h2>
          <p>امنیت شبکه مجموعه‌ای از سیاست‌ها، تکنولوژی‌ها و اقدامات برای محافظت از زیرساخت شبکه و داده‌ها</p>
        </div>

        <div class="security-concepts">
          <h2>🛡️ مفاهیم پایه امنیت</h2>
          
          <div class="security-principles">
            <div class="principle">
              <h3>🔐 محرمانگی (Confidentiality)</h3>
              <p>اطمینان از اینکه اطلاعات فقط برای افراد مجاز قابل دسترسی است</p>
              <small>مثل قفل کردن فایل‌های مهم</small>
            </div>
            
            <div class="principle">
              <h3>✅ یکپارچگی (Integrity)</h3>
              <p>اطمینان از اینکه داده‌ها در طول انتقال تغییر نمی‌کنند</p>
              <small>مثل مهر و امضا روی نامه</small>
            </div>
            
            <div class="principle">
              <h3>🔄 در دسترس بودن (Availability)</h3>
              <p>اطمینان از اینکه سرویس‌ها همیشه در دسترس هستند</p>
              <small>مثل داشتن برق اضطراری</small>
            </div>
          </div>
        </div>

        <div class="threats-section">
          <h2>⚠️ تهدیدات امنیتی رایج</h2>
          
          <div class="threat-cards">
            <div class="threat-card">
              <h3>🦠 بدافزار (Malware)</h3>
              <p>ویروس‌ها، تروجان‌ها، باج‌افزارها</p>
              <small>مثل میکروب‌های کامپیوتری!</small>
            </div>
            
            <div class="threat-card">
              <h3>🎣 فیشینگ (Phishing)</h3>
              <p>کلاهبرداری با ایمیل‌های جعلی</p>
              <small>مثل قلاب ماهیگیری برای اطلاعات</small>
            </div>
            
            <div class="threat-card">
              <h3>👥 حمله مرد میانی (Man-in-the-Middle)</h3>
              <p>شنود و تغییر اطلاعات در مسیر</p>
              <small>مثل شنود تلفن</small>
            </div>
            
            <div class="threat-card">
              <h3>💥 حمله DDoS</h3>
              <p>حمله انکار سرویس توزیع‌شده</p>
              <small>مثل مسدود کردن در با جمعیت زیاد</small>
            </div>
          </div>
        </div>

        <div class="firewall-section">
          <h2>🔥 فایروال - دیوار آتش شبکه</h2>
          
          <div class="firewall-types">
            <div class="firewall-type">
              <h3>🏠 فایروال شخصی</h3>
              <p>محافظ کامپیوتر شخصی</p>
              <small>مثل نگهبان خانه</small>
            </div>
            
            <div class="firewall-type">
              <h3>🏢 فایروال شبکه</h3>
              <p>محافظ کل شبکه سازمان</p>
              <small>مثل نگهبان ساختمان</small>
            </div>
            
            <div class="firewall-type">
              <h3>☁️ فایروال ابری</h3>
              <p>محافظ سرویس‌های ابری</p>
              <small>مثل نگهبان شهر</small>
            </div>
          </div>
        </div>

        <div class="encryption-section">
          <h2>🔐 رمزگذاری - زبان مخفی</h2>
          
          <div class="encryption-types">
            <div class="encryption-type">
              <h3>🔑 رمزگذاری متقارن</h3>
              <p>یک کلید برای رمزگذاری و رمزگشایی</p>
              <small>مثل قفل معمولی</small>
            </div>
            
            <div class="encryption-type">
              <h3>🔐 رمزگذاری نامتقارن</h3>
              <p>کلید عمومی و خصوصی</p>
              <small>مثل صندوق پستی</small>
            </div>
          </div>
        </div>

        <div class="vpn-section">
          <h2>🌐 VPN - تونل امن</h2>
          <p>شبکه خصوصی مجازی برای اتصال امن از راه دور</p>
          
          <div class="vpn-benefits">
            <div class="benefit">
              <h3>🔒 امنیت</h3>
              <p>رمزگذاری تمام ترافیک</p>
            </div>
            
            <div class="benefit">
              <h3>🌍 تغییر موقعیت</h3>
              <p>تغییر IP و دور زدن محدودیت‌ها</p>
            </div>
            
            <div class="benefit">
              <h3>👁️ حفظ حریم خصوصی</h3>
              <p>مخفی کردن فعالیت‌های آنلاین</p>
            </div>
          </div>
        </div>

        <div class="security-best-practices">
          <h2>✅ بهترین شیوه‌های امنیتی</h2>
          
          <div class="practices-list">
            <div class="practice">
              <h3>🔑 رمزهای قوی</h3>
              <p>استفاده از رمزهای پیچیده و منحصر به فرد</p>
            </div>
            
            <div class="practice">
              <h3>🔄 به‌روزرسانی منظم</h3>
              <p>نصب آخرین وصله‌های امنیتی</p>
            </div>
            
            <div class="practice">
              <h3>📧 احتیاط در ایمیل</h3>
              <p>باز نکردن لینک‌ها و فایل‌های مشکوک</p>
            </div>
            
            <div class="practice">
              <h3>💾 پشتیبان‌گیری</h3>
              <p>نگهداری نسخه‌های پشتیبان منظم</p>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h2>🎯 نتیجه‌گیری</h2>
          <p>امنیت شبکه یک فرآیند مستمر است که نیاز به آگاهی، آموزش و استفاده از ابزارهای مناسب دارد. همیشه به یاد داشته باشید: پیشگیری بهتر از درمان است!</p>
        </div>
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
    },
    {
      id: 5,
      title: "IP Addressing و Subnetting - درس پنجم",
      subtitle: "آشنایی با آدرس‌دهی IP، کلاس‌ها و تقسیم‌بندی شبکه",
      readingTime: "14 دقیقه",
      image: "/src/assets/images/ip-addressing.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/19",
      category: "شبکه",
      content: `
        <div class="network-intro">
          <h2>📍 IP Addressing و Subnetting</h2>
          <p>آشنایی با سیستم آدرس‌دهی اینترنت و نحوه تقسیم‌بندی شبکه‌ها</p>
        </div>

        <div class="ip-basics">
          <h2>🔢 مفاهیم پایه IP</h2>
          
          <div class="ip-concepts">
            <div class="concept">
              <h3>🌐 آدرس IP چیست؟</h3>
              <p>شناسه منحصر به فرد هر دستگاه در شبکه، مثل شماره پلاک خانه</p>
              <small>مثال: 192.168.1.100</small>
            </div>
            
            <div class="concept">
              <h3>🔍 Subnet Mask</h3>
              <p>تعیین کننده بخش شبکه و بخش میزبان</p>
              <small>مثال: 255.255.255.0</small>
            </div>
          </div>
        </div>

        <div class="ip-classes">
          <h2>📊 کلاس‌های IP</h2>
          
          <div class="class-cards">
            <div class="class-card">
              <h3>🏢 کلاس A</h3>
              <p>شبکه‌های بزرگ (1.0.0.0 تا 126.255.255.255)</p>
              <small>مثل شرکت‌های بزرگ</small>
            </div>
            
            <div class="class-card">
              <h3>🏪 کلاس B</h3>
              <p>شبکه‌های متوسط (128.0.0.0 تا 191.255.255.255)</p>
              <small>مثل دانشگاه‌ها</small>
            </div>
            
            <div class="class-card">
              <h3>🏠 کلاس C</h3>
              <p>شبکه‌های کوچک (192.0.0.0 تا 223.255.255.255)</p>
              <small>مثل شبکه‌های خانگی</small>
            </div>
          </div>
        </div>

        <div class="subnetting">
          <h2>✂️ Subnetting - تقسیم شبکه</h2>
          <p>تقسیم یک شبکه بزرگ به شبکه‌های کوچکتر</p>
          
          <div class="subnetting-benefits">
            <div class="benefit">
              <h3>🎯 مدیریت بهتر</h3>
              <p>کنترل آسان‌تر ترافیک</p>
            </div>
            
            <div class="benefit">
              <h3>🔒 امنیت بیشتر</h3>
              <p>جداسازی بخش‌های مختلف</p>
            </div>
            
            <div class="benefit">
              <h3>⚡ عملکرد بهتر</h3>
              <p>کاهش ترافیک غیرضروری</p>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h2>✅ نتیجه‌گیری</h2>
          <p>IP Addressing و Subnetting پایه‌های مهم شبکه‌سازی هستند که برای طراحی و مدیریت شبکه‌های کارآمد ضروری می‌باشند.</p>
        </div>
      `
    },
    {
      id: 6,
      title: "Routing و Switching - درس ششم",
      subtitle: "مفاهیم مسیریابی، پروتکل‌های routing و عملکرد سوییچ‌ها",
      readingTime: "11 دقیقه",
      image: "/src/assets/images/routing-switching.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/20",
      category: "شبکه",
      content: `
        <div class="network-intro">
          <h2>🛣️ Routing و Switching</h2>
          <p>مفاهیم مسیریابی داده‌ها و مدیریت ترافیک شبکه</p>
        </div>

        <div class="routing-basics">
          <h2>🗺️ مفاهیم Routing</h2>
          
          <div class="routing-concepts">
            <div class="concept">
              <h3>🎯 مسیریابی چیست؟</h3>
              <p>انتخاب بهترین مسیر برای انتقال داده‌ها بین شبکه‌ها</p>
              <small>مثل GPS برای داده‌ها</small>
            </div>
            
            <div class="concept">
              <h3>📋 Routing Table</h3>
              <p>جدول مسیرها که روتر برای تصمیم‌گیری استفاده می‌کند</p>
              <small>مثل نقشه راه</small>
            </div>
          </div>
        </div>

        <div class="routing-protocols">
          <h2>📡 پروتکل‌های Routing</h2>
          
          <div class="protocol-cards">
            <div class="protocol-card">
              <h3>🔄 RIP</h3>
              <p>Routing Information Protocol - پروتکل قدیمی و ساده</p>
              <small>مناسب شبکه‌های کوچک</small>
            </div>
            
            <div class="protocol-card">
              <h3>🌐 OSPF</h3>
              <p>Open Shortest Path First - پروتکل پیشرفته</p>
              <small>مناسب شبکه‌های بزرگ</small>
            </div>
            
            <div class="protocol-card">
              <h3>🔗 BGP</h3>
              <p>Border Gateway Protocol - پروتکل اینترنت</p>
              <small>برای اتصال شبکه‌های مختلف</small>
            </div>
          </div>
        </div>

        <div class="switching">
          <h2>🔀 Switching</h2>
          
          <div class="switching-types">
            <div class="switching-type">
              <h3>📍 Circuit Switching</h3>
              <p>اتصال فیزیکی بین فرستنده و گیرنده</p>
              <small>مثل خط تلفن</small>
            </div>
            
            <div class="switching-type">
              <h3>📦 Packet Switching</h3>
              <p>انتقال داده‌ها در بسته‌های جداگانه</p>
              <small>مثل پست</small>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h2>✅ نتیجه‌گیری</h2>
          <p>Routing و Switching دو مفهوم اساسی در شبکه‌سازی هستند که امکان ارتباط کارآمد بین دستگاه‌ها را فراهم می‌آورند.</p>
        </div>
      `
    },
    {
      id: 7,
      title: "Wireless Networking - درس هفتم",
      subtitle: "شبکه‌های بی‌سیم، استانداردهای Wi-Fi و امنیت",
      readingTime: "9 دقیقه",
      image: "/src/assets/images/wireless-networking.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/21",
      category: "شبکه",
      content: `
        <div class="network-intro">
          <h2>📶 Wireless Networking</h2>
          <p>شبکه‌های بی‌سیم و تکنولوژی‌های ارتباطی بدون سیم</p>
        </div>

        <div class="wifi-standards">
          <h2>📡 استانداردهای Wi-Fi</h2>
          
          <div class="standard-cards">
            <div class="standard-card">
              <h3>📶 802.11a</h3>
              <p>سرعت 54 Mbps، فرکانس 5 GHz</p>
              <small>استاندارد قدیمی</small>
            </div>
            
            <div class="standard-card">
              <h3>📶 802.11b</h3>
              <p>سرعت 11 Mbps، فرکانس 2.4 GHz</p>
              <small>اولین استاندارد محبوب</small>
            </div>
            
            <div class="standard-card">
              <h3>📶 802.11g</h3>
              <p>سرعت 54 Mbps، فرکانس 2.4 GHz</p>
              <small>بهبود یافته b</small>
            </div>
            
            <div class="standard-card">
              <h3>📶 802.11n</h3>
              <p>سرعت تا 600 Mbps، فرکانس 2.4/5 GHz</p>
              <small>استاندارد فعلی</small>
            </div>
            
            <div class="standard-card">
              <h3>📶 802.11ac</h3>
              <p>سرعت تا 3.5 Gbps، فرکانس 5 GHz</p>
              <small>استاندارد جدید</small>
            </div>
          </div>
        </div>

        <div class="wireless-security">
          <h2>🔒 امنیت شبکه‌های بی‌سیم</h2>
          
          <div class="security-methods">
            <div class="security-method">
              <h3>🔐 WEP</h3>
              <p>Wired Equivalent Privacy - قدیمی و ناامن</p>
              <small>دیگر توصیه نمی‌شود</small>
            </div>
            
            <div class="security-method">
              <h3>🔐 WPA</h3>
              <p>Wi-Fi Protected Access - بهبود یافته</p>
              <small>امنیت متوسط</small>
            </div>
            
            <div class="security-method">
              <h3>🔐 WPA2</h3>
              <p>Wi-Fi Protected Access 2 - امن</p>
              <small>استاندارد فعلی</small>
            </div>
            
            <div class="security-method">
              <h3>🔐 WPA3</h3>
              <p>Wi-Fi Protected Access 3 - جدیدترین</p>
              <small>بالاترین امنیت</small>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h2>✅ نتیجه‌گیری</h2>
          <p>شبکه‌های بی‌سیم انقلابی در ارتباطات ایجاد کرده‌اند و با رعایت اصول امنیتی، می‌توان از مزایای آن‌ها بهره‌مند شد.</p>
        </div>
      `
    },
    {
      id: 8,
      title: "Network Management - درس هشتم",
      subtitle: "مدیریت شبکه، مانیتورینگ و ابزارهای مدیریتی",
      readingTime: "13 دقیقه",
      image: "/src/assets/images/network-management.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/22",
      category: "شبکه",
      content: `
        <div class="network-intro">
          <h2>⚙️ Network Management</h2>
          <p>مدیریت، نظارت و بهینه‌سازی عملکرد شبکه</p>
        </div>

        <div class="management-functions">
          <h2>🔧 وظایف مدیریت شبکه</h2>
          
          <div class="function-cards">
            <div class="function-card">
              <h3>📊 Fault Management</h3>
              <p>تشخیص و رفع مشکلات شبکه</p>
              <small>مثل دکتر شبکه</small>
            </div>
            
            <div class="function-card">
              <h3>📈 Performance Management</h3>
              <p>نظارت بر عملکرد و بهینه‌سازی</p>
              <small>مثل مهندس بهینه‌سازی</small>
            </div>
            
            <div class="function-card">
              <h3>📋 Configuration Management</h3>
              <p>مدیریت تنظیمات تجهیزات</p>
              <small>مثل تنظیم‌کننده</small>
            </div>
            
            <div class="function-card">
              <h3>💰 Accounting Management</h3>
              <p>نظارت بر استفاده از منابع</p>
              <small>مثل حسابدار</small>
            </div>
            
            <div class="function-card">
              <h3>🔒 Security Management</h3>
              <p>مدیریت امنیت شبکه</p>
              <small>مثل نگهبان</small>
            </div>
          </div>
        </div>

        <div class="monitoring-tools">
          <h2>🛠️ ابزارهای مانیتورینگ</h2>
          
          <div class="tool-cards">
            <div class="tool-card">
              <h3>📊 SNMP</h3>
              <p>Simple Network Management Protocol</p>
              <small>پروتکل استاندارد مدیریت</small>
            </div>
            
            <div class="tool-card">
              <h3>📈 NetFlow</h3>
              <p>تحلیل ترافیک شبکه</p>
              <small>نظارت بر جریان داده‌ها</small>
            </div>
            
            <div class="tool-card">
              <h3>🔍 Wireshark</h3>
              <p>آنالیز بسته‌های شبکه</p>
              <small>ابزار قدرتمند تحلیل</small>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h2>✅ نتیجه‌گیری</h2>
          <p>مدیریت شبکه یک فرآیند مستمر است که نیاز به ابزارهای مناسب و دانش تخصصی دارد.</p>
        </div>
      `
    },
    {
      id: 9,
      title: "Network Virtualization - درس نهم",
      subtitle: "مجازی‌سازی شبکه، SDN و تکنولوژی‌های نوین",
      readingTime: "16 دقیقه",
      image: "/src/assets/images/network-virtualization.jpg",
      pdfUrl: "#",
      author: "تیم Net4All",
      publishDate: "1403/01/23",
      category: "شبکه",
      content: `
        <div class="network-intro">
          <h2>☁️ Network Virtualization</h2>
          <p>مجازی‌سازی شبکه و تکنولوژی‌های نوین شبکه‌سازی</p>
        </div>

        <div class="virtualization-concepts">
          <h2>🔮 مفاهیم مجازی‌سازی</h2>
          
          <div class="concept-cards">
            <div class="concept-card">
              <h3>🖥️ Virtual Machines</h3>
              <p>اجرای چندین سیستم عامل روی یک سخت‌افزار</p>
              <small>مثل چندین کامپیوتر در یک کامپیوتر</small>
            </div>
            
            <div class="concept-card">
              <h3>🌐 Virtual Networks</h3>
              <p>ایجاد شبکه‌های مجازی مستقل</p>
              <small>مثل چندین شبکه در یک شبکه</small>
            </div>
            
            <div class="concept-card">
              <h3>💾 Virtual Storage</h3>
              <p>مدیریت متمرکز فضای ذخیره‌سازی</p>
              <small>مثل انبار مجازی</small>
            </div>
          </div>
        </div>

        <div class="sdn-section">
          <h2>🧠 Software Defined Networking (SDN)</h2>
          
          <div class="sdn-components">
            <div class="component">
              <h3>🎛️ Control Plane</h3>
              <p>لایه کنترل و تصمیم‌گیری</p>
              <small>مثل مغز شبکه</small>
            </div>
            
            <div class="component">
              <h3>🔌 Data Plane</h3>
              <p>لایه انتقال داده</p>
              <small>مثل دست‌ها و پاها</small>
            </div>
            
            <div class="component">
              <h3>📱 Management Plane</h3>
              <p>لایه مدیریت و نظارت</p>
              <small>مثل چشم‌ها و گوش‌ها</small>
            </div>
          </div>
        </div>

        <div class="cloud-networking">
          <h2>☁️ Cloud Networking</h2>
          
          <div class="cloud-types">
            <div class="cloud-type">
              <h3>🏢 Private Cloud</h3>
              <p>ابر خصوصی برای سازمان‌ها</p>
              <small>امنیت بالا، کنترل کامل</small>
            </div>
            
            <div class="cloud-type">
              <h3>🌍 Public Cloud</h3>
              <p>ابر عمومی (AWS, Azure, GCP)</p>
              <small>مقیاس‌پذیری بالا، هزینه کم</small>
            </div>
            
            <div class="cloud-type">
              <h3>🔗 Hybrid Cloud</h3>
              <p>ترکیب ابر خصوصی و عمومی</p>
              <small>بهترین هر دو دنیا</small>
            </div>
          </div>
        </div>

        <div class="conclusion">
          <h2>✅ نتیجه‌گیری</h2>
          <p>مجازی‌سازی شبکه آینده شبکه‌سازی است و با استفاده از تکنولوژی‌های نوین، می‌توان شبکه‌های کارآمدتر و انعطاف‌پذیرتری ایجاد کرد.</p>
        </div>
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