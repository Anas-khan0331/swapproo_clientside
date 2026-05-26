export type ConditionKey = "Like New" | "Excellent" | "Good" | "Fair";

export interface ConditionDetails {
  title: string;
  description: string;
  bannerText: string;
  bullets: string[];
}
