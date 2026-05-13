import React, { useEffect, useRef } from 'react';

export const TradingChart: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    if (container.current.querySelector('script')) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          "autosize": true,
          "symbol": "OANDA:XAUUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": "tradingview_analysis_shared",
          "chart": "ppghN3kx", // Linking your specific chart layout ID
          "studies": [],
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650"
        });
      }
    };

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full mt-8 mb-12 px-2">
      <div className="flex items-center gap-2 mb-4 px-2">
        <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Live Analysis: ppghN3kx</h2>
      </div>
      
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative" style={{ height: '600px' }}>
        <div 
          id="tradingview_analysis_shared" 
          ref={container} 
          className="tradingview-widget-container h-full w-full"
        />
      </div>
    </div>
  );
};

// Add type definition for window.TradingView
declare global {
  interface Window {
    TradingView: any;
  }
}
