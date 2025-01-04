export interface COLLAGE_DATA {
  title: string;
  subtitle: string;
  icon: string;
  foto_url: string;
  url: string;
}
export interface TITLES_DATA {
  title: string;
}

export const BLOG_HOW_CHOOSE_DATA: COLLAGE_DATA[] = [
  {
    title: "How to choose the best candle",
    subtitle: "view more",
    icon: "prime:arrow-up-right",
    foto_url: "../blog/black-candle.png",
    url: "/aromadiffusers",
  },
];
export const BLOG_AROMATHERAPY_DATA: COLLAGE_DATA[] = [
  {
    title: "Aromatherapy at home",
    subtitle: "view more",
    icon: "prime:arrow-up-right",
    foto_url: "../blog/dry-dyfusor-caramel-hug.png",

    url: "/craft-candles",
  },
];
export const BLOG_COZINESS_DATA: COLLAGE_DATA[] = [
  {
    title: "How do candles create coziness?",
    subtitle: "view more",
    icon: "prime:arrow-up-right",
    foto_url: "../blog/white-candle.png",
    url: "/self-care",
  },
];
export const BLOG_BENEFITS_DATA: COLLAGE_DATA[] = [
  {
    title: "The benefits of the hand creams",
    subtitle: "view more",
    icon: "prime:arrow-up-right",

    foto_url: "../blog/body-cream-sugared.png",
    url: "/pefumed-candles",
  },
];

export const TITLES_BLOG_DATA: TITLES_DATA[] = [
  {
    title: "Blog",
  },
];
