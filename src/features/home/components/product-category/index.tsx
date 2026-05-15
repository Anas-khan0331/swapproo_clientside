import Link from "next/link";
import Show from "@/components/common/show";
import { CategoryGrid } from "./CategoryGrid";

export type { ProductCard } from "./ProductCard3D";

const ProductCategory = ({ showView = true }) => {
  return (
    <section className="wrapper py-14 md:pt-8 md:pb-25">
      <div className="mb-[57px] flex items-center gap-6">
        <div className="grow space-y-4">
          <h2 className="text-3xl font-semibold lg:text-4xl">Categories</h2>
        </div>
        <Show when={!!showView}>
          <Link
            href="/category"
            className="hover:text-primary text-sm font-medium transition-colors hover:cursor-pointer"
          >
            view all
          </Link>
        </Show>
      </div>
      <CategoryGrid />
    </section>
  );
};

export { ProductCategory };
