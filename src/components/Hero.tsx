import React from 'react';
import { Sparkles, Calendar, ArrowUpRight, Copy, Check, Video } from 'lucide-react';
import { AISHA_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AISHA_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Profile Pill Badge */}
      <div className="inline-flex items-center gap-3 bg-neutral-100/90 border border-neutral-200/80 rounded-full p-1.5 pr-4 shadow-2xs mb-8 transition-transform hover:scale-[1.02]">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
          alt={AISHA_INFO.name}
          className="w-10 h-10 rounded-full object-cover border border-white shadow-2xs"
          referrerPolicy="no-referrer"
        />
        <div className="text-left leading-tight">
          <h2 className="text-sm font-semibold text-neutral-900">{AISHA_INFO.name}</h2>
          <p className="text-xs text-neutral-500 font-medium">{AISHA_INFO.shortRole}</p>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.2] mb-6 max-w-3xl mx-auto">
        Media & Content Creator and Video Editor obsessed with crafting engaging, high-impact digital visual stories.
      </h1>

      {/* Subtitle Paragraph */}
      <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
        Demonstrated track record of growing video viewership from 1,000 to over 11,000+ views. Experiential in social campaigns, editorial newsletters, video reels, and brand storytelling in Kwara & across Nigeria.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-98"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Hire me for Media & Video</span>
        </button>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200/80 border border-neutral-200 transition-all cursor-pointer active:scale-98"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700">Email copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-neutral-500" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
