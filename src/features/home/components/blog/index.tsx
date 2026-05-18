import { HOME_BLOG_POSTS } from "@/features/home/constants";
import { BlogGrid } from "./BlogGrid";

const Blog = () => {
  return (
    <section className="wrapper pt-12 pb-20 lg:py-24">
      <div className="">
        <div className="">
          <h2 className="text-4xl font-semibold">
            Build Better Products with Insights & Inspiration.
          </h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Practical insights and real stories to guide your product from vision to reality.
          </p>
        </div>
        <div className="mt-16">
          <BlogGrid posts={HOME_BLOG_POSTS?.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
};

export { Blog };
