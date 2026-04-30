"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VideoPlay } from "iconsax-reactjs";
import Link from "next/link";
import { useState } from "react";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3l3.9 7.9 8.7 1.3-6.3 6.1 1.5 8.7L16 22.8l-7.8 4.1 1.5-8.7-6.3-6.1 8.7-1.3z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WriteAReview() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const activeRating = hovered || rating;

  return (
    <div className="bg-white pt-8 pb-11">
      <div className="mx-auto mb-20 max-w-2xl">
        <h2 className="text-foreground mb-8 text-3xl font-bold">Write a review</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Rating</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className={`border-none bg-transparent p-0.5 transition-transform hover:scale-110 ${
                    activeRating >= star ? "text-[#FACC15]" : "text-neutral-975/20"
                  }`}
                >
                  <StarIcon filled={activeRating >= star} />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <p className="text-sm font-medium">Write your review</p>
            <Textarea
              placeholder="Type here"
              className="h-[72px]"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <p className="text-sm font-medium">Add Video</p>
            <label
              htmlFor="video-upload"
              className="border-border hover:bg-muted/40 flex h-44 cursor-pointer items-center justify-center rounded-[10px] border border-dashed transition-colors"
            >
              <input
                id="video-upload"
                type="file"
                accept="video/mp4,video/quicktime,video/x-msvideo"
                className="hidden"
                onChange={(e) => setVideoFile(e.target.files?.[0] ?? null)}
              />
              <div className="flex flex-col items-center gap-3">
                <VideoPlay />
                <div className="flex flex-col items-center gap-1.5">
                  {videoFile ? (
                    <p className="text-muted-foreground text-sm">{videoFile.name}</p>
                  ) : (
                    <>
                      <p className="text-sm">
                        <span className="underline">Record a video</span>
                        <span className="text-foreground"> or click to </span>
                        <span className="underline">Upload</span>
                      </p>
                      <p className="text-muted-foreground text-sm">
                        MP4, MOV or AVI (Max. 60 seconds)
                      </p>
                    </>
                  )}
                </div>
              </div>
            </label>
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(!!v)}
                className="mt-0.5 size-5 rounded"
              />
              <Label
                htmlFor="terms"
                className="text-muted-foreground cursor-pointer text-sm leading-relaxed"
              >
                By publishing this review you agree with the{" "}
                <a href="/terms" className="text-foreground underline hover:no-underline">
                  terms and conditions
                </a>
                .
              </Label>
            </div>
          </div>
          <Link href="/review-thank-you">
            <Button
              className="bg-foreground text-background h-10 w-full"
              disabled={!rating || !agreed}
              onClick={() => {
                console.log({ rating, reviewText, videoFile, agreed });
              }}
            >
              Submit review
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
