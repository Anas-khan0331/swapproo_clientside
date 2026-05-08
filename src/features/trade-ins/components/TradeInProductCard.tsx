"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "iconsax-reactjs";
import { type TradeIn } from "@/features/trade-ins/constants/data";

interface TradeInProductCardProps {
  tradeIn: TradeIn;
  showTimeline?: boolean;
  timelineSteps?: React.ReactNode;
  children?: React.ReactNode;
}

export function TradeInProductCard({
  tradeIn,
  showTimeline = false,
  timelineSteps,
  children,
}: TradeInProductCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-muted relative h-20 w-20 overflow-hidden">
            <Image
              src={tradeIn.imageUrl}
              alt={tradeIn.deviceName}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-foreground text-lg font-semibold">
              <span className="font-bold">{tradeIn.deviceName}</span>{" "}
              <span className="text-muted-foreground font-normal">| {tradeIn.deviceSpecs}</span>
            </p>
            <p className="text-primary-600 mt-0.5 text-2xl font-bold">£{tradeIn.price}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <p className="text-foreground text-2xl leading-8 font-semibold">#{tradeIn.id}</p>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            variant="outline"
            size="sm"
            data-icon="inline-end"
            className="relative z-50 cursor-pointer bg-white! px-3 py-1.5"
          >
            Download Shipping Label
            <ArrowDown className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* Optional timeline */}
      {showTimeline && timelineSteps}

      {/* Optional additional content */}
      {children}
    </div>
  );
}
