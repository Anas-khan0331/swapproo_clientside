import { Blog } from "@/features/home/components/blog";
import { FAQSection } from "@/features/home/components/faq";
import { ProductCategory } from "@/features/home/components/product-category";
import { TradeInSteps } from "@/features/home/components/trade-in-steps";
import CategoryDetailPage from "@/features/category-detail";

export default async function Category({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  if (q?.trim()) return <CategoryDetailPage query={q} />;
  return (
    <>
      <ProductCategory showView={false} />
      <TradeInSteps />
      <FAQSection />
      <Blog />
    </>
  );
}
