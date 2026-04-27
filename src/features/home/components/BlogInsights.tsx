import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOG_POSTS } from "../constants";

export function BlogInsights() {
  return (
    <div className="px-8">
      <section className="px-20 py-24">
        <div className="mb-16 flex flex-col gap-4">
          <h2 className="text-foreground text-4xl leading-10 font-semibold tracking-normal">
            Build Better Products with Insights &amp; Inspiration.
          </h2>
          <p className="text-muted-foreground text-xl leading-7 font-normal tracking-normal">
            Practical insights and real stories to guide your product from vision to reality.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Card key={post.title} className="p-0">
              <div className="rounded-lg p-6">
                <Image
                  src={post.imgUrl}
                  height={238}
                  alt="Card image"
                  className="h-[238px] w-full object-cover"
                />
              </div>
              <CardHeader className="flex flex-col gap-[18px]">
                <span className="text-muted-foreground text-base leading-6 font-normal tracking-normal">
                  {post.date}
                </span>
                <CardTitle className="text-foreground text-xl leading-7 font-medium tracking-normal">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-6 font-normal tracking-normal">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
