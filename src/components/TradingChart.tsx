import React from 'react';

export const TradingChart: React.FC = () => {
  return (
    <div className="w-full mt-8 mb-12">
      <div className="flex items-center gap-2 mb-4 px-2">
        <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Live Analysis: Pips Attendant</h2>
      </div>
      
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative" style={{ height: '600px' }}>
        {/* We use an iframe to load the shared TradingView chart layout specifically */}
        <iframe 
          src="https://www.tradingview.com/chart/ppghN3kx/?mobileapp_stable=1&theme=dark" 
          title="Pips Attendant XAUUSD Analysis"
          className="w-full h-full border-none"
          allowFullScreen
        />
        
        {/* Overlay to handle potential click-through issues or to add branding */}
        <div className="absolute bottom-4 right-4 pointer-events-none opacity-50">
          <p className="text-[10px] text-gray-500 font-mono tracking-tighter">REF: ppghN3kx</p>
        </div>
      </div>
    </div>
  );
};
