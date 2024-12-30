export interface FooterData {
  name: string;
  url: string;
}
export interface FooterDataPAYMENT {
  img: string;
  name: string;
  url: string;
}
export const FOOTER_TITLES: FooterData[] = [
  {
    name: "Catalog",
    url: "/footer-catalog",
  },
  {
    name: "Menu",
    url: "/footer-menu",
  },
  {
    name: "Contacts",
    url: "/footer-contacts",
  },
];
export const FOOTER_CATALOG_DATA: FooterData[] = [
  {
    name: "candles",
    url: "/candels",
  },
  {
    name: "diffusers",

    url: "/diffusers",
  },
  {
    name: "self-care",
    url: "/self-care",
  },
  {
    name: "gifts",
    url: "/gifts",
  },
];

export const FOOTER_MENU_DATA: FooterData[] = [
  {
    name: "about us",

    url: "/about",
  },
  {
    name: "blog",
    url: "/blogs",
  },
  {
    name: "feedbacks",
    url: "/feedbacks",
  },

  {
    name: "cooperation",
    url: "/cooperation",
  },
];

export const FOOTER_CONTACTS_DATA: FooterData[] = [
  {
    name: "instagram",
    url: "/instagram",
  },
  {
    name: "pinterest",

    url: "/pinterest",
  },
  {
    name: "telegram",
    url: "/telegram",
  },
  {
    name: "+380 73 444 44 44",
    url: "/number",
  },
];

export const FOOTER_PAYMENT_DATA: FooterDataPAYMENT[] = [
  {
    img: "../payment-icons/visa.svg",
    name: "Visa",
    url: "/visa",
  },
  {
    img: "../payment-icons/masterCard.svg",
    name: "Mastercard",
    url: "/mastercard",
  },
  {
    img: "../payment-icons/applePay.svg",
    name: "PayPal",
    url: "/paypal",
  },
  {
    img: "../payment-icons/googlePay.svg",
    name: "PayPal",
    url: "/paypal",
  },
];
