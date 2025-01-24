export interface MenuData {
  name: string;
  url?: string;
}

export const MENU_DATA_PHONE: MenuData[] = [
  {
    name: "Catalog",
  },
  {
    name: "About",

    url: "/about",
  },

  {
    name: "Blog",
    url: "/blogs",
  },
  {
    name: "More",
  },
];
