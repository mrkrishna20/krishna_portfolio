import React, { useState } from 'react';
import {
  Mail,
  FileText,
  Printer,
  Globe,
  ExternalLink,
  Copy,
  Check,
  MapPin,
  Phone,
  Sun,
  Moon,
  ArrowUpRight,
  Server,
  Code2,
  Database,
  Cloud
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';
import { profile } from './data/portfolioData';
import './components/ResumeModal.css';
import './App.css';

export default function App() {
  const [lightMode, setLightMode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleTheme = () => {
    const next = !lightMode;
    setLightMode(next);
    if (next) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="portfolio-root">

      {/* Sticky Navigation */}
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="#" className="nav-brand">
            <span className="nav-brand-dot"></span>
            <span>{profile.name}</span>
          </a>

          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title="Toggle theme"
            >
              {lightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="container">

        {/* Hero / Profile Intro */}
        <header className="hero-section">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>{profile.status}</span>
          </div>

          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">
            {profile.title} &nbsp;•&nbsp; <span>{profile.specialization}</span>
          </p>

          <p className="hero-meta-strip" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
            📍 {profile.location}
          </p>

          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            {/* <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail size={16} />
              <span>Get in touch</span>
            </a> */}

            <a href="#resume" className="btn btn-primary">View Resume</a>

            <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-outline" title="Call directly">
              <Phone size={16} />
              <span>{profile.phone}</span>
            </a>

            <button type="button" onClick={copyEmail} className="btn btn-outline">
              {copiedEmail ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
              <span>{copiedEmail ? 'Email Copied' : profile.email}</span>
            </button>

            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-social" title="LinkedIn Profile">
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-social" title="GitHub Profile">
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="section">
          <div className="section-title-wrap">
            <span className="section-label">Background</span>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-text">
            {profile.about.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="section">
          <div className="section-title-wrap">
            <span className="section-label">Capabilities</span>
            <h2 className="section-title">Technical Expertise</h2>
          </div>

          <div className="skills-grid">

            {/* Backend Skills */}
            <div className="skill-category-card">
              <h3 className="skill-category-title">
                <Server size={16} color="#FB7185" />
                <span>Backend Engineering</span>
              </h3>
              <div className="skill-pills-wrap">
                {profile.skills.backend.map((s, i) => (
                  <span key={i} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Frontend Skills */}
            <div className="skill-category-card">
              <h3 className="skill-category-title">
                <Code2 size={16} color="#38BDF8" />
                <span>Frontend Development</span>
              </h3>
              <div className="skill-pills-wrap">
                {profile.skills.frontend.map((s, i) => (
                  <span key={i} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Databases & Caching */}
            <div className="skill-category-card">
              <h3 className="skill-category-title">
                <Database size={16} color="#8B5CF6" />
                <span>Databases &amp; Caching</span>
              </h3>
              <div className="skill-pills-wrap">
                {profile.skills.databases.map((s, i) => (
                  <span key={i} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="skill-category-card">
              <h3 className="skill-category-title">
                <Cloud size={16} color="#10B981" />
                <span>DevOps &amp; Infrastructure</span>
              </h3>
              <div className="skill-pills-wrap">
                {profile.skills.devops.map((s, i) => (
                  <span key={i} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="section">
          <div className="section-title-wrap">
            <span className="section-label">Career</span>
            <h2 className="section-title">Work Experience</h2>
          </div>

          <div className="experience-list">
            {profile.experience.map((exp, idx) => (
              <div key={idx} className="experience-item">
                <div className="experience-header">
                  <div className="experience-role-group">
                    <span className="experience-role">{exp.role}</span>
                    <span className="experience-company">@ {exp.company}</span>
                  </div>
                  <span className="experience-meta">{exp.period} &nbsp;•&nbsp; {exp.location}</span>
                </div>

                <ul className="experience-bullets">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <div className="experience-tech-row">
                  {exp.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="section">
          <div className="section-title-wrap">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="projects-list">
            {profile.projects.map((proj, idx) => (
              <div key={idx} className="project-card-clean">
                <div className="project-top">
                  <div>
                    <h3 className="project-title-clean">{proj.title}</h3>
                    <p className="project-tagline">{proj.tagline}</p>
                  </div>

                  <div className="project-links">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="project-link-btn">
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                    <a href={proj.live} target="_blank" rel="noreferrer" className="project-link-btn">
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>

                <p className="project-desc-clean">{proj.description}</p>

                {proj.highlights && (
                  <ul className="project-bullet-list" style={{ marginLeft: '18px', fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="project-tech-tags">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section">
          <div className="section-title-wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-label">Curriculum Vitae</span>
              <h2 className="section-title">Resume</h2>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.print()}
              title="Print or save as PDF"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <div className="resume-document" id="printable-resume" style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>

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
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="contact-clean-box">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-text">
              I am currently open to full-time engineering opportunities, contract roles, and technical discussions.
              Drop me an email and let's talk.
            </p>

            <div className="contact-buttons-row">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={16} />
                <span>Send Email</span>
              </a>

              <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-outline" title="Call directly">
                <Phone size={16} />
                <span>{profile.phone}</span>
              </a>

              <button type="button" onClick={copyEmail} className="btn btn-outline">
                {copiedEmail ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>

              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div>
            © {new Date().getFullYear()} {profile.name} — Full Stack Software Engineer
          </div>
          <div className="footer-social-links">
            <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}>{profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </footer>

      </main>

    </div>
  );
}
