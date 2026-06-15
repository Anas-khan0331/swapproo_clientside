"use client";

import { useRouter } from "next/navigation";
import CheckoutHeader from "../../components/common/CheckoutHeader";
import { ProductNotFound } from "./components/ProductNotFound";
import { CheckoutFormSection } from "./components/CheckoutFormSection";
import { CheckoutSummarySection } from "./components/CheckoutSummarySection";
import { toSlug, ALL_PRODUCTS } from "./constants";
import ProductHeading from "../product-detail/components/ProductHeading";
import { Button } from "@/components/ui/button";

const Checkout = ({
  slug,
  storage,
  network,
  condition,
}: {
  slug: string;
  storage?: string;
  network?: string;
  condition?: string;
}) => {
  const router = useRouter();
  const product = ALL_PRODUCTS.find((p) => toSlug(p.name) === slug);

  if (!product) {
    return <ProductNotFound slug={slug} />;
  }

  const specs = [storage, network, condition].filter(Boolean).join(" | ");
  const headingLabel = specs ? `${product.name} | ${specs}` : product.name;

  const handleSubmit = () => {
    const params = new URLSearchParams();
    if (storage) params.set("storage", storage);
    if (network) params.set("network", network);
    if (condition) params.set("condition", condition);
    const query = params.toString();
    router.push(`/thank-you/${slug}${query ? `?${query}` : ""}`);
  };

  return (
    <div className="bg-background relative flex min-h-screen w-full flex-col">
      <CheckoutHeader />
      <main className="bg-background wrapper flex flex-col pt-8 pb-28 lg:pb-10">
        <div className="lg:hidden">
          <ProductHeading
            productName={product.name}
            img={product.img}
            headingLabel={headingLabel}
            price={product.price}
          />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 lg:border-r lg:pr-6">
            <CheckoutFormSection onSubmit={handleSubmit} />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <CheckoutSummarySection name={headingLabel} price={product.price} img={product.img} />
          </div>
        </div>
        <div className="bg-background fixed right-0 bottom-0 left-0 z-50 p-4 lg:hidden">
          <Button
            className="bg-foreground hover:bg-foreground/80 h-12 w-full text-sm font-semibold"
            onClick={handleSubmit}
          >
            Place Trade-in
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
