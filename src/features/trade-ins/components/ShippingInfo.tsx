import { type TradeIn } from "@/features/trade-ins/constants/data";
import { InfoRow } from "./InfoRow";

interface ShippingInfoProps {
  shippingAddress: TradeIn["shippingAddress"];
}

export function ShippingInfo({ shippingAddress }: ShippingInfoProps) {
  return (
    <div className="p-6">
      <p className="text-foreground mb-4 text-base font-bold">Shipping</p>
      <div className="grid grid-cols-2 gap-5">
        <InfoRow label="Full Name:" value={shippingAddress.fullName} />
        <InfoRow label="Address:" value={shippingAddress.address} />
        <InfoRow label="City:" value={shippingAddress.city} />
        <InfoRow label="Postal Code:" value={shippingAddress.postalCode} />
        <InfoRow label="Country:" value={shippingAddress.country} />
      </div>
    </div>
  );
}
