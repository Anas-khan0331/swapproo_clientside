import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/features/home/types";
import Image from "next/image";
import Link from "next/link";
import { DateSpan } from "./DateSpan";
import { getBlogSlug } from "@/lib/utils";

const BlogGrid = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post, index) => (
        <Link href={`/blogs/${getBlogSlug(post.title)}`} className="block h-full" key={index}>
          <Card className="group h-full overflow-hidden shadow-none transition-all duration-300">
            <CardContent className="space-y-3.5">
              <div className="mb-6 h-[238px] overflow-hidden rounded-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={600}
                  height={238}
                />
              </div>
              <div className="text-muted-foreground flex items-center gap-1.5">
                <DateSpan date={post.date} />
              </div>
              <h3 className="text-xl leading-7 font-medium md:text-xl">{post.title}</h3>
              <p className="text-muted-foreground line-clamp-2 text-base leading-6">
                {post.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export { BlogGrid };
