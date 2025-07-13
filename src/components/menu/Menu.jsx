import React from 'react';
import { Link } from 'react-router-dom';
import '../menu/Menu.css'; // استایل مرتبط

const Menu = () => {
  // لیست آیتم‌های منو
  const menuItems = [
    { name: 'Network+', path: '/network-plus' },
    { name: 'Cisco (CCNA)', path: '/cisco-ccna' },
    { name: 'MikroTik', path: '/mikrotik' },
    { name: 'SANS', path: '/sans' },
    { name: 'PWK', path: '/pwk' },
  ];

  return (
    <nav className="menu">
      <div className="menu__container">
        {/* لوگو */}
        <div className="menu__logo">
          <Link to="/" className="menu__logo-link">
            NET 4 ALL | الفبای شبکه با زبان چوپونی
          </Link>
        </div>
        {/* آیتم‌های منو */}
        <ul className="menu__list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu__item">
              <Link to={item.path} className="menu__link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;