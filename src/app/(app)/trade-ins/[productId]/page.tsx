import { TRADE_INS } from "@/features/trade-ins/constants/data";
import TradeInDetailPage from "@/features/trade-ins/components/TradeInDetailsPage";
import { notFound } from "next/navigation";

export default async function ProductIdPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const tradeIn = TRADE_INS.find((t) => t.id === productId);

  if (!tradeIn) {
    notFound();
  }

  return <TradeInDetailPage tradeIn={tradeIn} />;
}
