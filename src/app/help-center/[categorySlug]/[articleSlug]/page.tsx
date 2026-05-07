import ArticleContent from "@/features/help-center/components/ArticleContent";
import ArticleFaqs from "@/features/help-center/components/ArticleFaqs";
import { ARTICLE_TYPES } from "@/features/help-center/data/article";
import { parseSections } from "@/features/help-center/utils/article";
import { fetchArticleBySlug } from "@/store/help-center";

export default async function HelpCenterArticlePage({
  params,
}: {
  params: Promise<{ categorySlug: string; articleSlug: string }>;
}) {
  const { articleSlug } = await params;

  const [error, res] = await fetchArticleBySlug(articleSlug);

  if (error) return null;

  const article = res?.data;

  function renderContent() {
    if (article?.type === ARTICLE_TYPES.TEXT) {
      const sections = parseSections(article?.content);
      return <ArticleContent sections={sections} />;
    }
    if (article?.type === ARTICLE_TYPES.FAQ) {
      return <ArticleFaqs faqs={article?.content} />;
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground text-xl leading-7 font-bold">{article?.title}</h1>
      {renderContent()}
    </div>
  );
}
