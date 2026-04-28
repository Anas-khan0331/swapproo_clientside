import {
  HeroSection,
  TradeInSteps,
  Blog,
  FAQSection,
  ReviewSection,
  BusinessCTA,
  ProductCategory,
} from "@/features/home";
export default function HomePage() {
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
