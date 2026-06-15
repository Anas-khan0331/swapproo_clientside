import ThankYouPage from "@/features/thank-you/index";
import type { ThankYouPageProps } from "./types";

export default async function ThankYouPageRoute({ params, searchParams }: ThankYouPageProps) {
  const { slug } = await params;
  const { storage, network, condition } = await searchParams;
  return <ThankYouPage slug={slug} storage={storage} network={network} condition={condition} />;
}
