"use client";

import Image from "next/image";
import { useReviewModal } from "./useReviewModal";
import { MEDIA_REVIEWS_VIDEOS } from "./constants";
import { ReviewModal } from "./ReviewModal";
import PlayIcon from "@/assets/icons/PlayIcon";
import { MEDIA_REVIEWS_VIDEOS } from "./constants";
import { ReviewModal } from "./ReviewModal";
import PlayIcon from "@/assets/icons/PlayIcon";

const ReviewMedia = () => {
  const { isOpen, lastIndex, openModal, closeModal, goPrev, goNext } = useReviewModal(
    MEDIA_REVIEWS_VIDEOS.length,
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
      <div className="flex flex-wrap items-center gap-2">
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
              <PlayIcon className="h-6 w-6" />
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
export { MEDIA_REVIEWS_VIDEOS };
