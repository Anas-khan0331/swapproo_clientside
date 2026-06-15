import { Progress } from "@/components/ui/progress";
import { Rating } from "@/components/ui/rating";
import { RATING_DISTRIBUTION } from "../constants";

const AllReviewRating = ({ value }: { value: number }) => {
  return (
    <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-10">
      <div className="flex flex-col items-start justify-center gap-1 lg:items-center lg:gap-2">
        <p className="text-card-foreground hidden text-6xl font-semibold lg:block">{value}/5</p>
        <div className="mt-0 flex items-center gap-3 lg:mt-5">
          <p className="text-card-foreground block text-6xl font-semibold lg:hidden">{value}</p>
          <Rating readOnly variant="yellow" size={24} value={value} precision={0.5} />
        </div>
        <p className="lg:text-card-foreground text-muted-foreground text-base font-medium">
          Based on 65 verified reviews
        </p>
      </div>
      <div className="flex w-full flex-col gap-2.5 lg:flex-1">
        {RATING_DISTRIBUTION?.map((item) => (
          <div key={item.stars} className="flex w-full items-center gap-3">
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
    </div>
  );
};

export default AllReviewRating;
