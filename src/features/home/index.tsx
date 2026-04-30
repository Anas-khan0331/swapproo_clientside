import { HeroSection } from "./components/hero";
import { ProductCategory } from "./components/product-category";
import { TradeInSteps } from "./components/trade-in-steps";
import { ReviewSection } from "./components/review";
import { BusinessCTA } from "./components/cta";
import { FAQSection } from "./components/faq";
import { Blog } from "./components/blog";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCategory />
      <TradeInSteps />
      <ReviewSection />
      <BusinessCTA />
      <FAQSection />
      <Blog />
    </>
  );
}
