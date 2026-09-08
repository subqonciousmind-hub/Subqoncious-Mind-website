import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, GraduationCap, Code2, Mail, User, Laptop, Wrench, Globe, ChevronLeft, ChevronRight
} from 'lucide-react';

const developers = [
  {
    name: 'Sanniv Bhaiya',
    role: 'Developer',
    photo: '/dev-sanniv.jpg',
    college: 'Techno International Newtown',
    degree: 'B.Tech, Computer Science & Engineering',
    batch: '2022–2026',
    email: 'sanniv@subqoncious.com',
    bio: 'A meticulous developer who thrives on solving complex problems with elegant solutions. Sanniv plays a critical role in building the robust infrastructure that powers Subqoncious Mind\'s secure file-sharing capabilities.',
    highlights: [
      { icon: <GraduationCap size={18} />, label: 'Techno International Newtown', value: 'B.Tech 2022–2026' },
      { icon: <Code2 size={18} />, label: 'Role', value: 'Developer' },
      { icon: <Globe size={18} />, label: 'Specialization', value: 'Backend & Infra' },
      { icon: <Wrench size={18} />, label: 'Focus', value: 'Cloud & Security' },
    ],
  },
  {
    name: 'Suroj Swarnakar',
    role: 'Developer',
    photo: '/dev-suroj.jpg',
    college: 'Techno International Newtown',
    degree: 'B.Tech, Computer Science & Engineering',
    batch: '2022–2026',
    email: 'suroj@subqoncious.com',
    bio: 'A passionate full-stack developer with a strong foundation in systems programming and web technologies. Suroj brings ideas to life through clean, performant code — helping shape the Subqoncious Mind platform from the ground up.',
    highlights: [
      { icon: <GraduationCap size={18} />, label: 'Techno International Newtown', value: 'B.Tech 2022–2026' },
      { icon: <Code2 size={18} />, label: 'Role', value: 'Developer' },
      { icon: <Laptop size={18} />, label: 'Specialization', value: 'Full-Stack' },
      { icon: <Wrench size={18} />, label: 'Focus', value: 'Web & Systems' },
    ],
  },
];

export default function DevTeamModal({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setActiveIndex(0);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, activeIndex]);

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % developers.length);
  };
  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + developers.length) % developers.length);
  };

  const dev = developers[activeIndex];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="devteam-modal-overlay-wrapper">
          {/* Backdrop */}
          <motion.div
            className="devteam-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Window */}
          <motion.div
            className="devteam-modal-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="devteam-modal-title"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="devteam-modal-header">
              <div className="devteam-modal-badge">
                <span className="devteam-modal-badge-dot" />
                THE DEVELOPERS
              </div>
              <div className="devteam-modal-nav-controls">
                <button onClick={goToPrev} className="devteam-nav-btn" aria-label="Previous developer">
                  <ChevronLeft size={18} />
                </button>
                <span className="devteam-nav-counter">{activeIndex + 1} / {developers.length}</span>
                <button onClick={goToNext} className="devteam-nav-btn" aria-label="Next developer">
                  <ChevronRight size={18} />
                </button>
              </div>
              <button onClick={onClose} className="devteam-modal-close-btn" aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            {/* Body with slide animation */}
            <div className="devteam-modal-body-wrapper">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  className="devteam-modal-body"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                >
                  {/* Left Column: Photo */}
                  <div className="devteam-modal-left">
                    <div className="devteam-modal-photo-wrapper">
                      <div className="devteam-modal-photo-glow" />
                      <img
                        src={dev.photo}
                        alt={`${dev.name} — Developer`}
                        className="devteam-modal-photo"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="devteam-modal-photo-fallback" style={{ display: 'none' }}>
                        <User size={64} strokeWidth={1.2} />
                      </div>
                      <div className="devteam-modal-college-badge">
                        <GraduationCap size={15} />
                        <span>{dev.college}</span>
                      </div>
                    </div>

                    <div className="devteam-modal-quick-stats">
                      <div className="devteam-stat-card">
                        <GraduationCap size={16} className="devteam-stat-icon" />
                        <div>
                          <span className="devteam-stat-title">{dev.college}</span>
                          <span className="devteam-stat-sub">{dev.degree} • {dev.batch}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Bio & Info */}
                  <div className="devteam-modal-right">
                    <div className="devteam-modal-title-block">
                      <h2 id="devteam-modal-title" className="devteam-modal-name">
                        {dev.name}
                      </h2>
                      <div className="devteam-modal-role">
                        <Code2 size={16} />
                        <span>{dev.role}, Subqoncious Mind</span>
                      </div>
                      <div className="devteam-modal-edu">
                        <GraduationCap size={15} />
                        <span>{dev.degree}, {dev.college}</span>
                      </div>
                    </div>

                    <p className="devteam-modal-bio">{dev.bio}</p>

                    {/* Grid of Highlights */}
                    <div className="devteam-modal-highlights">
                      {dev.highlights.map((h, i) => (
                        <div key={i} className="devteam-modal-chip">
                          <span className="devteam-chip-icon">{h.icon}</span>
                          <div className="devteam-chip-text">
                            <span className="devteam-chip-val">{h.value}</span>
                            <span className="devteam-chip-lbl">{h.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Email CTA */}
                    <div className="devteam-modal-actions">
                      <a
                        href={`mailto:${dev.email}`}
                        className="btn-primary devteam-email-btn"
                      >
                        <Mail size={16} />
                        Email {dev.name.split(' ')[0]}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Tab Selector */}
            <div className="devteam-modal-tabs">
              {developers.map((d, i) => (
                <button
                  key={i}
                  className={`devteam-tab ${i === activeIndex ? 'devteam-tab-active' : ''}`}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                >
                  <img
                    src={d.photo}
                    alt={d.name}
                    className="devteam-tab-avatar"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="devteam-tab-info">
                    <span className="devteam-tab-name">{d.name}</span>
                    <span className="devteam-tab-role">{d.role}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
