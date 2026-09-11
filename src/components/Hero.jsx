import React from 'react';
import { personalData } from '../data/content';
import profileImg from '../assets/ftperfil.png';

function Hero() {
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
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub ↗
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn ↗
              </a>

              <a href={`mailto:${personalData.socials.email}`} className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                E-mail
              </a>
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
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
