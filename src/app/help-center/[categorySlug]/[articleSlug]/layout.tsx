import { ReactNode } from "react";
import { fetchArticleBySlug, fetchCategoryBySlug } from "@/store/help-center";
import { ArticleType } from "@/types";
import ArticleSidebar from "@/features/help-center/components/ArticleSidebar";
import ArticleMainContent from "@/features/help-center/components/ArticleMainContent";
import HelpQuickAssistance from "@/features/help-center/components/HelpQuickAssistance";
import { getSidebarData } from "@/features/help-center/utils/article";

type HelpCenterSlugLayoutProps = {
  children: ReactNode;
  params: Promise<{ categorySlug: string; articleSlug: string }>;
};

export default async function HelpCenterSlugLayout({
  children,
  params,
}: HelpCenterSlugLayoutProps) {
  const { categorySlug, articleSlug } = await params;

  const [[, articleRes]] = await Promise.all([
    fetchArticleBySlug(articleSlug),
    fetchCategoryBySlug(categorySlug),
  ]);

  const article = articleRes?.data;
  const isFaq = article?.type === ArticleType.FAQ;
  const sidebar = getSidebarData(article?.content, article?.type, article?._id);

  if (isFaq) {
    return (
      <>
        <div className="wrapper pb-14">{children}</div>
        <HelpQuickAssistance />
      </>
    );
  }

  return (
    <>
      <div className="wrapper pb-14">
        <div className="mt-6 flex items-start gap-6">
          <ArticleSidebar sidebar={sidebar} />
          <ArticleMainContent>{children}</ArticleMainContent>
        </div>
      </div>
      <HelpQuickAssistance />
    </>
  );
}
