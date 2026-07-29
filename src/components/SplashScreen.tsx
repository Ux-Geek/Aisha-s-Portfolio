import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { AISHA_INFO } from '../data/portfolioData';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // Stays on screen for 1.8 seconds before triggering the zoom out
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#fafafa] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
    >
      <motion.div
        className="flex items-center gap-4 sm:gap-5"
        initial={{ scale: 0.9, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.6, opacity: 0, filter: "blur(10px)" }}
        transition={{ 
          duration: 0.7, 
          ease: [0.16, 1, 0.3, 1], // easeOutExpo for entering
          exit: { duration: 0.5, ease: "backIn" } // zoom out easing
        }}
      >
        <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-[20px] overflow-hidden border-[0.5px] border-[#dcdcdc] bg-[#fbfbfb] flex-shrink-0 shadow-sm">
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
      </motion.div>
    </motion.div>
  );
};
