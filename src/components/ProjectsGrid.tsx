import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { Play, TrendingUp, Sparkles, ExternalLink, X, CheckCircle2 } from 'lucide-react';

export const ProjectsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Video Editing', 'Campaigns', 'Social Media', 'Editorial'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-neutral-200/60 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-1">
            Projects & Highlights
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image Thumbnail with Overlay Badge */}
              <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-neutral-100 mb-4">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors"></div>

                {/* Metric Callout Badge */}
                {project.metric && (
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-neutral-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{project.metric}</span>
                  </div>
                )}

                {/* Play / Inspect Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-white text-neutral-900 shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-neutral-900 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Client */}
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {project.client}
                </span>
                <span className="text-xs text-neutral-400 font-medium">{project.category}</span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors mt-2">
                {project.title}
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed mt-2 line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-neutral-100">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-neutral-900/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl relative animate-in zoom-in-95 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-900/70 text-white hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/9 bg-neutral-900">
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-neutral-900 mx-auto flex items-center justify-center shadow-xl mb-3">
                    <Play className="w-6 h-6 fill-neutral-900 ml-0.5" />
                  </div>
                  <span className="text-white text-xs font-medium bg-black/60 px-3 py-1 rounded-full">
                    Media Case Highlights
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  {selectedProject.client}
                </span>
                {selectedProject.metric && (
                  <span className="text-xs font-bold text-neutral-900 bg-amber-100 px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    {selectedProject.metric}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">{selectedProject.title}</h3>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Scriptwriting & Creative Direction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>CapCut & Premiere Video Editing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dynamic Subtitles & Motion Text</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Audience Engagement & Captions</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="text-[11px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
