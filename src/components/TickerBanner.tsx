import React from 'react';

const PAIRS = [
  { pair: "EUR/USD", price: "1.0945", change: "+0.12%" },
  { pair: "GBP/JPY", price: "188.42", change: "-0.24%" },
  { pair: "XAU/USD", price: "2034.50", change: "+0.55%" },
  { pair: "USD/JPY", price: "148.12", change: "+0.10%" },
  { pair: "AUD/USD", price: "0.6542", change: "-0.15%" },
  { pair: "US30", price: "38924.1", change: "+0.80%" },
];

export const TickerBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md border-b border-white/5 z-50 overflow-hidden py-2">
      <div className="flex w-[200%] md:w-[150%] animate-marquee">
        {[...PAIRS, ...PAIRS, ...PAIRS].map((item, i) => (
          <div key={i} className="flex items-center space-x-2 px-6 flex-shrink-0 text-sm font-medium">
            <span className="text-gray-300">{item.pair}</span>
            <span className="text-white">{item.price}</span>
            <span className={item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
