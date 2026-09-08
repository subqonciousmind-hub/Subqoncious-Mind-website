import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Rocket, Code2, Brain, Linkedin, Twitter, Github, User } from 'lucide-react';

const highlights = [
  {
    icon: <GraduationCap size={20} />,
    label: 'IIT Delhi',
    value: 'M.Tech 2024–2026',
  },
  {
    icon: <Code2 size={20} />,
    label: 'Role',
    value: 'Founder & CTO',
  },
  {
    icon: <Brain size={20} />,
    label: 'Focus',
    value: 'AI & Systems',
  },
  {
    icon: <Rocket size={20} />,
    label: 'Mission',
    value: 'Decentralize Cloud',
  },
];

const milestones = [
  'Built Subqoncious Mind from scratch — a self-hosted, AI-powered cloud alternative',
  'Designed NOUS voice assistant & Nous AI chat for enterprise-grade file management',
  'Architected zero-dependency deployment across desktop, mobile & web',
  'Championed data sovereignty — your files never leave your server',
];

/* ---- Founder photo as inline SVG fallback with gradient ---- */
function FounderPhoto({ imgSrc }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgRef = useRef(null);

  const handleLoad = () => {
    // Check if the image actually has content (naturalWidth > 0)
    if (imgRef.current && imgRef.current.naturalWidth > 0 && imgRef.current.naturalHeight > 0) {
      setImgLoaded(true);
    } else {
      setImgError(true);
    }
  };

  const handleError = () => {
    setImgError(true);
  };

  return (
    <div className="founder-image-frame">
      {/* Always try to load the actual image */}
      <img
        ref={imgRef}
        src={imgSrc}
        alt="Animesh Lohar — Founder & CTO of Subqoncious Mind, at IIT Delhi"
        className="founder-image"
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: imgLoaded && !imgError ? 'block' : 'none' }}
      />

      {/* Premium fallback when image is missing */}
      {(!imgLoaded || imgError) && (
        <div className="founder-image-fallback">
          {/* Abstract gradient background */}
          <div className="founder-fallback-bg" />

          {/* Silhouette icon */}
          <div className="founder-fallback-avatar">
            <User size={64} strokeWidth={1.2} />
          </div>

          {/* Name & IIT Delhi branding */}
          <div className="founder-fallback-info">
            <span className="founder-fallback-name">Animesh Lohar</span>
            <span className="founder-fallback-school">
              <GraduationCap size={14} />
              IIT Delhi • M.Tech
            </span>
          </div>

          {/* Decorative elements */}
          <div className="founder-fallback-ring founder-fallback-ring-1" />
          <div className="founder-fallback-ring founder-fallback-ring-2" />
          <div className="founder-fallback-ring founder-fallback-ring-3" />
        </div>
      )}
    </div>
  );
}

export default function FounderSection() {
  return (
    <section className="section founder-section" id="founder">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="founder-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Meet the Founder</div>
          <h2 className="section-title" style={{ margin: '0 auto 20px', textAlign: 'center' }}>
            Built by an IITian<span className="period">.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 0', textAlign: 'center' }}>
            Subqoncious Mind is led by a vision to make enterprise infrastructure accessible, 
            private, and intelligent — from the halls of IIT Delhi to your server.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="founder-grid">
          {/* Image Column */}
          <motion.div
            className="founder-image-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="founder-image-wrapper">
              <div className="founder-image-glow" />
              <FounderPhoto imgSrc="/founder-animesh.jpg" />
              {/* Floating badge */}
              <div className="founder-badge founder-badge-iit">
                <GraduationCap size={16} />
                <span>IIT Delhi</span>
              </div>
              <div className="founder-badge founder-badge-role">
                <Award size={16} />
                <span>Founder & CTO</span>
              </div>
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div
            className="founder-info-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="founder-name-block">
              <h3 className="founder-name">Animesh Lohar</h3>
              <span className="founder-title">Founder & CTO, Subqoncious Mind</span>
              <span className="founder-education">
                <GraduationCap size={14} />
                M.Tech, Indian Institute of Technology Delhi — Batch of 2024–2026
              </span>
            </div>

            <p className="founder-bio">
              A builder at heart, Animesh is pursuing his M.Tech at <strong>IIT Delhi</strong> while 
              architecting Subqoncious Mind — a platform that transforms any desktop into a secure, 
              AI-powered cloud. His vision: <em>enterprise-grade infrastructure shouldn't cost 
              enterprise-grade money.</em>
            </p>

            {/* Highlight chips */}
            <div className="founder-highlights">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="founder-highlight-chip"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <span className="founder-highlight-icon">{h.icon}</span>
                  <div className="founder-highlight-text">
                    <span className="founder-highlight-value">{h.value}</span>
                    <span className="founder-highlight-label">{h.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Milestones */}
            <div className="founder-milestones">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  className="founder-milestone"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                >
                  <span className="founder-milestone-dot" />
                  <span>{m}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="founder-cta-row">
              <a href="#/contact" className="btn-primary">
                <Rocket size={16} />
                Get In Touch
              </a>
              <div className="founder-socials">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="founder-social-link" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="founder-social-link" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="founder-social-link" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
