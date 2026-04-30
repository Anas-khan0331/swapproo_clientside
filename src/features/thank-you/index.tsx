import CheckoutHeader from "../../components/common/CheckoutHeader";
import Footer from "../../components/common/Footer";
import OrderSuccessHeader from "./components/OrderSuccessHeader";
import NextSteps from "./components/NextSteps";
import OrderSummarySidebar from "./components/OrderSummarySidebar";
import { Separator } from "@/components/ui/separator";
import { toSlug, ALL_PRODUCTS } from "../checkout/constants";

const ThankYouPage = ({ slug }: { slug: string }) => {
  const product = ALL_PRODUCTS.find((p) => toSlug(p.name) === slug);

  if (!product) {
    return (
      <div className="bg-background flex min-h-screen w-full flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="text-muted-foreground">Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div className="bg-background flex min-h-screen w-full flex-col">
      <CheckoutHeader />
      <main className="bg-background wrapper mb-14 flex flex-col py-8">
        <div className="flex flex-row items-start justify-center gap-6">
          <div className="flex w-full flex-col gap-11">
            <OrderSuccessHeader />
            <NextSteps />
          </div>
          <Separator orientation="vertical" />
          <div className="flex w-[432px] flex-col gap-6 max-lg:hidden">
            <OrderSummarySidebar product={product} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
