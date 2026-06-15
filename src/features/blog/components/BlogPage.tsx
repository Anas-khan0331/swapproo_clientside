import { BlogProps } from "../types";
import { BlogHero } from "./BlogHero";
import { BlogTabs } from "./BlogTabs";

const BlogPage = ({ blogPosts }: BlogProps) => {
  return (
    <div className="mb-20">
      <BlogHero />
      <BlogTabs blogPosts={blogPosts} />
    </div>
  );
};

export { BlogPage };
