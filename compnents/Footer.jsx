import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="logo">Lumina</p>
        <nav className="footer-links">
          <a href="#about">Product</a>
          <a href="#services">Templates</a>
          <a href="#contact">Pricing</a>
        </nav>
      </div>
      <p className="copy">© 2025 Lumina. All rights reserved.</p>
    </footer>
  );
}

export default Footer