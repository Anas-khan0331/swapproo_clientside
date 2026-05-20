"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineRow,
  TimelineTitle,
} from "@/components/ui/timeline";
import { ArrowDown, ArrowDown2, ArrowUp2 } from "iconsax-reactjs";
import Image from "next/image";
import { useState } from "react";
import { DEFAULT_TRACK_STEPS } from "../constants/steps";

interface TrackTradeInResultsProps {
  orderNumber?: string;
}

export function TrackTradeInResults({ orderNumber }: TrackTradeInResultsProps) {
  const order = orderNumber || "#124313431";
  const [stepsExpanded, setStepsExpanded] = useState(true);
  const steps = DEFAULT_TRACK_STEPS;

  return (
    <div className="bg-background wrapper mb-10 flex flex-col items-center justify-center gap-0 pt-8 pb-8 lg:mb-25 lg:pb-20 xl:gap-8">
      <div className="flex w-full flex-col gap-6 xl:gap-8">
        <h1 className="text-foreground text-3xl leading-8 font-bold xl:text-3xl xl:leading-9">
          Trade-in {order}
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col rounded-xl border py-4">
            <div className="flex flex-row items-start gap-3 px-4 pb-0">
              <Image
                src="https://picsum.photos/80/80"
                alt="Product"
                width={80}
                height={80}
                className="mr-2 size-16 shrink-0 object-contain lg:size-20"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-foreground text-2xl leading-6 lg:text-2xl lg:leading-8">
                  <span className="font-semibold">Samsung Galaxy S25 Ultra</span>
                  <span className="text-xl font-normal"> | 256GB | Unlocked | Excellent</span>
                </h2>
                <p className="text-3xl leading-9 font-bold text-green-600 lg:text-4xl lg:leading-10">
                  £684
                </p>
              </div>
            </div>

            <div className="mx-4 my-5 lg:px-4 lg:py-3">
              <Button
                variant="outline"
                className="h-10 w-full gap-2 bg-white! text-sm font-medium shadow-xs"
              >
                Download Shipping Label
                <ArrowDown size={16} />
              </Button>
            </div>

            <Separator />
            <button
              onClick={() => setStepsExpanded((p) => !p)}
              className={`flex w-full items-center justify-between px-4 pt-3 ${stepsExpanded ? "pb-3" : "pb-0"} text-sm font-medium text-neutral-700 xl:hidden`}
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
                  <div key={index} className="flex flex-col gap-3">
                    <TimelineIndicator status={step.status}>{step.icon}</TimelineIndicator>
                    <div className="flex flex-col gap-[6px]">
                      <p className="text-foreground text-base font-semibold">{step.title}</p>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="hidden px-4 pt-2 pb-2 xl:block">
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
  );
}
