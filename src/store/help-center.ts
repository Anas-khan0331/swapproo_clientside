import { ApiResponse, Article, HelpCenterCategory, Paginated, SearchArticle } from "@/types";
import { makeHelpCenterRequest } from "./makeRequest";

export async function fetchCategories() {
  return await makeHelpCenterRequest<Paginated<HelpCenterCategory>>("/category");
}

export async function fetchCategoryBySlug(categorySlug: string) {
  return await makeHelpCenterRequest<ApiResponse<HelpCenterCategory>>(
    `/category/slug/${categorySlug}`,
  );
}
export async function fetchArticleBySlug(articleSlug: string) {
  return await makeHelpCenterRequest<ApiResponse<Article>>(`/article/slug/${articleSlug}`);
}

export async function searchArticles(q: string) {
  return await makeHelpCenterRequest<{ data: SearchArticle[] }>(
    `/article/search?q=${encodeURIComponent(q.trim())}`,
  );
}
