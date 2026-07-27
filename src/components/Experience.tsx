import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, Check } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
          My Work Experience
        </h2>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {EXPERIENCES.map((item) => (
          <div
            key={item.id}
            className="bg-[#f9fafb] border border-neutral-200/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:border-neutral-300 hover:shadow-xs"
          >
            {/* Top Row: Logo/Badge, Titles & Dates */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                {/* Brand Badge */}
                <div
                  style={{ backgroundColor: item.badgeBg, color: item.badgeTextColor }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs mt-0.5"
                >
                  {item.badgeLetter}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-neutral-500 font-medium">
                    <span className="text-neutral-700 font-semibold">{item.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="text-xs font-medium text-neutral-500 bg-white border border-neutral-200/80 px-3 py-1 rounded-full self-start sm:self-auto shrink-0 shadow-2xs">
                {item.period}
              </div>
            </div>

            {/* Bullets Box */}
            <div className="bg-white rounded-xl border border-neutral-100 p-5 sm:p-6 shadow-2xs">
              <ul className="space-y-3">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
