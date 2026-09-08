import { motion } from 'framer-motion';
import { Palette, Scale, Globe2, Building2, ArrowRight } from 'lucide-react';

const useCases = [
  {
    icon: <Palette size={28} />,
    title: 'Creative Agencies',
    desc: 'Share high-resolution assets, video renders, and design files across studio workstations without uploading to external servers. Instant access, zero compression.',
    stats: '10GB+ file transfers',
    color: '#ffffff',
  },
  {
    icon: <Scale size={28} />,
    title: 'Law Firms & Compliance',
    desc: 'Client-privileged documents never leave your office network. Full audit trail with JWT authentication and path-level access control for regulatory compliance.',
    stats: 'Data sovereignty',
    color: '#5b9fe3',
  },
  {
    icon: <Globe2 size={28} />,
    title: 'Remote & Hybrid Teams',
    desc: 'Cloudflare Tunnel and Tailscale VPN give your distributed team secure global access — no port forwarding, no router configuration, no VPN clients to install.',
    stats: '3 connection modes',
    color: '#6bb070',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Small & Medium Businesses',
    desc: 'Replace Google Workspace, Dropbox Business, and OneDrive subscriptions with a one-time deployment on hardware you already own. Unlimited storage, zero monthly fees.',
    stats: '$0/month hosting',
    color: '#a855f7',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function UseCases() {
  return (
    <section className="section" id="use-cases">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Use Cases</div>
          <h2 className="section-title" style={{ margin: '0 auto 20px', textAlign: 'center' }}>
            Built for how businesses actually work<span className="period">.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            From creative studios sharing massive renders to law firms protecting client privilege — 
            Subqancious Mind adapts to your industry's unique requirements.
          </p>
        </div>

        <div className="usecase-grid">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              className="usecase-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <div className="usecase-card-icon" style={{
                background: `${uc.color}12`,
                borderColor: `${uc.color}30`,
              }}>
                <span style={{ color: uc.color }}>{uc.icon}</span>
              </div>
              <h3 className="usecase-card-title">{uc.title}</h3>
              <p className="usecase-card-desc">{uc.desc}</p>
              <div className="usecase-card-stat">
                <span className="usecase-stat-badge" style={{ 
                  color: uc.color, 
                  background: `${uc.color}12`,
                  borderColor: `${uc.color}25`,
                }}>
                  {uc.stats}
                </span>
              </div>
              <a href="#/contact" className="usecase-card-link">
                Learn more <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
