"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "../types";

interface BlogHeaderProps {
  post: BlogPost;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blogs">Blogs</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/blogs?category=${post.category}`}>{post.category}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Back Button for mobile */}
      <Link
        href="/blogs"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors lg:hidden"
      >
        <ArrowLeft className="size-4" />
        <span>Back to Blogs</span>
      </Link>

      {/* Main Header Title & Description */}
      <div>
        <h1 className="text-foreground text-4xl font-semibold sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <p className="text-muted-foreground font-regular mt-6 text-base leading-6 sm:text-xl">
          {post.description}
        </p>

        <div className="border-neutral-150 mt-6 flex items-center justify-between gap-12 border-t pt-6 text-sm">
          <div>
            <p className="text-muted-foreground font-regular text-sm">Read Time</p>
            <p className="text-foreground mt-1 text-sm font-medium">4 Min read</p>
          </div>
          <div>
            <p className="text-muted-foreground font-regular text-sm">Posted on</p>
            <p className="text-foreground mt-1 text-sm font-medium">{post.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
