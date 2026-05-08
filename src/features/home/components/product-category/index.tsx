import Link from "next/link";
import { PRODUCT_CARDS } from "@/features/home/constants";
import { ProductCard3D } from "./ProductCard3D";

export type { ProductCard } from "./ProductCard3D";

const ProductCategory = () => {
  return (
    <section className="wrapper py-14">
      <div className="mb-[67px] flex gap-6 max-md:flex-col">
        <div className="grow space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Categories</h2>
        </div>
        <Link href="#" className="hover:text-primary transition-colors">
          view all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-32 pt-24 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCT_CARDS.map((item, index) => (
          <ProductCard3D key={`${item.title}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export { ProductCategory };
