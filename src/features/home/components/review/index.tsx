import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CustomerFeedback } from "./customerFeedback";
import { AverageRating } from "./averageRating";

const ProductReviews = () => {
  return (
    <section className="wrapper py-14 lg:py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="order-2 col-span-12 min-w-0 lg:order-1 lg:col-span-8">
          <CustomerFeedback />
        </div>
        <div className="order-1 col-span-12 h-fit min-w-0 lg:sticky lg:top-32 lg:order-2 lg:col-span-4">
          <AverageRating />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/all-reviews" className="hover:cursor-pointer">
          <Button className="text-foreground border-border hover:bg-muted rounded-lg border bg-white px-4 py-5 shadow-xs hover:cursor-pointer">
            Show all
          </Button>
        </Link>
      </div>
    </section>
  );
};

export { ProductReviews as ReviewSection };
