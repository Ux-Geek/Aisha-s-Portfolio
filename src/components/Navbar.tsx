import React, { useState, useEffect } from 'react';
import { Mail, Sparkles, Menu, X } from 'lucide-react';
import { AISHA_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200/60 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          className="text-base font-semibold tracking-tight text-neutral-900 flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>aisha.media</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('footer-cta')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Contact me
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Hire Aisha</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => scrollTo('projects')}
            className="block w-full text-left text-base font-medium text-neutral-800 hover:text-neutral-900 py-1"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left text-base font-medium text-neutral-800 hover:text-neutral-900 py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="block w-full text-left text-base font-medium text-neutral-800 hover:text-neutral-900 py-1"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('footer-cta')}
            className="block w-full text-left text-base font-medium text-neutral-800 hover:text-neutral-900 py-1"
          >
            Contact me
          </button>
          <div className="pt-2 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Hire Aisha</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
