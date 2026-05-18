"use client";

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
      <main className="bg-background wrapper flex flex-col pt-8 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 lg:border-r lg:pr-6">
            <CheckoutFormSection onSubmit={handleSubmit} />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <CheckoutSummarySection name={product.name} price={product.price} img={product.img} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
