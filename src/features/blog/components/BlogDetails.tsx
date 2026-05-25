"use client";

import { BlogPost } from "../types";
import { BlogHeader } from "./BlogHeader";
import { BlogHeroImage } from "./BlogHeroImage";
import { BlogSidebarToC } from "./BlogSidebarToC";
import { BlogContent } from "./BlogContent";
import { BLOG_CONTENTS, getFallbackBlogContent } from "../constants/blogData";
import { getBlogSlug } from "@/lib/utils";

interface BlogDetailsProps {
  post: BlogPost;
}

export function BlogDetails({ post }: BlogDetailsProps) {
  const slug = getBlogSlug(post.title);
  const sections = BLOG_CONTENTS[slug] || getFallbackBlogContent(post.title, post.category);

  // Dynamically map our structured blog sections to the Table of Contents item shape
  const tocItems = sections.map((section) => ({
    id: section.id,
    label: section.title,
    level: section.level,
  }));

  return (
    <article className="py-12">
      <div className="wrapper px-4 sm:px-6 lg:px-8">
        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sidebar - On This Page (4 columns) */}
          <BlogSidebarToC tocItems={tocItems} />

          <main className="lg:col-span-8">
            <BlogHeader post={post} />
            <BlogHeroImage post={post} />
            <BlogContent sections={sections} />
          </main>
        </div>
      </div>
    </article>
  );
}
