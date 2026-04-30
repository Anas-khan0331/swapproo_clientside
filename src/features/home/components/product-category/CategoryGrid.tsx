import { PRODUCT_CARDS } from "@/features/home/constants";
import { ProductCard3D } from "./ProductCard3D";

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-32 pt-24 sm:grid-cols-2 lg:grid-cols-4">
      {PRODUCT_CARDS.map((item, index) => (
        <ProductCard3D key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
}
