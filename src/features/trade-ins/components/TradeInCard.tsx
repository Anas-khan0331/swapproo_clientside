"use client";

import Link from "next/link";
import { DEFAULT_TRADE_IN_STEPS } from "@/features/trade-ins/constants/steps";
import { type TradeIn } from "@/features/trade-ins/constants/data";
import { Separator } from "@/components/ui/separator";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineIndicator,
  TimelineConnector,
  TimelineRow,
} from "@/components/ui/timeline";
import { TradeInProductCard } from "./TradeInProductCard";

export const TradeInCard = ({ tradeIn }: { tradeIn: TradeIn }) => {
  const orderNumber = tradeIn.id;
  const statusOrder = ["processing", "shipped", "delivered", "inspection", "approved", "paid"];
  const currentIndex = statusOrder.indexOf(tradeIn.status);

  const steps = DEFAULT_TRADE_IN_STEPS.map((step) => {
    const stepIndex = statusOrder.indexOf(
      step.status as "processing" | "shipped" | "delivered" | "inspection" | "approved" | "paid",
    );
    let displayStatus: "completed" | "pending" | "inactive";

    if (stepIndex < currentIndex) {
      displayStatus = "completed";
    } else if (stepIndex === currentIndex) {
      displayStatus = "pending";
    } else {
      displayStatus = "inactive";
    }

    return { ...step, status: displayStatus };
  });

  return (
    <Link href={`/trade-ins/${tradeIn.id}`}>
      <div className="bg-background flex flex-col items-center justify-center pt-8">
        <div className="flex w-full flex-col gap-8 px-0">
<<<<<<< HEAD
=======
          <h1 className="text-foreground text-3xl leading-9 font-bold">Trade-in #{orderNumber}</h1>
>>>>>>> b8437c4 (All Swapproo Screen Implemented)
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-[14px] border px-4 py-4">
              <TradeInProductCard tradeIn={tradeIn} showTimeline={false} />
              <Separator />
              <div className="flex flex-row gap-4">
                <Timeline>
                  {steps.map((step, index) => (
                    <TimelineItem key={index}>
                      <TimelineRow>
                        <TimelineIndicator status={step.status}>{step.icon}</TimelineIndicator>
                        {step.showLine && <TimelineConnector status={step.status} />}
                      </TimelineRow>
                      <TimelineContent>
                        <TimelineTitle>{step.title}</TimelineTitle>
                        <TimelineDescription>{step.description}</TimelineDescription>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
