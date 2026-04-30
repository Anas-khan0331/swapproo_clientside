export const STORAGE_OPTIONS = [
  { value: "256gb", label: "256GB" },
  { value: "512gb", label: "512GB" },
  { value: "1tb", label: "1TB" },
  { value: "2tb", label: "2TB" },
] as const;

export const NETWORK_OPTIONS = [
  { value: "unlocked", label: "Unlocked" },
  { value: "vodafone", label: "Vodafone" },
  { value: "o2", label: "O2" },
  { value: "ee", label: "EE" },
  { value: "three", label: "Three" },
] as const;

export const CONDITION_OPTIONS = [
  { value: "new", label: "New", price: "£900" },
  { value: "excellent", label: "Excellent", price: "£1,000" },
  { value: "good", label: "Good", price: "£800" },
  { value: "fair", label: "Fair", price: "£700" },
  { value: "faulty", label: "Faulty", price: "£500" },
] as const;

export const FEATURES = [
  "Flawless screen and body; no scratches or dents.",
  "Battery health capacity above 90%.",
  "100% fully functional software and hardware.",
  "Includes original box and charging cable.",
  "Device is Factory Unlocked and Data Wiped.",
] as const;
