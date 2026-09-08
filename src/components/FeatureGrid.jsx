import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FolderOpen, Upload, Image, Mic, MessageSquare, Shield,
  Users, HardDrive, Key, BarChart3, Layers, Monitor
} from 'lucide-react';

const features = [
  {
    icon: <FolderOpen size={22} />,
    title: 'Smart File Explorer',
    desc: 'Intuitive grid/list views with breadcrumb navigation, image thumbnails, recursive deep search, and recent search history. Your team finds files instantly.',
    featured: true,
    demo: 'explorer',
  },
  {
    icon: <Mic size={22} />,
    title: 'NOUS Voice Navigation',
    desc: 'Hands-free file browsing with neural fuzzy matching. Team members speak naturally — "Open client assets" or "Find quarterly report" — and NOUS navigates instantly.',
    demo: 'voice',
  },
  {
    icon: <Upload size={22} />,
    title: 'Chunked Upload Engine',
    desc: 'Upload multi-gigabyte project files reliably. Files are sliced into 2MB chunks with sequential upload — no timeouts, no memory exhaustion, even over remote tunnels.',
  },
  {
    icon: <Image size={22} />,
    title: 'Dynamic Thumbnails',
    desc: 'On-the-fly image scaling with disk caching powered by Jimp. Your creative teams get lightning-fast gallery views without manual processing.',
  },
  {
    icon: <MessageSquare size={22} />,
    title: 'Nous AI Chat Agent',
    desc: 'Conversational AI workspace companion. Search files, preview documents, manage directories, analyze storage — all through natural language commands.',
    featured: true,
    demo: 'chat',
  },
  {
    icon: <Users size={22} />,
    title: 'Multi-User Workspaces',
    desc: 'Isolated file roots per user with JWT session authentication. Each team member gets their own secure sandbox with independent storage and permissions.',
  },
  {
    icon: <Key size={22} />,
    title: 'License Key Activation',
    desc: 'Deploy Pro features offline with pre-purchased license keys. Perfect for air-gapped environments and enterprise bulk deployments.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Bandwidth Metering',
    desc: 'Real-time tracking of uploads, downloads, and remote transfers per user. Monitor team usage with built-in analytics and quota management.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Artifacts Inspector',
    desc: 'Side-by-side preview panel for text files, source code, and images. Inspect documents without downloading — ideal for code review and media approval workflows.',
  },
];

/* Mini demo components rendered inside feature cards */
function ExplorerDemo() {
  const files = [
    { name: 'Client Assets', type: 'folder', items: '156 items' },
    { name: 'Q4 Reports', type: 'folder', items: '24 items' },
    { name: 'proposal-2025.pdf', type: 'file', size: '2.4 MB' },
    { name: 'brand-guidelines.pdf', type: 'file', size: '8.2 MB' },
  ];
  return (
    <div style={{ padding: '12px', fontSize: '13px' }}>
      {files.map((f, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 10px',
            borderRadius: '6px',
            borderBottom: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
          }}
        >
          {f.type === 'folder' ? (
            <FolderOpen size={14} style={{ color: 'var(--primary)' }} />
          ) : (
            <HardDrive size={14} style={{ color: 'var(--text-dim)' }} />
          )}
          <span style={{ flex: 1, color: f.type === 'folder' ? 'var(--text)' : 'var(--text-muted)' }}>
            {f.name}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
            {f.items || f.size}
          </span>
        </div>
      ))}
    </div>
  );
}

function VoiceDemo() {
  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--primary)',
          margin: '0 auto 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 30px rgba(255, 255, 255,0.3)',
        }}
      >
        <Mic size={20} color="#0a0908" />
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          color: 'var(--primary)',
          marginBottom: '4px',
        }}
      >
        "Open Client Assets"
      </div>
      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
        → Navigating to Client Assets/
      </div>
    </div>
  );
}

function ChatDemo() {
  return (
    <div style={{ padding: '12px', fontSize: '13px' }}>
      <div
        style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '10px 14px',
          marginBottom: '8px',
          color: 'var(--text-muted)',
          maxWidth: '80%',
          borderBottomLeftRadius: '4px',
        }}
      >
        Found 7 files matching "quarterly report" across 3 directories
      </div>
      <div
        style={{
          background: 'var(--primary)',
          borderRadius: '10px',
          padding: '10px 14px',
          color: '#0a0908',
          maxWidth: '70%',
          marginLeft: 'auto',
          borderBottomRightRadius: '4px',
        }}
      >
        Show workspace storage analysis
      </div>
    </div>
  );
}

const demoComponents = {
  explorer: ExplorerDemo,
  voice: VoiceDemo,
  chat: ChatDemo,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function FeatureGrid() {
  const ref = useRef(null);

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-eyebrow">Platform Features</div>
        <h2 className="section-title">
          Enterprise-grade capabilities<span className="period">.</span> Zero complexity<span className="period">.</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Every feature built for teams who need reliable, secure file infrastructure — 
          without the overhead of cloud subscriptions or complex IT setups.
        </p>

        <div className="features-grid" ref={ref}>
          {features.map((f, i) => {
            const DemoComp = f.demo ? demoComponents[f.demo] : null;
            return (
              <motion.div
                key={i}
                className={`feature-card ${f.featured ? 'featured' : ''}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
                {DemoComp && (
                  <div className="feature-demo">
                    <DemoComp />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
