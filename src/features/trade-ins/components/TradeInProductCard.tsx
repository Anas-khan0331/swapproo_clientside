"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "iconsax-reactjs";
import { type TradeIn } from "@/features/trade-ins/constants/data";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex flex-col gap-5 lg:gap-4">
      <div className="block px-0 xl:hidden">
        <p className="text-foreground text-2xl leading-8 font-semibold">Trade in #{tradeIn.id}</p>
      </div>
      <div className="flex flex-col items-start justify-between gap-2 px-0 xl:flex-row xl:items-center">
        <div className="flex flex-row items-center gap-4">
          <div className="relative h-34 w-34 overflow-hidden">
            <Image
              src={tradeIn.imageUrl}
              alt={tradeIn.deviceName}
              width={136}
              height={136}
              className=""
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
        <div className="flex w-full flex-col items-end gap-3 xl:w-auto">
          <div className="hidden xl:block">
            <p className="text-foreground text-2xl leading-8 font-semibold">#{tradeIn.id}</p>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            variant="outline"
            size="sm"
            data-icon="inline-end"
            className="h-10 w-full cursor-pointer bg-white! px-3 py-1.5"
          >
            Download Shipping Label
            <ArrowDown className="size-3.5" />
          </Button>
        </div>
      </div>
      <Separator />
      {/* Optional timeline */}
      {showTimeline && timelineSteps}

      {/* Optional additional content */}
      {children}
    </div>
  );
}
