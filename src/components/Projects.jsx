import React from 'react';
import { personalData } from '../data/content';

function Projects() {
  const projects = personalData.projects;

  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            Projetos & Aplicações
          </div>
          <h2 className="section-title">
            Principais Projetos <span className="gradient-text">& Colaborações</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((item) => (
            <div key={item.id} className="glass-card project-item-card">
              <div className="project-item-header">
                <div className="project-item-title-group">
                  <span className="project-item-icon">{item.icon}</span>
                  <h3 className="project-item-title">{item.title}</h3>
                </div>
                <span className="project-item-badge">{item.badge}</span>
              </div>

              <p className="project-item-description">{item.description}</p>

              <div className="project-item-tags">
                {item.techs.map((tech, idx) => (
                  <span key={idx} className="project-item-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-item-actions">
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn btn-github"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub ↗
                  </a>
                )}

                {item.siteUrl && (
                  <a
                    href={item.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn btn-site"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Site ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 1.5rem;
        }

        .project-item-card {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
        }

        .project-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .project-item-title-group {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .project-item-icon {
          font-size: 1.4rem;
          line-height: 1;
        }

        .project-item-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .project-item-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.2);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          white-space: nowrap !important;
        }

        .project-item-description {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .project-item-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.25rem;
        }

        .project-item-tag {
          font-size: 0.775rem;
          font-family: var(--font-mono);
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid var(--border-subtle);
          padding: 0.22rem 0.6rem;
          border-radius: var(--radius-sm);
          white-space: nowrap !important;
        }

        .project-item-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
          margin-top: auto;
        }

        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-main);
          font-size: 0.825rem;
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .btn-github {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          border: 1px solid var(--border-subtle);
        }

        .btn-github:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .btn-site {
          background: rgba(99, 102, 241, 0.1);
          color: #a5b4fc;
          border: 1px solid rgba(99, 102, 241, 0.25);
        }

        .btn-site:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.4);
          color: #ffffff;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
