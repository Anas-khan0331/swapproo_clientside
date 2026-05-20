import Link from "next/link";
import Show from "@/components/common/show";
import { CategoryGrid } from "./CategoryGrid";
import { Button } from "@/components/ui/button";

export type { ProductCard } from "./ProductCard3D";

const ProductCategory = ({ showView = true }) => {
  return (
    <section className="wrapper py-8 lg:py-14">
      <div className="mb-[57px] flex items-center gap-6">
        <div className="grow space-y-4">
          <h2 className="text-3xl font-semibold lg:text-4xl">Categories</h2>
        </div>
        <Show when={!!showView}>
          <Link
            href="/category"
            className="text-sm font-medium transition-colors hover:cursor-pointer"
          >
            <Button variant="ghost" className="hover:cursor-pointer">
              view all
            </Button>
          </Link>
        </Show>
      </div>
      <CategoryGrid />
    </section>
  );
};

export { ProductCategory };
