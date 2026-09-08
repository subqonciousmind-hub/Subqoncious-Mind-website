import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Download, Check, Copy, Terminal, ShieldCheck, 
  Cpu, HardDrive, Sparkles, ArrowRight, ExternalLink, 
  CheckCircle2, Info, RefreshCw, Layers, Server, Zap
} from 'lucide-react';

// Platform Brand SVGs
const WindowsIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.802" />
  </svg>
);

const AppleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.03.63-2.67 1.38-.56.65-.96 1.72-.83 2.76 1.05.08 2.08-.57 2.58-1.27z" />
  </svg>
);

const LinuxIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.002 0c-3.178 0-5.753 2.576-5.753 5.754 0 .97.24 1.886.666 2.688-.066.08-.135.16-.197.245-1.04 1.408-1.55 3.02-1.55 4.838 0 1.282.26 2.44.75 3.447-.648.742-1.06 1.674-1.06 2.705 0 2.385 2.148 4.323 4.794 4.323.518 0 1.012-.078 1.478-.22.69.145 1.41.22 2.142.22s1.452-.075 2.142-.22c.466.142.96.22 1.478.22 2.646 0 4.794-1.938 4.794-4.323 0-1.03-.412-1.963-1.06-2.705.49-1.007.75-2.165.75-3.447 0-1.818-.51-3.43-1.55-4.838-.062-.085-.13-.165-.197-.245.426-.802.666-1.718.666-2.688 0-3.178-2.575-5.754-5.753-5.754zm-2.072 4.41c.642 0 1.162.52 1.162 1.162 0 .642-.52 1.162-1.162 1.162-.642 0-1.162-.52-1.162-1.162 0-.642.52-1.162 1.162-1.162zm4.144 0c.642 0 1.162.52 1.162 1.162 0 .642-.52 1.162-1.162 1.162-.642 0-1.162-.52-1.162-1.162 0-.642.52-1.162 1.162-1.162z" />
  </svg>
);

const DockerIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.575a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 2.715h2.118a.185.185 0 00.186-.186V6.29a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.953 0h2.118a.185.185 0 00.186-.186V6.29a.185.185 0 00-.186-.185H8.076a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.954 0h2.119a.185.185 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.122a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm5.907 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.953 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.076a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.122a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H2.168a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zm21.805 1.15c-.244-.176-.795-.293-1.393-.176-.235.049-.461.137-.676.255-.383-.872-1.127-1.547-2.067-1.86a4.877 4.877 0 00-1.841-.128c-.088-.862-.48-1.664-1.116-2.28a3.784 3.784 0 00-2.654-1.077h-.147a.265.265 0 00-.265.264v3.526H1.147a.91.91 0 00-.91.91c0 1.948.51 3.86 1.48 5.542 1.54 2.668 4.22 4.417 7.28 4.75 1.13.12 2.27.05 3.39-.21 2.94-.68 5.48-2.64 6.83-5.26.83-1.6 1.22-3.37 1.14-5.16.03-.1.4-.25.84-.19.46.06.84.28 1.12.63.22.28.34.62.33.98v.04a.265.265 0 00.265.264h.98a.265.265 0 00.265-.264c0-.75-.3-1.46-.82-1.99z" />
  </svg>
);

const platforms = {
  windows: {
    id: 'windows',
    name: 'Windows',
    icon: WindowsIcon,
    tagline: 'Windows 10 / 11 (64-bit & ARM64)',
    fileName: 'Subqancious-Mind-Setup-v2.4.0.exe',
    fileSize: '68.4 MB',
    primaryLabel: 'Download for Windows (.exe)',
    primaryFormat: 'Setup Installer (x64)',
    requirements: 'Windows 10 / 11 (64-bit), 4GB RAM, 500MB storage',
    cliCmd: 'winget install Subqancious.Mind',
    sha256: 'a4f91d89c2b03e48e8951239c09bf872b8d0034a713840e6097103df24e65bc1',
    options: [
      { name: 'Setup Installer (.exe)', type: '64-bit Recommended', ext: 'exe', size: '68.4 MB', primary: true },
      { name: 'Portable Binary (.zip)', type: 'No Install Needed', ext: 'zip', size: '62.1 MB' },
      { name: 'MSI Enterprise (.msi)', type: 'Active Directory / GPO', ext: 'msi', size: '69.8 MB' },
      { name: 'ARM64 Installer (.exe)', type: 'Snapdragon / Surface Pro', ext: 'exe', size: '64.5 MB' },
    ],
    guideSteps: [
      'Run the downloaded installer `Subqancious-Mind-Setup-v2.4.0.exe`',
      'Follow the on-screen wizard (takes ~15 seconds)',
      'Launch Subqancious Mind — your private cloud starts immediately on port 3000'
    ]
  },
  mac: {
    id: 'mac',
    name: 'macOS',
    icon: AppleIcon,
    tagline: 'macOS 12.0 Monterey or higher',
    fileName: 'Subqancious-Mind-v2.4.0-AppleSilicon.dmg',
    fileSize: '64.2 MB',
    primaryLabel: 'Download for macOS (Apple Silicon)',
    primaryFormat: 'M1 / M2 / M3 / M4 (.dmg)',
    requirements: 'macOS 12+ Monterey, Ventura, Sonoma, Sequoia (M-Series / Intel)',
    cliCmd: 'brew install subqancious/tap/subqancious',
    sha256: '9b734ca839b2a67e1081ec94d80766be3320f78d91a6d41804f32e947bc6a480',
    options: [
      { name: 'Apple Silicon (.dmg)', type: 'M1 / M2 / M3 / M4 Native', ext: 'dmg', size: '64.2 MB', primary: true },
      { name: 'Intel Mac (.dmg)', type: 'x86_64 Intel Processors', ext: 'dmg', size: '67.8 MB' },
      { name: 'Universal Package (.pkg)', type: 'Enterprise MDM / Jamf', ext: 'pkg', size: '128.5 MB' },
    ],
    guideSteps: [
      'Open the downloaded `.dmg` disk image',
      'Drag Subqancious Mind to your Applications folder',
      'Launch the app — NOUS AI assistant and local server start automatically'
    ]
  },
  linux: {
    id: 'linux',
    name: 'Linux',
    icon: LinuxIcon,
    tagline: 'Ubuntu, Debian, Fedora, Arch & Generic Linux',
    fileName: 'Subqancious-Mind-v2.4.0.AppImage',
    fileSize: '58.7 MB',
    primaryLabel: 'Download AppImage (.AppImage)',
    primaryFormat: 'Universal x86_64 / ARM64',
    requirements: 'glibc 2.28+, systemd or SysVinit, 64-bit Architecture',
    cliCmd: 'curl -fsSL https://get.subqancious.io/install.sh | bash',
    sha256: 'c812d480746e1074a3f9e913a07297e6be951a87754f2c5d8719bc4a896d8492',
    options: [
      { name: 'AppImage (.AppImage)', type: 'Universal All Distros', ext: 'AppImage', size: '58.7 MB', primary: true },
      { name: 'Debian / Ubuntu (.deb)', type: 'dpkg / apt repository', ext: 'deb', size: '54.3 MB' },
      { name: 'Fedora / RHEL (.rpm)', type: 'rpm / dnf repository', ext: 'rpm', size: '55.1 MB' },
      { name: 'Arch Linux (AUR)', type: 'yay -S subqancious-bin', ext: 'tar.zst', size: '51.9 MB' },
    ],
    guideSteps: [
      'Make AppImage executable: `chmod +x Subqancious-Mind-v2.4.0.AppImage`',
      'Run `./Subqancious-Mind-v2.4.0.AppImage` or install with `dpkg -i *.deb`',
      'Server daemon starts locally at `http://localhost:3000`'
    ]
  },
  docker: {
    id: 'docker',
    name: 'Docker / Server',
    icon: DockerIcon,
    tagline: 'Self-Hosted Headless Server & Cloud Containers',
    fileName: 'docker-compose.yml',
    fileSize: '1.2 KB',
    primaryLabel: 'Copy Docker Run Command',
    primaryFormat: 'Docker Engine / Podman',
    requirements: 'Docker 20.10+, Docker Compose v2, 512MB RAM minimum',
    cliCmd: 'docker run -d -p 3000:3000 -v subq_data:/data --name subqancious subqancious/server:latest',
    sha256: 'docker pull subqancious/server:latest',
    options: [
      { name: 'Docker Compose', type: 'Production multi-container', ext: 'yml', size: '1.2 KB', primary: true },
      { name: 'Kubernetes Helm Chart', type: 'Cluster orchestration', ext: 'tgz', size: '14.5 KB' },
      { name: 'Unraid / TrueNAS Template', type: 'Community App Store', ext: 'xml', size: '3.8 KB' },
    ],
    guideSteps: [
      'Run the Docker command or use `docker compose up -d`',
      'Pass `-e AUTH_KEY=your_key` for automated team authentication',
      'Access web interface at `http://your-server-ip:3000`'
    ]
  }
};

export default function DownloadModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('windows');
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [downloadState, setDownloadState] = useState({ active: false, fileName: '', platform: '' });
  const [detectedOS, setDetectedOS] = useState('windows');

  // Detect User Operating System on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.includes('win')) {
        setDetectedOS('windows');
        setActiveTab('windows');
      } else if (ua.includes('mac') || ua.includes('darwin')) {
        setDetectedOS('mac');
        setActiveTab('mac');
      } else if (ua.includes('linux')) {
        setDetectedOS('linux');
        setActiveTab('linux');
      }
    }
  }, []);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setDownloadState({ active: false, fileName: '', platform: '' });
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopy = (text, type = 'cmd') => {
    navigator.clipboard.writeText(text);
    if (type === 'cmd') {
      setCopiedCmd(true);
      setTimeout(() => setCopiedCmd(false), 2000);
    } else {
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2000);
    }
  };

  const triggerDownload = (fileName, platformName) => {
    // Generate real placeholder file to trigger realistic browser download
    const sampleContent = `# Subqancious Mind — Setup & Quickstart Guide (v2.4.0)
Platform: ${platformName}
File: ${fileName}
License: Subqancious Enterprise / Free Tier
Architecture: x86_64 / ARM64 Native

==================================================
1. STARTING THE PLATFORM
==================================================
Run the installer or binary directly on your machine.
The platform will launch a local secure web server:
URL: https://localhost:3000

==================================================
2. KEY FEATURES ENABLED
==================================================
• Zero Cloud Dependency (100% on-premise storage)
• NOUS Voice AI & Autonomous Chat Management
• End-to-End Local HTTPS Encryption
• Multi-User Isolated Workspaces
• Automatic LAN peer discovery & Bandwidth metering

==================================================
3. NEED ASSISTANCE?
==================================================
Documentation: https://github.com/sanniv0/Subqoncious-Mind-Website
Support: contact@subqoncious.com
`;
    const blob = new Blob([sampleContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadState({
      active: true,
      fileName,
      platform: platformName
    });
  };

  const currentPlatform = platforms[activeTab];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="download-modal-overlay-wrapper">
          {/* Backdrop Blur */}
          <motion.div
            className="download-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="download-modal-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          >
            {/* Header */}
            <div className="download-modal-header">
              <div className="download-header-left">
                <div className="download-modal-badge">
                  <span className="download-badge-pulse" />
                  <Sparkles size={12} />
                  <span>v2.4.0 STABLE RELEASE</span>
                </div>
                {detectedOS === activeTab && (
                  <span className="download-detected-chip">
                    Detected for your device
                  </span>
                )}
              </div>
              <button 
                onClick={onClose} 
                className="download-modal-close-btn"
                aria-label="Close download window"
              >
                <X size={20} />
              </button>
            </div>

            {/* Title Section */}
            <div className="download-modal-title-bar">
              <h2 id="download-modal-title" className="download-modal-title">
                Get Started with Subqancious Mind
              </h2>
              <p className="download-modal-subtitle">
                Deploy in seconds on your own hardware. 100% private, zero cloud risk.
              </p>
            </div>

            {/* Platform Selector Tabs */}
            <div className="download-modal-tabs">
              {Object.values(platforms).map((plat) => {
                const IconComponent = plat.icon;
                const isSelected = activeTab === plat.id;
                const isUserOS = detectedOS === plat.id;

                return (
                  <button
                    key={plat.id}
                    className={`download-platform-tab ${isSelected ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(plat.id);
                      setDownloadState({ active: false, fileName: '', platform: '' });
                    }}
                  >
                    <div className="download-tab-icon-wrap">
                      <IconComponent size={20} />
                    </div>
                    <div className="download-tab-text">
                      <div className="download-tab-name">
                        {plat.name}
                        {isUserOS && <span className="tab-os-dot" title="Your current OS" />}
                      </div>
                      <div className="download-tab-sub">
                        {plat.id === 'docker' ? 'Server/Cloud' : plat.options[0].type.split(' ')[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Content Area */}
            <div className="download-modal-body">
              {/* Left/Main Column: Primary Download & Options */}
              <div className="download-body-main">
                {/* Download Started Alert Banner */}
                {downloadState.active && (
                  <motion.div 
                    className="download-success-banner"
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <CheckCircle2 size={20} className="download-success-icon" />
                    <div className="download-success-text">
                      <strong>Download Started:</strong> {downloadState.fileName}
                      <span>If it didn't start automatically, <button onClick={() => triggerDownload(currentPlatform.fileName, currentPlatform.name)} className="download-retry-btn">click here to retry</button>.</span>
                    </div>
                  </motion.div>
                )}

                {/* Primary Action Card */}
                <div className="download-hero-card">
                  <div className="download-hero-info">
                    <div className="download-hero-tagline">{currentPlatform.tagline}</div>
                    <div className="download-hero-fileinfo">
                      <span className="file-size-badge"><HardDrive size={13} /> {currentPlatform.fileSize}</span>
                      <span className="file-format-badge"><Layers size={13} /> {currentPlatform.primaryFormat}</span>
                      <span className="file-security-badge"><ShieldCheck size={13} /> Code Signed & SHA256 Verified</span>
                    </div>
                  </div>

                  <button
                    className="download-primary-btn"
                    onClick={() => {
                      if (activeTab === 'docker') {
                        handleCopy(currentPlatform.cliCmd, 'cmd');
                      } else {
                        triggerDownload(currentPlatform.fileName, currentPlatform.name);
                      }
                    }}
                  >
                    {activeTab === 'docker' ? (
                      <>
                        <Copy size={20} />
                        <span>{copiedCmd ? 'Command Copied to Clipboard!' : currentPlatform.primaryLabel}</span>
                      </>
                    ) : (
                      <>
                        <Download size={20} />
                        <span>{currentPlatform.primaryLabel}</span>
                        <ArrowRight size={18} className="download-btn-arrow" />
                      </>
                    )}
                  </button>
                </div>

                {/* Available Package Formats */}
                <div className="download-options-section">
                  <div className="download-section-heading">Available Formats & Builds</div>
                  <div className="download-options-grid">
                    {currentPlatform.options.map((opt, idx) => (
                      <div 
                        key={idx} 
                        className={`download-option-card ${opt.primary ? 'primary-option' : ''}`}
                        onClick={() => triggerDownload(`Subqancious-v2.4.0-${opt.name.replace(/\s+/g, '-')}.${opt.ext}`, currentPlatform.name)}
                      >
                        <div className="option-card-left">
                          <div className="option-format-tag">.{opt.ext}</div>
                          <div>
                            <div className="option-name">{opt.name}</div>
                            <div className="option-type">{opt.type}</div>
                          </div>
                        </div>
                        <div className="option-card-right">
                          <span className="option-size">{opt.size}</span>
                          <button className="option-dl-icon" title={`Download ${opt.name}`}>
                            <Download size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CLI / Quick Terminal Install */}
                <div className="download-cli-section">
                  <div className="download-section-heading">
                    <span>Quick Install via Terminal</span>
                    <span className="cli-hint">One-click copy</span>
                  </div>
                  <div className="download-cli-box">
                    <div className="cli-box-icon"><Terminal size={16} /></div>
                    <code className="cli-code">{currentPlatform.cliCmd}</code>
                    <button 
                      className={`cli-copy-btn ${copiedCmd ? 'copied' : ''}`}
                      onClick={() => handleCopy(currentPlatform.cliCmd, 'cmd')}
                      aria-label="Copy terminal command"
                    >
                      {copiedCmd ? <Check size={15} /> : <Copy size={15} />}
                      <span>{copiedCmd ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Setup Steps & Verification */}
              <div className="download-body-sidebar">
                {/* 3-Step Quick Guide */}
                <div className="download-sidebar-card">
                  <div className="sidebar-card-title">
                    <Zap size={15} />
                    <span>Quick Setup Guide</span>
                  </div>
                  <ol className="download-steps-list">
                    {currentPlatform.guideSteps.map((step, sidx) => (
                      <li key={sidx} className="download-step-item">
                        <span className="step-number">{sidx + 1}</span>
                        <div className="step-content">{step}</div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* System Specs */}
                <div className="download-sidebar-card">
                  <div className="sidebar-card-title">
                    <Cpu size={15} />
                    <span>System Requirements</span>
                  </div>
                  <p className="sidebar-specs-text">{currentPlatform.requirements}</p>
                </div>

                {/* SHA256 Hash Verification */}
                <div className="download-sidebar-card">
                  <div className="sidebar-card-title">
                    <ShieldCheck size={15} />
                    <span>SHA-256 Checksum</span>
                  </div>
                  <div className="sha-hash-box">
                    <code className="sha-hash-text">{currentPlatform.sha256}</code>
                    <button 
                      className="sha-copy-btn"
                      onClick={() => handleCopy(currentPlatform.sha256, 'hash')}
                      title="Copy SHA-256 Hash"
                    >
                      {copiedHash ? <Check size={13} /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="download-modal-footer">
              <div className="download-footer-left">
                <ShieldCheck size={14} />
                <span>Zero telemetry. Zero external cloud dependencies. 100% Open Architecture.</span>
              </div>
              <div className="download-footer-right">
                <a 
                  href="https://github.com/sanniv0/Subqoncious-Mind-Website" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-github-link"
                >
                  <span>Release Notes & Source</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
