import Show from "@/components/common/show";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { type Review } from "./types";
import { StarRating } from "./StarRating";
import { ArrowLeft2, ArrowRight2, CloseCircle } from "iconsax-reactjs";
import { Button } from "@/components/ui/button";

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
        className="gap-0 overflow-visible rounded-2xl border-0 p-0"
        showCloseButton={false}
        backdropClassName="bg-black/50"
        style={{ width: 998, maxWidth: 998, height: 571 }}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">{""}</DialogTitle>
        <div className="flex h-full overflow-hidden rounded-2xl border-0">
          <div key={review.id} className="relative w-[52%] overflow-hidden rounded-l-2xl border-0">
            <video src={review.url} className="h-full w-full object-cover" autoPlay playsInline />
          </div>
          <div className="flex w-[48%] flex-col gap-4 border-0 p-6">
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
          className="absolute top-1/2 -left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white drop-shadow-md transition hover:bg-neutral-50 disabled:opacity-30"
          aria-label="Previous"
        >
          <ArrowLeft2 size={18} color="#111" />
        </Button>
        <Button
          onClick={onNext}
          disabled={activeIndex === reviews.length - 1}
          className="absolute top-1/2 -right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white drop-shadow-md transition hover:bg-neutral-50 disabled:opacity-30"
          aria-label="Next"
        >
          <ArrowRight2 size={18} color="#111" />
        </Button>
        <button
          onClick={onClose}
          className="absolute top-0 right-[-44px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white"
          aria-label="Close"
        >
          <CloseCircle size={32} color="#fff" />
        </button>
      </DialogContent>
    </Dialog>
  );
};
