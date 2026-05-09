import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center mb-10 pt-10 relative">
      {/* Avatar with glowing border */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-32 h-32 mb-6"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-purple to-neon-blue animate-spin-slow opacity-75 blur-md"></div>
        <div className="absolute inset-1 rounded-full bg-dark-navy z-10 flex items-center justify-center overflow-hidden border-2 border-white/10">
          <img src="/avatar.png" alt="Pips_Attendant" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Title & Tagline */}
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
      >
        Pips_Attendant
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-neon-blue font-medium tracking-widest uppercase text-sm mb-4"
      >
        Professional Forex Trader
      </motion.p>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-400 max-w-md mx-auto text-sm md:text-base leading-relaxed"
      >
        Precision. Patience. Profit. Turning pips into possibilities. Join my community to trade alongside me.
      </motion.p>
    </div>
  );
};
