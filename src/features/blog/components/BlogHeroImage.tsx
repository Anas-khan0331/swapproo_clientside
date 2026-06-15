"use client";

import Image from "next/image";
import { BlogPost } from "../types";

interface BlogHeroImageProps {
  post: BlogPost;
}

export function BlogHeroImage({ post }: BlogHeroImageProps) {
  return (
    <div className="relative my-16 aspect-video w-full overflow-hidden rounded-2xl border bg-gray-50">
      <Image
        src={post.imageUrl}
        alt={post.imageAlt || post.title}
        fill
        priority
        className="h-[440px] object-cover"
      />
    </div>
  );
}
