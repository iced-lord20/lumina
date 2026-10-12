'use client';

import { useEffect, useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#home" className="brand" onClick={closeMenu}>
        <span className="brand-symbol">a.</span>
        <span className="brand-name">
          AURA<span>STUDIO</span>
        </span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        {['Home', 'About', 'Services', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={closeMenu}
          >
            {item}
          </a>
        ))}

        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Let’s Talk <span>↗</span>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
