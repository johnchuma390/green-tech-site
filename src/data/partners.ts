export interface Partner {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

export const partners: Partner[] = [
    {
    id: "1",
    name: "Safaricom",
    logo: "https://i.postimg.cc/y8xpcnmY/image.png",
    tier: "platinum"
  },
  {
    id: "2",
    name: "Kenya Forest Service (KFS)",
    logo: "https://i.postimg.cc/pTsnfQYx/image.png",
    tier: "gold"
  },
  {
    id: "3",
    name: "KenGen (Kenya Electricity Generating Company)",
    logo: "https://i.postimg.cc/ht0x4qzq/image.png",
    tier: "gold"
  },
  {
    id: "4",
    name: "IEEE (Institute of Electrical and Electronics Engineers)",
    logo: "https://i.postimg.cc/jj5WsnYW/image.png",
    tier: "silver"
  },
  {
    id: "5",
    name: "Huawei",
    logo: "https://i.postimg.cc/j2Qq6RrR/image.png",
    tier: "silver"
  },
  {
    id: "6",
    name: "L’Oréal",
    logo: "https://i.postimg.cc/52GJCXFz/image.png",
    tier: "bronze"
  },
  {
    id: "7",
    name: "Architectural Association of Kenya (AAK)",
    logo: "https://i.postimg.cc/ZR4MBmjx/image.png",
    tier: "silver"
  },
  {
    id: "8",
    name: "National Construction Authority (NCA)",
    logo: "https://i.postimg.cc/L5qBh0dW/image.png",
    tier: "gold"
  },
  {
    id: "9",
    name: "Institution of Engineers of Kenya (IEK)",
    logo: "https://i.postimg.cc/dDPd3smb/image.png",
    tier: "gold"
  },
  {
    id: "10",
    name: "Howard Humphreys (East Africa) Limited",
    logo: "https://i.postimg.cc/5t6wsRyW/image.png",
    tier: "silver"
  },
  {
    id: "11",
    name: "Kenya Space Agency (KSA)",
    logo: "https://i.postimg.cc/wTrxhfCy/image.png",
    tier: "bronze"
  },
  {
    id: "12",
    name: "Kenya Power & Lighting Company (KPLC)",
    logo: "https://i.postimg.cc/BbdyvKzM/image.png",
    tier: "platinum"
  },
  {
    id: "13",
    name: "Energy and Petroleum Regulatory Authority (EPRA)",
    logo: "https://i.postimg.cc/447XXb7X/image.png",
    tier: "silver"
  },
  {
    id: "14",
    name: "University of Nairobi",
    logo: "https://i.postimg.cc/2ypMkWM6/image.png",
    tier: "platinum"
  },
  {
    id: "15",
    name: "Kenya Institute of Highways and Building Technology (KIHBT)",
    logo: "https://i.postimg.cc/gkmtgGWd/image.png",
    tier: "bronze"
  }
];