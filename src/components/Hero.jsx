import React, { useState, useEffect, useRef } from 'react';
import { personalData } from '../data/content';
import profileImg from '../assets/ftperfil.png';
import curriculoPdf from '../assets/Curriculo_Guilherme_Bezerra.pdf';

function Hero() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column - Copy & CTAs */}
          <div className="hero-content">
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              {personalData.role}
            </div>

            <h1 className="hero-name">
              Guilherme Bezerra
            </h1>

            <p className="hero-headline">
              {personalData.headline}
            </p>

            <div className="hero-actions">
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn ↗
              </a>

              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub ↗
              </a>

              <div className="dropdown-wrapper" ref={dropdownRef}>
                <button
                  type="button"
                  className="btn btn-secondary dropdown-trigger"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
                  Formas de Contato
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <a
                      href={`mailto:${personalData.socials.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Enviar e-mail
                    </a>

                    <a
                      href={personalData.socials.whatsapp || "https://wa.me/5511917652794"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      Abrir WhatsApp
                    </a>

                    <a
                      href={curriculoPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                      Visualizar currículo
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="hero-pills">
              <span className="hero-pill">React & Vite</span>
              <span className="hero-pill">Node.js & Spring Boot</span>
              <span className="hero-pill">IA & Narrativa</span>
            </div>
          </div>

          {/* Right Column - Profile Portrait Image */}
          <div className="hero-profile-column">
            <div className="profile-card">
              <div className="profile-img-wrapper">
                <img
                  src={profileImg}
                  alt="Guilherme Bezerra"
                  className="profile-img"
                />
              </div>
              <div className="profile-badge-overlay">
                <span className="profile-dot"></span>
                <span>System.out.println("Hello Guest!");</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 6rem 0 3rem 0;
          min-height: 70vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: -10%;
          left: 45%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: var(--accent-glow);
          filter: blur(90px);
          opacity: 0.6;
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          position: relative;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-content {
          max-width: 680px;
        }

        .hero-name {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-main);
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .hero-headline {
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          color: var(--text-muted);
          font-weight: 400;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .dropdown-wrapper {
          position: relative;
          display: inline-block;
        }

        .dropdown-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dropdown-arrow {
          transition: transform 0.2s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 0.6rem);
          left: 0;
          min-width: 210px;
          background: rgba(16, 22, 34, 0.95);
          border: 1px solid var(--border-active);
          border-radius: var(--radius-md);
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
          z-index: 50;
          animation: dropdownFadeIn 0.2s ease-out;
        }

        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.9rem;
          color: var(--text-main);
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: var(--radius-sm);
          transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
        }

        .dropdown-item:hover {
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-cyan);
          transform: translateX(3px);
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-subtle);
        }

        .hero-pill {
          font-size: 0.825rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        /* Profile Image Card Styling */
        .hero-profile-column {
          display: flex;
          justify-content: center;
        }

        .profile-card {
          position: relative;
          width: 100%;
          max-width: 330px;
          border-radius: var(--radius-lg);
          padding: 8px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(6, 182, 212, 0.15) 100%);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
        }

        .profile-card:hover {
          transform: translateY(-4px);
        }

        .profile-img-wrapper {
          width: 100%;
          border-radius: calc(var(--radius-lg) - 4px);
          overflow: hidden;
          background: #090c15;
          aspect-ratio: 4/5;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .profile-badge-overlay {
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 22, 34, 0.95);
          border: 1px solid var(--border-cyan);
          backdrop-filter: blur(12px);
          padding: 0.45rem 1.1rem;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: var(--text-main);
          white-space: nowrap;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .profile-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        @media (max-width: 900px) {
          .hero-section {
            padding: 5rem 0 2.5rem 0;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-profile-column {
            order: -1;
          }
          .profile-card {
            max-width: 250px;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-trigger {
            width: 100%;
            justify-content: center;
          }
          .dropdown-menu {
            width: 100%;
            left: 0;
            right: 0;
          }
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
