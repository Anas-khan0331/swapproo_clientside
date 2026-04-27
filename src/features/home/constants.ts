import tagIcon from "@/assets/icons/tag-2.svg";
import deviceIcon from "@/assets/icons/monitor-mobbile.svg";
import moneyIcon from "@/assets/icons/money-3.svg";
import cardImage1 from "@/assets/images/blog-images/card1.png";
import cardImage2 from "@/assets/images/blog-images/card2.png";
import cardImage3 from "@/assets/images/blog-images/card3.png";

export const TRADE_IN_STEPS = [
  {
    title: "Get an instant offer",
    description: "We price your device in real time, no waiting, no haggling.",
    icon: tagIcon,
  },
  {
    title: "Pack your device",
    description: "Tell us about your device and get an instant quote.",
    icon: deviceIcon,
  },
  {
    title: "Ship free, get paid fast",
    description: "Post it with our free prepaid label. Payment sent within 24hrs.",
    icon: moneyIcon,
  },
];

export const BLOG_POSTS = [
  {
    imgUrl: cardImage1,
    date: "March 12, 2025",
    title: "Design Smarter: How User Behavior Shapes Winning Products",
    excerpt: "Learn how to discover what users truly want and build with confidence.",
  },
  {
    imgUrl: cardImage2,
    date: "January 20, 2026",
    title: "Nail Your First Launch: A Checklist for Product Debut Success",
    excerpt: "Avoid common launch traps and create excitement from day one.",
  },
  {
    imgUrl: cardImage3,
    date: "February 28, 2026",
    title: "Why Fast Apps Win: The Blueprint for Lightning-Quick Experiences",
    excerpt: "Explore proven techniques that boost speed and delight users every time.",
  },
];

export const FAQ_DATA = [
  {
    question: "Do you charge for each upgrade?",
    answer:
      "some upgrades are free, while others may have an additional cost, depending on the type of upgrade and your current plan. For specific pricing details, please check our pricing page or contact our support team.",
  },
  {
    question: "Do I need to purchase a license for each website ?",
    answer:
      "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
  },
  {
    question: "What is regular license ?",
    answer:
      "Reach us via email, live chat, or phone. We respond within 24 hours during business days.",
  },
  {
    question: "What is extended license ?",
    answer: "Explore Our Most Commonly Asked Questions and Find the Information You Need.",
  },
];
