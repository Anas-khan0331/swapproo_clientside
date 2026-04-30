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
    <div className="flex w-[432px] flex-col gap-6">
      <ProductSummary name={name} price={price} img={img} />
      <FeaturesList />
    </div>
  );
}
