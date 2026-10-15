import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextMode = !lightMode;
    setLightMode(nextMode);
    if (nextMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  const navLinks = [
    { name: 'Overview', href: '#hero', icon: Terminal },
    { name: 'Architecture', href: '#architecture', icon: Layers },
    { name: 'Tech Stack', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Playground', href: '#playground', icon: Sparkles },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="brand-logo">
          <div className="brand-icon-wrapper">
            <span className="brand-dot dot-rails"></span>
            <span className="brand-dot dot-react"></span>
            <span className="brand-dot dot-node"></span>
          </div>
          <span className="brand-name">{personalInfo.name}</span>
          <span className="brand-tag">.dev</span>
        </a>

        {/* Live Status Indicator */}
        <div className="status-badge hide-mobile">
          <span className="status-dot pulse-indicator"></span>
          <span className="status-text">Open for Roles</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu hide-mobile">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link"
              >
                <Icon size={15} className="nav-icon" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title="Toggle Light/Dark Theme"
          >
            {lightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button 
            type="button" 
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm resume-btn hide-mobile"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a 
            href="#contact" 
            className="btn btn-primary btn-sm cta-btn hide-mobile"
          >
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            className="mobile-toggle-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <div className="mobile-status-badge">
            <span className="status-dot pulse-indicator"></span>
            <span className="status-text">{personalInfo.status}</span>
          </div>
          <div className="mobile-nav-links">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
          <div className="mobile-actions">
            <button 
              type="button" 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%' }}
            >
              <FileText size={16} />
              <span>View Full Resume</span>
            </button>
            <a 
              href="#contact" 
              className="btn btn-primary btn-sm" 
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
