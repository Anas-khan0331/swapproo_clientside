export interface MenuItem {
  title: string;
  href: string;
}

export interface Category {
  name: string;
  categoryLink?: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: Category[] = [
  {
    name: "Mobile Phones",
    categoryLink: "/category/mobile-phone",
    items: [
      { title: "iPhone 15 Pro Max", href: "/product/iphone-15-pro-max" },
      { title: "iPhone 15 Pro", href: "/product/iphone-15-pro" },
      { title: "iPhone 15 Plus", href: "/product/iphone-15-plus" },
      { title: "iPhone 15", href: "/product/iphone-15" },
      { title: "iPhone 14 Pro Max", href: "/product/iphone-14-pro-max" },
      { title: "iPhone 14 Pro", href: "/product/iphone-14-pro" },
      { title: "iPhone 14 Plus", href: "/product/iphone-14-plus" },
      { title: "iPhone 14", href: "/product/iphone-14" },
      { title: "iPhone 13 Pro Max", href: "/product/iphone-13-pro-max" },
      { title: "iPhone 13 Pro", href: "/product/iphone-13-pro" },
      { title: "iPhone 13", href: "/product/iphone-13" },
      { title: "iPhone 13 mini", href: "/product/iphone-13-mini" },
      { title: "iPhone 12", href: "/product/iphone-12" },
      { title: "iPhone 10", href: "/product/iphone-10" },
      { title: "iPhone 09", href: "/product/iphone-09" },
      { title: "iPhone 08", href: "/product/iphone-08" },
      { title: "iPhone 07", href: "/product/iphone-07" },
      { title: "iPhone 06", href: "/product/iphone-06" },
      { title: "iPhone 05", href: "/product/iphone-05" },
      { title: "iPhone 04", href: "/product/iphone-04" },
      { title: "iPhone 03", href: "/product/iphone-03" },
    ],
  },
  {
    name: "iPad",
    categoryLink: "/category/ipad",
    items: [
      { title: 'iPad Pro 12.9"', href: "/product/ipad-pro-12-9" },
      { title: 'iPad Pro 11"', href: "/product/ipad-pro-11" },
      { title: "iPad Air", href: "/product/ipad-air" },
      { title: "iPad mini", href: "/product/ipad-mini" },
      { title: "iPad 10th Gen", href: "/product/ipad-10th-gen" },
      { title: "iPad 9th Gen", href: "/product/ipad-9th-gen" },
    ],
  },
  {
    name: "Gaming Consoles",
    categoryLink: "/category/gaming",
    items: [
      { title: "PlayStation 5", href: "/product/playstation-5" },
      { title: "PlayStation 5 Pro", href: "/product/playstation-5-pro" },
      { title: "Xbox Series X", href: "/product/xbox-series-x" },
      { title: "Xbox Series S", href: "/product/xbox-series-s" },
      { title: "Nintendo Switch", href: "/product/nintendo-switch" },
      { title: "Nintendo Switch OLED", href: "/product/nintendo-switch-oled" },
    ],
  },
  {
    name: "Laptop",
    categoryLink: "/category/laptop",
    items: [
      { title: 'MacBook Pro 16"', href: "/product/macbook-pro-16" },
      { title: 'MacBook Pro 14"', href: "/product/macbook-pro-14" },
      { title: 'MacBook Air 15"', href: "/product/macbook-air-15" },
      { title: 'MacBook Air 13"', href: "/product/macbook-air-13" },
      { title: "Dell XPS 15", href: "/product/dell-xps-15" },
      { title: "Dell XPS 13", href: "/product/dell-xps-13" },
      { title: "HP Spectre x360", href: "/product/hp-spectre" },
    ],
  },
  {
    name: "Smartwatch",
    categoryLink: "/category/smartwatch",
    items: [
      { title: "Apple Watch Ultra 2", href: "/product/apple-watch-ultra-2" },
      { title: "Apple Watch Series 9", href: "/product/apple-watch-s9" },
      { title: "Apple Watch SE", href: "/product/apple-watch-se" },
      { title: "Samsung Galaxy Watch", href: "/product/galaxy-watch" },
      { title: "Garmin Fenix", href: "/product/garmin-fenix" },
    ],
  },
  {
    name: "Tablet",
    categoryLink: "/category/tablet",
    items: [
      { title: "Samsung Galaxy Tab S9", href: "/product/galaxy-tab-s9" },
      { title: "Samsung Galaxy Tab S8", href: "/product/galaxy-tab-s8" },
      { title: "Microsoft Surface Pro", href: "/product/surface-pro" },
      { title: "Microsoft Surface Go", href: "/product/surface-go" },
      { title: "Lenovo Tab P12", href: "/product/lenovo-tab-p12" },
    ],
  },
  {
    name: "Portable Gaming Consoles",
    categoryLink: "/category/portable",
    items: [
      { title: "Steam Deck", href: "/product/steam-deck" },
      { title: "Steam Deck OLED", href: "/product/steam-deck-oled" },
      { title: "ROG Ally", href: "/product/rog-ally" },
      { title: "Nintendo Switch Lite", href: "/product/nintendo-switch-lite" },
      { title: "PlayStation Portal", href: "/product/ps-portal" },
    ],
  },
];
