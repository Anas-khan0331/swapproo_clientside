import HelpCenterHome from "@/features/help-center";
import { fetchCategories } from "@/store/help-center";

export default async function HelpCenterHomePage() {
  const [err, categories] = await fetchCategories();

  if (err) return;

  return <HelpCenterHome categories={categories} />;
}
