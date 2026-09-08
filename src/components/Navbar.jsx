import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenDownloadModal, route }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#/features' },
    { label: 'Use Cases', href: '#/use-cases' },
    { label: 'Security', href: '#/security' },
    { label: 'Pricing', href: '#/pricing' },
    { label: 'About', href: '#/about' },
    { label: 'Contact', href: '#/contact' },
  ];

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    if (onOpenDownloadModal) {
      onOpenDownloadModal();
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#/" className="navbar-logo">
            <img src="/logo.png" alt="Subqoncious logo" className="navbar-logo-icon" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
            <span className="brand-wordmark"><span className="brand-wordmark-bold">Subqoncious</span><span className="brand-wordmark-italic">mind</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="navbar-links">
            {links.map(l => (
              <a key={l.href} href={l.href} className={l.href === `#/${route}` ? 'active' : ''}>{l.label}</a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="navbar-cta">
            <button 
              type="button"
              onClick={handleGetStartedClick}
              className="navbar-get-started"
              style={{ cursor: 'pointer', border: 'none', font: 'inherit' }}
            >
              Get Started
              <ArrowRight size={13} style={{ marginLeft: 4 }} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="mobile-cta-group">
          <button 
            type="button"
            className="btn-primary" 
            style={{ justifyContent: 'center', width: '100%', cursor: 'pointer' }} 
            onClick={(e) => {
              setMobileOpen(false);
              handleGetStartedClick(e);
            }}
          >
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
