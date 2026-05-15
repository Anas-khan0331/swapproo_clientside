import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/features/home/constants";

const FAQSection = () => {
  return (
    <div className="bg-neutral-025 px-4 md:px-8">
      <section className="py-12 md:px-20 md:py-24">
        <div className="mb-12 flex flex-col gap-4 text-center md:mb-24">
          <h2 className="text-foreground text-4xl leading-8 font-semibold tracking-normal md:leading-10">
            Need Help? We&apos;ve Got Answers
          </h2>
          <p className="text-neutral-125 text-xl leading-7 font-normal tracking-normal md:leading-8">
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
