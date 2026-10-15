import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  Activity
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">Production Full-Stack Projects</h2>
          <p className="section-subtitle">
            Engineered with deep focus on multi-tenancy, background job scalability, 
            low-latency data sync, and delightful reactive user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              
              {/* Image Preview Container */}
              <div 
                className="project-image-box"
                onClick={() => setActiveModalProject(project)}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-image-badge">
                  <span>{project.architectureHighlight}</span>
                </div>
                <div className="project-hover-overlay">
                  <span className="btn btn-secondary btn-sm overlay-btn">
                    <span>Inspect Case Study</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-content">
                
                <div className="project-top-row">
                  <h3 className="project-title" onClick={() => setActiveModalProject(project)}>
                    {project.title}
                  </h3>
                </div>

                <p className="project-subtitle-text">{project.subtitle}</p>

                <p className="project-desc">{project.description}</p>

                {/* Key Metrics Strip */}
                <div className="project-metrics-row">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="project-metric-pill">
                      <span className="metric-val">{m.value}</span>
                      <span className="metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="project-tech-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill pill-react">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <span>Architecture Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-icon-link"
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={18} />
                  </a>

                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-icon-link"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />
      )}
    </section>
  );
}
