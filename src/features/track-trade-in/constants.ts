import { Truck, Lock, ShieldCheck, CreditCard } from "lucide-react";

export const TRACKING_FEATURES = [
  {
    icon: Truck,
    title: "Free & Insured Shipping",
    description:
      "We provide a prepaid, trackable shipping label. Your device is fully insured from your door to ours.",
  },
  {
    icon: Lock,
    title: "14-Day Price Lock",
    description:
      "Market prices fluctuate, but your offer is guaranteed for 14 days from the moment you place Trade-in.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Data",
    description:
      "Your personal and banking information is protected with industry-standard encryption. We never share your data.",
  },
  {
    icon: CreditCard,
    title: "Fast Payouts",
    description:
      "Get paid within 24 hours of device inspection via your preferred payment method. No hidden fees, ever.",
  },
] as const;
