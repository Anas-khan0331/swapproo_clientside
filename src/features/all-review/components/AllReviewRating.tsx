import { Progress } from "@/components/ui/progress";
import { Rating } from "@/components/ui/rating";
import { RATING_DISTRIBUTION } from "../constants";

const AllReviewRating = ({ value }: { value: number }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-card-foreground text-6xl font-semibold">{value}/5</p>
        <div className="mt-5">
          <Rating readOnly variant="yellow" size={24} value={value} precision={0.5} />
        </div>
        <p className="text-card-foreground text-base font-medium">Based on 65 verified reviews</p>
      </div>
      <div className="flex flex-1 flex-col gap-2.5">
        {RATING_DISTRIBUTION?.map((item) => (
          <div key={item.stars} className="flex items-center gap-3">
            <p className="text-card-foreground w-2.5 text-right text-sm font-semibold">
              {item.stars}
            </p>
            <Progress
              value={item.value}
              className="bg-muted-foreground/20 h-2.5 flex-1 [&>div]:bg-yellow-400"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllReviewRating;
