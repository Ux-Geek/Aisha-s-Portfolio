import React from 'react';
import { Mail, Linkedin, Phone, Video, Share2, Instagram } from 'lucide-react';
import { AISHA_INFO } from '../data/portfolioData';

interface FloatingSidebarProps {
  onOpenContact: () => void;
}

export const FloatingSidebar: React.FC<FloatingSidebarProps> = ({ onOpenContact }) => {
  return (
    <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3 bg-white/70 backdrop-blur-md p-2 rounded-full border border-neutral-200/70 shadow-sm">
      <button
        onClick={onOpenContact}
        title="Send Email"
        className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-900 text-neutral-600 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
      >
        <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
      </button>

      <a
        href={AISHA_INFO.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn Profile"
        className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-900 text-neutral-600 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
      >
        <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
      </a>

      <a
        href={`https://wa.me/2347065396819`}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Chat"
        className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-900 text-neutral-600 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
      >
        <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
      </a>

      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: `${AISHA_INFO.name} Portfolio`,
              url: window.location.href,
            }).catch(() => {});
          } else {
            onOpenContact();
          }
        }}
        title="Share Portfolio"
        className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-900 text-neutral-600 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
      >
        <Share2 className="w-4 h-4 transition-transform group-hover:scale-110" />
      </button>
    </aside>
  );
};
