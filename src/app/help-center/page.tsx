import HelpByCategory from "@/features/help-center/components/HelpByCategory";
import HelpCenterHero from "@/features/help-center/components/HelpCenterHero";
import HelpQuickAssistance from "@/features/help-center/components/HelpQuickAssistance";
import { fetchCategories } from "@/store/help-center";

export default async function HelpCenterHomePage() {
  const [err, categories] = await fetchCategories();

  return (
    <>
      <HelpCenterHero />
      {!err && categories && <HelpByCategory categories={categories} />}
      <HelpQuickAssistance />
    </>
  );
}
