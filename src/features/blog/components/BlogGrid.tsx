import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../types";
import { getBlogSlug } from "@/lib/utils";

const POSTS_PER_PAGE = 9;

const BlogGrid = ({ posts, currentPage }: { posts: BlogPost[]; currentPage: number }) => {
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginated = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {paginated.map((post, index) => (
        <Link href={`/blogs/${getBlogSlug(post.title)}`} className="block h-full" key={index}>
          <Card className="group h-full transition-all duration-300">
            <CardHeader>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  width={400}
                  height={238}
                  className="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-3.5">
              <div className="text-muted-foreground flex items-center gap-1.5">
                <span className="text-base">{post.date}</span>
              </div>
              <h3 className="line-clamp-2 text-lg font-medium md:text-xl">{post.title}</h3>
              <p className="text-muted-foreground line-clamp-2 text-base">{post.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export { BlogGrid, POSTS_PER_PAGE };
