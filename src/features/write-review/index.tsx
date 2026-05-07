// "use client";

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { VideoPlay } from "iconsax-reactjs";
// import Link from "next/link";
// import { useState } from "react";

// function StarIcon({ filled }: { filled: boolean }) {
//   return (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <path
//         d="M16 3l3.9 7.9 8.7 1.3-6.3 6.1 1.5 8.7L16 22.8l-7.8 4.1 1.5-8.7-6.3-6.1 8.7-1.3z"
//         fill={filled ? "currentColor" : "none"}
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export default function WriteAReview() {
//   const [rating, setRating] = useState(0);
//   const [hovered, setHovered] = useState(0);
//   const [videoFile, setVideoFile] = useState<File | null>(null);
//   const [agreed, setAgreed] = useState(false);
//   const [reviewText, setReviewText] = useState("");

//   const activeRating = hovered || rating;

//   return (
//     <div className="bg-white pt-8 pb-11">
//       <div className="mx-auto mb-20 max-w-2xl">
//         <h2 className="text-foreground mb-8 text-3xl font-bold">Write a review</h2>
//         <div className="flex flex-col gap-6">
//           <div className="flex flex-col gap-2">
//             <p className="text-sm font-medium">Rating</p>
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   type="button"
//                   onClick={() => setRating(star)}
//                   onMouseEnter={() => setHovered(star)}
//                   onMouseLeave={() => setHovered(0)}
//                   className={`border-none bg-transparent p-0.5 transition-transform hover:scale-110 ${
//                     activeRating >= star ? "text-[#FACC15]" : "text-neutral-975/20"
//                   }`}
//                 >
//                   <StarIcon filled={activeRating >= star} />
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="flex flex-col gap-3.5">
//             <p className="text-sm font-medium">Write your review</p>
//             <Textarea
//               placeholder="Type here"
//               className="h-[72px] !bg-white"
//               value={reviewText}
//               onChange={(e) => setReviewText(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col gap-3.5">
//             <p className="text-sm font-medium">Add Video</p>
//             <label
//               htmlFor="video-upload"
//               className="border-border hover:bg-muted/40 flex h-44 cursor-pointer items-center justify-center rounded-[10px] border border-dashed transition-colors"
//             >
//               <input
//                 id="video-upload"
//                 type="file"
//                 accept="video/mp4,video/quicktime,video/x-msvideo"
//                 className="hidden"
//                 onChange={(e) => setVideoFile(e.target.files?.[0] ?? null)}
//               />
//               <div className="flex flex-col items-center gap-3">
//                 <VideoPlay />
//                 <div className="flex flex-col items-center gap-1.5">
//                   {videoFile ? (
//                     <p className="text-muted-foreground text-sm">{videoFile.name}</p>
//                   ) : (
//                     <>
//                       <p className="text-sm">
//                         <span className="underline">Record a video</span>
//                         <span className="text-foreground"> or click to </span>
//                         <span className="underline">Upload</span>
//                       </p>
//                       <p className="text-muted-foreground text-sm">
//                         MP4, MOV or AVI (Max. 60 seconds)
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </label>
//             <div className="flex items-start gap-2">
//               <Checkbox
//                 id="terms"
//                 checked={agreed}
//                 onCheckedChange={(v) => setAgreed(!!v)}
//                 className="mt-0.5 size-5 rounded"
//               />
//               <Label
//                 htmlFor="terms"
//                 className="text-muted-foreground cursor-pointer text-sm leading-relaxed"
//               >
//                 By publishing this review you agree with the{" "}
//                 <a href="/terms" className="text-foreground underline hover:no-underline">
//                   terms and conditions
//                 </a>
//                 .
//               </Label>
//             </div>
//           </div>
//           <Link href="/review-thank-you">
//             <Button
//               className="bg-foreground text-background h-10 w-full"
//               disabled={!rating || !agreed}
//               onClick={() => {
//                 console.log({ rating, reviewText, videoFile, agreed });
//               }}
//             >
//               Submit review
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VideoPlay } from "iconsax-reactjs";
import Link from "next/link";
import Link from "next/link";
import { useState } from "react";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4777 29.1073C18.1863 28.9537 17.8378 28.9535 17.5462 29.1068L9.0819 33.557C8.34826 33.9427 7.4908 33.3197 7.63093 32.5028L9.24786 23.0769C9.30355 22.7523 9.1958 22.421 8.95977 22.1913L2.10331 15.5172C1.50903 14.9387 1.83664 13.9299 2.65739 13.8109L12.1175 12.4399C12.4434 12.3927 12.7251 12.1881 12.8708 11.8928L17.1032 3.31701C17.47 2.57376 18.5298 2.57376 18.8967 3.31701L23.129 11.8928C23.2747 12.1881 23.5565 12.3927 23.8823 12.4399L33.3424 13.8109C34.1632 13.9299 34.4908 14.9387 33.8965 15.5172L27.0401 22.1913C26.804 22.421 26.6963 22.7523 26.752 23.0769L28.3685 32.5005C28.5087 33.3178 27.6504 33.9408 26.9167 33.5542L18.4777 29.1073Z"
        fill={filled ? "#FACC15" : "#171717"}
        fillOpacity={filled ? 1 : 0.2}
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
          {/* Rating */}
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
                  className="border-none bg-transparent p-0.5 transition-transform hover:scale-110"
                >
                  <StarIcon filled={activeRating >= star} />
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div className="flex flex-col gap-3.5">
            <p className="text-sm font-medium">Write your review</p>
            <Textarea
              placeholder="Type here"
              className="h-[72px] !bg-white shadow-sm"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>

          {/* Video Upload */}
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

            {/* Terms */}
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

          {/* Submit */}
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
