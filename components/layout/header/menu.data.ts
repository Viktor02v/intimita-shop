export interface MenuData {
  name: string;
  url?: string;
}

export const MENU_DATA: MenuData[] = [
  {
    name: "Catalog",
  },
  {
    name: "About",

    url: "/about",
  },
  {
    name: "Intimita Shop",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blogs",
  },
  {
    name: "More",
  },
];
