import React from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Database, 
  CheckCircle2, 
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-badge">{project.architectureHighlight}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          
          {/* Main Visual */}
          <div className="modal-image-wrapper">
            <img src={project.image} alt={project.title} className="modal-image" />
            <div className="modal-image-overlay">
              <span className="image-caption">High-Scale Production UI Architecture</span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="modal-metrics-strip">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="modal-metric-card">
                <span className="modal-metric-val">{m.value}</span>
                <span className="modal-metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="modal-section">
            <h3 className="modal-section-title">Project Architectural Overview</h3>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Tech Stack Pills */}
          <div className="modal-section">
            <h3 className="modal-section-title">Applied Technology Stack</h3>
            <div className="modal-tech-pills">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-pill pill-react">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div className="modal-section">
            <h3 className="modal-section-title">Key Engineering Challenges Solved</h3>
            <div className="modal-feature-list">
              {project.features.map((feature, idx) => (
                <div key={idx} className="modal-feature-item">
                  <CheckCircle2 size={18} color="#10B981" className="feature-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <GithubIcon size={16} />
            <span>Repository</span>
          </a>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            <ExternalLink size={16} />
            <span>Explore Demo</span>
          </a>
        </div>

      </div>
    </div>
  );
}
