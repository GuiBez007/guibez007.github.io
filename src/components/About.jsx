import React from 'react';
import { personalData } from '../data/content';

function About() {
  const renderFormattedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-highlight">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            {personalData.about.title}
          </div>
          <h2 className="section-title">
            {personalData.about.headline}
          </h2>
        </div>

        <div className="glass-card about-card">
          <div className="about-body">
            {personalData.about.paragraphs.map((p, idx) => (
              <p key={idx} className="about-paragraph">
                {renderFormattedText(p)}
              </p>
            ))}
          </div>

          <div className="about-highlights-grid">
            <div className="highlight-pill-box">
              <span className="pill-title">Competições & Cursos</span>
              <div className="pill-tags">
                <span className="badge-chip">InterFATECs</span>
                <span className="badge-chip">RoboCode</span>
                <span className="badge-chip">EXPOTECH</span>
                <span className="badge-chip">TOEIC em 2 anos</span>
                <span className="badge-chip highlight-cyan">IA no SENAI</span>
                <span className="badge-chip">TG</span>
              </div>
            </div>

            <div className="highlight-pill-box">
              <span className="pill-title">Projetos & Aplicações</span>
              <div className="pill-tags">
                <span className="badge-chip highlight-cyan">CountBus (Hardware, IoT & Dashboard)</span>
                <span className="badge-chip highlight-indigo">TRS (Livro & Roteiro)</span>
              </div>
            </div>
          </div>

          <div className="about-footer-banner">
            <span className="banner-icon">🎯</span>
            <p className="banner-text">{personalData.about.highlight}</p>
          </div>
        </div>
      </div>

      <style>{`
        .about-card {
          padding: 2.75rem 3rem;
          position: relative;
        }

        .about-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .about-paragraph {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.75;
        }

        .text-highlight {
          color: var(--text-main);
          font-weight: 600;
        }

        .about-highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--border-subtle);
          margin-bottom: 2rem;
        }

        .highlight-pill-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .pill-title {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: var(--text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.85rem;
        }

        .pill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .badge-chip {
          font-size: 0.825rem;
          font-family: var(--font-mono);
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        .badge-chip.highlight-cyan {
          color: var(--accent-cyan);
          border-color: var(--border-cyan);
          background: rgba(6, 182, 212, 0.08);
        }

        .badge-chip.highlight-indigo {
          color: #a5b4fc;
          border-color: rgba(99, 102, 241, 0.3);
          background: rgba(99, 102, 241, 0.08);
        }

        .about-footer-banner {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%);
          border: 1px solid var(--border-active);
          padding: 1.15rem 1.5rem;
          border-radius: var(--radius-md);
        }

        .banner-icon {
          font-size: 1.4rem;
        }

        .banner-text {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .about-card {
            padding: 2rem 1.5rem;
          }
          .about-footer-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
