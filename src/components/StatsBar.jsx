import { motion } from 'framer-motion';
import { Shield, Zap, HardDrive, Users } from 'lucide-react';

const stats = [
  { icon: <Shield size={18} />, number: '256-bit', label: 'SSL Encryption' },
  { icon: <Zap size={18} />, number: '<30s', label: 'Deployment Time' },
  { icon: <HardDrive size={18} />, number: '∞', label: 'Storage Capacity' },
  { icon: <Users size={18} />, number: 'Multi', label: 'User Workspaces' },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-bar-inner">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
