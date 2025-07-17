// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // تابع ورود کاربر
  const login = (userData) => {
    setUser(userData);
    // ذخیره اطلاعات کاربر در localStorage
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // تابع خروج کاربر
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // بارگذاری اطلاعات کاربر از localStorage هنگام بارگذاری صفحه
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);