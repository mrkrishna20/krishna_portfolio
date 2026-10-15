import React, { useState } from 'react';
import { 
  Cpu, 
  Server, 
  Database, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Atom, 
  Flame, 
  Box, 
  GitBranch, 
  Cloud, 
  Palette, 
  Zap, 
  Gem,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './TechStack.css';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend (Rails & Node)' },
    { id: 'frontend', label: 'Frontend (React)' },
    { id: 'database', label: 'Data & Caching' },
    { id: 'devops', label: 'DevOps & Cloud' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Gem': return <Gem size={20} color="#FB7185" />;
      case 'Layers': return <Layers size={20} color="#F59E0B" />;
      case 'CheckCircle2': return <CheckCircle2 size={20} color="#10B981" />;
      case 'Server': return <Server size={20} color="#34D399" />;
      case 'Cpu': return <Cpu size={20} color="#38BDF8" />;
      case 'Zap': return <Zap size={20} color="#FBBF24" />;
      case 'Atom': return <Atom size={20} color="#06B6D4" />;
      case 'Code2': return <Code2 size={20} color="#38BDF8" />;
      case 'Database': return <Database size={20} color="#8B5CF6" />;
      case 'Palette': return <Palette size={20} color="#EC4899" />;
      case 'Flame': return <Flame size={20} color="#EF4444" />;
      case 'Box': return <Box size={20} color="#38BDF8" />;
      case 'GitBranch': return <GitBranch size={20} color="#F97316" />;
      case 'Cloud': return <Cloud size={20} color="#60A5FA" />;
      default: return <Cpu size={20} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Core Technology Matrix</h2>
          <p className="section-subtitle">
            Curated skills honed across high-traffic production environments, focusing on speed, 
            scalability, data integrity, and engineering ergonomics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Skill Cards */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              
              <div className="skill-card-top">
                <div className="skill-icon-bubble">
                  {getIcon(skill.icon)}
                </div>
                <div className="skill-level-badge">
                  <span>{skill.level}%</span>
                </div>
              </div>

              <h3 className="skill-name">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="skill-progress-track">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="skill-highlight">
                <span className="highlight-tag">Production Use:</span>
                <p className="highlight-text">{skill.highlight}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="philosophy-strip glass-card">
          <div className="philo-item">
            <CheckCircle2 size={20} color="#10B981" />
            <div className="philo-content">
              <h4>Test-Driven Reliability</h4>
              <p>RSpec, Jest, &amp; integration suites testing edge cases before shipping to production.</p>
            </div>
          </div>

          <div className="philo-divider"></div>

          <div className="philo-item">
            <Zap size={20} color="#06B6D4" />
            <div className="philo-content">
              <h4>Zero-Lag UI &amp; State</h4>
              <p>Optimistic React updates with resilient client cache &amp; server reconciliation.</p>
            </div>
          </div>

          <div className="philo-divider"></div>

          <div className="philo-item">
            <Database size={20} color="#E11D48" />
            <div className="philo-content">
              <h4>Strict ACID &amp; Indexing</h4>
              <p>PostgreSQL schema design with EXPLAIN ANALYZE verification to avoid N+1 queries.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
