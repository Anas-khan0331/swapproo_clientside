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
  storage?: string;
  network?: string;
}

const ProductSummary = ({
  selectedCondition,
  productName,
  storage,
  network,
}: ProductSummaryProps) => {
  const slug = toSlug(productName || "");

  if (!productName) {
    console.warn("ProductSummary: productName is empty/undefined");
  }

  return (
    <div className="flex w-full shrink-0 flex-col gap-4 lg:gap-6">
      <ConditionDetails selectedCondition={selectedCondition} />
      <OfferPrice price={selectedCondition.price} />
      <div className="hidden lg:block">
        <Show when={!!slug}>
          <SellDeviceButton
            slug={slug}
            storage={storage}
            network={network}
            condition={selectedCondition.label}
          />
        </Show>
        <Show when={!slug}>
          <SellDeviceButtonDisabled />
        </Show>
      </div>
    </div>
  );
};

export default ProductSummary;
