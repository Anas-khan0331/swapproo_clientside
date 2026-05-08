"use client";

import { useState } from "react";
import { Rating } from "@/components/ui/rating";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import ReviewMedia, { MEDIA_REVIEWS_VIDEOS } from "@/features/home/components/review/reviewMedia";
import { ReviewModal } from "@/features/home/components/review/ReviewModal";
import { useReviewModal } from "@/features/home/components/review/useReviewModal";
import { FAQSection } from "@/features/home/components/faq";
import { Blog } from "@/features/home/components/blog";
import { ALL_REVIEWS_DATA } from "@/features/all-review/constants";
import { FilterDropdown } from "@/features/all-review/components/FilterDropdown";
import ActionButtons from "./components/ActionButtons";
import AllReviewRating from "./components/AllReviewRating";
import { TickCircle } from "iconsax-reactjs";
import { VideoReviewThumbnail } from "@/features/home/components/review/VideoReviewThumbnail";

const AllReviewsPage = () => {
  const [ratingFilter, setRatingFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const { isOpen, lastIndex, openModal, closeModal, goPrev, goNext } = useReviewModal(
    MEDIA_REVIEWS_VIDEOS.length,
  );

  const filteredReviews = ALL_REVIEWS_DATA.filter((r) => {
    const ratingMatch = ratingFilter === "All" || Math.floor(r.rating) === parseInt(ratingFilter);
    const typeMatch =
      typeFilter === "All" ||
      (typeFilter === "Verified" && r.verified) ||
      (typeFilter === "Not Verified" && !r.verified);
    return ratingMatch && typeMatch;
  });

  return (
    <>
      <section className="wrapper pt-8">
        <div className="flex flex-col">
          <h2 className="text-foreground text-4xl leading-10 font-semibold">All Reviews</h2>
          <div className="flex flex-col py-8">
            <div className="grid grid-cols-12 items-center gap-10">
              <div className="col-span-8 flex items-center gap-10">
                <AllReviewRating value={4.5} />
              </div>
              <div className="col-span-4">
                <ActionButtons />
              </div>
            </div>

            <div className="mt-15 flex flex-col gap-8">
              <ReviewMedia />
              <div className="flex gap-4">
                <FilterDropdown
                  label="Rating"
                  options={["All", "5", "4", "3", "2", "1"]}
                  value={ratingFilter}
                  onChange={setRatingFilter}
                />
                <FilterDropdown
                  label="Verified"
                  options={["All", "Verified", "Not Verified"]}
                  value={typeFilter}
                  onChange={setTypeFilter}
                />
              </div>

              {/* Review Cards */}
              <div className="flex flex-col">
                {filteredReviews.map((review, index) => (
                  <div key={review.id}>
                    <div className="bg-card flex flex-col gap-3 py-6">
                      <div className="flex gap-3">
                        <div className="flex flex-1 gap-3">
                          <Avatar>
                            <AvatarImage
                              src={`https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-${review.avatar}.png`}
                              className="size-10"
                            />
                            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <p className="text-card-foreground text-lg font-semibold">
                                {review.name}
                              </p>
                              {review.verified && (
                                <div className="flex items-center gap-1">
                                  <TickCircle className="text-primary-825 size-[18px]" />
                                  <p className="text-muted-foreground text-base">Verified</p>
                                </div>
                              )}
                            </div>
                            <p className="text-muted-foreground text-base font-medium">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <Rating
                          readOnly
                          variant="yellow"
                          size={16}
                          value={review.rating}
                          precision={0.5}
                        />
                      </div>
                      <p className="text-muted-foreground text-base">{review.text}</p>
                      {review.hasMedia && review.videoIndex !== undefined && (
                        <VideoReviewThumbnail
                          videoUrl={MEDIA_REVIEWS_VIDEOS[review.videoIndex].url}
                          videoThumbnail={MEDIA_REVIEWS_VIDEOS[review.videoIndex].thumbnail}
                          reviewerName={review.name}
                          onClick={() => openModal(review.videoIndex!)}
                        />
                      )}
                    </div>
                    {index < filteredReviews.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewModal
        reviews={MEDIA_REVIEWS_VIDEOS}
        activeIndex={lastIndex}
        open={isOpen}
        onClose={closeModal}
        onPrev={goPrev}
        onNext={goNext}
      />
      <FAQSection />
      <Blog />
    </>
  );
};

export default AllReviewsPage;
