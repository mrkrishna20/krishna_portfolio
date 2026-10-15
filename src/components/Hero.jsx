import React, { useState } from 'react';
import { 
  Terminal as TerminalIcon, 
  ArrowRight, 
  Sparkles, 
  Database, 
  Layers, 
  Zap, 
  Play, 
  CheckCircle2, 
  Copy, 
  Check,
  ExternalLink
} from 'lucide-react';
import { personalInfo, techPillars } from '../data/portfolioData';
import './Hero.css';

export default function Hero({ onOpenResume }) {
  const [activeConsoleTab, setActiveConsoleTab] = useState('rails');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const consoleTabs = {
    rails: {
      label: 'rails c',
      command: 'Rails.application.benchmark_active_record()',
      output: [
        '⚡ [ActiveRecord] Tenant: EnterpriseOrg_410',
        '📊 [Query] SELECT "orders".* FROM "orders" WHERE "status" = $1 LIMIT 50',
        '⏱️ Execution Time: 4.8ms | Allocated: 1,420 objects',
        '🚀 Sidekiq: 24 active workers processing :critical queue'
      ]
    },
    node: {
      label: 'node stream.js',
      command: 'telemetryGateway.listen({ port: 4000, cluster: true })',
      output: [
        '⚡ [Cluster] Forked 8 worker threads on Node v24.19',
        '📡 [Socket.io] 4,120 clients connected across Redis Pub/Sub',
        '🔄 Stream Throughput: 14,800 events/sec',
        '⏱️ Event Loop Delay: 0.82ms | Memory RSS: 114 MB'
      ]
    },
    react: {
      label: 'react-profiler',
      command: '<AppProvider><DashboardView /></AppProvider>',
      output: [
        '⚛️ [React 19] Concurrent hydration complete in 38ms',
        '📦 [TanStack Query] 14 cache keys preloaded, 0 stale queries',
        '🎨 Core Web Vitals: LCP 0.65s, FID 4ms, CLS 0.001',
        '✨ Optimistic UI updates rendered at 60 FPS'
      ]
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Main Content Column */}
        <div className="hero-text-content">
          
          {/* Tech Specialty Pill */}
          <div className="hero-badge">
            <span className="badge-sparkle"><Sparkles size={14} /></span>
            <span>Node.js • React.js • Ruby on Rails Specialist</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Architecting <span className="gradient-text-rails">high-scale backends</span> &amp; <span className="gradient-text-react">reactive web apps</span>.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            I bridge the gap between <strong>Ruby on Rails</strong> transactional domain models, 
            high-concurrency <strong>Node.js</strong> event microservices, and slick, performant <strong>React</strong> user interfaces.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <a href="#architecture" className="btn btn-secondary">
              <Layers size={18} />
              <span>Full-Stack Architecture</span>
            </a>

            <button 
              type="button" 
              onClick={copyEmail}
              className="btn btn-secondary email-copy-btn"
              title="Click to copy email address"
            >
              {copiedEmail ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
              <span>{copiedEmail ? 'Email Copied!' : personalInfo.email}</span>
            </button>
          </div>

          {/* Tech Pillars Pills */}
          <div className="tech-pillar-cards">
            {techPillars.map((pillar) => (
              <div 
                key={pillar.id} 
                className="pillar-item"
                style={{ '--pillar-color': pillar.color, '--pillar-border': pillar.borderColor }}
              >
                <div className="pillar-header">
                  <span className="pillar-badge" style={{ color: pillar.color }}>{pillar.badge}</span>
                  <span className="pillar-years">{pillar.experienceYears}</span>
                </div>
                <h2 className="pillar-title">{pillar.name}</h2>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Interactive Console / Live Metrics Column */}
        <div className="hero-interactive-column">
          <div className="glass-card terminal-card">
            
            {/* Terminal Top Bar */}
            <div className="terminal-header">
              <div className="terminal-window-buttons">
                <span className="win-btn close"></span>
                <span className="win-btn min"></span>
                <span className="win-btn max"></span>
              </div>
              <div className="terminal-title">
                <TerminalIcon size={14} />
                <span>krishna@fullstack-cluster:~</span>
              </div>
              <div className="terminal-status">
                <span className="pulse-indicator status-dot-sm"></span>
                <span>Active</span>
              </div>
            </div>

            {/* Terminal Switcher Tabs */}
            <div className="terminal-tabs">
              {Object.keys(consoleTabs).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`terminal-tab-btn ${activeConsoleTab === key ? 'active' : ''}`}
                  onClick={() => setActiveConsoleTab(key)}
                >
                  {consoleTabs[key].label}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              <div className="terminal-prompt-line">
                <span className="prompt-symbol">$</span>
                <span className="prompt-cmd">{consoleTabs[activeConsoleTab].command}</span>
              </div>

              <div className="terminal-output-stream">
                {consoleTabs[activeConsoleTab].output.map((line, idx) => (
                  <div key={idx} className="terminal-output-line">
                    {line}
                  </div>
                ))}
              </div>

              <div className="terminal-cursor-line">
                <span className="prompt-symbol">$</span>
                <span className="blinking-cursor">_</span>
              </div>
            </div>

            {/* Terminal Footer Quick Stats */}
            <div className="terminal-footer">
              <div className="terminal-stat-item">
                <span className="stat-label">Rails API</span>
                <span className="stat-value val-rails">Sub-45ms P95</span>
              </div>
              <div className="terminal-stat-divider"></div>
              <div className="terminal-stat-item">
                <span className="stat-label">Node Concurrency</span>
                <span className="stat-value val-node">25k+ Req/s</span>
              </div>
              <div className="terminal-stat-divider"></div>
              <div className="terminal-stat-item">
                <span className="stat-label">React FPS</span>
                <span className="stat-value val-react">60 FPS Smooth</span>
              </div>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="metric-box glass-card">
                <div className="metric-number">{stat.value}</div>
                <div className="metric-label">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
