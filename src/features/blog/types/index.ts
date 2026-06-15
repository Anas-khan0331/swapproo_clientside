export type BlogPost = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  category: string;
  author: string;
  authorLink: string;
  blogLink: string;
  categoryLink: string;
};

export type BlogProps = {
  blogPosts: BlogPost[];
};
