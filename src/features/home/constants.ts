import tagIcon from "@/assets/icons/tag-2.svg";
import deviceIcon from "@/assets/icons/monitor-mobbile.svg";
import moneyIcon from "@/assets/icons/money-3.svg";
import cardImage1 from "@/assets/images/blog-images/card1.png";
import cardImage2 from "@/assets/images/blog-images/card2.png";
import cardImage3 from "@/assets/images/blog-images/card3.png";
import mobile from "@/assets/images/category-images/mobile-phone.png";
import tablet from "@/assets/images/category-images/tablet.png";
import gamingConsole from "@/assets/images/category-images/gaming-consoles.png";
import smartWatch from "@/assets/images/category-images/smart-watches.png";
export const PRODUCT_CARDS = [
  {
    img: mobile,
    title: "Mobile Phones",
    mainClass: "hover:border-neutral-975 hover:bg-primary-50",
    buttonClass: "bg-neutral-950 text-white hover:bg-neutral-800",
    badgeClass: "px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 border-transparent",
    productLink: "/iphone",
  },
  {
    img: tablet,
    title: "Tablets",
    mainClass: "hover:border-neutral-975 hover:bg-primary-50",
    buttonClass: "bg-neutral-950 text-white hover:bg-neutral-800",
    badgeClass: "px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 border-transparent",
    productLink: "/tablet",
  },
  {
    img: gamingConsole,
    title: "Gaming Consoles",
    mainClass: "hover:border-neutral-975 hover:bg-primary-50",
    buttonClass: "bg-neutral-950 text-white hover:bg-neutral-800",
    badgeClass: "px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 border-transparent",
    productLink: "/gaming",
  },
  {
    img: smartWatch,
    title: "Smart Watches",
    mainClass: "hover:border-neutral-975 hover:bg-primary-50",
    buttonClass: "bg-neutral-950 text-white hover:bg-neutral-800",
    badgeClass: "px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 border-transparent",
    productLink: "/smartwatch",
  },
];

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

export const HOME_BLOG_POSTS = [
  {
    title: "Design Smarter: How User Behavior Shapes Winning Products",
    description: "Learn how to discover what users truly want and build with confidence.",
    imageUrl: "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-04.png",
    imageAlt: "Design workspace with color swatches",
    date: "March 12, 2025",
    category: "Product",
    author: "Phillip Palmer",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "Nail Your First Launch: A Checklist for Product Debut Success",
    description: "Avoid common launch traps and create excitement from day one.",
    imageUrl: "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-05.png",
    imageAlt: "Product launch analytics",
    date: "January 20, 2025",
    category: "Startup Growth",
    author: "Michael Brown",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "Why Fast Apps Win: The Blueprint for Lightning-Quick Experiences",
    description: "Explore proven strategies to boost speed and delight users every time.",
    imageUrl: "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-06.png",
    imageAlt: "Mobile app development",
    date: "February 28, 2025",
    category: "Product",
    author: "Jane Smith",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "Scaling Design the Right Way with a Solid Component System",
    description: "Build consistency, save time, and ship optimized UI every release.",
    imageUrl: "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-07.png",
    imageAlt: "Component design system",
    date: "March 05, 2025",
    category: "Design",
    author: "Dylan Field",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "Product KPIs That Actually Matter And How to Track Them",
    description: "Measure progress the right way to build momentum and stay focused.",
    imageUrl: "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-08.png",
    imageAlt: "Team analyzing KPIs",
    date: "January 09, 2025",
    category: "Design",
    author: "Nina Rich",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
  {
    title: "How AI-Driven Workflows Are Transforming Product Development",
    description: "Discover smarter ways to ideate, design, and build using AI tools.",
    imageUrl: "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-09.png",
    imageAlt: "AI in product development",
    date: "March 05, 2025",
    category: "Startup Growth",
    author: "Startup Growth",
    authorLink: "#",
    blogLink: "#",
    categoryLink: "#",
  },
];

export const REVIEWS_DATA = [
  {
    id: 1,
    image: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-13.png",
    name: "Zain Saris",
    rating: 4.5,
    date: "11-11-2023",
    description:
      "I absolutely love this smartwatch! It tracks my steps, heart rate, and even sleep patterns with great accuracy. The design is sleek and lightweight, making it comfortable to wear all day. The battery lasts several days, and the notifications from my phone come through perfectly.",
  },
  {
    id: 2,
    image: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png",
    name: "Erin Torff",
    rating: 4.5,
    date: "11-11-2023",
    description:
      "This portable blender is a game changer! It's compact, easy to use, and powerful enough to blend smoothies, protein shakes, and even ice. The rechargeable battery lasts a long time, making it perfect for on-the-go use.",
  },
  {
    id: 3,
    image: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png",
    name: "Wilson Workman",
    rating: 4.5,
    date: "11-11-2023",
    description:
      "I'm so impressed with this LED desk lamp! It has multiple brightness settings and an adjustable arm, making it perfect for reading, studying, or working late at night. The touch controls are super convenient, and the light is easy on the eyes.",
  },
  {
    id: 4,
    image: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png",
    name: "John Doe",
    rating: 4.1,
    date: "12-11-2023",
    description:
      "I'm so impressed with this LED desk lamp! It has multiple brightness settings and an adjustable arm, making it perfect for reading, studying, or working late at night. The touch controls are super convenient, and the light is easy on the eyes.",
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
