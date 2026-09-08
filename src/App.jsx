import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import StatsBar from './components/StatsBar';
import FeatureGrid from './components/FeatureGrid';
import UseCases from './components/UseCases';
import NovaShowcase from './components/NovaShowcase';
import ChatShowcase from './components/ChatShowcase';
import ROISection from './components/ROISection';
import ConnectionModes from './components/ConnectionModes';
import SecuritySection from './components/SecuritySection';
import TestimonialsSection from './components/TestimonialsSection';
import FounderSection from './components/FounderSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FounderModal from './components/FounderModal';
import DevTeamModal from './components/DevTeamModal';
import DownloadModal from './components/DownloadModal';

// ponytail: hash routing, no router dep. Swap for react-router if we ever need
// nested routes, real URLs, or SSR.
function useRoute() {
  const read = () => (window.location.hash.replace(/^#\/?/, '').split('?')[0] || 'home');
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onHash = () => {
      setRoute(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

export default function App() {
  const route = useRoute();
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [isDevTeamModalOpen, setIsDevTeamModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const openFounderModal = () => setIsFounderModalOpen(true);
  const closeFounderModal = () => setIsFounderModalOpen(false);
  const openDevTeamModal = () => setIsDevTeamModalOpen(true);
  const closeDevTeamModal = () => setIsDevTeamModalOpen(false);
  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  const pages = {
    home: (
      <>
        <Hero
          onOpenFounderModal={openFounderModal}
          onOpenDevTeamModal={openDevTeamModal}
        />
        <TrustedBy />
        <StatsBar />
        <TestimonialsSection />
      </>
    ),
    features: (
      <>
        <FeatureGrid />
        <NovaShowcase />
        <ChatShowcase />
        <ConnectionModes />
      </>
    ),
    'use-cases': (
      <>
        <UseCases />
        <ROISection />
      </>
    ),
    security: <SecuritySection />,
    pricing: <PricingSection onOpenDownloadModal={openDownloadModal} />,
    about: <FounderSection />,
    contact: <ContactSection />,
  };

  return (
    <>
      <Navbar onOpenDownloadModal={openDownloadModal} route={route} />
      <main>{pages[route] ?? pages.home}</main>
      <Footer />

      {/* Floating Founder Modal */}
      <FounderModal 
        isOpen={isFounderModalOpen} 
        onClose={closeFounderModal} 
        onOpenDevTeamModal={openDevTeamModal}
      />

      {/* Dev Team Modal */}
      <DevTeamModal 
        isOpen={isDevTeamModalOpen} 
        onClose={closeDevTeamModal} 
      />

      {/* Get Started / Multi-OS Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={closeDownloadModal}
      />
    </>
  );
}
