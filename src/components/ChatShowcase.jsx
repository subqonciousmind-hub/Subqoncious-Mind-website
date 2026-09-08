import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot } from 'lucide-react';

const chatSequence = [
  { role: 'user', text: 'Find all client deliverables from Q4' },
  { role: 'bot', text: 'Found 12 files across 4 directories:\n• Client Assets/Meridian/deliverables-q4.zip (48 MB)\n• Client Assets/Atlas/final-renders.zip (1.2 GB)\n• Reports/Q4-summary.pdf (2.4 MB)\n…and 9 more' },
  { role: 'user', text: 'How much storage is the team using?' },
  { role: 'bot', text: '📊 Workspace Analysis:\n• Total: 42.8 GB across 3 users\n• Sarah: 18.2 GB (Design Assets)\n• James: 14.1 GB (Client Files)\n• Priya: 10.5 GB (Video Renders)\n• Storage: Unlimited on local drive' },
  { role: 'user', text: 'Create a new folder for the Atlas project' },
  { role: 'bot', text: 'Successfully created new folder: Atlas Project Q1\n\nPath: Client Assets/Atlas Project Q1/\n✅ Folder is ready for file uploads.' },
];

export default function ChatShowcase() {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (currentIndex >= chatSequence.length) {
      const timeout = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const msg = chatSequence[currentIndex];
    const delay = msg.role === 'user' ? 1500 : 2000;

    if (msg.role === 'bot') {
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, msg]);
        setCurrentIndex(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      setMessages(prev => [...prev, msg]);
      setCurrentIndex(prev => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  return (
    <section className="section" id="chat">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-eyebrow" style={{ textAlign: 'center' }}>Nous AI Agent</div>
        <h2 className="section-title" style={{ margin: '0 auto 20px', textAlign: 'center' }}>
          Your workspace, conversational<span className="period">.</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 0', textAlign: 'center' }}>
          Teams manage their workspace through natural conversation. The Nous AI assistant 
          understands your file system — search, navigate, analyze storage, and manage files 
          without touching the UI.
        </p>

        <div className="chat-demo-container">
          <div className="chat-demo-header">
            <div className="chat-demo-avatar">
              <Bot size={16} />
            </div>
            <span className="chat-demo-name">Nous Assistant</span>
            <span className="chat-demo-status">Online</span>
          </div>

          <div className="chat-demo-messages" ref={chatContainerRef} style={{ overflowY: 'auto', maxHeight: '280px' }}>
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`chat-msg ${msg.role}`}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {msg.text.split('\n').map((line, li) => (
                    <span key={li}>
                      {line}
                      {li < msg.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                className="chat-msg bot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ display: 'flex', gap: '4px', padding: '16px 20px' }}
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--text-dim)',
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, delay: d * 0.2, repeat: Infinity }}
                  />
                ))}
              </motion.div>
            )}
          </div>

          <div className="chat-demo-input">
            <span className="chat-demo-input-field">Ask Nous to find, analyze, or manage files...</span>
            <div className="chat-demo-input-send">
              <Send size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
