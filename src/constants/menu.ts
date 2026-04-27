export interface MenuItem {
  title: string;
  href: string;
}

export interface Category {
  name: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: Category[] = [
  {
    name: "iPhone",
    items: [
      { title: "iPhone 15 Pro Max", href: "/iphone/15-pro-max" },
      { title: "iPhone 15 Pro", href: "/iphone/15-pro" },
      { title: "iPhone 15 Plus", href: "/iphone/15-plus" },
      { title: "iPhone 15", href: "/iphone/15" },
      { title: "iPhone 14 Pro Max", href: "/iphone/14-pro-max" },
      { title: "iPhone 14 Pro", href: "/iphone/14-pro" },
      { title: "iPhone 14 Plus", href: "/iphone/14-plus" },
      { title: "iPhone 14", href: "/iphone/14" },
      { title: "iPhone 13 Pro Max", href: "/iphone/13-pro-max" },
      { title: "iPhone 13 Pro", href: "/iphone/13-pro" },
      { title: "iPhone 13", href: "/iphone/13" },
      { title: "iPhone 13 mini", href: "/iphone/13-mini" },
      { title: "iPhone 12", href: "/iphone/12" },
      { title: "iPhone 10", href: "/iphone/10" },
      { title: "iPhone 09", href: "/iphone/09" },
      { title: "iPhone 08", href: "/iphone/08" },
      { title: "iPhone 07", href: "/iphone/07" },
      { title: "iPhone 06", href: "/iphone/06" },
      { title: "iPhone 05", href: "/iphone/05" },
      { title: "iPhone 04", href: "/iphone/04" },
      { title: "iPhone 03", href: "/iphone/03" },
    ],
  },
  {
    name: "iPad",
    items: [
      { title: 'iPad Pro 12.9"', href: "/ipad/pro-12-9" },
      { title: 'iPad Pro 11"', href: "/ipad/pro-11" },
      { title: "iPad Air", href: "/ipad/air" },
      { title: "iPad mini", href: "/ipad/mini" },
      { title: "iPad 10th Gen", href: "/ipad/10th-gen" },
      { title: "iPad 9th Gen", href: "/ipad/9th-gen" },
    ],
  },
  {
    name: "Gaming Consoles",
    items: [
      { title: "PlayStation 5", href: "/gaming/ps5" },
      { title: "PlayStation 5 Pro", href: "/gaming/ps5-pro" },
      { title: "Xbox Series X", href: "/gaming/xbox-series-x" },
      { title: "Xbox Series S", href: "/gaming/xbox-series-s" },
      { title: "Nintendo Switch", href: "/gaming/switch" },
      { title: "Nintendo Switch OLED", href: "/gaming/switch-oled" },
    ],
  },
  {
    name: "Laptop",
    items: [
      { title: 'MacBook Pro 16"', href: "/laptop/macbook-pro-16" },
      { title: 'MacBook Pro 14"', href: "/laptop/macbook-pro-14" },
      { title: 'MacBook Air 15"', href: "/laptop/macbook-air-15" },
      { title: 'MacBook Air 13"', href: "/laptop/macbook-air-13" },
      { title: "Dell XPS 15", href: "/laptop/dell-xps-15" },
      { title: "Dell XPS 13", href: "/laptop/dell-xps-13" },
      { title: "HP Spectre x360", href: "/laptop/hp-spectre" },
    ],
  },
  {
    name: "Smartwatch",
    items: [
      { title: "Apple Watch Ultra 2", href: "/smartwatch/apple-watch-ultra-2" },
      { title: "Apple Watch Series 9", href: "/smartwatch/apple-watch-s9" },
      { title: "Apple Watch SE", href: "/smartwatch/apple-watch-se" },
      { title: "Samsung Galaxy Watch", href: "/smartwatch/galaxy-watch" },
      { title: "Garmin Fenix", href: "/smartwatch/garmin-fenix" },
    ],
  },
  {
    name: "Tablet",
    items: [
      { title: "Samsung Galaxy Tab S9", href: "/tablet/galaxy-tab-s9" },
      { title: "Samsung Galaxy Tab S8", href: "/tablet/galaxy-tab-s8" },
      { title: "Microsoft Surface Pro", href: "/tablet/surface-pro" },
      { title: "Microsoft Surface Go", href: "/tablet/surface-go" },
      { title: "Lenovo Tab P12", href: "/tablet/lenovo-tab-p12" },
    ],
  },
  {
    name: "Portable Gaming Consoles",
    items: [
      { title: "Steam Deck", href: "/portable/steam-deck" },
      { title: "Steam Deck OLED", href: "/portable/steam-deck-oled" },
      { title: "ROG Ally", href: "/portable/rog-ally" },
      { title: "Nintendo Switch Lite", href: "/portable/switch-lite" },
      { title: "PlayStation Portal", href: "/portable/ps-portal" },
    ],
  },
];
