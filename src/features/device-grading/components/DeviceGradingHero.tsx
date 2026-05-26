"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import gradingBg from "@/assets/images/device-grading/grading.png";

export function DeviceGradingHero() {
  return (
    <section className="relative min-h-[320px] overflow-hidden py-[76px]">
      <Image
        src={gradingBg}
        alt="Grading Background"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="wrapper px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl leading-16 font-bold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl md:leading-14 lg:leading-10">
          Honest Grading. <span className="text-primary-825">Fair Pricing.</span>
        </h1>
        <p className="text-muted-foreground font-regular mx-auto mt-4 max-w-4xl text-lg leading-7">
          Select the condition that best matches your item. Every device undergoes professional
          verification by our team to guarantee your final payout.
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            className="h-10 rounded-md border border-neutral-100 bg-white! px-6 py-[10px] text-sm font-medium text-neutral-950 hover:bg-neutral-50!"
            style={{
              boxShadow:
                "var(--shadowxsoffset-x) var(--shadowxsoffset-y) var(--shadowxsblur-radius) var(--shadowxsspread-radius) #0000000D",
            }}
          >
            Sell Your Device Now
          </Button>
        </div>
      </div>
    </section>
  );
}
