import { TradeInSteps } from "@/features/home/components/trade-in-steps";
import { PRODUCT_CARDS, PRODUCTS_PER_CATEGORY } from "@/features/home/constants";
import Link from "next/link";
import { ReviewSection } from "@/features/home/components/review";
import ProductOverview from "./components/ProductOverview";
import { StaticImageData } from "next/image";
import { FAQSection } from "@/features/home/components/faq";
import { Blog } from "@/features/home/components/blog";

const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const CATEGORY_MAP = Object.fromEntries(PRODUCT_CARDS.map((c) => [c.productLink, c]));

type ProductEntry = { name: string; price: string; img: string | StaticImageData };

const ALL_PRODUCTS: ProductEntry[] = Object.entries(PRODUCTS_PER_CATEGORY).flatMap(
  ([key, products]) => {
    const cat = CATEGORY_MAP[key];
    return products.map((p) => ({ ...p, img: cat?.img ?? "" }));
  },
);

const ProductDetailPage = ({ slug }: { slug: string }) => {
  const product = ALL_PRODUCTS.find((p) => toSlug(p.name) === slug);

  if (!product) {
    return (
      <div className="wrapper py-20 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Link href="/category" className="text-primary mt-4 inline-block underline">
          Browse all categories
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      <div className="wrapper border-b border-b-[#E5E5E5]">
        <ProductOverview productName={product.name} img={product.img} />
      </div>
      <TradeInSteps />
      <ReviewSection />
      <FAQSection />
      <Blog />
    </div>
  );
};

export default ProductDetailPage;
