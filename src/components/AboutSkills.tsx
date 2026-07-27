import React from 'react';
import { AISHA_INFO } from '../data/portfolioData';
import { User, Sparkles, CheckCircle, Video, Layers, Award, Radio } from 'lucide-react';

export const AboutSkills: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          About Me
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-1">
          Profile & Core Capabilities
        </h2>
      </div>

      {/* Bio Card */}
      <div className="bg-[#f9fafb] border border-neutral-200/80 rounded-2xl p-6 sm:p-8 mb-8">
        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
          {AISHA_INFO.aboutBio}
        </p>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-neutral-200/60">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-neutral-900">11,000+</div>
            <div className="text-xs text-neutral-500 font-medium">Video Reel Views</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-neutral-900">100+</div>
            <div className="text-xs text-neutral-500 font-medium">Students Reached</div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="text-xl sm:text-2xl font-bold text-neutral-900">3+ Yrs</div>
            <div className="text-xs text-neutral-500 font-medium">Media & Video Creation</div>
          </div>
        </div>
      </div>

      {/* Two Column Skills Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Skills */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-2xs">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <h3 className="text-base font-semibold text-neutral-900">Core Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {AISHA_INFO.coreSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200/60"
              >
                <CheckCircle className="w-3 h-3 text-emerald-600" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Skills & Tools */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-2xs">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-amber-600" />
            <h3 className="text-base font-semibold text-neutral-900">Additional Skills & Software</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {AISHA_INFO.additionalSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-50 text-neutral-700 border border-neutral-200/60"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
