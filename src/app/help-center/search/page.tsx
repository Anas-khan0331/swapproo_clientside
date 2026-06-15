import HelpCenterSearchPage from "@/features/help-center/components/HelpCenterSearchPage";

export default async function HelpCenterSearch({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return <HelpCenterSearchPage queryParams={params} />;
}
