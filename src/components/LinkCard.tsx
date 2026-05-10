import { motion } from 'framer-motion';
import { 
  ChartCandlestick, 
  ChartLine, 
  Send, 
  Camera, 
  Play, 
  Bird,
  ExternalLink
} from 'lucide-react';
import type { LinkItem } from '../config/links';

const iconMap: Record<string, React.ReactNode> = {
  CandlestickChart: <ChartCandlestick className="w-6 h-6" />,
  LineChart: <ChartLine className="w-6 h-6" />,
  Send: <Send className="w-6 h-6" />,
  Instagram: <Camera className="w-6 h-6" />,
  Youtube: <Play className="w-6 h-6" />,
  Twitter: <Bird className="w-6 h-6" />,
};

export const LinkCard: React.FC<{ link: LinkItem; delay: number }> = ({ link, delay }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative w-full flex items-center p-4 rounded-2xl glass-card glow-hover transition-all duration-300 group
        ${link.highlight ? 'bg-gradient-to-r from-neon-purple/20 to-neon-blue/10 border-neon-purple/50' : ''}
      `}
    >
      <div className={`p-3 rounded-xl mr-4 flex-shrink-0 transition-colors duration-300
        ${link.highlight ? 'bg-neon-purple/30 text-neon-blue' : 'bg-white/5 text-gray-300 group-hover:text-neon-purple group-hover:bg-white/10'}
      `}>
        {iconMap[link.icon] || <ExternalLink className="w-6 h-6" />}
      </div>
      
      <div className="flex-1 text-left">
        <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-neon-blue transition-colors">
          {link.title}
        </h3>
        {link.description && (
          <p className="text-sm text-gray-400 mt-1 line-clamp-1">{link.description}</p>
        )}
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neon-blue ml-2">
        <ExternalLink className="w-5 h-5" />
      </div>
    </motion.a>
  );
};
