import React, { useEffect, useRef } from 'react';

export const TickerBanner: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    if (container.current.querySelector('script')) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "FX_IDC:EURUSD", "title": "EUR/USD" },
        { "proName": "FX_IDC:GBPUSD", "title": "GBP/USD" },
        { "proName": "FX_IDC:USDJPY", "title": "USD/JPY" },
        { "proName": "FX_IDC:AUDUSD", "title": "AUD/USD" },
        { "proName": "FX:GBPJPY", "title": "GBP/JPY" },
        { "proName": "OANDA:XAUUSD", "title": "GOLD" },
        { "proName": "INDEX:DOWI", "title": "US30" }
      ],
      "showSymbolLogo": true,
      "isTransparent": true,
      "displayMode": "adaptive",
      "colorTheme": "dark",
      "locale": "en"
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-dark-navy/80 backdrop-blur-md h-12">
      <div ref={container} className="tradingview-widget-container" />
    </div>
  );
};
