export type LinkItem = {
  id: string;
  type: "broker" | "social" | "community" | "course";
  title: string;
  description?: string;
  icon: string;
  url: string;
  highlight?: boolean;
};

export const links: LinkItem[] = [
  {
    id: "l1",
    type: "broker",
    title: "Join My Preferred Broker",
    description: "Get 0 spread and fast execution.",
    icon: "CandlestickChart",
    url: "https://brokerlink.com",
    highlight: true,
  },
  {
    id: "l2",
    type: "social",
    title: "TradingView Profile",
    icon: "LineChart",
    url: "https://tradingview.com",
  },
  {
    id: "l3",
    type: "community",
    title: "VIP Forex Signals",
    description: "Daily setups and market breakdown.",
    icon: "Send",
    url: "https://t.me/yourgroup",
  },
  {
    id: "l4",
    type: "social",
    title: "Instagram",
    icon: "Instagram",
    url: "https://instagram.com/pips_attendant",
  },
  {
    id: "l5",
    type: "social",
    title: "YouTube Channel",
    icon: "Youtube",
    url: "https://youtube.com/c/pips_attendant",
  }
];
