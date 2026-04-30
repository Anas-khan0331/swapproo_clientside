"use client";

import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import CheckoutHeader from "../../components/common/CheckoutHeader";
import { ProductNotFound } from "./components/ProductNotFound";
import { CheckoutFormSection } from "./components/CheckoutFormSection";
import { CheckoutSummarySection } from "./components/CheckoutSummarySection";
import { toSlug, ALL_PRODUCTS } from "./constants";

const Checkout = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const product = ALL_PRODUCTS.find((p) => toSlug(p.name) === slug);

  if (!product) {
    return <ProductNotFound slug={slug} />;
  }

  const handleSubmit = () => {
    router.push(`/thank-you/${slug}`);
  };

  return (
    <div className="bg-background flex min-h-screen w-full flex-col">
      <CheckoutHeader />
      <main className="bg-background wrapper flex flex-col py-8">
        <div>
          <div className="flex flex-row justify-center gap-6">
            <CheckoutFormSection onSubmit={handleSubmit} />
            <Separator orientation="vertical" className="h-auto" />
            <CheckoutSummarySection name={product.name} price={product.price} img={product.img} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
