import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-12 w-full flex flex-col items-center"
    >
      <a 
        href="https://t.me/yourgroup" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group w-full max-w-sm"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <button className="relative w-full py-4 bg-dark-navy rounded-xl leading-none flex items-center justify-center space-x-3 text-white font-bold text-lg">
          <Rocket className="w-6 h-6 text-neon-blue" />
          <span>Join My Trading Community</span>
        </button>
      </a>
      
      <p className="mt-4 text-xs text-gray-500">
        Trusted by 5,000+ traders worldwide.
      </p>
    </motion.div>
  );
};
