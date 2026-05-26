"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConditionKey } from "../types";
import { CONDITION_DATA } from "../constants";

import oneImg from "@/assets/images/device-grading/one.png";
import twoImg from "@/assets/images/device-grading/two.png";
import threeImg from "@/assets/images/device-grading/three.png";

export function ConditionSelector() {
  const [activeTab, setActiveTab] = useState<ConditionKey>("Like New");

  return (
    <section className="wrapper px-4 py-8">
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as ConditionKey)}
        className="w-full gap-8"
      >
        <div className="flex justify-center">
          <TabsList className="gap-1">
            {(Object.keys(CONDITION_DATA) as ConditionKey[]).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="hover:bg-primary/10 cursor-pointer px-5 text-base"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {(Object.keys(CONDITION_DATA) as ConditionKey[]).map((tab) => {
          const data = CONDITION_DATA[tab];
          return (
            <TabsContent key={tab} value={tab}>
              <div className="mx-auto mt-12 max-w-3xl text-center">
                <h2 className="text-4xl leading-10 font-semibold tracking-tight text-neutral-950">
                  {data.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-600">{data.description}</p>
                <div className="font-regular mt-2 inline-flex items-center gap-2.5 rounded-lg border border-sky-100 bg-sky-50 px-4 py-2.5 text-sm text-sky-800">
                  <Info className="size-4 shrink-0 text-[#0284C7]" />
                  <span>{data.bannerText}</span>
                </div>
              </div>
              <div className="mt-12 grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-12">
                {[1, 2, 3].map((cardIdx) => {
                  const cardImage = cardIdx === 1 ? oneImg : cardIdx === 2 ? twoImg : threeImg;
                  return (
                    <div
                      key={cardIdx}
                      className="relative flex h-full min-h-[369px] w-full min-w-[369px] items-center justify-center overflow-hidden rounded-2xl bg-[#eafdc9] p-8 lg:col-span-4"
                    >
                      <div className="h-full w-full">
                        <Image
                          src={cardImage}
                          alt={`${tab} closeup render ${cardIdx}`}
                          priority
                          width={385}
                          height={375}
                          className={`absolute object-contain transition-all duration-500 hover:scale-105 ${
                            cardIdx === 1
                              ? "top-5 right-0 translate-y-[-32px]"
                              : cardIdx === 2
                                ? "translate-y-[-50px]"
                                : cardIdx === 3
                                  ? "translate-y-[-31px]"
                                  : ""
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 rounded-md border border-neutral-100 bg-white px-3 py-4 shadow-xs">
                <div className="grid grid-cols-1 gap-x-0 gap-y-3 sm:grid-cols-2">
                  {data.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#EFFFB2]">
                        <Check className="size-3.5 text-[#0D6F22]" strokeWidth={3} />
                      </div>
                      <p className="text-neutral-650 text-base leading-5 font-semibold">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
