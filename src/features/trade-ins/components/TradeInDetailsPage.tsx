"use client";

import { MobileTabNav, type MobileTabNavItem } from "@/components/common/MobileTabNav";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
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
import { type TradeIn } from "@/features/trade-ins/constants/data";
import { DEFAULT_TRADE_IN_STEPS } from "@/features/trade-ins/constants/steps";
import { ArrowDown2, ArrowUp2, Profile } from "iconsax-reactjs";
import { ArrowRightLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { PersonalInfo } from "./PersonalInfo";
import { ShippingInfo } from "./ShippingInfo";
import { TradeInProductCard } from "./TradeInProductCard";

const accountTabs: MobileTabNavItem[] = [
  { value: "profile", label: "Profile", icon: Profile, iconSize: 32, iconColor: "#0a0a0a" },
  { value: "tradeins", label: "Trade-in's", icon: ArrowRightLeft },
];

const TradeInDetailPage = ({ tradeIn }: { tradeIn: TradeIn }) => {
  const router = useRouter();
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
    <div className="wrapper mb-20 pt-8 pb-20">
      <div className="mb-4 lg:hidden">
        <Tabs
          defaultValue="tradeins"
          onValueChange={(val) => {
            if (val === "profile") router.push("/account");
          }}
        >
          <MobileTabNav tabs={accountTabs} />
        </Tabs>
      </div>

      <Breadcrumb tradeInId={tradeIn.id} />
      <Card className="border-border mb-6 rounded-xl border ring-0">
        <CardContent className="p-0">
          <TradeInProductCard
            tradeIn={tradeIn}
            showTimeline={true}
            timelineSteps={
              <>
                {/* <Separator /> */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setStepsExpanded((p) => !p);
                  }}
                  className="flex w-full items-center justify-between px-5 py-0 text-sm font-medium xl:hidden"
                >
                  <span className="text-neutral-975">{stepsExpanded ? "Less" : "More"}</span>
                  {stepsExpanded ? (
                    <ArrowUp2 size={18} color="#171717" />
                  ) : (
                    <ArrowDown2 size={18} color="#171717" />
                  )}
                </button>
                {stepsExpanded && (
                  <div className="flex flex-col gap-6 pt-[10px] pb-2 xl:hidden">
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
                <div className="hidden pt-2 pb-2 xl:block">
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
              </>
            }
          />
        </CardContent>
      </Card>
      <Card className="border-border rounded-xl border p-0 ring-0">
        <CardContent className="p-0">
          <div className="divide-border grid grid-cols-1 divide-y lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            <ShippingInfo shippingAddress={tradeIn.shippingAddress} />
            <PersonalInfo personalInfo={tradeIn.personalInfo} bankDetails={tradeIn.bankDetails} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradeInDetailPage;
