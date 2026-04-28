"use client";

import { useReviewModal } from "./useReviewModal";
import Image from "next/image";
import { Play, Star1, ArrowLeft2, ArrowRight2, CloseCircle } from "iconsax-reactjs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Show from "@/components/common/show";

// ── Types ─────────────────────────────────────────────────────────────────────

type Review = {
  id: string;
  url: string;
  thumbnail: string;
  review_by: string;
  avatar?: string;
  date: string;
  rating: number;
  review: string;
};

// ── Mock Data — replace with your real data ───────────────────────────────────

export const MEDIA_REVIEWS_VIDEOS: Review[] = [
  {
    id: "1",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/seed/r1/120/120",
    review_by: "Erin Torff",
    avatar: "https://i.pravatar.cc/40?img=1",
    date: "11-11-2023",
    rating: 4,
    review:
      "This portable blender is a game changer! It's compact, easy to use, and powerful enough to blend smoothies, protein shakes, and even ice. The rechargeable battery lasts a long time, making it perfect for on-the-go use.",
  },
  {
    id: "2",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/seed/r2/120/120",
    review_by: "Zain Safi",
    avatar: "https://i.pravatar.cc/40?img=2",
    date: "11-11-2023",
    rating: 5,
    review:
      "Absolutely love this product! The build quality is excellent and it's very easy to use. Highly recommended for anyone looking for a reliable blender.",
  },
  {
    id: "3",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/seed/r3/120/120",
    review_by: "Sarah Chen",
    avatar: "https://i.pravatar.cc/40?img=3",
    date: "10-11-2023",
    rating: 4,
    review: "Great value for money. Works exactly as described and the battery life is impressive.",
  },
  {
    id: "4",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/seed/r4/120/120",
    review_by: "Mike Johnson",
    avatar: "https://i.pravatar.cc/40?img=4",
    date: "09-11-2023",
    rating: 5,
    review: "Best purchase I've made this year. Super compact and powerful!",
  },
  {
    id: "5",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/seed/r5/120/120",
    review_by: "Emma Wilson",
    avatar: "https://i.pravatar.cc/40?img=5",
    date: "08-11-2023",
    rating: 3,
    review: "Decent product, does what it says. Shipping was fast too.",
  },
  {
    id: "6",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/seed/r6/120/120",
    review_by: "Ali Hassan",
    avatar: "https://i.pravatar.cc/40?img=6",
    date: "07-11-2023",
    rating: 5,
    review: "Incredible quality for the price. Very happy with this purchase.",
  },
];

// ── Star Rating ───────────────────────────────────────────────────────────────

const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star1
        key={i}
        size={size}
        variant={i < rating ? "Bold" : "Linear"}
        color={i < rating ? "#F5A623" : "#D1D5DB"}
      />
    ))}
  </div>
);

// ── Review Modal ──────────────────────────────────────────────────────────────

export const ReviewModal = ({
  reviews,
  activeIndex,
  open,
  onClose,
  onPrev,
  onNext,
}: {
  reviews: Review[];
  activeIndex: number;
  open: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const review = reviews[activeIndex];
  if (!review) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="gap-0 overflow-visible rounded-2xl p-0"
        showCloseButton={false}
        style={{ width: 998, maxWidth: 998, height: 571 }}
      >
        <DialogTitle className="sr-only">{""}</DialogTitle>
        <div className="flex h-full">
          <div key={review.id} className="relative w-[52%] bg-black">
            <video
              src={review.url}
              className="h-full w-full object-cover"
              autoPlay
              controls
              playsInline
            />
          </div>
          <div className="flex w-[48%] flex-col gap-4 p-6">
            {/* Reviewer info */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
                  <Show when={!!review.avatar}>
                    <Image
                      src={review.avatar!}
                      alt={review.review_by}
                      fill
                      className="object-cover"
                    />
                  </Show>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-neutral-900">{review.review_by}</p>
                  <p className="text-xs text-neutral-400">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} size={14} />
            </div>

            {/* Review text */}
            <p className="text-sm leading-relaxed text-neutral-600">{review.review}</p>
          </div>
        </div>

        {/* Prev / Next */}
        <Button
          onClick={onPrev}
          disabled={activeIndex === 0}
          className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-neutral-50 disabled:opacity-30"
          aria-label="Previous"
        >
          <ArrowLeft2 size={18} color="#111" />
        </Button>
        <Button
          onClick={onNext}
          disabled={activeIndex === reviews.length - 1}
          className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-neutral-50 disabled:opacity-30"
          aria-label="Next"
        >
          <ArrowRight2 size={18} color="#111" />
        </Button>

        {/* Close */}
        <button
          onClick={onClose}
          variant={"ghost"}
          className="absolute top-0 flex cursor-pointer items-center justify-center hover:cursor-pointer"
          style={{ right: "-35px" }}
          aria-label="Close"
        >
          <CloseCircle size={24} color="#fff" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

const ReviewMedia = () => {
  const { isOpen, lastIndex, openModal, closeModal, goPrev, goNext } = useReviewModal(
    MEDIA_REVIEWS_VIDEOS.length,
  );

  return (
    <>
      <div className="flex flex-row items-center gap-2 overflow-x-auto pb-1">
        {MEDIA_REVIEWS_VIDEOS.map(({ thumbnail, review_by, id }, index) => (
          <button
            key={id}
            onClick={() => openModal(index)}
            className="border-neutral-150 group relative h-18 w-18 shrink-0 cursor-pointer overflow-hidden rounded-md border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            aria-label={`Play review by ${review_by}`}
          >
            {thumbnail ? (
              <Image src={thumbnail} alt={`Review by ${review_by}`} fill className="object-cover" />
            ) : (
              <div className="h-full w-full bg-neutral-200" />
            )}

            <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-black/40 transition group-hover:bg-black/55">
              <Play variant="Bold" color="#fff" size={20} />
            </div>
          </button>
        ))}
      </div>
      <ReviewModal
        reviews={MEDIA_REVIEWS_VIDEOS}
        activeIndex={lastIndex}
        open={isOpen}
        onClose={closeModal}
        onPrev={goPrev}
        onNext={goNext}
      />
    </>
  );
};

export default ReviewMedia;
