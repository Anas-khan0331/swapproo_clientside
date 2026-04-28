import { CustomerFeedback } from "./customerFeedback";
import { AverageRating } from "./averageRating";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductReviews = () => {
  return (
    <section className="wrapper py-8 sm:py-16 lg:py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <CustomerFeedback />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <AverageRating />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" className="rounded-lg px-6">
          <Link href="/reviews">Show all</Link>
        </Button>
      </div>
    </section>
  );
};

export { ProductReviews as ReviewSection };
