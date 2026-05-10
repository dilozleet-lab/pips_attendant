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
    title: "Just Markets",
    description: "My preferred broker with tight spreads and fast execution.",
    icon: "/justmarkets.svg",
    url: "https://one.justmarkets.link/a/by21d0s1wd",
    highlight: true,
  },
  {
    id: "l2",
    type: "broker",
    title: "XM Broker",
    description: "Reliable broker for seamless trading experience.",
    icon: "/xm.svg",
    url: "https://clicks.pipaffiliates.com/c?c=768946&l=en&p=1",
  },
  {
    id: "l3",
    type: "community",
    title: "VIP Forex Signals",
    description: "Message me for access to exclusive VIP setups.",
    icon: "/telegram.svg",
    url: "https://t.me/pipsattendant",
  },
  {
    id: "l4",
    type: "social",
    title: "Telegram Community",
    description: "Join our free community for daily market updates.",
    icon: "/telegram.svg",
    url: "https://t.me/pips_attendant",
  },
  {
    id: "l5",
    type: "social",
    title: "Instagram",
    icon: "/instagram.svg",
    url: "https://www.instagram.com/pips_attendant?igsh=MXF4dW91dHV1N2o3eQ==",
  },
  {
    id: "l6",
    type: "social",
    title: "YouTube Channel",
    icon: "Youtube",
    url: "https://www.youtube.com/@pipsattendant",
  }
];
