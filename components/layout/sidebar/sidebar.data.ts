export interface SidebarData {
  name: string;
  url: string;
  filterBy?: string;
}

export const SIDEBAR_TITLES: SidebarData[] = [
  {
    name: "Candles",
    url: "/candles",
  },
  {
    name: "Diffusers",
    url: "/diffusers",
  },
  {
    name: "Self-care",
    url: "/self-care",
  },
  {
    name: "Gifts",
    url: "/gifts",
  },
  {
    name: "Promotions and discounts",
    url: "/promotions-and-discounts",
  },
  {
    name: "Feedbacks",
    url: "/feedbacks",
  },
  {
    name: "Contacts",
    url: "/contacts",
  },
  {
    name: "Collaboration",
    url: "/collaboration",
  },
];
export const SIDEBAR_CANDLES_DATA: SidebarData[] = [
  {
    name: "Perfume candles",
    url: "/candles",
    filterBy: "perfumed",
  },
  {
    name: "Soy candles",
    url: "/candles",
    filterBy: "soy",
  },
  {
    name: "Craft candles",
    url: "/candles",
    filterBy: "craft",
  },
];

export const SIDEBAR_DIFFUSERS_DATA: SidebarData[] = [
  {
    name: "Aroma diffusers",
    url: "/diffusers",
    filterBy: "aroma-diffusers",
  },
  {
    name: "Dry diffusers",
    url: "/diffusers",
    filterBy: "dry-diffusers",
  },
  {
    name: "Interior diffusers",
    url: "/diffusers",
    filterBy: "interior-diffusers",
  },
];

export const SIDEBAR_SELF_CARE_DATA: SidebarData[] = [
  {
    name: "Cuticle oil",
    url: "/self-care",
    filterBy: "cuticle-oil",
  },
  {
    name: "hand and body cream",
    url: "/self-care",
    filterBy: "hand-and-body-cream",
  },
];

export const SIDEBAR_GIFTS_DATA: SidebarData[] = [
  {
    name: "Cerfitificates",
    url: "/gifts",
    filterBy: "cerfitificates",
  },
  {
    name: "Gift sets",
    url: "/gift-sets",
  },
];
export const SIDEBAR_PROMOTIONS_AND_DISCOUNTS_DATA: SidebarData[] = [
  {
    name: "Candles",
    url: "/candles",
  },
  {
    name: "Diffusers",
    url: "/diffusers",
  },
  {
    name: "Self-care",
    url: "/self-care",
  },
  {
    name: "Gifts",
    url: "/gifts",
  },
];
