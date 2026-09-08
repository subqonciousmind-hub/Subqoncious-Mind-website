import { motion } from 'framer-motion';
import { TrendingDown, Shield, HardDrive, Clock, CheckCircle2 } from 'lucide-react';

const competitors = [
  { name: 'Subqancious Mind', price: '$0', period: '/mo (self-hosted)', highlight: true, features: ['Unlimited storage', 'Unlimited users', 'Full encryption', 'AI assistant', 'No data exposure'] },
  { name: 'Google Workspace', price: '$12', period: '/user/mo', highlight: false, features: ['15 GB storage', 'Google-dependent', 'Data on Google servers', 'No AI file nav', 'Data mining risk'] },
  { name: 'Dropbox Business', price: '$15', period: '/user/mo', highlight: false, features: ['3 TB storage', 'Cloud-dependent', 'Data on AWS', 'No voice search', 'Third-party access'] },
  { name: 'OneDrive Business', price: '$10', period: '/user/mo', highlight: false, features: ['1 TB storage', 'Microsoft lock-in', 'Data on Azure', 'No AI assistant', 'Compliance concerns'] },
];

const benefits = [
  { icon: <TrendingDown size={20} />, value: '100%', label: 'Cost Reduction', desc: 'Zero monthly subscription fees. Deploy on existing hardware.' },
  { icon: <Shield size={20} />, value: '0', label: 'Data Exposure', desc: 'Files never touch third-party servers. Complete sovereignty.' },
  { icon: <HardDrive size={20} />, value: '∞', label: 'Storage Cap', desc: 'Only limited by your own hardware. No artificial limits.' },
  { icon: <Clock size={20} />, value: '<30s', label: 'Deployment Time', desc: 'Three commands to production. No IT overhead.' },
];

export default function ROISection() {
  return (
    <section className="section roi-section" id="roi">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Business Value</div>
          <h2 className="section-title" style={{ margin: '0 auto 20px', textAlign: 'center' }}>
            Replace cloud subscriptions<span className="period">.</span> Own your infrastructure<span className="period">.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            For a 50-person company, cloud storage subscriptions cost $6,000–$9,000 per year. 
            Subqancious Mind costs $0 in recurring fees.
          </p>
        </div>

        {/* Benefit stats */}
        <div className="roi-benefits-grid">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="roi-benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="roi-benefit-icon">{b.icon}</div>
              <div className="roi-benefit-value">{b.value}</div>
              <div className="roi-benefit-label">{b.label}</div>
              <div className="roi-benefit-desc">{b.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          className="roi-comparison"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="roi-comparison-title">How we compare</h3>
          <div className="roi-table">
            {competitors.map((comp, i) => (
              <div key={i} className={`roi-table-col ${comp.highlight ? 'highlight' : ''}`}>
                <div className="roi-table-header">
                  <span className="roi-table-name">{comp.name}</span>
                  <div className="roi-table-price">
                    <span className="roi-price-amount">{comp.price}</span>
                    <span className="roi-price-period">{comp.period}</span>
                  </div>
                </div>
                <div className="roi-table-features">
                  {comp.features.map((feat, fi) => (
                    <div key={fi} className="roi-table-feature">
                      <CheckCircle2 size={14} style={{ 
                        color: comp.highlight ? 'var(--success)' : 'var(--text-dim)',
                        flexShrink: 0
                      }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance badges */}
        <motion.div
          className="roi-compliance"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="compliance-badge">
            <Shield size={16} />
            <span>GDPR Friendly</span>
          </div>
          <div className="compliance-badge">
            <Shield size={16} />
            <span>Data Sovereignty</span>
          </div>
          <div className="compliance-badge">
            <Shield size={16} />
            <span>On-Premise Deployment</span>
          </div>
          <div className="compliance-badge">
            <Shield size={16} />
            <span>No Third-Party Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
