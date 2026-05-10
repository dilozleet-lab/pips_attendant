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
  const renderIcon = () => {
    if (link.icon.startsWith('/') || link.icon.startsWith('http')) {
      return <img src={link.icon} alt="" className="w-6 h-6 object-contain" />;
    }
    return iconMap[link.icon] || <ExternalLink className="w-6 h-6" />;
  };

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      className={`relative group flex items-center p-4 rounded-xl border transition-all duration-300 w-full ${
        link.highlight 
          ? 'bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border-neon-purple/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]' 
          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
      }`}
    >
      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
        link.highlight ? 'bg-neon-purple/20' : 'bg-white/5'
      }`}>
        {renderIcon()}
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
