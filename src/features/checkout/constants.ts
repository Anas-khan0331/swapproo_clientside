import { PRODUCT_CARDS, PRODUCTS_PER_CATEGORY } from "@/features/home/constants";
import { StaticImageData } from "next/image";

export const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const CATEGORY_MAP = Object.fromEntries(PRODUCT_CARDS.map((c) => [c.productLink, c]));

export type ProductEntry = {
  name: string;
  price: string;
  img: string | StaticImageData;
  specifications?: string;
};

export const ALL_PRODUCTS: ProductEntry[] = Object.entries(PRODUCTS_PER_CATEGORY).flatMap(
  ([key, products]) => {
    const cat = CATEGORY_MAP[key];
    return products.map((p) => ({ ...p, img: cat?.img ?? "" }));
  },
);
