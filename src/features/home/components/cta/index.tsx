"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-primary-50 py-8 lg:py-24">
      <div className="wrapper">
        <Card className="bg-background rounded-3xl p-6 shadow-none lg:p-24">
          <CardContent className="flex items-center justify-between gap-8 px-0 max-lg:flex-col lg:px-4">
            <div className="flex flex-col gap-4">
              <Badge
                variant="outline"
                className="border-primary-300 text-foreground w-fit p-3 text-sm font-normal"
              >
                SWAPPROO for Business
              </Badge>
              <h2 className="text-4xl leading-10 font-semibold tracking-normal md:text-4xl">
                Trade-in at scale.
              </h2>
              <p className="text-muted-foreground font-regular max-w-2xl text-lg leading-7 tracking-normal">
                Use the power of SWAPPROO to buy more, and reach your next milestone.
              </p>
            </div>
            <div className="border-neutral-975 flex w-full max-w-sm shrink-0 flex-col items-center gap-2 rounded-xl border-2 p-3 lg:flex-row">
              <Input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 border border-black/5 px-3 py-[7px] shadow-xs focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button
                disabled={!email}
                className="bg-foreground hover:bg-foreground/90 w-full rounded-lg border-none p-5 font-normal text-white shadow-none focus-visible:ring-0 disabled:pointer-events-auto! disabled:cursor-not-allowed! disabled:opacity-50 md:w-auto md:shrink-0"
              >
                Get started
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { CTASection as BusinessCTA };
