"use client";

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
        className="gap-0 overflow-visible rounded-2xl border-0 p-0 shadow-xl ring-0 sm:max-w-none"
        showCloseButton={false}
        backdropClassName="bg-black/50"
        style={{ width: "min(998px, 95vw)", maxWidth: "95vw", height: "auto", maxHeight: "90vh" }}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">{""}</DialogTitle>
        <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl md:flex-row">
          <div className="relative h-[280px] w-full shrink-0 overflow-hidden md:h-auto md:w-[50%]">
            <video
              key={review.id}
              src={review.url}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              playsInline
            />
          </div>
          <div className="flex w-full flex-col gap-4 overflow-y-auto bg-white p-6 md:w-[50%]">
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
            <p className="text-sm leading-relaxed text-neutral-600">{review.review}</p>
          </div>
        </div>
        <Button
          onClick={onPrev}
          disabled={activeIndex === 0}
          variant="ghost"
          className="absolute top-1/2 left-[-22px] z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md ring-2 ring-neutral-400/50 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Previous"
        >
          <ArrowLeft2 size={24} color="#111" />
        </Button>
        <Button
          onClick={onNext}
          disabled={activeIndex === reviews.length - 1}
          variant="ghost"
          className="absolute top-1/2 right-[-22px] z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md ring-2 ring-neutral-400/50 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Next"
        >
          <ArrowRight2 size={24} color="#111" />
        </Button>
        <button
          onClick={onClose}
          className="absolute top-0 -right-12 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-transparent transition"
          aria-label="Close"
        >
          <CloseCircle size={24} color="#fff" />
        </button>
      </DialogContent>
    </Dialog>
  );
};
