import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Rating } from "@/components/ui/rating";
import { REVIEWS_DATA } from "@/features/home/constants";

const totalReviews = REVIEWS_DATA.length;

const averageRating =
  totalReviews > 0
    ? Math.round((REVIEWS_DATA.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10
    : 0;

const starBreakdown = [5, 4, 3, 2, 1].map((star) => {
  const count = REVIEWS_DATA.filter((r) => Math.round(r.rating) === star).length;
  return { star, percentage: totalReviews > 0 ? (count / totalReviews) * 100 : 0 };
});

const AverageRating = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold">Average Rating</h2>
      <Card className="w-full shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl font-semibold">
            {averageRating}
            <span>
              <Rating readOnly variant="yellow" size={24} value={averageRating} precision={0.5} />
            </span>
          </CardTitle>
          <CardDescription>Based on {totalReviews} verified reviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {starBreakdown.map(({ star, percentage }) => (
              <div key={star} className="flex items-center gap-3">
                <span className="w-2 text-sm leading-5 font-semibold tracking-normal">{star}</span>
                <Progress
                  value={percentage}
                  className="[&>div]:bg-amber-600 dark:[&>div]:bg-amber-400/60"
                />
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-2 flex-col items-start gap-4 border-none bg-transparent">
          <h5 className="text-foreground text-lg leading-7 font-semibold tracking-normal">
            Write your Review
          </h5>
          <p className="text-muted-foreground tracking-6 text-base tracking-normal">
            Share your feedback and help create a better Trade-in experience for everyone.
          </p>
          <Button
            variant={"default"}
            type="submit"
            className="bg-foreground text-background w-full rounded-lg py-5"
          >
            Write a Review
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export { AverageRating };
