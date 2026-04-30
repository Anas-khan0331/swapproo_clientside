"use client";

import { Card, CardContent } from "@/components/ui/card";
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
import { DEFAULT_TRADE_IN_STEPS } from "@/features/trade-ins/constants/steps";
import { type TradeIn } from "@/features/trade-ins/constants/data";
import { TradeInProductCard } from "./TradeInProductCard";
import { Breadcrumb } from "./Breadcrumb";
import { ShippingInfo } from "./ShippingInfo";
import { PersonalInfo } from "./PersonalInfo";

const TradeInDetailPage = ({ tradeIn }: { tradeIn: TradeIn }) => {
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
    <div className="wrapper mb-20 pt-8 pb-20">
      <Breadcrumb tradeInId={tradeIn.id} />
      <Card className="border-border mb-6 rounded-xl border">
        <CardContent className="p-5">
          <TradeInProductCard
            tradeIn={tradeIn}
            showTimeline={true}
            timelineSteps={
              <>
                <Separator className="mb-5" />
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
              </>
            }
          />
        </CardContent>
      </Card>
      <Card className="border-border rounded-xl border p-0">
        <CardContent className="p-0">
          <div className="divide-border grid grid-cols-2 divide-x">
            <ShippingInfo shippingAddress={tradeIn.shippingAddress} />
            <PersonalInfo personalInfo={tradeIn.personalInfo} bankDetails={tradeIn.bankDetails} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradeInDetailPage;
