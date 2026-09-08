# Subqoncious Mind — Official Web Experience

> **Your Computer. Your Cloud. Your Rules.**  
> Transform your personal computer into a secure, encrypted personal cloud with zero third-party server dependency.

---

## 🌟 Overview

**Subqoncious Mind** is a modern landing page and product presentation platform for the Subqoncious Mind personal cloud workspace. It highlights key architectural features including local hosting, direct P2P connectivity, encrypted tunnels, an integrated AI voice assistant (**Nova AI**), interactive desktop chat, and zero-knowledge security.

---

## ✨ Features Highlighted

- **🧠 Nova AI Voice Engine**: Real-time neural voice control and intelligent local workflow automation.
- **💬 Interactive Chat & Desktop Sync**: Seamless conversation interface with file indexers and desktop agents.
- **🔒 Zero-Knowledge Security**: AES-256 local encryption, TLS 1.3 encrypted tunnels, and self-auditing security layers.
- **🌐 Dynamic Connection Modes**:
  - **Direct P2P**: Ultra-low latency (<5ms) direct connection over local network or mesh VPN.
  - **Cloudflare Tunnels**: Secure public access with automatic SSL certificates without port forwarding.
  - **Local LAN & Offline Direct**: Full functionality without active internet connection.
- **📊 Real-time Uptime & Stats Bar**: Live metrics showing 99.9% availability and zero telemetry data leakage.
- **💎 Glassmorphism UI**: High-craft aesthetic featuring smooth dynamic backgrounds (`NeuralCanvas`), dark mode themes, and fluid Framer Motion animations.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Custom Design System with CSS variables & Glassmorphism)
- **Typography**: Google Fonts (*Inter*, *Space Grotesk*, *JetBrains Mono*)

---

## 📁 Project Structure

```text
d:\Git_Subqoncious-Mind-Website\
├── index.html              # HTML Entry Point & SEO Metadata
├── package.json            # Dependencies & Scripts
├── vite.config.js          # Vite Configuration
├── .gitignore              # Git Ignore Definitions
├── src/
│   ├── main.jsx            # Application Root Setup
│   ├── App.jsx             # Main Page Layout & Section Assembly
│   ├── index.css           # Global CSS & Design System Tokens
│   └── components/
│       ├── Navbar.jsx          # Header with Status & Navigation
│       ├── Hero.jsx            # Main Hero Section
│       ├── NeuralCanvas.jsx    # Interactive Background Visuals
│       ├── StatsBar.jsx        # Metrics & Performance Counters
│       ├── FeatureGrid.jsx     # Core Platform Capabilities
│       ├── NovaShowcase.jsx    # Nova AI Voice Assistant Showcase
│       ├── ChatShowcase.jsx    # Desktop Chat & AI Interface Mockup
│       ├── ConnectionModes.jsx # Connection Protocol Breakdown
│       ├── SecuritySection.jsx # Architecture & Encryption Details
│       ├── PricingSection.jsx  # Community, Pro & Enterprise Plans
│       └── Footer.jsx          # Footer & Social Links
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed.

### 1. Installation

Clone the repository and install dependencies:

# Install dependencies
```bash
npm install
```

### 2. Run Development Server

Start the local dev server with hot module replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL output in your terminal).

### 3. Build for Production

Compile production-ready minified assets into the `dist/` folder:

```bash
npm run build
```

### 4. Preview Production Build

Preview the built application locally:

```bash
npm run preview
```

---

## 📄 License

This project is proprietary software under the **Subqoncious Mind** brand. All rights reserved.
