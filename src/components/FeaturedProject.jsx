import React from 'react';
import { personalData } from '../data/content';
import bannerImg from '../assets/revolt_saga_banner.jpg';

function FeaturedProject() {
  const project = personalData.featuredProject;

  return (
    <section id="projeto" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            {project.badge}
          </div>
          <h2 className="section-title">
            Projeto Principal: <span className="gradient-text">{project.title}</span>
          </h2>
        </div>

        <div className="glass-card project-card">
          <div className="project-banner-wrapper">
            <img
              src={bannerImg}
              alt="The Revolt Saga Concept Artwork"
              className="project-banner"
              loading="lazy"
            />
            <div className="project-banner-overlay"></div>
            <div className="project-banner-badge">
              <span className="writing-dot"></span>
              {project.status}
            </div>
          </div>

          <div className="project-details">
            <div className="project-main-info">
              <p className="project-description">
                {project.description}
              </p>
            </div>

            <div className="project-pillars">
              {project.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-item">
                  <div className="pillar-header">
                    <span className="pillar-num">0{idx + 1}</span>
                    <h4 className="pillar-title">{pillar.title}</h4>
                  </div>
                  <p className="pillar-detail">{pillar.detail}</p>
                </div>
              ))}
            </div>

            <div className="project-footer">
              <div className="project-scope">
                <span className="scope-tag">📖 Escrita do Livro</span>
                <span className="scope-tag">✍️ Roteiro & Diálogos</span>
                <span className="scope-tag">📜 Worldbuilding</span>
                <span className="scope-tag">🎮 Conceito para Game</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-card {
          overflow: hidden;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .project-banner-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          background: #05070d;
        }

        .project-banner {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .project-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(9, 12, 21, 0.2) 0%, rgba(17, 23, 38, 0.95) 100%);
        }

        .project-banner-badge {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(9, 12, 21, 0.85);
          border: 1px solid var(--border-cyan);
          backdrop-filter: blur(12px);
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
        }

        .writing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .project-details {
          padding: 2.25rem;
        }

        .project-description {
          font-size: 1.025rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 2rem;
          max-width: 100%;
        }

        .project-pillars {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        .pillar-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.15rem;
        }

        .pillar-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.4rem;
        }

        .pillar-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-primary);
          font-weight: 700;
        }

        .pillar-title {
          font-size: 0.975rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .pillar-detail {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .project-scope {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .scope-tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #a5b4fc;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.2);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        @media (max-width: 768px) {
          .project-banner-wrapper {
            height: 200px;
          }
          .project-details {
            padding: 1.5rem;
          }
          .project-pillars {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default FeaturedProject;
