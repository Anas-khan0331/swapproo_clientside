import { StaticImageData } from "next/image";
import ProductSummary from "./ProductSummary";
import FeaturesList from "./FeaturesList";

interface CheckoutSummarySectionProps {
  name: string;
  price: string;
  img: string | StaticImageData;
}

export function CheckoutSummarySection({ name, price, img }: CheckoutSummarySectionProps) {
  return (
    <div className="flex flex-col gap-6 md:max-w-full">
      <div className="hidden lg:block">
        <ProductSummary name={name} price={price} img={img} />
      </div>
      <FeaturesList />
    </div>
  );
}
