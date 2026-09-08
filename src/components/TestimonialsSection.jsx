import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We eliminated our $8,400/year Dropbox Business subscription overnight. Subqancious Mind runs on a single office server and the entire team accesses files from their phones. The AI voice search alone saves us 20 minutes a day.",
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Meridian Design Labs',
    stars: 5,
  },
  {
    quote: "As a law firm, client data sovereignty is non-negotiable. Subqancious Mind lets our attorneys access case files from their mobile devices with HTTPS encryption — and not a single byte ever touches a third-party server.",
    name: 'James Rodriguez',
    role: 'Managing Partner',
    company: 'Rodriguez & Associates LLP',
    stars: 5,
  },
  {
    quote: "We deployed Subqancious across 3 branch offices using Cloudflare Tunnels. Our remote designers upload 4K renders directly to the studio server from home. The chunked upload engine handles 10GB files without breaking a sweat.",
    name: 'Priya Patel',
    role: 'IT Director',
    company: 'Atlas Creative Group',
    stars: 5,
  },
  {
    quote: "The Nous AI chat assistant changed how our team interacts with shared storage. Instead of navigating folders, they just type 'find the Q3 report' and it surfaces instantly. It's like having a personal file concierge.",
    name: 'Marcus Thompson',
    role: 'Operations Manager',
    company: 'Quantum Works Inc.',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-eyebrow" style={{ textAlign: 'center' }}>What Teams Say</div>
        <h2 className="section-title" style={{ margin: '0 auto 20px', textAlign: 'center' }}>
          Trusted by teams who value control<span className="period">.</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
          Real feedback from businesses who made the switch to self-hosted infrastructure.
        </p>

        <div className="testimonial-carousel">
          <button className="testimonial-nav-btn" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>

          <div className="testimonial-card-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="testimonial-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="testimonial-quote-icon">
                  <Quote size={24} />
                </div>
                <div className="testimonial-stars">
                  {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "{testimonials[active].quote}"
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonials[active].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-name">{testimonials[active].name}</span>
                    <span className="testimonial-role">{testimonials[active].role} at {testimonials[active].company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="testimonial-nav-btn" onClick={next} aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
