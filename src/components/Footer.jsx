import React from 'react';
import { personalData } from '../data/content';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <p className="footer-name">{personalData.name}</p>
          <p className="footer-copy">
            © {currentYear} Construído com React & Vite.
          </p>
        </div>

        <div className="footer-actions">
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <button onClick={scrollToTop} className="top-btn" title="Voltar ao topo">
            ↑ Topo
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 2.5rem 0;
          border-top: 1px solid var(--border-subtle);
          background: var(--bg-darker);
          margin-top: 4rem;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-name {
          font-weight: 700;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .footer-copy {
          font-size: 0.85rem;
          color: var(--text-subtle);
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--text-main);
        }

        .top-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .top-btn:hover {
          color: var(--text-main);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
