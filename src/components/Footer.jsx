import { Twitter, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <img src="/logo.png" alt="Subqoncious logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              <span className="brand-wordmark"><span className="brand-wordmark-bold">Subqoncious</span><span className="brand-wordmark-italic">mind</span></span>
            </div>
            <p className="footer-brand-desc">
              Self-hosted enterprise file sharing platform. Deploy on your hardware, 
              connect your team, own your data. Zero cloud dependency.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
                className="footer-social"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="footer-column">
            <div className="footer-column-title">Product</div>
            <a href="#/features">Platform Features</a>
            <a href="#/features">NOUS Voice AI</a>
            <a href="#/features">Nous Chat Agent</a>
            <a href="#/features">Deployment Modes</a>
            <a href="#/pricing">Pricing</a>
          </div>

          {/* Enterprise */}
          <div className="footer-column">
            <div className="footer-column-title">Enterprise</div>
            <a href="#/contact">Request Demo</a>
            <a href="#/contact">Contact Sales</a>
            <a href="#/use-cases">Use Cases</a>
            <a href="#/use-cases">ROI Calculator</a>
            <a href="#/security">Security & Compliance</a>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <div className="footer-column-title">Resources</div>
            <a href="#/">Documentation</a>
            <a href="#/">Quick Start Guide</a>
            <a href="#/">API Reference</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            Built with <Heart size={12} style={{ color: 'var(--primary)', verticalAlign: 'middle', margin: '0 3px' }} /> by the Subqancious team
          </span>
          <div className="footer-bottom-links">
            <a href="#/">Privacy</a>
            <a href="#/">Terms</a>
            <a href="#/">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
