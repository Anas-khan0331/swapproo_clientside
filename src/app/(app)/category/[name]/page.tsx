import CategoryDetailPage from "@/features/category-detail";

export default async function CategoryDetailRoute({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <CategoryDetailPage name={name} />;
}
