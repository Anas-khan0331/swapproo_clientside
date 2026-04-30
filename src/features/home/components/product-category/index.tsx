import Link from "next/link";
import Show from "@/components/common/show";
import { CategoryGrid } from "./CategoryGrid";

export type { ProductCard } from "./ProductCard3D";

const ProductCategory = ({ showView = true }) => {
  return (
    <section className="wrapper py-14">
      <div className="mb-[67px] flex gap-6 max-md:flex-col">
        <div className="grow space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Categories</h2>
        </div>
        <Show when={!!showView}>
          <Link
            href="/category"
            className="hover:text-primary transition-colors hover:cursor-pointer"
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
