import { TRADE_INS } from "@/features/trade-ins/constants/data";
import { TradeInCard } from "@/features/trade-ins/components/TradeInCard";

export function TradeInsPage() {
  return (
    <div className="wrapper mb-20 flex flex-col pb-20">
      <h1 className="text-foreground pt-8 text-3xl leading-9 font-bold">Trade-in&apos;s</h1>
      {TRADE_INS.map((tradeIn) => (
        <div key={tradeIn.id}>
          <TradeInCard tradeIn={tradeIn} />
        </div>
      ))}
    </div>
  );
}
