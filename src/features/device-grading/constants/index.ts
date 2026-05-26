import { ConditionKey, ConditionDetails } from "../types";

export const CONDITION_DATA: Record<ConditionKey, ConditionDetails> = {
  "Like New": {
    title: "Like New",
    description:
      "Flawless screen and body with absolutely no visible scratches or marks. 100% fully functional with perfect battery performance.",
    bannerText: "Looks and feels pristine, straight out of the box.",
    bullets: [
      "Flawless screen and body; no scratches or dents.",
      "Battery health capacity above 90%.",
      "100% fully functional software and hardware.",
      "Includes original box and charging cable.",
      "Device is Factory Unlocked and Data Wiped.",
    ],
  },
  Excellent: {
    title: "Excellent",
    description:
      "Superb condition with minimal, light micro-scratches on the screen or body that are barely visible. 100% fully functional with superb battery performance.",
    bannerText: "Near pristine condition, presenting incredibly well.",
    bullets: [
      "Very minor light surface scratches; no deep cracks.",
      "Battery health capacity above 85%.",
      "100% fully functional software and hardware.",
      "May include original or generic box/charger.",
      "Device is Factory Unlocked and Data Wiped.",
    ],
  },
  Good: {
    title: "Good",
    description:
      "Moderate signs of wear with some visible scratches, scuffs, or minor dents on the frame/body. Screen has light-to-moderate scratches but no cracks.",
    bannerText: "Perfect balance of value and cosmetic condition.",
    bullets: [
      "Visible scratches, scuffs, or minor dents on body.",
      "Battery health capacity above 80%.",
      "100% fully functional software and hardware.",
      "Includes generic charging accessories.",
      "Device is Factory Unlocked and Data Wiped.",
    ],
  },
  Fair: {
    title: "Fair",
    description:
      "Heavy wear and tear with significant scratches, scuffs, and possibly minor dings or chips. Screen has scratches but remains fully functional without cracks.",
    bannerText: "Deeply discounted, fully working device.",
    bullets: [
      "Significant scratches, dents, and heavy signs of usage.",
      "Battery health capacity at or above 75%.",
      "100% fully functional software and hardware.",
      "Includes generic charging cable only.",
      "Device is Factory Unlocked and Data Wiped.",
    ],
  },
};
