import Image from "next/image";
import { TRADE_IN_STEPS } from "@/features/home/constants";

const TradeInSteps = () => {
  return (
    <section className="wrapper py-14 md:px-0 md:py-20">
      <h2 className="mb-12 text-center text-3xl leading-9 font-semibold tracking-normal lg:text-4xl lg:leading-10">
        Trade-in 3 Easy Steps
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TRADE_IN_STEPS.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center gap-5 rounded-xl px-20 text-center md:px-0"
          >
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
