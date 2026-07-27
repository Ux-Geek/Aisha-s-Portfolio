import React, { useState } from 'react';
import { AISHA_INFO } from '../data/portfolioData';
import { X, Mail, Phone, Linkedin, Send, Check, Sparkles, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Video Editing',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(AISHA_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-neutral-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative animate-in zoom-in-95 max-h-[92vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 bg-neutral-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Hire & Projects</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold">Get in Touch with Aisha</h3>
          <p className="text-xs text-neutral-300 mt-1">
            Fill in the form below or contact directly via Email / WhatsApp.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Contact Bar */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCopy}
              className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200/80 text-left transition-colors cursor-pointer flex flex-col gap-1"
            >
              <div className="flex items-center justify-between text-xs font-medium text-neutral-500">
                <span>Direct Email</span>
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Mail className="w-3.5 h-3.5 text-neutral-400" />}
              </div>
              <span className="text-xs font-semibold text-neutral-800 truncate">
                {copiedEmail ? 'Copied to Clipboard!' : AISHA_INFO.email}
              </span>
            </button>

            <a
              href={`https://wa.me/2347065396819`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-50 hover:bg-emerald-100/80 rounded-xl border border-emerald-200/80 text-left transition-colors cursor-pointer flex flex-col gap-1"
            >
              <div className="flex items-center justify-between text-xs font-medium text-emerald-700">
                <span>WhatsApp</span>
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="text-xs font-semibold text-emerald-900 truncate">
                +234 706 539 6819
              </span>
            </a>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-emerald-900">Message Sent Successfully!</h4>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Thank you for reaching out to Aisha. She will review your details and respond back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-5 py-2.5 rounded-full bg-emerald-700 text-white text-xs font-medium hover:bg-emerald-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-neutral-50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-neutral-50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-neutral-50"
                >
                  <option value="Video Editing">Video Editing & Short Reels</option>
                  <option value="Social Media Content">Social Media Campaign</option>
                  <option value="Editorial Newsletter">Editorial & Content Strategy</option>
                  <option value="Full-Time Role">Full-Time / Contract Opportunity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Project Message / Brief</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell Aisha about your campaign goals, timeline, or video specs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-neutral-50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message to Aisha</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
