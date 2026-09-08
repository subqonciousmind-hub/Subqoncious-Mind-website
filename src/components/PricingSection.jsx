import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles, Building2 } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Perfect for small teams and personal use on your local network.',
    features: [
      { text: 'Unlimited local storage', included: true },
      { text: 'HTTPS encryption', included: true },
      { text: 'Local Wi-Fi access', included: true },
      { text: 'NOUS Voice Assistant', included: true },
      { text: 'Nous AI Chat Agent', included: true },
      { text: '2 connected devices', included: true },
      { text: 'Tailscale mesh VPN', included: false },
      { text: 'Cloudflare Tunnel', included: false },
      { text: 'Unlimited device slots', included: false },
    ],
    cta: 'Download Free',
    popular: false,
    tier: 'free',
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    desc: 'For growing teams who need remote access and more power.',
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'Unlimited device slots', included: true },
      { text: 'Tailscale mesh VPN', included: true },
      { text: 'Cloudflare Tunnel access', included: true },
      { text: 'Large file transfers (10GB+)', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced bandwidth metering', included: true },
      { text: 'Remote access from anywhere', included: true },
      { text: 'Team workspace isolation', included: true },
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    tier: 'pro',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'volume pricing',
    desc: 'For organizations needing custom deployments and dedicated support.',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Volume license keys', included: true },
      { text: 'Custom deployment support', included: true },
      { text: 'SSO integration (SAML/OIDC)', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'On-site deployment assistance', included: true },
      { text: 'Custom SLA', included: true },
      { text: 'Multi-server orchestration', included: true },
      { text: 'Audit logging & reporting', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
    tier: 'enterprise',
  },
];

export default function PricingSection({ onOpenDownloadModal }) {
  return (
    <section className="section" id="pricing">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-eyebrow" style={{ textAlign: 'center' }}>Pricing</div>
        <h2 className="section-title" style={{ margin: '0 auto 20px', textAlign: 'center' }}>
          Start free<span className="period">.</span> Scale with your team<span className="period">.</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          The core platform is completely free. Pro unlocks remote access and more devices. 
          Enterprise adds custom deployment, SSO, and dedicated support.
        </p>

        <div className="pricing-grid pricing-grid-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`pricing-card ${tier.popular ? 'popular' : ''} ${tier.tier === 'enterprise' ? 'enterprise' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="pricing-tier">{tier.name}</div>
                <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginTop: '4px' }}>{tier.desc}</p>
              </div>

              <div className="pricing-price">
                <span className="pricing-amount">{tier.price}</span>
                <span className="pricing-period">{tier.period}</span>
              </div>

              <div className="pricing-features">
                {tier.features.map((feat, fi) => (
                  <div key={fi} className={`pricing-feature ${!feat.included ? 'disabled' : ''}`}>
                    {feat.included ? (
                      <Check size={16} />
                    ) : (
                      <X size={16} />
                    )}
                    {feat.text}
                  </div>
                ))}
              </div>

              {tier.tier === 'free' ? (
                <button
                  type="button"
                  onClick={() => onOpenDownloadModal && onOpenDownloadModal()}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', cursor: 'pointer' }}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </button>
              ) : (
                <a
                  href="#/contact"
                  className={tier.popular ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                >
                  {tier.popular && <Sparkles size={16} />}
                  {tier.tier === 'enterprise' && <Building2 size={16} />}
                  {tier.cta}
                  <ArrowRight size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
