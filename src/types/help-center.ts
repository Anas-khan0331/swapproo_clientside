export enum ArticleType {
  TEXT = "text",
  FAQ = "faq",
}

export type ArticleSection = {
  id: string;
  heading: string;
  content: string;
};

export type Article = {
  _id: string;
  title: string;
  slug: string;
  type: ArticleType;
  category: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type SearchArticle = {
  _id: string;
  title: string;
  content: string;
  slug: string;
  categorySlug: string;
  _formatted?: {
    title?: string;
    content?: string;
  };
};

export type HelpCenterCategory = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  media: string;
  articles: Article[];
  createdAt: string;
  updatedAt: string;
};
