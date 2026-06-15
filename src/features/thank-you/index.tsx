import CheckoutHeader from "../../components/common/CheckoutHeader";
import Footer from "../../components/common/Footer";
import OrderSuccessHeader from "./components/OrderSuccessHeader";
import NextSteps from "./components/NextSteps";
import OrderSummarySidebar from "./components/OrderSummarySidebar";
import ActionButtons from "./components/ActionButtons";
import { toSlug, ALL_PRODUCTS } from "../checkout/constants";
import ProductHeading from "../product-detail/components/ProductHeading";

const ThankYouPage = ({
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
  const product = ALL_PRODUCTS.find((p) => toSlug(p.name) === slug);

  if (!product) {
    return (
      <div className="bg-background flex min-h-screen w-full flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="text-muted-foreground">Slug: {slug}</p>
      </div>
    );
  }

  const specs = [storage, network, condition].filter(Boolean).join(" | ");
  const headingLabel = specs ? `${product.name} | ${specs}` : product.name;

  return (
    <div className="bg-background flex min-h-screen w-full flex-col">
      <CheckoutHeader />
      <main className="bg-background wrapper mb-0 flex flex-col pt-8 pb-11 lg:mb-14 lg:pb-28">
        <div className="border-neutral-150 mb-6 border-b lg:mb-0 lg:hidden">
          <ProductHeading
            productName={product.name}
            img={product.img}
            headingLabel={headingLabel}
            price={product.price}
          />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 flex flex-col gap-11 lg:col-span-8 lg:border-r lg:pr-6">
            <OrderSuccessHeader />
            <NextSteps />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <OrderSummarySidebar product={{ ...product, name: headingLabel }} />
          </div>
        </div>
      </main>
      <div className="bg-background fixed right-0 bottom-0 left-0 z-50 p-4 lg:hidden">
        <ActionButtons />
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
