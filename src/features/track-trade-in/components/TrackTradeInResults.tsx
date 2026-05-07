"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { DEFAULT_TRACK_STEPS } from "../constants/steps";
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

interface TrackTradeInResultsProps {
  orderNumber?: string;
}

export function TrackTradeInResults({ orderNumber }: TrackTradeInResultsProps) {
  const order = orderNumber || "#124313431";

  const steps = DEFAULT_TRACK_STEPS;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="bg-background wrapper mb-25 flex flex-col items-center justify-center gap-8 pt-8 pb-20">
      <div className="flex w-full flex-col gap-8">
        <h1 className="text-foreground text-3xl leading-9 font-bold">Trade-in {order}</h1>
=======
    <div className="bg-background mb-25 flex flex-col items-center justify-center gap-8 pt-8 pb-20">
      <div className="flex w-full max-w-7xl flex-col gap-8 px-8">
        <h1 className="text-foreground text-3xl leading-9 font-bold">Trade-in #{orderNumber}</h1>
>>>>>>> b8437c4 (All Swapproo Screen Implemented)
=======
    <div className="bg-background wrapper mb-25 flex flex-col items-center justify-center gap-8 pt-8 pb-20">
      <div className="flex w-full flex-col gap-8">
        <h1 className="text-foreground text-3xl leading-9 font-bold">Trade-in {order}</h1>
>>>>>>> 61d172b (Swappro Changes implementation with help-center and api integrations)
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 rounded-[14px] border py-4">
            <div className="flex flex-row items-center gap-2 px-4">
              <Image
                src="https://picsum.photos/80/80"
                alt="iPhone"
                width={80}
                height={80}
                className="size-20 object-contain"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2 pr-4">
                  <h2 className="text-foreground text-2xl leading-8">
                    iPhone 17 Pro Max | 256GB | Unlocked | Excellent
                  </h2>
                </div>
                <div className="flex flex-row items-center gap-2 pr-4">
                  <p className="text-4xl leading-10 font-bold text-green-600">£684</p>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex flex-row gap-4 px-4">
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
