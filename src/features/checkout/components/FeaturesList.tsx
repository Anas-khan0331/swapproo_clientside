import { Truck, Lock, ShieldCheck, CreditCard } from "lucide-react";

const features = [
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
];

const FeaturesList = () => {
  return (
    <div className="flex flex-col gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col gap-2 rounded-lg border p-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <feature.icon className="text-foreground size-5" />
              <p className="text-foreground text-base leading-6 font-medium">{feature.title}</p>
            </div>
            <p className="text-muted-foreground text-sm leading-5">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
