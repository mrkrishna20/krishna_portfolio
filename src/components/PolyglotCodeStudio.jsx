import React, { useState } from 'react';
import { 
  Code2, 
  Copy, 
  Check, 
  Terminal, 
  FileCode, 
  Sparkles,
  Layers,
  Server,
  Atom
} from 'lucide-react';
import { polyglotSnippets } from '../data/portfolioData';
import './PolyglotCodeStudio.css';

export default function PolyglotCodeStudio() {
  const [activeTab, setActiveTab] = useState('rails');
  const [copied, setCopied] = useState(false);

  const snippet = polyglotSnippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTabIcon = (tabKey) => {
    switch (tabKey) {
      case 'rails': return <Layers size={16} color="#FB7185" />;
      case 'node': return <Server size={16} color="#34D399" />;
      case 'react': return <Atom size={16} color="#38BDF8" />;
      default: return <Code2 size={16} />;
    }
  };

  const lines = snippet.code.split('\n');

  return (
    <section id="code-studio" className="code-studio-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Clean Code &amp; Idiomatic Patterns</span>
          </div>
          <h2 className="section-title">The Polyglot Code Studio</h2>
          <p className="section-subtitle">
            Inspect real production-grade code snippets illustrating how I write transactional Rails services, 
            high-throughput Node.js microservices, and reactive React hooks.
          </p>
        </div>

        {/* Code Studio Container */}
        <div className="studio-card glass-card">
          
          {/* Header Bar with Tabs */}
          <div className="studio-header">
            
            <div className="studio-tabs">
              <button
                type="button"
                className={`studio-tab ${activeTab === 'rails' ? 'active tab-rails' : ''}`}
                onClick={() => setActiveTab('rails')}
              >
                {getTabIcon('rails')}
                <span>Ruby on Rails (Service &amp; Worker)</span>
              </button>

              <button
                type="button"
                className={`studio-tab ${activeTab === 'node' ? 'active tab-node' : ''}`}
                onClick={() => setActiveTab('node')}
              >
                {getTabIcon('node')}
                <span>Node.js (Real-Time Streams)</span>
              </button>

              <button
                type="button"
                className={`studio-tab ${activeTab === 'react' ? 'active tab-react' : ''}`}
                onClick={() => setActiveTab('react')}
              >
                {getTabIcon('react')}
                <span>React.js (Optimistic UI Hook)</span>
              </button>
            </div>

            <div className="studio-actions">
              <span className="studio-lang-badge">{snippet.badge}</span>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm copy-code-btn"
                onClick={handleCopy}
                title="Copy code to clipboard"
              >
                {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

          </div>

          {/* Description banner */}
          <div className="studio-desc-banner">
            <Sparkles size={16} className="studio-sparkle" />
            <p>{snippet.description}</p>
          </div>

          {/* Code Viewer Body */}
          <div className="studio-editor">
            <div className="editor-line-numbers" aria-hidden="true">
              {lines.map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>

            <pre className="editor-code">
              <code>{snippet.code}</code>
            </pre>
          </div>

          {/* Footer Highlights */}
          <div className="studio-footer">
            <div className="footer-feature">
              <span className="feature-dot dot-green"></span>
              <span>100% Type &amp; Boundary Safe</span>
            </div>
            <div className="footer-feature">
              <span className="feature-dot dot-blue"></span>
              <span>Non-Blocking &amp; Concurrency-Aware</span>
            </div>
            <div className="footer-feature">
              <span className="feature-dot dot-purple"></span>
              <span>RSpec / Jest Test Covered</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
