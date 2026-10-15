import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Terminal, 
  Layers, 
  Atom, 
  Server,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        
        {/* Brand & Mission */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="brand-icon-wrapper">
                <span className="brand-dot dot-rails"></span>
                <span className="brand-dot dot-react"></span>
                <span className="brand-dot dot-node"></span>
              </div>
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-tag">.dev</span>
            </div>
            <p className="footer-mission">
              Full Stack Software Engineer specializing in Ruby on Rails, Node.js, and React.js.
              Crafting reliable distributed systems, clean domain models, and fluid user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <span className="footer-group-title">Navigation</span>
            <a href="#hero">Overview</a>
            <a href="#architecture">Architecture</a>
            <a href="#skills">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#playground">API Sandbox</a>
          </div>

          <div className="footer-links-group">
            <span className="footer-group-title">Specialties</span>
            <span>Ruby on Rails 7 API</span>
            <span>Node.js Microservices</span>
            <span>React 19 &amp; Optimistic UI</span>
            <span>Sidekiq &amp; Redis Queues</span>
            <span>PostgreSQL Query Tuning</span>
          </div>

          {/* Connect */}
          <div className="footer-links-group">
            <span className="footer-group-title">Connect</span>
            <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer">Twitter / X</a>
            <a href={`mailto:${personalInfo.email}`}>Direct Mail</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Built with React 19 &amp; Modern Vanilla CSS.</span>
          </div>

          <button 
            type="button" 
            className="back-to-top-btn" 
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
