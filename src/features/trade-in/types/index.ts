import type { Product, Bid } from "@/types";

export type TradeInState = {
  selectedProduct: Product | null;
  activeBids: Bid[];
  isSubmitting: boolean;
};
