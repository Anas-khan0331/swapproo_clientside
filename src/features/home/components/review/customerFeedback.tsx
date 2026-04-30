"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { REVIEWS_DATA } from "@/features/home/constants";
import Show from "@/components/common/show";
import ReviewMedia, { MEDIA_REVIEWS_VIDEOS } from "./reviewMedia";
import { ReviewModal } from "./ReviewModal";
import { useReviewModal } from "./useReviewModal";
import { VideoReviewThumbnail } from "./VideoReviewThumbnail";

const CustomerFeedback = () => {
  const { isOpen, lastIndex, openModal, closeModal, goPrev, goNext } = useReviewModal(
    MEDIA_REVIEWS_VIDEOS.length,
  );

  return (
    <div className="space-y-8 lg:col-span-2">
      <h2 className="text-3xl font-semibold">Customer Videos & Reviews</h2>
      <ReviewMedia />
      {REVIEWS_DATA.map((item) => {
        return (
          <div key={`${item.name}-${item.id}`}>
            <Card className="border-neutral-150 w-full border-b shadow-none ring-0">
              <CardContent className="space-y-3 px-0">
                <div className="flex gap-3">
                  <Avatar className="size-10">
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback className="text-xs">{item.name}</AvatarFallback>
                  </Avatar>
                  <div className="flex grow flex-col">
                    <h5 className="text-lg font-semibold">{item.name}</h5>
                    <span className="text-muted-foreground font-medium">{item.date}</span>
                  </div>
                  <Rating readOnly variant="yellow" size={16} value={item.rating} precision={0.5} />
                </div>

                <p className="text-muted-foreground">{item.description}</p>

                <Show when={!!item.videoUrl}>
                  <VideoReviewThumbnail
                    videoUrl={item.videoUrl}
                    videoThumbnail={item.videoThumbnail}
                    reviewerName={item.name}
                    onClick={() => openModal(0)}
                  />
                </Show>
              </CardContent>
            </Card>
          </div>
        );
      })}

      <ReviewModal
        reviews={MEDIA_REVIEWS_VIDEOS}
        activeIndex={lastIndex}
        open={isOpen}
        onClose={closeModal}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
};

export { CustomerFeedback };
