import { toSlug, ALL_PRODUCTS } from "../constants";

interface ProductNotFoundProps {
  slug: string;
}

export function ProductNotFound({ slug }: ProductNotFoundProps) {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Product not found</h1>
      <p className="text-muted-foreground">Slug: {slug}</p>
      <div className="text-muted-foreground text-sm">
        <p>Available products:</p>
        <ul className="list-disc pl-5">
          {ALL_PRODUCTS.slice(0, 5).map((p) => (
            <li key={p.name}>
              {p.name} → {toSlug(p.name)}
            </li>
          ))}
          {ALL_PRODUCTS.length > 5 && <li>... and {ALL_PRODUCTS.length - 5} more</li>}
        </ul>
      </div>
    </div>
  );
}
