export const REGIONS = ["EU", "US", "MENA"] as const;
export type Region = (typeof REGIONS)[number];

export const CURRENCIES: Record<Region, string> = {
  EU: "EUR",
  US: "USD",
  MENA: "AED",
};
