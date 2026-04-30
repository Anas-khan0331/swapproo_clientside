import { Rating } from "@/components/ui/rating";

export const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <Rating readOnly variant="yellow" size={size} value={rating} precision={0.5} />
);
