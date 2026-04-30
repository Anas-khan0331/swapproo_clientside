import ThankYouPage from "@/features/thank-you/index";

export default async function ThankYouPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ThankYouPage slug={slug} />;
}
