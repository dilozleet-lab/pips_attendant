import React, { useEffect, useRef } from 'react';

export const TradingChart: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // Check if script is already there
    if (container.current.querySelector('script')) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "OANDA:XAUUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com",
      "backgroundColor": "rgba(10, 15, 28, 1)",
      "gridColor": "rgba(255, 255, 255, 0.05)",
      "hide_top_toolbar": false,
      "hide_legend": false,
      "save_image": false,
      "container_id": "tradingview_chart_container"
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full mt-8 mb-12">
      <div className="flex items-center gap-2 mb-4 px-2">
        <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Live Market Analysis</h2>
      </div>
      
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative" style={{ height: '500px' }}>
        <div 
          id="tradingview_chart_container" 
          ref={container} 
          className="tradingview-widget-container h-full w-full"
        />
      </div>
    </div>
  );
};
