import { ARTICLE_TYPES } from "./article";

export const ARTICLES = {
  // ── Getting Started ──────────────────────────────────────────────
  "how-to-start": {
    _id: "1",
    slug: "how-to-start",
    title: "How to start a trade-in",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Getting Started\n\nTo start a trade-in, follow these simple steps:\n\n1. Create an account or log in\n2. Select your device model\n3. Describe the condition of your device\n4. Get an instant quote\n5. Ship your device\n6. Get paid",
  },
  "create-account": {
    _id: "2",
    slug: "create-account",
    title: "Creating an account",
    type: ARTICLE_TYPES.TEXT,
    content:
      '## Create Your Account\n\nCreating an account is easy:\n\n- Click the "Sign Up" button\n- Enter your email address\n- Create a password\n- Verify your email\n- Complete your profile',
  },
  "first-trade-in": {
    _id: "3",
    slug: "first-trade-in",
    title: "Your first trade-in",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## First Trade-In\n\nYour first trade-in is simple:\n\n1. Select your device from our catalog\n2. Answer questions about its condition\n3. Receive an instant quote\n4. Accept the quote and get a free shipping label\n5. Ship your device\n6. Receive payment within 24 hours of inspection",
  },

  // ── My Account ───────────────────────────────────────────────────
  "privacy-policy": {
    _id: "1",
    slug: "privacy-policy",
    title: "Privacy Policy",
    type: ARTICLE_TYPES.TEXT,
    renderer: "legal",
    content: null,
  },
  introduction: {
    _id: "2",
    slug: "introduction",
    title: "Introduction",
    type: ARTICLE_TYPES.FAQ,
    content: [
      {
        question: "Do you charge for each upgrade?",
        answer:
          "Some upgrades are free, while others may have an additional cost, depending on the type of upgrade and your current plan. For specific pricing details, please check our pricing page or contact our support team.",
      },
      {
        question: "Do I need to purchase a license for each website?",
        answer:
          "Yes, each website requires its own license. A single license covers one domain only.",
      },
      {
        question: "What is regular license?",
        answer:
          "A regular license allows you to use the product in a single end product for which end users are not charged.",
      },
      {
        question: "What is extended license?",
        answer:
          "An extended license allows you to use the product in a single end product for which end users may be charged.",
      },
    ],
  },
  "use-of-website": {
    _id: "3",
    slug: "use-of-website",
    title: "Use of the Website",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Use of the Website\n\nWe use cookies and similar tools to:\n\n- Analyse traffic and improve your experience.\n- Keep you signed in.\n- Remember your preferences.\n- Show you relevant offers.\n\nYou can clear or block cookies in your browser settings, but doing so may affect certain features. We may also use trusted third-party cookies (e.g., Google Analytics) for insights and marketing. You can opt out of Google Analytics tracking if you wish.",
  },
  "account-registration": {
    _id: "4",
    slug: "account-registration",
    title: "Account Registration",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Account Registration\n\nWe may share your data:\n\n- With our affiliates and trusted partners who help us deliver our services.\n- With payment providers, logistics partners, and other vendors involved in your transaction.\n- With government authorities or law enforcement if required by law.\n- In case of mergers, acquisitions, or reorganisation of our business your information may be shared with the new entity under similar privacy terms.\n\nWe do not sell your personal information for profit.",
  },
  "selling-device": {
    _id: "5",
    slug: "selling-device",
    title: "Selling Your Device",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Selling Your Device\n\nOur Platform may contain links to other websites. We are not responsible for their privacy practices. Please read their policies before sharing any information.",
  },
  "return-exchanges": {
    _id: "6",
    slug: "return-exchanges",
    title: "Return or Exchanges",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Return or Exchanges\n\nIf you are not satisfied with your trade-in value after inspection, you may request a return of your device at no additional cost. Exchange requests must be submitted within 7 days of receiving your payment notification.",
  },
  definitions: {
    _id: "7",
    slug: "definitions",
    title: "Definitions",
    type: ARTICLE_TYPES.TEXT,
    content:
      '## Definitions\n\n**Marketing:** You can opt out of promotional messages anytime by clicking "unsubscribe" in our emails or adjusting your account settings.\n\n**Advertising:** You can opt out of personalised ads through your device settings.\n\n**Account Deletion:** You can delete your account anytime in your profile settings or by contacting us. Deleting your account removes access to your order history, loyalty points, and saved details. Some data may be retained as needed by law or for fraud prevention.',
  },

  // ── Orders ───────────────────────────────────────────────────────
  "how-it-works": {
    _id: "1",
    slug: "how-it-works",
    title: "How trade-ins work",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## How Trade-Ins Work\n\nOur trade-in process is designed to be simple and fast. Select your device, describe its condition, get an instant quote, ship it for free, and get paid quickly.",
  },
  "device-requirements": {
    _id: "2",
    slug: "device-requirements",
    title: "Device requirements",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Device Requirements\n\nWe accept a wide range of devices. Your device should:\n\n- Power on and off\n- Have a functioning display\n- Not be water damaged\n- Have all original components",
  },
  "payment-process": {
    _id: "3",
    slug: "payment-process",
    title: "Payment process",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Payment Process\n\nOnce we receive and inspect your device, payment is processed within 24 hours. You can choose to receive payment via bank transfer, PayPal, or check.",
  },

  // ── Payments ─────────────────────────────────────────────────────
  "payment-methods": {
    _id: "1",
    slug: "payment-methods",
    title: "Payment methods",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Payment Methods\n\nWe offer multiple payment options:\n\n- Bank transfer\n- PayPal\n- Check\n- Gift cards",
  },
  refunds: {
    _id: "2",
    slug: "refunds",
    title: "Refund policy",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Refund Policy\n\nIf you are not satisfied with your trade-in quote, you can request to have your device returned to you at no cost.",
  },
  "processing-time": {
    _id: "3",
    slug: "processing-time",
    title: "Processing time",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Processing Time\n\nMost trade-ins are processed within 24-48 hours of receiving your device.",
  },

  // ── Shipping ─────────────────────────────────────────────────────
  "shipping-options": {
    _id: "1",
    slug: "shipping-options",
    title: "Shipping options",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Shipping Options\n\nWe provide free shipping labels for all trade-ins. You can also drop off your device at one of our partner locations.",
  },
  tracking: {
    _id: "2",
    slug: "tracking",
    title: "Tracking your device",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Tracking Your Device\n\nOnce shipped, you can track your device using the tracking number provided in your shipping confirmation email.",
  },
  packaging: {
    _id: "3",
    slug: "packaging",
    title: "Packaging guidelines",
    type: ARTICLE_TYPES.TEXT,
    content:
      "## Packaging Guidelines\n\nUse the original box if available. If not, use a sturdy box with adequate padding to protect your device during shipping.",
  },

  // ── FAQ ──────────────────────────────────────────────────────────
  licensing: {
    _id: "1",
    slug: "licensing",
    title: "Licensing",
    type: ARTICLE_TYPES.FAQ,
    content: [
      {
        question: "Do you charge for each upgrade?",
        answer:
          "Some upgrades are free, while others may have an additional cost, depending on the type of upgrade and your current plan. For specific pricing details, please check our pricing page or contact our support team.",
      },
      {
        question: "Do I need to purchase a license for each website?",
        answer:
          "Yes, each website requires its own license. A single license covers one domain only.",
      },
      {
        question: "What is regular license?",
        answer:
          "A regular license allows you to use the product in a single end product for which end users are not charged.",
      },
      {
        question: "What is extended license?",
        answer:
          "An extended license allows you to use the product in a single end product for which end users may be charged.",
      },
    ],
  },
  "trade-in-timeline": {
    _id: "2",
    slug: "trade-in-timeline",
    title: "Trade-in timeline",
    type: ARTICLE_TYPES.FAQ,
    content: [
      {
        question: "Step 1: Get a Quote",
        answer: "Select your device and describe its condition to get an instant quote.",
      },
      {
        question: "Step 2: Ship Your Device",
        answer: "Accept the quote and use our free shipping label to send your device.",
      },
      {
        question: "Step 3: Get Paid",
        answer: "Once inspected, you will receive payment within 24 hours.",
      },
    ],
  },
  "device-condition": {
    _id: "3",
    slug: "device-condition",
    title: "Device condition",
    type: ARTICLE_TYPES.FAQ,
    content: [
      {
        question: "What condition should my device be in?",
        answer: "We accept devices in various conditions from like-new to broken.",
      },
      {
        question: "How is the condition determined?",
        answer:
          "Our experts inspect your device and determine its condition based on functionality and physical appearance.",
      },
      {
        question: "What affects the value?",
        answer:
          "Screen damage, battery health, water damage, and missing parts can affect the trade-in value.",
      },
    ],
  },
};
