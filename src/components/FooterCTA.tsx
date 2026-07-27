import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AISHA_INFO, TOOL_BADGES } from '../data/portfolioData';
import { Sparkles, Mail, Video, Film, Palette, Image, FileText, Instagram, Layout, Mic, Check, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CreativeToolkit } from './CreativeToolkit';

interface FooterCTAProps {
  onOpenContact: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  const handleHireClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#10b981', '#f59e0b', '#ec4899'],
    });
    onOpenContact();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AISHA_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Icon mapping for tossable badges
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-4 h-4 text-neutral-900" />;
      case 'Film':
        return <Film className="w-4 h-4 text-purple-600" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-cyan-600" />;
      case 'Image':
        return <Image className="w-4 h-4 text-sky-600" />;
      case 'FileText':
        return <FileText className="w-4 h-4 text-blue-600" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4 text-pink-600" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-neutral-800" />;
      case 'Mic':
        return <Mic className="w-4 h-4 text-indigo-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-neutral-700" />;
    }
  };

  return (
    <footer id="footer-cta" className="relative pt-20 pb-12 bg-neutral-50/50 overflow-hidden">
      <CreativeToolkit />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 pointer-events-none">
        {/* Center Badge Icon (from screenshot 3) */}
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-6 transform hover:rotate-12 transition-transform cursor-pointer pointer-events-auto">
          <Film className="w-8 h-8 text-white" />
        </div>

        {/* Subtitle */}
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">
          Let's work together
        </p>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight max-w-2xl mx-auto mb-8">
          I'm available for full-time media opportunities, video editing, collaborations, or digital content projects. Let's connect and create impactful visual stories.
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 pointer-events-auto">
          <button
            onClick={handleHireClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-98"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Hire Aisha</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-200 shadow-2xs transition-all cursor-pointer active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Email copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-neutral-500" />
                <span>Send me a mail</span>
              </>
            )}
          </button>
        </div>



        {/* Signed CTA Note (as seen in Screenshot 3) */}
        <div className="max-w-xl mx-auto my-12 text-center px-4">
          <p className="text-sm sm:text-base text-neutral-600 italic font-serif leading-relaxed">
            "What Aisha creates in a tiny frame of video is like what Messi does in a small corner of the field—turning limits into magic with interaction, vision, and creativity."
          </p>
          <span className="block mt-2 text-xs font-semibold text-neutral-500 tracking-wide uppercase">
            — Aisha Adeshina
          </span>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-neutral-200/60 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Aisha Adeshina. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>in Ilorin, Kwara, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
