"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MEDIA_REVIEWS_VIDEOS } from "@/features/home/components/review/reviewMedia";
import { ReviewModal } from "@/features/home/components/review/ReviewModal";
import { useReviewModal } from "@/features/home/components/review/useReviewModal";
import { Edit2, TickCircle, Trash } from "iconsax-reactjs";
import { VideoReviewThumbnail } from "@/features/home/components/review/VideoReviewThumbnail";
import { StarRating } from "@/features/home/components/review/StarRating";

const ReviewThankYouPage = () => {
  const rating = 4.5;
  const userVideo = MEDIA_REVIEWS_VIDEOS[0];
  const { isOpen, lastIndex, openModal, closeModal, goPrev, goNext } = useReviewModal(
    MEDIA_REVIEWS_VIDEOS.length,
  );

  return (
    <div className="mx-auto mb-12 max-w-3xl px-4 py-8 lg:mb-[124px] lg:px-0 lg:pt-14 lg:pb-0">
      <div className="flex flex-col gap-8">
        <h1 className="text-foreground text-[30px] leading-9 font-bold">Thanks for your review!</h1>
        <Card className="bg-card py-0 shadow-none ring-0">
          <CardContent className="flex flex-col gap-4 px-0 py-6 ring-0">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-start gap-3">
                <div className="flex flex-1 flex-row items-start gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
                      className="size-10"
                    />
                    <AvatarFallback>ZS</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-card-foreground text-lg leading-7 font-semibold">
                        Zain Saris
                      </p>
                      <div className="flex flex-row items-center gap-1">
                        <TickCircle size={18} className="text-muted-foreground" color="#16A34A" />
                        <span className="text-muted-foreground text-base leading-6">Verified</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-base leading-6 font-medium">
                      11-11-2023
                    </p>
                  </div>
                </div>

                <StarRating rating={rating} size={16} />
              </div>

              <p className="text-muted-foreground text-base leading-6 font-normal tracking-normal">
                I absolutely love this smartwatch! It tracks my steps, heart rate, and even sleep
                patterns with great accuracy. The design is sleek and lightweight, making it
                comfortable to wear all day. The battery lasts several days, and the notifications
                from my phone come through perfectly.
              </p>
              <VideoReviewThumbnail
                videoUrl={userVideo.url}
                videoThumbnail={userVideo.thumbnail}
                reviewerName="Zain Saris"
                onClick={() => openModal(0)}
              />
              <ReviewModal
                reviews={MEDIA_REVIEWS_VIDEOS}
                activeIndex={lastIndex}
                open={isOpen}
                onClose={closeModal}
                onPrev={goPrev}
                onNext={goNext}
              />
            </div>
            <div className="flex flex-row gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-muted-foreground h-[26px] gap-1.5 px-2 py-1 text-xs"
              >
                <Edit2 className="size-4" />
                Edit
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive hover:bg-destructive/10 h-[26px] gap-1.5 px-2 py-1 text-xs"
              >
                <Trash className="size-4" />
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewThankYouPage;
