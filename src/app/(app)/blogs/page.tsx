import { BlogPage } from "@/features/blog";
import { HOME_BLOG_POSTS } from "@/features/home/constants";
import React from "react";

const Blogs = () => {
  return (
    <>
      <BlogPage blogPosts={HOME_BLOG_POSTS} />
    </>
  );
};

export default Blogs;
