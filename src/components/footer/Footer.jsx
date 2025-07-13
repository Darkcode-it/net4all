import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>تمامی حقوق محفوظ است © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
