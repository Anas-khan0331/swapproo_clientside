import { type TradeIn } from "@/features/trade-ins/constants/data";
import { InfoRow } from "./InfoRow";

interface ShippingInfoProps {
  shippingAddress: TradeIn["shippingAddress"];
}

export function ShippingInfo({ shippingAddress }: ShippingInfoProps) {
  return (
    <div className="p-6">
      <p className="text-foreground mb-[14px] text-base font-bold lg:mb-4">Shipping</p>
      <div className="grid grid-cols-2 gap-5">
        <InfoRow label="From:" value={shippingAddress.from} />
        <InfoRow label="To:" value={shippingAddress.to} />
        <InfoRow label="Via:" value={shippingAddress.via} />
        <InfoRow label="Parcel number:" value={shippingAddress.parcelNumber} />
      </div>
    </div>
  );
}
