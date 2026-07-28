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
      <div className="bg-[#fbfbfb] border-[0.5px] border-[#dcdcdc] rounded-[20px] p-6 sm:p-8 mb-8">
        {/* Profile Header within Card */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#dcdcdc]/40">
          <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-[20px] overflow-hidden border-[0.5px] border-[#dcdcdc] bg-[#fbfbfb] flex-shrink-0">
            <img
              src="/images/aisha_profile.png"
              alt={AISHA_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="block text-[16px] font-medium tracking-tight text-[#999999]">{AISHA_INFO.name}</h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">Social Media & Growth Specialist · {AISHA_INFO.location}</p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
          {AISHA_INFO.aboutBio}
        </p>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#dcdcdc]/40">
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
        <div className="bg-[#fbfbfb] border-[0.5px] border-[#dcdcdc] rounded-[20px] p-6 shadow-2xs">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-neutral-700" />
            <h3 className="text-base font-semibold text-neutral-900">Core Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {AISHA_INFO.coreSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-xs font-medium bg-[#fbfbfb] text-neutral-800 border-[0.5px] border-[#dcdcdc]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Skills & Tools */}
        <div className="bg-[#fbfbfb] border-[0.5px] border-[#dcdcdc] rounded-[20px] p-6 shadow-2xs">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-neutral-700" />
            <h3 className="text-base font-semibold text-neutral-900">Additional Skills & Software</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {AISHA_INFO.additionalSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-xs font-medium bg-[#fbfbfb] text-neutral-700 border-[0.5px] border-[#dcdcdc]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
