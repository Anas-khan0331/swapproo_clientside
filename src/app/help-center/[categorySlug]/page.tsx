import CategoryListPage from "@/features/help-center/components/CategoryList";
import { fetchCategoryBySlug } from "@/store/help-center";

type HelpCenterPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export default async function HelpCenterPage({ params }: HelpCenterPageProps) {
  const { categorySlug } = await params;

  const [error, category] = await fetchCategoryBySlug(categorySlug);

  if (error) return;

  return <CategoryListPage {...category.data} />;
}
