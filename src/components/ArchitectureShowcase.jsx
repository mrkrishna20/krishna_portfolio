import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Database, 
  Flame, 
  Atom, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Activity,
  Server,
  Zap
} from 'lucide-react';
import { architectureComponents } from '../data/portfolioData';
import './ArchitectureShowcase.css';

export default function ArchitectureShowcase() {
  const [selectedId, setSelectedId] = useState('rails-core');

  const selectedComponent = architectureComponents.find(c => c.id === selectedId) || architectureComponents[0];

  const getNodeIcon = (id) => {
    switch (id) {
      case 'react-client': return <Atom size={22} color="#06B6D4" />;
      case 'rails-core': return <Layers size={22} color="#E11D48" />;
      case 'node-gateway': return <Server size={22} color="#10B981" />;
      case 'sidekiq-redis': return <Flame size={22} color="#F59E0B" />;
      case 'postgres-db': return <Database size={22} color="#8B5CF6" />;
      default: return <Cpu size={22} />;
    }
  };

  return (
    <section id="architecture" className="arch-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Full-Stack System Design</span>
          </div>
          <h2 className="section-title">The Polyglot Architecture</h2>
          <p className="section-subtitle">
            How I architect production systems: separating high-throughput streaming (Node.js) 
            from complex domain modeling &amp; transactions (Ruby on Rails), unified under a reactive frontend (React).
          </p>
        </div>

        {/* Architecture Interactive Container */}
        <div className="arch-interactive-wrapper">
          
          {/* Visual Architecture Map Column */}
          <div className="arch-map-container glass-card">
            
            <div className="arch-map-header">
              <span className="arch-map-badge">Interactive Topology</span>
              <span className="arch-hint">Click any tier to inspect code &amp; design patterns</span>
            </div>

            <div className="arch-nodes-grid">
              
              {/* Frontend Node */}
              <div 
                className={`arch-node-box node-react ${selectedId === 'react-client' ? 'active' : ''}`}
                onClick={() => setSelectedId('react-client')}
              >
                <div className="node-icon-bubble">{getNodeIcon('react-client')}</div>
                <div className="node-info">
                  <span className="node-tag">Client Tier</span>
                  <h3 className="node-title">React 19 SPA</h3>
                  <span className="node-sub">Vite • State • Optimistic UI</span>
                </div>
                <div className="node-status-chip">UI Layer</div>
              </div>

              {/* Data Flow Connector 1 */}
              <div className="arch-connector-v">
                <span className="flow-line"></span>
                <span className="flow-tag">HTTPS / WSS Gateway</span>
              </div>

              {/* Backend Split: Rails & Node */}
              <div className="arch-backend-cluster">
                
                {/* Rails API Node */}
                <div 
                  className={`arch-node-box node-rails ${selectedId === 'rails-core' ? 'active' : ''}`}
                  onClick={() => setSelectedId('rails-core')}
                >
                  <div className="node-icon-bubble">{getNodeIcon('rails-core')}</div>
                  <div className="node-info">
                    <span className="node-tag">Transactional Core</span>
                    <h3 className="node-title">Ruby on Rails 7 API</h3>
                    <span className="node-sub">ActiveRecord • Devise • RSpec</span>
                  </div>
                  <div className="node-status-chip rails-chip">ACID Core</div>
                </div>

                {/* Node Ingestion Node */}
                <div 
                  className={`arch-node-box node-node ${selectedId === 'node-gateway' ? 'active' : ''}`}
                  onClick={() => setSelectedId('node-gateway')}
                >
                  <div className="node-icon-bubble">{getNodeIcon('node-gateway')}</div>
                  <div className="node-info">
                    <span className="node-tag">Real-Time Ingest</span>
                    <h3 className="node-title">Node.js Microservices</h3>
                    <span className="node-sub">Fastify • Socket.io • Streams</span>
                  </div>
                  <div className="node-status-chip node-chip">25k+ Req/s</div>
                </div>

              </div>

              {/* Data Flow Connector 2 */}
              <div className="arch-connector-v">
                <span className="flow-line"></span>
                <span className="flow-tag">Pub/Sub &amp; Asynchronous Pipeline</span>
              </div>

              {/* Background & Storage Cluster */}
              <div className="arch-backend-cluster">
                
                {/* Sidekiq Node */}
                <div 
                  className={`arch-node-box node-sidekiq ${selectedId === 'sidekiq-redis' ? 'active' : ''}`}
                  onClick={() => setSelectedId('sidekiq-redis')}
                >
                  <div className="node-icon-bubble">{getNodeIcon('sidekiq-redis')}</div>
                  <div className="node-info">
                    <span className="node-tag">Asynchronous Workers</span>
                    <h3 className="node-title">Sidekiq &amp; Redis</h3>
                    <span className="node-sub">2.4M Jobs/day • Retries</span>
                  </div>
                  <div className="node-status-chip sidekiq-chip">Background Queue</div>
                </div>

                {/* Database Node */}
                <div 
                  className={`arch-node-box node-postgres ${selectedId === 'postgres-db' ? 'active' : ''}`}
                  onClick={() => setSelectedId('postgres-db')}
                >
                  <div className="node-icon-bubble">{getNodeIcon('postgres-db')}</div>
                  <div className="node-info">
                    <span className="node-tag">Primary Datastore</span>
                    <h3 className="node-title">PostgreSQL &amp; Redis</h3>
                    <span className="node-sub">PgBouncer • Partitioning</span>
                  </div>
                  <div className="node-status-chip postgres-chip">Sub-ms Cache</div>
                </div>

              </div>

            </div>

          </div>

          {/* Deep-Dive Inspection Panel */}
          <div className="arch-detail-panel glass-card">
            
            <div className="detail-panel-top">
              <div className="detail-header-left">
                <div 
                  className="detail-indicator-badge"
                  style={{ backgroundColor: `${selectedComponent.color}20`, borderColor: selectedComponent.color, color: selectedComponent.color }}
                >
                  {selectedComponent.layer}
                </div>
                <h3 className="detail-title">{selectedComponent.title}</h3>
                <span className="detail-tech-badge">{selectedComponent.tech}</span>
              </div>
            </div>

            <div className="detail-role-box">
              <h4 className="detail-label">Tier Responsibility &amp; Design Rationale</h4>
              <p className="detail-desc">{selectedComponent.role}</p>
            </div>

            <div className="detail-metric-strip">
              <Activity size={16} color={selectedComponent.color} />
              <span className="metric-text">{selectedComponent.metrics}</span>
            </div>

            <div className="detail-code-preview">
              <div className="detail-code-header">
                <div className="code-header-left">
                  <Code2 size={14} />
                  <span>Production Implementation Pattern</span>
                </div>
                <span className="code-tech-tag" style={{ color: selectedComponent.color }}>Live Snapshot</span>
              </div>
              <pre className="detail-code-block">
                <code>{selectedComponent.codeSample}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
