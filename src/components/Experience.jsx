import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Award
} from 'lucide-react';
import { careerTimeline } from '../data/portfolioData';
import './Experience.css';

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Track record of designing, shipping, and scaling high-performance web applications 
            with measured engineering impact.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          {careerTimeline.map((job, idx) => (
            <div key={idx} className="timeline-item">
              
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className="marker-dot pulse-indicator"></div>
                <div className="marker-line"></div>
              </div>

              {/* Timeline Card */}
              <div className="timeline-card glass-card">
                
                <div className="job-card-header">
                  <div className="job-title-group">
                    <h3 className="job-role">{job.role}</h3>
                    <span className="job-company">{job.company}</span>
                  </div>
                  <div className="job-meta">
                    <span className="job-period">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                    <span className="job-location">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="job-highlights">
                  {job.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="job-point">
                      <CheckCircle2 size={16} color="#10B981" className="point-icon" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="job-tech-pills">
                  {job.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="tech-pill pill-node">
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Resume Banner */}
        <div className="resume-cta-banner glass-card">
          <div className="banner-left">
            <Award size={28} color="#38BDF8" />
            <div>
              <h4 className="banner-title">Looking for the complete background and references?</h4>
              <p className="banner-subtitle">View education details, publications, and full technical breakdown.</p>
            </div>
          </div>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onOpenResume}
          >
            <FileText size={16} />
            <span>Open Interactive CV</span>
          </button>
        </div>

      </div>
    </section>
  );
}
