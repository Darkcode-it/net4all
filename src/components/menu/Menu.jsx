"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Menu.css"

/**
 * کامپوننت منوی اصلی سایت
 * شامل منوی اصلی، زیرمنوها و منوی موبایل
 * @returns {JSX.Element} کامپوننت منو
 */
const Menu = () => {
  // وضعیت منوی موبایل
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // وضعیت زیرمنوهای باز
  const [openDropdown, setOpenDropdown] = useState(null)
  // مرجع برای تشخیص کلیک خارج از منو
  const menuRef = useRef(null)
  const location = useLocation()

  /**
   * تغییر وضعیت منوی موبایل
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // بستن تمام زیرمنوها هنگام باز/بسته کردن منوی موبایل
    setOpenDropdown(null)
  }

  /**
   * مدیریت باز/بسته کردن زیرمنوها
   * @param {string} dropdownName - نام زیرمنو
   */
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  /**
   * تشخیص کلیک خارج از منو برای بستن زیرمنوها
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  /**
   * بستن منوی موبایل هنگام تغییر مسیر
   */
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [location])

  /**
   * تشخیص فعال بودن لینک
   * @param {string} path - مسیر لینک
   * @returns {string} کلاس فعال یا خالی
   */
  const isActive = (path) => {
    return location.pathname === path ? "navbar__link--active" : ""
  }

  /**
   * آیتم‌های منوی اصلی
   */
  const menuItems = [
    {
      id: "network-plus",
      title: "Network+",
      path: "/network-plus",
      hasDropdown: true,
      dropdownItems: [
        { title: "   1 (انواع شبکه‌هاراهنمای جامع)  ", path: "https://v0-anwae-shbkh.vercel.app/" },
        { title: "  2 (پروتکل‌های شبکه)   ", path: "https://v0-network-protocols.vercel.app/" },
        { title: "  3 (توپولوژی‌های شبکه) ", path: "https://v0-network-topology.vercel.app/" },
        { title: "  4 (پایگاه داده رسانه‌های شبکه)  ", path: "https://v0-network-explanation.vercel.app/" },
        { title: "  5 (آدرس‌دهی)  ", path: "https://v0-linux-terminal-design.vercel.app/" },
        { title: "  6 (درک تهدیدات شبکه و مکانیزم‌های دفاعی) ", path: "https://v0-network-security-threats.vercel.app/" },
        { title: "  7 (مدیریت و پایش شبکه) ", path: "https://v0-network-operations.vercel.app/" },
        { title: "  8 (عیب‌یابی شبکه) ", path: "https://v0-network-troubleshooting.vercel.app/" },
        { title: "  9 (مفاهیم مدرن شبکه)  ", path: "https://cloud-chupani-network.lovable.app/" },
     
        
      ],
    },
    {
      id: "cisco",
      title: "Cisco (CCNA)",
      path: "/cisco",
      hasDropdown: true,
      dropdownItems: [
        { title: "مفاهیم پایه شبکه", path: "https://net4all-hi151on.gamma.site/" },
        { title: "زیرساخت شبکه", path: "https://dars-cisco-nm6hrg4.gamma.site/" },
        { title: "اتصالات اینترنتی", path: "https://shabakeh-ba-zabane-chopo-hj4f5bt.gamma.site/" },
        { title: "سرویسھا", path: "https://v0-iranian-customer-support.vercel.app/" },
        { title: "امنیت پایە", path: "https://v0-syskw-amnyt.vercel.app/" },
        { title: " اتوماسیون و برنامه نویسی شبکه", path: "/cisco/lab" },
        { title: " عیب یابی شبکە", path: "/cisco/lab" },

      ],
    },
    {
      id: "mikrotik",
      title: "MikroTik",
      path: "/mikrotik",
      hasDropdown: true,
      dropdownItems: [
        { title: "MTCNA", path: "/mikrotik/mtcna" },
        { title: "RouterOS", path: "/mikrotik/routeros" },
        { title: "Wireless", path: "/mikrotik/wireless" },
        { title: "Firewall", path: "/mikrotik/firewall" },
      ],
    },
    {
      id: "sans",
      title: "SANS",
      path: "/sans",
      hasDropdown: true,
      dropdownItems: [
        { title: "GIAC Security", path: "/sans/giac" },
        { title: "Penetration Testing", path: "/sans/pentest" },
        { title: "Digital Forensics", path: "/sans/forensics" },
        { title: "Incident Response", path: "/sans/incident-response" },
      ],
    },
    {
      id: "pwk",
      title: "PWK",
      path: "/pwk",
      hasDropdown: true,
      dropdownItems: [
        { title: "OSCP Prep", path: "/pwk/oscp" },
        { title: "Buffer Overflow", path: "/pwk/buffer-overflow" },
        { title: "Web Application", path: "/pwk/web-app" },
        { title: "Privilege Escalation", path: "/pwk/privesc" },
      ],
    },
    {
      id: "NEW",
      title: "NEW",
      path: "/NEW",
      hasDropdown: true,
      dropdownItems: [
        { title: " ", path: "/pwk/oscp" },
        { title: " ", path: "/pwk/buffer-overflow" },
        { title: " ", path: "/pwk/web-app" },
        { title: " ", path: "/pwk/privesc" },
      ],
    },
  ]

  return (
    <nav className="navbar" ref={menuRef} role="navigation" aria-label="منوی اصلی">
      <div className="navbar__container">
        {/* لوگو */}
        <Link to="/" className="navbar__logo" aria-label="صفحه اصلی Net4All">
          <span className="navbar__logo-text">Net4All</span>
        </Link>

        {/* منوی دسکتاپ */}
        <div className={`navbar__menu ${isMobileMenuOpen ? "navbar__menu--active" : ""}`}>
          {menuItems.map((item) => (
            <div key={item.id} className={`navbar__item ${item.hasDropdown ? "navbar__item--dropdown" : ""}`}>
              {item.hasDropdown ? (
                <>
                  <button
                    className={`navbar__link navbar__link--dropdown ${isActive(item.path)}`}
                    onClick={() => toggleDropdown(item.id)}
                    aria-expanded={openDropdown === item.id}
                    aria-haspopup="true"
                  >
                    {item.title}
                    <span
                      className={`navbar__dropdown-icon ${
                        openDropdown === item.id ? "navbar__dropdown-icon--open" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`navbar__dropdown ${openDropdown === item.id ? "navbar__dropdown--active" : ""}`}
                    role="menu"
                  >
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.path}
                        className={`navbar__dropdown-link ${isActive(dropdownItem.path)}`}
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.path} className={`navbar__link ${isActive(item.path)}`}>
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* دکمه ورود */}
          <Link to="/login" className={`navbar__login-btn ${isActive("/login")}`}>
            <span className="navbar__login-icon">👤</span>
            Login
          </Link>
        </div>

        {/* دکمه همبرگر برای موبایل */}
        <button
          className={`navbar__toggle ${isMobileMenuOpen ? "navbar__toggle--active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="باز/بسته کردن منو"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>
      </div>

      {/* پس‌زمینه تیره برای منوی موبایل */}
      {isMobileMenuOpen && (
        <div className="navbar__overlay" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true"></div>
      )}
    </nav>
  )
}

export default Menu
