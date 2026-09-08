import { motion } from 'framer-motion';
import { Wifi, Globe2, Shield, ArrowRight, Zap, Cloud } from 'lucide-react';

const modes = [
  {
    icon: <Wifi size={28} />,
    title: 'Local Wi-Fi',
    desc: 'Blazing-fast zero-latency transfers within your office network. Every device on the same Wi-Fi connects instantly — desktops, laptops, phones, tablets.',
    tag: 'https://192.168.x.x:5000',
    features: ['Zero latency', 'Max throughput', 'No internet needed'],
    color: 'var(--success)',
  },
  {
    icon: <Shield size={28} />,
    title: 'Tailscale Mesh VPN',
    desc: 'Secure peer-to-peer access for remote teams and branch offices. Private mesh network with no ports to forward, no router configuration needed.',
    tag: 'https://100.x.y.z:5000',
    features: ['Global access', 'P2P encrypted', 'Branch offices'],
    color: 'var(--info)',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloudflare Tunnel',
    desc: 'Instant public URL with valid SSL certificates for contractors, clients, and external teams. One command deployment — no network expertise required.',
    tag: '*.trycloudflare.com',
    features: ['Public URL', 'Valid SSL', 'Client sharing'],
    color: 'var(--primary)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ConnectionModes() {
  return (
    <section className="section" id="connections">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-eyebrow" style={{ textAlign: 'center' }}>Connectivity</div>
        <h2 className="section-title" style={{ margin: '0 auto 20px', textAlign: 'center' }}>
          Three deployment modes<span className="period">.</span> One platform<span className="period">.</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Office floor, home office, or client site — deploy Subqancious Mind 
          anywhere your team works. Scale from a single desk to multiple branch offices.
        </p>

        <div className="connection-grid">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              className="connection-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <div className="connection-card-icon" style={{
                background: `${mode.color}10`,
                borderColor: `${mode.color}30`,
              }}>
                <span style={{ color: mode.color }}>{mode.icon}</span>
              </div>
              <h3 className="connection-card-title">{mode.title}</h3>
              <p className="connection-card-desc">{mode.desc}</p>
              
              <div className="connection-card-tag">{mode.tag}</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', marginTop: '8px' }}>
                {mode.features.map((feat, fi) => (
                  <div
                    key={fi}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      justifyContent: 'center',
                    }}
                  >
                    <Zap size={12} style={{ color: mode.color, opacity: 0.7 }} />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            marginTop: '48px',
            padding: '24px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            color: 'var(--text-dim)',
            textAlign: 'center',
            lineHeight: '2',
          }}
        >
          <span style={{ color: 'var(--text-muted)' }}>📱 Team Devices</span>
          <span style={{ margin: '0 16px', color: 'var(--primary)' }}>→</span>
          <span style={{ color: 'var(--text-muted)' }}>🔐 HTTPS / VPN / Tunnel</span>
          <span style={{ margin: '0 16px', color: 'var(--primary)' }}>→</span>
          <span style={{ color: 'var(--text-muted)' }}>💻 Your Office Server</span>
          <span style={{ margin: '0 16px', color: 'var(--primary)' }}>→</span>
          <span style={{ color: 'var(--text-muted)' }}>📁 Company Files</span>
        </motion.div>
      </div>
    </section>
  );
}
