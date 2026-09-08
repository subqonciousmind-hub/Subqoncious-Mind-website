import { useState } from 'react';
import { ArrowRight, Download, Shield, Zap, Server, Copy, Check, User, Code2 } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';

export default function Hero({ onOpenFounderModal, onOpenDevTeamModal }) {

  return (
    <section className="hero" id="hero">
      <NeuralCanvas />

      <div className="hero-content">
        {/* Announcement chip */}
        <div className="hero-chip">
          <span className="hero-chip-tag">
            <span className="hero-chip-tag-dot" />
            ENTERPRISE
          </span>
          <span className="hero-chip-text">
            Now with multi-user workspaces & AI assistant →
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Your <span className="hero-headline-accent-alt">Infrastructure</span><span className="period">.</span>{' '}
          <br className="hide-desktop" />
          Your <span className="hero-headline-accent">Data</span><span className="period">.</span>{' '}
          <br className="hide-desktop" />
          Zero Cloud Risk<span className="period">.</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline">
          Deploy a self-hosted file sharing platform your team can trust. 
          Encrypted transfers, AI-powered navigation, multi-user isolation — 
          all running on your own hardware. No data ever leaves your premises.
        </p>

        {/* CTA Group */}
        <div className="hero-cta-group">
          <button 
            type="button" 
            onClick={onOpenFounderModal} 
            className="btn-primary"
            style={{ cursor: 'pointer' }}
          >
            <User size={18} />
            Meet The Person Behind
          </button>
          <a href="#/features" className="btn-secondary">
            See All Features
            <ArrowRight size={16} />
          </a>
        </div>



        {/* Trust indicators */}
        <div className="hero-trust">
          <div className="hero-trust-item">
            <Shield size={14} />
            <span>HTTPS Encrypted</span>
          </div>
          <div className="hero-trust-item">
            <Server size={14} />
            <span>100% On-Premise</span>
          </div>
          <div className="hero-trust-item">
            <Zap size={14} />
            <span>Deploy in Under 30s</span>
          </div>
        </div>
      </div>
    </section>
  );
}
