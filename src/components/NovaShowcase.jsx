import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, ArrowRight } from 'lucide-react';

const commands = [
  { voice: '"Open Client Assets"', action: 'Navigates to Client Assets/', icon: '📂' },
  { voice: '"Find quarterly-report.pdf"', action: 'Deep search across all directories', icon: '🔍' },
  { voice: '"Go back"', action: 'Returns to parent directory', icon: '⬅️' },
  { voice: '"Search brand guidelines"', action: 'Recursive search for matching files', icon: '🖼️' },
  { voice: '"Show project renders"', action: 'Opens the project renders folder', icon: '📥' },
  { voice: '"Home"', action: 'Returns to workspace root', icon: '🏠' },
];

const waveformBars = 24;

export default function NovaShowcase() {
  const [activeCommand, setActiveCommand] = useState(0);
  const [isListening, setIsListening] = useState(false);

  /* Auto-cycle through commands */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCommand((prev) => (prev + 1) % commands.length);
      setIsListening(true);
      setTimeout(() => setIsListening(false), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section nova-section" id="nous">
      <div className="container">
        <div className="nova-grid">
          {/* Left — Voice Orb */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
            <motion.div
              className="nova-voice-orb"
              animate={isListening ? { scale: [1, 1.06, 1] } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <div className="nova-voice-orb-inner">
                <Mic size={32} color="#0a0908" />
              </div>
            </motion.div>

            {/* Waveform visualization */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              height: '40px',
            }}>
              {Array.from({ length: waveformBars }).map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: '3px',
                    borderRadius: '2px',
                    background: 'var(--primary)',
                  }}
                  animate={{
                    height: isListening
                      ? [4, Math.random() * 28 + 8, 4]
                      : 4,
                    opacity: isListening ? [0.4, 0.8, 0.4] : 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.03,
                    repeat: isListening ? Infinity : 0,
                    repeatType: 'reverse',
                  }}
                />
              ))}
            </div>

            {/* Current command display */}
            <motion.div
              key={activeCommand}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '16px',
                color: 'var(--primary)',
                textAlign: 'center',
              }}
            >
              {commands[activeCommand].voice}
            </motion.div>
          </div>

          {/* Right — Info + Command List */}
          <div>
            <div className="section-eyebrow">NOUS AI Voice</div>
            <h2 className="section-title" style={{ maxWidth: '500px' }}>
              Navigate shared drives hands-free<span className="period">.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              NOUS — <em>Neural Oral Voice Assistant</em> — uses browser-native 
              Web Speech API with Levenshtein fuzzy matching. No API keys, no 
              cloud processing. Your team speaks naturally and files appear instantly. 
              Perfect for meetings, presentations, and multitasking workflows.
            </p>

            <div className="nova-commands">
              {commands.map((cmd, i) => (
                <motion.div
                  key={i}
                  className="nova-command"
                  style={{
                    borderColor: i === activeCommand ? 'var(--primary)' : undefined,
                    background: i === activeCommand ? 'var(--primary-muted)' : undefined,
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span style={{ fontSize: '16px' }}>{cmd.icon}</span>
                  <span className="nova-command-voice">{cmd.voice}</span>
                  <span className="nova-command-action">
                    <ArrowRight size={12} style={{ marginRight: 4, opacity: 0.5 }} />
                    {cmd.action}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
