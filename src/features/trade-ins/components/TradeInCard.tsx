"use client";

import Link from "next/link";
import { useState } from "react";
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
import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs";
import { TradeInProductCard } from "./TradeInProductCard";

export const TradeInCard = ({ tradeIn }: { tradeIn: TradeIn }) => {
  const [stepsExpanded, setStepsExpanded] = useState(false);

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
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-[14px] border px-0 py-4">
              <div className="px-4">
                <TradeInProductCard tradeIn={tradeIn} showTimeline={false} />
              </div>
              <Separator />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStepsExpanded((p) => !p);
                }}
                className={`flex w-full items-center justify-between px-4 xl:hidden ${stepsExpanded ? "pb-1" : "pb-0"} text-sm font-medium`}
              >
                <span className="text-neutral-975">{stepsExpanded ? "Less" : "More"}</span>
                {stepsExpanded ? (
                  <ArrowUp2 size={18} color="#171717" />
                ) : (
                  <ArrowDown2 size={18} color="#171717" />
                )}
              </button>
              {stepsExpanded && (
                <div className="flex flex-col gap-6 px-4 pt-2 pb-2 xl:hidden">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <TimelineIndicator status={step.status}>{step.icon}</TimelineIndicator>
                      <div className="flex flex-col gap-[6px]">
                        <p className="text-foreground text-base font-semibold">{step.title}</p>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* Desktop: always-visible Timeline */}
              <div className="hidden px-4 pb-2 xl:block">
                <Timeline>
                  {steps.map((step, index) => (
                    <TimelineItem key={index}>
                      <TimelineRow>
                        <TimelineIndicator status={step.status}>{step.icon}</TimelineIndicator>
                        {step.showLine && <TimelineConnector status={step.status} />}
                      </TimelineRow>
                      <TimelineContent>
                        <TimelineTitle className="font-medium">{step.title}</TimelineTitle>
                        <TimelineDescription className="text-sm">
                          {step.description}
                        </TimelineDescription>
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
