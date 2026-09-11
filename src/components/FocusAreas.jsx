import React from 'react';
import { personalData } from '../data/content';

const IconMap = {
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  backend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  ai: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
      <path d="M12 12 2.1 12a10 10 0 0 0 9.9 9.9V12z"></path>
      <path d="M20 4.5 15.5 9"></path>
    </svg>
  ),
  hardware: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="15" x2="23" y2="15"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="15" x2="4" y2="15"></line>
    </svg>
  ),
  narrative: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  )
};

function FocusAreas() {
  return (
    <section id="areas" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            Habilidades & Tecnologias
          </div>
          <h2 className="section-title">
            {personalData.focusAreasTitle}
          </h2>
        </div>

        <div className="areas-grid">
          {personalData.focusAreas.map((area) => (
            <div key={area.id} className="glass-card area-card">
              <div className="area-card-header">
                <div className="area-icon">
                  {IconMap[area.id]}
                </div>
                <span className="area-badge">{area.badge}</span>
              </div>

              <h3 className="area-title">{area.title}</h3>
              <p className="area-description">{area.description}</p>

              <div className="area-tags">
                {area.techs.map((tech, idx) => (
                  <span key={idx} className="area-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .areas-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
        }

        .area-card {
          flex: 1 1 300px;
          max-width: 350px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
        }

        .area-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .area-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a5b4fc;
        }

        .area-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.2);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          white-space: nowrap !important;
        }

        .area-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .area-description {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .area-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
        }

        .area-tag {
          font-size: 0.775rem;
          font-family: var(--font-mono);
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid var(--border-subtle);
          padding: 0.22rem 0.6rem;
          border-radius: var(--radius-sm);
          white-space: nowrap !important;
          transition: border-color var(--transition-fast);
        }

        .area-card:hover .area-tag {
          border-color: rgba(99, 102, 241, 0.25);
        }

        @media (max-width: 640px) {
          .area-card {
            max-width: 100%;
            flex-basis: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default FocusAreas;
