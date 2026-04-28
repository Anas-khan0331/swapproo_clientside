import Image from "next/image";
import { TRADE_IN_STEPS } from "@/features/home/constants";

const TradeInSteps = () => {
  return (
    <section className="wrapper py-20">
      <h2 className="mb-12 text-center text-4xl leading-10 font-semibold tracking-normal">
        Trade-in 3 Easy Steps
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {TRADE_IN_STEPS.map((step) => (
          <div key={step.title} className="flex flex-col items-center gap-5 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl">
              <Image src={step.icon} alt={step.title} width={48} height={48} />
            </div>
            <div className="flex max-w-[256px] flex-col gap-2">
              <h3 className="text-xl leading-7 font-semibold tracking-normal">{step.title}</h3>
              <p className="text-foreground text-base leading-6 font-normal tracking-normal">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { TradeInSteps };
