"use client";

import Link from "next/link";
import { useSearchArticles } from "@/hooks/useSearchArticles";
import { SanitizedContent } from "./SanitizedContent";
import HelpBreadcrumb from "@/features/help-center/ui/HelpBreadcrumb";
import type { SearchArticle } from "@/types";

export default function HelpCenterSearchPage({ queryParams }: { queryParams: { q?: string } }) {
  const q = (queryParams.q || "").trim();
  const { data: articles, isLoading } = useSearchArticles(q);

  return (
    <div className="wrapper px-6 py-10">
      <HelpBreadcrumb defaultValue={q} />

      <div className="mt-8">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
          </div>
        ) : !q ? (
          <p className="text-muted-foreground text-base">
            Enter a search term above to get started.
          </p>
        ) : articles.length > 0 ? (
          <SearchResults articles={articles} q={q} />
        ) : (
          <NoResults q={q} />
        )}
      </div>
    </div>
  );
}

function SearchResults({ articles, q }: { articles: SearchArticle[]; q: string }) {
  return (
    <div>
      <h1 className="text-foreground mb-6 text-3xl font-bold">
        {articles.length} results for &quot;{q}&quot;
      </h1>
      <div className="divide-y divide-gray-200">
        {articles.map((article) => (
          <Link
            key={article._id}
            href={`/help-center/${article.categorySlug}/${article.slug}`}
            className="block py-5 transition-colors hover:bg-gray-50"
          >
            <h2 className="text-foreground mb-1 text-base font-bold">
              <SanitizedContent content={article._formatted?.title || article.title} />
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <SanitizedContent content={article._formatted?.content || article.content} />
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function NoResults({ q }: { q: string }) {
  return (
    <div>
      <h1 className="text-foreground mb-2 text-3xl font-bold">No results for &quot;{q}&quot;</h1>
      <p className="text-muted-foreground text-sm">
        Try searching another keyword.{" "}
        <Link href="/help-center" className="text-primary-600 font-medium underline">
          Browse Help Center
        </Link>
      </p>
    </div>
  );
}
