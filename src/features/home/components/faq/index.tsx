import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/features/home/constants";

const FAQSection = () => {
  return (
    <div className="bg-neutral-025 px-8">
      <section className="px-20 py-24">
        <div className="mb-24 flex flex-col gap-4 text-center">
          <h2 className="text-foreground text-4xl leading-10 font-semibold tracking-normal">
            Need Help? We&apos;ve Got Answers
          </h2>
          <p className="text-muted-foreground text-xl leading-7 font-normal tracking-normal">
            Explore Our Most Commonly Asked Questions and Find the Information You Need.
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" defaultValue="item-0" collapsible className="mx-auto w-full">
            {FAQ_DATA.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-foreground text-base leading-6 tracking-normal">
                  {item?.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-125 text-sm leading-5 tracking-normal">
                  {item?.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export { FAQSection };
