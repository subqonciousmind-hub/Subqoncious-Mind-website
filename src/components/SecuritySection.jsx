import { motion } from 'framer-motion';
import { Shield, Lock, Key, Scan, AlertTriangle, Server } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Lock size={20} />,
    title: 'End-to-End HTTPS',
    desc: 'Auto-generated SSL/TLS certificates on startup. All traffic between devices is encrypted — even on internal office networks. Enterprise-grade transport security.',
  },
  {
    icon: <Key size={20} />,
    title: 'JWT Authentication',
    desc: '7-day signed JSON Web Tokens protect every API request. Per-user session management with automatic expiry, device tracking, and multi-user isolation.',
  },
  {
    icon: <Scan size={20} />,
    title: 'Path Traversal Guard',
    desc: 'Strict path sanitization blocks all directory traversal attempts. Every file operation is sandboxed inside the user\'s allocated directory — preventing lateral access.',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Rate Limiting & Brute-Force Protection',
    desc: 'Built-in express-rate-limit blocks brute-force attacks on authentication and API endpoints. Per-IP throttling with configurable windows.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Security Headers (Helmet)',
    desc: 'Enforced CORS policies, cross-origin resource isolation, and comprehensive security headers via Helmet middleware. SOC2-ready security posture.',
  },
  {
    icon: <Server size={20} />,
    title: 'Complete Data Sovereignty',
    desc: 'Zero cloud storage, zero third-party access. All data stays on your hardware. Fully compliant with data residency requirements — GDPR, HIPAA, and local regulations.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function SecuritySection() {
  return (
    <section className="section" id="security" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Security & Compliance</div>
          <h2 className="section-title" style={{ margin: '0 auto 20px', textAlign: 'center' }}>
            Your data never leaves your hardware<span className="period">.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Built with a security-first architecture from the ground up. Every layer is designed 
            to meet enterprise security requirements and regulatory compliance standards.
          </p>
        </div>

        <div className="security-grid">
          {securityFeatures.map((feat, i) => (
            <motion.div
              key={i}
              className="security-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={cardVariants}
            >
              <div className="security-card-icon">{feat.icon}</div>
              <div>
                <div className="security-card-title">{feat.title}</div>
                <div className="security-card-desc">{feat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance badge row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="security-compliance-row"
        >
          <div className="compliance-badge">
            <Shield size={16} />
            <span>GDPR Friendly</span>
          </div>
          <div className="compliance-badge">
            <Shield size={16} />
            <span>HIPAA Ready</span>
          </div>
          <div className="compliance-badge">
            <Shield size={16} />
            <span>SOC2 Architecture</span>
          </div>
          <div className="compliance-badge">
            <Shield size={16} />
            <span>Data Residency Compliant</span>
          </div>
        </motion.div>

        {/* Security trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '24px',
            padding: '16px 24px',
            background: 'var(--primary-muted)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-md)',
            maxWidth: '560px',
            margin: '24px auto 0',
          }}
        >
          <Shield size={20} style={{ color: 'var(--primary)' }} />
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text)' }}>100% On-Premise</strong> — Your files, your hardware, your compliance. No data residency concerns. Ever.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
