import { TRADE_INS } from "@/features/trade-ins/constants/data";
import { TradeInCard } from "@/features/trade-ins/components/TradeInCard";

export function TradeInsPage() {
  return (
    <div className="wrapper mb-20 flex flex-col pb-20">
      {TRADE_INS.map((tradeIn) => (
        <div key={tradeIn.id}>
          <TradeInCard tradeIn={tradeIn} />
        </div>
      ))}
    </div>
  );
}
