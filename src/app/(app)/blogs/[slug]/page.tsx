import { notFound } from "next/navigation";
import { HOME_BLOG_POSTS } from "@/features/home/constants";
import { getBlogSlug } from "@/lib/utils";
import { BlogDetails } from "@/features/blog/components/BlogDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return HOME_BLOG_POSTS.map((post) => ({
    slug: getBlogSlug(post.title),
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = HOME_BLOG_POSTS.find((p) => getBlogSlug(p.title) === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetails post={post} />;
}
