import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, GraduationCap, Award, Rocket, Code2, Brain, 
  Linkedin, Twitter, Github, User, Mail, ExternalLink, ShieldCheck 
} from 'lucide-react';

const highlights = [
  {
    icon: <GraduationCap size={18} />,
    label: 'IIT Delhi',
    value: 'M.Tech 2024–2026',
  },
  {
    icon: <Code2 size={18} />,
    label: 'Role',
    value: 'Founder & CTO',
  },
  {
    icon: <Brain size={18} />,
    label: 'Focus',
    value: 'AI & Systems',
  },
  {
    icon: <Rocket size={18} />,
    label: 'Mission',
    value: 'Decentralize Cloud',
  },
];

const milestones = [
  'Architected Subqoncious Mind — self-hosted, AI-powered private cloud',
  'Designed NOUS voice assistant & Nous AI chat for intelligent file management',
  'Created zero-dependency, single-binary deployment across hardware',
  'Pioneered 100% on-premise data sovereignty — zero cloud risk',
];

export default function FounderModal({ isOpen, onClose, onOpenDevTeamModal }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="founder-modal-overlay-wrapper">
          {/* Backdrop Blur Overlay */}
          <motion.div
            className="founder-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Floating Modal Window */}
          <motion.div
            className="founder-modal-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="founder-modal-title"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header / Top Bar */}
            <div className="founder-modal-header">
              <div className="founder-modal-header-left">
                <div className="founder-modal-badge">
                  <span className="founder-modal-badge-dot" />
                  FOUNDER PROFILE
                </div>
                {onOpenDevTeamModal && (
                  <button 
                    type="button" 
                    onClick={() => {
                      onClose();
                      onOpenDevTeamModal();
                    }} 
                    className="founder-header-devteam-btn"
                  >
                    <Code2 size={14} />
                    Meet the Minds Behind the Code
                  </button>
                )}
              </div>
              <button 
                onClick={onClose} 
                className="founder-modal-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="founder-modal-body">
              {/* Left Column: Photo & Badges */}
              <div className="founder-modal-left">
                <div className="founder-modal-photo-wrapper">
                  <div className="founder-modal-photo-glow" />
                  <img 
                    src="/founder-animesh.jpg" 
                    alt="Animesh Lohar — Founder & CTO"
                    className="founder-modal-photo"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="founder-modal-photo-fallback" style={{ display: 'none' }}>
                    <User size={64} strokeWidth={1.2} />
                  </div>
                  <div className="founder-modal-iit-badge">
                    <GraduationCap size={15} />
                    <span>IIT Delhi</span>
                  </div>
                </div>

                <div className="founder-modal-quick-stats">
                  <div className="modal-stat-card">
                    <ShieldCheck size={16} className="modal-stat-icon" />
                    <div>
                      <span className="modal-stat-title">IIT Delhi Alumni</span>
                      <span className="modal-stat-sub">M.Tech Batch 2024–26</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Achievements */}
              <div className="founder-modal-right">
                <div className="founder-modal-title-block">
                  <h2 id="founder-modal-title" className="founder-modal-name">
                    Animesh Lohar
                  </h2>
                  <div className="founder-modal-role">
                    <Award size={16} />
                    <span>Founder & CTO, Subqoncious Mind</span>
                  </div>
                  <div className="founder-modal-edu">
                    <GraduationCap size={15} />
                    <span>M.Tech, Indian Institute of Technology Delhi</span>
                  </div>
                </div>

                <p className="founder-modal-bio">
                  A builder at heart, Animesh is pursuing his M.Tech at <strong>IIT Delhi</strong> while 
                  architecting <strong>Subqoncious Mind</strong> — a platform that transforms any desktop into a secure, 
                  AI-powered private cloud. His mission is simple: <em>enterprise-grade infrastructure shouldn't cost enterprise-grade money.</em>
                </p>

                {/* Grid of Highlights */}
                <div className="founder-modal-highlights">
                  {highlights.map((h, i) => (
                    <div key={i} className="founder-modal-chip">
                      <span className="modal-chip-icon">{h.icon}</span>
                      <div className="modal-chip-text">
                        <span className="modal-chip-val">{h.value}</span>
                        <span className="modal-chip-lbl">{h.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className="founder-modal-milestones">
                  <h4 className="modal-milestones-heading">Key Achievements</h4>
                  <ul className="modal-milestones-list">
                    {milestones.map((m, i) => (
                      <li key={i} className="modal-milestones-item">
                        <span className="modal-milestones-dot" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions & Social Links */}
                <div className="founder-modal-actions">
                  <a 
                    href="#/contact" 
                    className="btn-primary modal-contact-btn"
                    onClick={() => {
                      onClose();
                      const contactEl = document.getElementById('contact');
                      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Mail size={16} />
                    Get In Touch
                  </a>

                  <div className="founder-modal-socials">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-social-btn"
                      aria-label="LinkedIn"
                      title="LinkedIn Profile"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-social-btn"
                      aria-label="Twitter"
                      title="Twitter Profile"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-social-btn"
                      aria-label="GitHub"
                      title="GitHub Profile"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
