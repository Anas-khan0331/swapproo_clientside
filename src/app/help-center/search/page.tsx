import HelpCenterSearchPage from "@/features/help-center/components/HelpCenterSearchPage";

export default async function HelpCenterSearch({ searchParams }) {
  const params = await searchParams;

  return <HelpCenterSearchPage queryParams={params} />;
}
