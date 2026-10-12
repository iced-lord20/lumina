'use client';

import React from 'react'


const Footer = () => {
  return (
    <footer className="footer section-container">
      <a href="#home" className="brand footer-brand">
        <span className="brand-symbol">a.</span>
        <span className="brand-name">
          AURA<span>STUDIO</span>
        </span>
      </a>

      <p>Independent creative studio. London, UK.</p>

      <a className="footer-top-link" href="#home">
        Back to the beginning ↑
      </a>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aura Studio</span>
        <span>DESIGNED WITH INTENTION.</span>
      </div>
    </footer>
  );
};

export default Footer