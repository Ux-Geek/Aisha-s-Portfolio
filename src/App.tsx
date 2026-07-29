import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { FloatingSidebar } from './components/FloatingSidebar';
import { Hero } from './components/Hero';
import { PhotoGallery } from './components/PhotoGallery';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Experience } from './components/Experience';
import { AboutSkills } from './components/AboutSkills';
import { FooterCTA } from './components/FooterCTA';
import { ContactModal } from './components/ContactModal';
import { SplashScreen } from './components/SplashScreen';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white" style={{ fontFamily: '\"SF Pro Rounded\", -apple-system, sans-serif' }}>
      
      <AnimatePresence>
        {!splashFinished && (
          <SplashScreen key="splash" onComplete={() => setSplashFinished(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: splashFinished ? 1 : 0, 
          scale: splashFinished ? 1 : 0.95 
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={!splashFinished ? "fixed inset-0 overflow-hidden pointer-events-none" : ""}
      >
        {/* Top Navbar */}
        <Navbar onOpenContact={() => setContactOpen(true)} />

        {/* Floating Left Icons Sidebar (desktop view) */}
        <FloatingSidebar onOpenContact={() => setContactOpen(true)} />

        {/* Main Content Area */}
        <main className="relative">
          {/* Hero Section */}
          <Hero onOpenContact={() => setContactOpen(true)} />

          {/* Tilted Photo Gallery Showcase */}
          <PhotoGallery />

          {/* Selected Work & Projects Grid */}
          <ProjectsGrid />

          {/* Work Experience Section (Screenshot 4 layout) */}
          <Experience />

          {/* Profile & Skills / About Me */}
          <AboutSkills />

          {/* Footer CTA & Tossable Tool Playground (Screenshot 3 layout) */}
          <FooterCTA onOpenContact={() => setContactOpen(true)} />
        </main>

        {/* Contact Modal */}
        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </motion.div>
    </div>
  );
}
