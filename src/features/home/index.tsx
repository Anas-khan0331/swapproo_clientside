import { HeroSection } from "./components/hero";
import { ProductCategory } from "./components/product-category";
import { TradeInSteps } from "./components/trade-in-steps";
import { ReviewSection } from "./components/review";
import { BusinessCTA } from "./components/cta";
import { FAQSection } from "./components/faq";
import { Blog } from "./components/blog";
import WidgetSection from "./components/widget";
import { HOME_BLOG_POSTS } from "./constants";

export { Blog };
export function HomePage() {
  return (
    <>
      <HeroSection />
      <WidgetSection />
      <ProductCategory />
      <TradeInSteps />
      <ReviewSection />
      <BusinessCTA />
      <FAQSection />
      <Blog blogPosts={HOME_BLOG_POSTS} />
    </>
  );
}
