import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/features/home/types";
import Image from "next/image";
import Link from "next/link";

const BlogGrid = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post, index) => (
        <Card
          key={index}
          className="group h-full overflow-hidden shadow-none transition-all duration-300"
        >
          <CardContent className="space-y-3.5">
            <div className="mb-6 h-[238px] overflow-hidden rounded-lg">
              <Link href={post.blogLink} className="block h-full">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={600}
                  height={238}
                />
              </Link>
            </div>
            <div className="text-muted-foreground flex items-center gap-1.5">
              <span>{post.date}</span>
            </div>
            <h3 className="line-clamp-2 text-lg font-medium md:text-xl">
              <a href={post.blogLink}>{post.title}</a>
            </h3>
            <p className="text-muted-foreground line-clamp-2">{post.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { BlogGrid };
