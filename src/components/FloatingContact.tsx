import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingContact: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-tr from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(74,222,128,0.4)] z-50 hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-shadow"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
};
