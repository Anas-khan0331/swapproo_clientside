"use client";

import { DeviceGradingHero } from "./DeviceGradingHero";
import { ConditionSelector } from "./ConditionSelector";
import { FAQSection } from "@/features/home/components/faq";

export function DeviceGradingPage() {
  return (
    <>
      <DeviceGradingHero />
      <ConditionSelector />
      <FAQSection />
    </>
  );
}
export default DeviceGradingPage;
