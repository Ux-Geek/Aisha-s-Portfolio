import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { AISHA_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Profile Header with 0.75x Rounded Square Image */}
      <div className="flex items-center gap-4 sm:gap-5 mb-8">
        <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-[20px] overflow-hidden border-[0.5px] border-[#dcdcdc] bg-[#fbfbfb] flex-shrink-0">
          <img
            src="/images/aisha_profile.png"
            alt={AISHA_INFO.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-left leading-tight">
          <h2 className="block text-[16px] font-medium tracking-tight text-[#999999]">
            {AISHA_INFO.name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
            Social Media & Growth Specialist
          </p>
        </div>
      </div>

      {/* Main Headline */}
      <h1 
        className="text-[44px] font-medium text-[#444444] tracking-tight leading-[1.2] mb-6 max-w-3xl"
        style={{ fontFamily: '\"SF Pro Rounded\", -apple-system, sans-serif' }}
      >
        Media & Content Creator and Video Editor obsessed with crafting engaging, high-impact digital visual stories.
      </h1>

      {/* Subtitle Paragraph */}
      <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mb-10">
        Demonstrated track record of growing video viewership from 1,000 to over 11,000+ views. Experiential in social campaigns, editorial newsletters, video reels, and brand storytelling in Kwara & across Nigeria.
      </p>

      {/* Primary Action Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <a
          href={`mailto:${AISHA_INFO.email}`}
          className={`inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-full transition-all duration-300 shadow-lg cursor-pointer ${
            scrolled ? 'bg-black/70 backdrop-blur-md text-white' : 'bg-black text-white'
          }`}
        >
          <Mail className="w-4 h-4 text-white" />
          <span>Send me a mail</span>
        </a>
      </div>
    </section>
  );
};
