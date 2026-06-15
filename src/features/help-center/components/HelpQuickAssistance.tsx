import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HelpQuickAssistance() {
  return (
    <div className="bg-neutral-075 py-[130px] text-center">
      <div className="mx-auto flex max-w-3xl flex-col gap-2">
        <h3 className="text-foreground text-center text-3xl leading-9 font-bold">
          Need a little more support?
        </h3>
        <p className="font-regular text-foreground text-center text-lg leading-8">
          Get fast answers to your questions about quotes, item shipping, and payments. Everything
          you need for a seamless swap.
        </p>
      </div>
      <Link href="/support/contact-us" className="mt-6">
        <Button className="border-neural-075 text-foreground bg-white px-4 py-5 shadow-sm">
          Contact us
        </Button>
      </Link>
    </div>
  );
}
