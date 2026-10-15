import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  Server, 
  Layers, 
  Database,
  Terminal,
  Activity
} from 'lucide-react';
import { mockEndpoints } from '../data/portfolioData';
import './ApiPlayground.css';

export default function ApiPlayground() {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [responseTime, setResponseTime] = useState(null);

  const currentEndpoint = mockEndpoints[selectedEndpointIndex];

  const handleSendRequest = () => {
    setIsLoading(true);
    setResponse(null);
    setResponseTime(null);

    // Simulate realistic network roundtrip + processing
    const latency = Math.floor(Math.random() * 25) + 18; // 18ms - 43ms

    setTimeout(() => {
      setIsLoading(false);
      setResponseTime(latency);
      setResponse({
        ...currentEndpoint.mockResponse,
        body: {
          ...currentEndpoint.mockResponse.body,
          executed_at: new Date().toISOString(),
          request_id: `req_${Math.random().toString(36).substring(2, 9)}`
        }
      });
    }, 450);
  };

  return (
    <section id="playground" className="playground-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive Backend Sandbox</span>
          </div>
          <h2 className="section-title">Live API Playground</h2>
          <p className="section-subtitle">
            Don't just take my word for it. Fire simulated requests to the Ruby on Rails transactional engine 
            or the Node.js streaming gateway and examine real-time response latency.
          </p>
        </div>

        {/* Playground Container */}
        <div className="playground-card glass-card">
          
          {/* Endpoint Selector Tabs */}
          <div className="endpoint-selector-tabs">
            {mockEndpoints.map((ep, idx) => (
              <button
                key={idx}
                type="button"
                className={`endpoint-tab-btn ${selectedEndpointIndex === idx ? 'active' : ''}`}
                onClick={() => {
                  setSelectedEndpointIndex(idx);
                  setResponse(null);
                  setResponseTime(null);
                }}
              >
                <span className={`method-badge method-${ep.method.toLowerCase()}`}>{ep.method}</span>
                <span className="endpoint-tab-path">{ep.path}</span>
                <span className="endpoint-tab-service">{ep.service}</span>
              </button>
            ))}
          </div>

          {/* Playground Workspace */}
          <div className="playground-body">
            
            {/* Request Panel */}
            <div className="req-panel">
              <div className="panel-bar">
                <span className="panel-title">HTTP Request Spec</span>
                <span className="panel-tag">{currentEndpoint.tag}</span>
              </div>

              <div className="req-url-bar">
                <span className={`method-badge method-${currentEndpoint.method.toLowerCase()}`}>
                  {currentEndpoint.method}
                </span>
                <input 
                  type="text" 
                  readOnly 
                  value={currentEndpoint.path} 
                  className="req-url-input" 
                />
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm send-btn"
                  onClick={handleSendRequest}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw size={14} className="spin-icon" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Execute</span>
                    </>
                  )}
                </button>
              </div>

              {currentEndpoint.samplePayload && (
                <div className="payload-box">
                  <span className="payload-label">JSON Request Body:</span>
                  <pre className="payload-pre">
                    <code>{JSON.stringify(currentEndpoint.samplePayload, null, 2)}</code>
                  </pre>
                </div>
              )}

              {!currentEndpoint.samplePayload && (
                <div className="payload-box empty-payload">
                  <span className="empty-text">No request body required for this GET request.</span>
                </div>
              )}
            </div>

            {/* Response Panel */}
            <div className="res-panel">
              <div className="panel-bar">
                <div className="res-bar-left">
                  <span className="panel-title">Cluster Response</span>
                  {response && (
                    <span className="status-code-badge status-200">
                      HTTP {response.status} OK
                    </span>
                  )}
                </div>
                {responseTime && (
                  <div className="latency-badge">
                    <Clock size={12} />
                    <span>{responseTime}ms latency</span>
                  </div>
                )}
              </div>

              <div className="res-content">
                {isLoading && (
                  <div className="res-loading-state">
                    <RefreshCw size={32} className="spin-icon text-react" />
                    <span>Dispatching across Rails/Node worker threads...</span>
                  </div>
                )}

                {!isLoading && !response && (
                  <div className="res-empty-state">
                    <Terminal size={32} color="#64748B" />
                    <p>Click "Execute" above to trigger simulated request</p>
                  </div>
                )}

                {!isLoading && response && (
                  <pre className="res-json-pre">
                    <code>{JSON.stringify(response.body, null, 2)}</code>
                  </pre>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
