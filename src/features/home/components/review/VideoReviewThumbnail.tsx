"use client";

import Image from "next/image";
import PlayIcon from "@/assets/icons/PlayIcon";

interface VideoReviewThumbnailProps {
  videoUrl?: string;
  videoThumbnail?: string;
  reviewerName: string;
  onClick: () => void;
}

export const VideoReviewThumbnail = ({
  videoUrl,
  videoThumbnail,
  reviewerName,
  onClick,
}: VideoReviewThumbnailProps) => {
  if (!videoUrl || !videoThumbnail) return null;

  return (
    <button
      onClick={onClick}
      className="group relative h-20 w-20 overflow-hidden rounded-md border border-neutral-200 focus:outline-none"
      aria-label={`Play review video by ${reviewerName}`}
    >
      <Image src={videoThumbnail} alt={`Review by ${reviewerName}`} fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/55">
        <PlayIcon className="h-6 w-6" />
      </div>
    </button>
  );
};
