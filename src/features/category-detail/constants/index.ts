import { PRODUCT_CARDS, PRODUCTS_PER_CATEGORY } from "@/features/home/constants";

export const CATEGORY_MAP: Record<string, (typeof PRODUCT_CARDS)[number]> = Object.fromEntries(
  PRODUCT_CARDS.map((c) => [c.productLink, c]),
);

export const ALL_PRODUCTS = Object.entries(PRODUCTS_PER_CATEGORY).flatMap(([key, products]) => {
  const cat = CATEGORY_MAP[key];
  return products.map((p) => ({ ...p, img: cat?.img ?? "" }));
});
