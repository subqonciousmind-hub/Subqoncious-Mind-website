import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, Users, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left — Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">Get Started</div>
            <h2 className="section-title" style={{ maxWidth: '480px' }}>
              Ready to own your file infrastructure<span className="period">?</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '36px' }}>
              Schedule a personalized demo with our enterprise team. We'll walk you through 
              deployment, security architecture, and custom integrations.
            </p>

            <div className="contact-benefits">
              <div className="contact-benefit">
                <CheckCircle2 size={18} />
                <span>30-minute guided deployment walkthrough</span>
              </div>
              <div className="contact-benefit">
                <CheckCircle2 size={18} />
                <span>Custom security architecture review</span>
              </div>
              <div className="contact-benefit">
                <CheckCircle2 size={18} />
                <span>Volume licensing and team onboarding</span>
              </div>
              <div className="contact-benefit">
                <CheckCircle2 size={18} />
                <span>Integration support for existing workflows</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="contact-success">
                <CheckCircle2 size={48} style={{ color: 'var(--success)' }} />
                <h3>Demo Request Sent!</h3>
                <p>Our enterprise team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="contact-form-title">Request a Demo</h3>

                <div className="contact-input-group">
                  <span className="contact-input-icon"><Users size={16} /></span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                <div className="contact-input-group">
                  <span className="contact-input-icon"><Mail size={16} /></span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                <div className="contact-input-group">
                  <span className="contact-input-icon"><Building2 size={16} /></span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                <div className="contact-input-group">
                  <span className="contact-input-icon"><Users size={16} /></span>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="contact-input"
                    required
                  >
                    <option value="" disabled>Team Size</option>
                    <option value="1-10">1–10 employees</option>
                    <option value="11-50">11–50 employees</option>
                    <option value="51-200">51–200 employees</option>
                    <option value="201-1000">201–1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>

                <div className="contact-input-group">
                  <span className="contact-input-icon" style={{ alignSelf: 'flex-start', marginTop: '12px' }}><MessageSquare size={16} /></span>
                  <textarea
                    name="message"
                    placeholder="Tell us about your use case (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="contact-input contact-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary contact-submit-btn">
                  <Send size={16} />
                  Request Enterprise Demo
                </button>

                <p className="contact-privacy">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
