import { toSlug } from "@/features/category-detail/utils";
import Show from "@/components/common/show";
import { ConditionDetails } from "./ConditionDetails";
import { OfferPrice } from "./OfferPrice";
import { SellDeviceButton, SellDeviceButtonDisabled } from "./SellDeviceButton";

interface ProductSummaryProps {
  selectedCondition: {
    label: string;
    price: string;
  };
  productName: string;
}

const ProductSummary = ({ selectedCondition, productName }: ProductSummaryProps) => {
  const slug = toSlug(productName || "");

  if (!productName) {
    console.warn("ProductSummary: productName is empty/undefined");
  }

  return (
    <div className="flex w-[432px] shrink-0 flex-col gap-6">
      <ConditionDetails selectedCondition={selectedCondition} />
      <OfferPrice price={selectedCondition.price} />
      <Show when={!!slug}>
        <SellDeviceButton slug={slug} />
      </Show>
      <Show when={!slug}>
        <SellDeviceButtonDisabled />
      </Show>
    </div>
  );
};

export default ProductSummary;
