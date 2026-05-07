"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { slugify } from "../utils";

export default function ArticleFaqs({ faqs }) {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={slugify(faq.question)}>
            <AccordionTrigger className="text-foreground text-base leading-6 font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground font-regular text-sm leading-5">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
