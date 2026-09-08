import { motion } from 'framer-motion';

const partners = [
  { name: 'TechNova Corp', abbr: 'TN' },
  { name: 'Meridian Labs', abbr: 'ML' },
  { name: 'Atlas Digital', abbr: 'AD' },
  { name: 'Quantum Works', abbr: 'QW' },
  { name: 'Vantage Group', abbr: 'VG' },
  { name: 'Pinnacle Systems', abbr: 'PS' },
  { name: 'Nexus AI', abbr: 'NA' },
  { name: 'Forge Studio', abbr: 'FS' },
];

function LogoPlaceholder({ name, abbr }) {
  return (
    <div className="trusted-logo" title={name}>
      <span className="trusted-logo-abbr">{abbr}</span>
      <span className="trusted-logo-name">{name}</span>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="container">
        <motion.p
          className="trusted-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by forward-thinking companies worldwide
        </motion.p>
        <div className="trusted-marquee-wrapper">
          <div className="trusted-marquee">
            {[...partners, ...partners].map((p, i) => (
              <LogoPlaceholder key={i} name={p.name} abbr={p.abbr} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
