"use client";

import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { TrackingForm } from "./TrackingForm";
import { TrackingFeatures } from "./TrackingFeatures";

const TrackTradeInForm = () => {
  const router = useRouter();

  const handleSubmit = (orderNumber: string, zipCode: string) => {
    router.push(`/track-trade-in/results?order=${orderNumber}&zip=${zipCode}`);
  };

  return (
    <div className="bg-background mb-100 flex flex-col items-center gap-8 pt-8 pb-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-col justify-center gap-6 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6">
            <TrackingForm onSubmit={handleSubmit} />
          </div>

          <Separator orientation="vertical" className="h-auto max-lg:hidden" />
          <Separator className="lg:hidden" />

          <TrackingFeatures />
        </div>
      </div>
    </div>
  );
};

export default TrackTradeInForm;
