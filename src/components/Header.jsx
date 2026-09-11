import React, { useState, useEffect } from 'react';
import { personalData } from '../data/content';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Contato', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Projeto Principal', href: '#projeto' }
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#hero" className="logo">
          <span className="logo-badge">G</span>
          <span className="logo-text">GuiBez007</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            GitHub ↗
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            LinkedIn ↗
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Alternar Menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub ↗
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              LinkedIn ↗
            </a>
          </div>
        )}
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.15rem 0;
          transition: all 0.3s ease;
        }

        .header-scrolled {
          padding: 0.8rem 0;
          background: rgba(9, 12, 21, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-sm);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-main);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.01em;
        }

        .logo-badge {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: var(--accent-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 1.05rem;
          box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
        }

        .logo-text {
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-main);
        }

        .btn-sm {
          padding: 0.4rem 0.9rem;
          font-size: 0.825rem;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-main);
          position: relative;
          transition: all 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 22px;
          height: 2px;
          background: var(--text-main);
          transition: all 0.3s ease;
        }

        .hamburger::before { top: -7px; }
        .hamburger::after { top: 7px; }

        .hamburger.open {
          background: transparent;
        }

        .hamburger.open::before {
          transform: rotate(45deg);
          top: 0;
        }

        .hamburger.open::after {
          transform: rotate(-45deg);
          top: 0;
        }

        .mobile-nav {
          position: fixed;
          top: 65px;
          left: 0;
          right: 0;
          background: var(--bg-card-solid);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-md);
        }

        .mobile-nav-link {
          color: var(--text-main);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 500;
        }

        @media (max-width: 820px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  );
}

export default Header;
