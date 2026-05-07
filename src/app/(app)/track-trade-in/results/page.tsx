import { TrackTradeInResults } from "@/features/track-trade-in/components/TrackTradeInResults";

export default async function TrackTradeInResultsPage({
  searchParams,
}: {
  searchParams: { order?: string };
}) {
  return <TrackTradeInResults orderNumber={searchParams.order} />;
}
