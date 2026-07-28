import React, { useState } from 'react';
import { PHOTO_GALLERY } from '../data/portfolioData';
import { PhotoCard } from '../types';
import { X, ZoomIn, Sparkles } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoCard | null>(null);

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Visual Journey
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mt-1">
          Moments in Media, Editing & Community
        </h2>
      </div>

      {/* Tilted Polaroid Cards Grid */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-2 py-8 px-2 max-w-5xl mx-auto">
        {PHOTO_GALLERY.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            style={{
              transform: `rotate(${photo.rotateDeg}deg)`,
            }}
            className="group relative bg-[#fbfbfb] p-3 sm:p-4 rounded-[20px] border-[0.5px] border-[#dcdcdc] shadow-sm hover:shadow-xl transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-20 cursor-pointer w-full sm:w-64 md:w-1/4"
          >
            {/* Tag Badge */}
            <div className="absolute top-5 right-5 z-10 bg-[#fbfbfb] border-[0.5px] border-[#dcdcdc] text-neutral-800 text-[10px] font-medium px-2 py-0.5 rounded-[20px]">
              {photo.tag}
            </div>

            {/* Photo Container */}
            <div className="relative aspect-3/4 rounded-[20px] overflow-hidden bg-neutral-100 mb-3 border-[0.5px] border-[#dcdcdc]/50">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-2 right-2 bg-white/90 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5 text-neutral-700" />
              </div>
            </div>

            {/* Caption */}
            <div className="text-left px-1">
              <h3 className="text-xs font-semibold text-neutral-800 line-clamp-1">{photo.title}</h3>
              <p className="text-[11px] text-neutral-500 line-clamp-2 mt-0.5">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-neutral-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative animate-in zoom-in-95"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-neutral-800 shadow-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-4/3 bg-neutral-900">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>{selectedPhoto.tag}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{selectedPhoto.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{selectedPhoto.caption}</p>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center text-xs text-neutral-400">
                <span>Aisha Adeshina Portfolio</span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
