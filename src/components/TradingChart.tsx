import React, { useEffect, useRef } from 'react';

export const TradingChart: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    if (container.current.querySelector('script')) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "interval": "1h",
      "width": "100%",
      "isTransparent": true,
      "height": "100%",
      "symbol": "OANDA:XAUUSD",
      "showIntervalTabs": true,
      "locale": "en",
      "colorTheme": "dark"
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full mt-8 mb-12 px-2">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Market Sentiment: XAUUSD</h2>
        </div>
      </div>
      
      <div className="flex flex-col gap-6">
        {/* Technical Analysis Summary Widget */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden" style={{ height: '450px' }}>
          <div ref={container} className="tradingview-widget-container h-full w-full" />
        </div>

        {/* Call to Action Button to view full analysis */}
        <a 
          href="https://www.tradingview.com/chart/ppghN3kx/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-3 w-full py-5 bg-neon-blue/10 hover:bg-neon-blue/20 border border-neon-blue/30 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] overflow-hidden"
        >
          {/* Animated glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold tracking-[0.2em] text-neon-blue uppercase mb-1">Live Technical Analysis</span>
            <span className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors duration-300">View My Full Analysis & Drawings</span>
          </div>
          
          <svg 
            className="w-5 h-5 text-neon-blue transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        
        <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest opacity-50">
          Updated in real-time via TradingView
        </p>
      </div>
    </div>
  );
};
