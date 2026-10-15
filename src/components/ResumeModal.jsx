import React from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  MapPin, 
  Phone,
  Globe,
  ExternalLink
} from 'lucide-react';
import { profile } from '../data/portfolioData';
import './ResumeModal.css';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Top Control Bar */}
        <div className="resume-controls-bar">
          <span className="resume-controls-title">Curriculum Vitae — {profile.name}</span>
          <div className="resume-controls-actions">
            <button type="button" className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.8125rem' }} onClick={handlePrint}>
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button type="button" className="theme-btn" onClick={onClose} aria-label="Close Resume">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="resume-document" id="printable-resume">
          
          {/* Header */}
          <header className="resume-header">
            <h1 className="resume-name">{profile.name}</h1>
            <p className="resume-title">SOFTWARE ENGINEER &nbsp;•&nbsp; FULL STACK DEVELOPER</p>
            <div className="resume-contact-row">
              <span><MapPin size={13} /> {profile.location}</span>
              <span><Phone size={13} /> {profile.phone}</span>
              <span><Mail size={13} /> {profile.email}</span>
              <span><Globe size={13} /> github.com/mrkrishna20</span>
            </div>
          </header>

          {/* Profile */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">Profile</h2>
            <ul className="resume-bullet-list">
              <li>3+ Years of experience in Full Stack Development (React.js, Node.js, Java &amp; Ruby on Rails).</li>
              <li>Skilled in advanced web development, mobile development, UI design, testing, and debugging applications. Adept at self-management and collaborative work in team settings.</li>
              <li>Possesses working knowledge of Java, Python, React Native, and Angular.</li>
            </ul>

            <div style={{ marginTop: '12px' }}>
              <strong style={{ fontSize: '0.875rem', color: '#0F172A', display: 'block', marginBottom: '6px' }}>Core Responsibilities &amp; Impact:</strong>
              <ul className="resume-bullet-list">
                {profile.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>{resp}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">Technical Skills</h2>
            <div className="resume-skills-block">
              <div className="resume-skill-row">
                <strong>Frontend:</strong> {profile.skills.frontend.join(", ")}
              </div>
              <div className="resume-skill-row">
                <strong>Backend:</strong> {profile.skills.backend.join(", ")}
              </div>
              <div className="resume-skill-row">
                <strong>Databases:</strong> {profile.skills.databases.join(", ")}
              </div>
              <div className="resume-skill-row">
                <strong>Tools &amp; Cloud:</strong> {profile.skills.devops.join(", ")}
              </div>
            </div>
          </section>

          {/* Employment History */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">Employment History</h2>
            <div className="resume-exp-list">
              {profile.experience.map((item, idx) => (
                <div key={idx} className="resume-exp-entry">
                  <div className="resume-exp-heading">
                    <div className="exp-role-co">
                      <strong>{item.role}</strong>, <span className="exp-company">{item.company}</span>
                    </div>
                    <span className="exp-period">{item.location} &nbsp;|&nbsp; {item.period}</span>
                  </div>
                  <ul className="resume-bullet-list">
                    {item.points.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">Featured Projects</h2>
            <div className="resume-exp-list">
              {profile.projects.map((proj, idx) => (
                <div key={idx} className="resume-exp-entry">
                  <div className="resume-exp-heading">
                    <div className="exp-role-co">
                      <strong>{proj.title}</strong>
                      {proj.live && proj.live.includes('vercel.app') && (
                        <span style={{ fontSize: '0.8rem', marginLeft: '8px', color: '#0284C7' }}>
                          (Link: {proj.live.replace('https://', '')})
                        </span>
                      )}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '6px' }}>{proj.description}</p>
                  {proj.highlights && (
                    <ul className="resume-bullet-list">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">Education</h2>
            <div className="resume-edu-item">
              <div className="edu-top">
                <strong>{profile.education[0].degree}</strong>
                <span className="exp-period">{profile.education[0].period}</span>
              </div>
              <p className="edu-sub">{profile.education[0].institution}</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
