import { HOME_BLOG_POSTS } from "@/features/home/constants";
import { BlogGrid } from "./BlogGrid";

const Blog = () => {
  return (
    <section className="wrapper py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Build Better Products with Insights & Inspiration.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Practical insights and real stories to guide your product from vision to reality.
          </p>
        </div>
        <BlogGrid posts={HOME_BLOG_POSTS?.slice(0, 3)} />
      </div>
    </section>
  );
};

export { Blog };
