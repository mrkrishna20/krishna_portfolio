import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Globe, 
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Full-time Senior Full Stack',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Channel</span>
          </div>
          <h2 className="section-title">Let's Build Something High-Scale</h2>
          <p className="section-subtitle">
            Whether you have a full-time engineering role, an enterprise Rails/Node system to scale, 
            or need high-velocity React frontend development, my inbox is open.
          </p>
        </div>

        {/* Contact Container */}
        <div className="contact-grid">
          
          {/* Left Info Column */}
          <div className="contact-info-col">
            
            <div className="contact-card glass-card">
              <span className="contact-card-tag">Availability</span>
              <h3 className="contact-card-title">{personalInfo.status}</h3>
              <p className="contact-card-desc">
                Actively interviewing for senior and lead software engineering positions. 
                Equipped for remote, hybrid, or on-site roles.
              </p>

              <div className="contact-details-list">
                <div className="detail-row">
                  <div className="detail-icon-wrap"><Mail size={16} /></div>
                  <div className="detail-text-wrap">
                    <span className="detail-lbl">Email Address</span>
                    <span className="detail-val">{personalInfo.email}</span>
                  </div>
                  <button 
                    type="button" 
                    className="copy-mini-btn"
                    onClick={handleCopy}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="detail-row">
                  <div className="detail-icon-wrap"><MapPin size={16} /></div>
                  <div className="detail-text-wrap">
                    <span className="detail-lbl">Current Location</span>
                    <span className="detail-val">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon-wrap"><Clock size={16} /></div>
                  <div className="detail-text-wrap">
                    <span className="detail-lbl">Timezone &amp; Overlap</span>
                    <span className="detail-val">IST (UTC+5:30) • Flexible for US &amp; EU Sync</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social-bar">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <Github size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <Linkedin size={18} />
                </a>
                <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <Twitter size={18} />
                </a>
              </div>

            </div>

          </div>

          {/* Right Form Column */}
          <div className="contact-form-col">
            <div className="glass-card form-card">
              
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-bubble">
                    <CheckCircle2 size={40} color="#10B981" />
                  </div>
                  <h3>Message Dispatched!</h3>
                  <p>
                    Thank you for reaching out. A confirmation has been registered, 
                    and I will get back to you within 24 hours.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        opportunityType: 'Full-time Senior Full Stack',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="e.g. Alex Henderson" 
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Your Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="alex@company.com" 
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="opportunityType" className="form-label">Opportunity / Inquiry Type</label>
                    <select 
                      id="opportunityType" 
                      className="form-input form-select"
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                    >
                      <option value="Full-time Senior Full Stack">Full-time Senior Full Stack Role</option>
                      <option value="Ruby on Rails & React Lead">Ruby on Rails &amp; React Specialist</option>
                      <option value="Node.js Microservices Architect">Node.js Microservices Architect</option>
                      <option value="Contract / Architecture Consultation">Contract / Architecture Consultation</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message Details</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required 
                      placeholder="Tell me about your tech stack, role requirements, or project goals..." 
                      className="form-input form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
