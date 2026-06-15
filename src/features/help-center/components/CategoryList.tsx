import Show from "@/components/common/show";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "iconsax-reactjs";
import Link from "next/link";
import CategoriesHeading from "../ui/CategoriesHeading";
import HelpQuickAssistance from "./HelpQuickAssistance";
import { ArticleType, HelpCenterCategory } from "@/types";

export default function CategoryPage(props: HelpCenterCategory) {
  const { title, description, articles, slug } = props;
  const isFaq = slug === ArticleType.FAQ;

  return (
    <>
      <div className="wrapper pb-14">
        <div className="mb-7">
          <CategoriesHeading title={title} description={description} />
        </div>
        <div className="">
          <Show when={!!articles?.length}>
            {isFaq ? (
              <Accordion type="single" collapsible className="w-full">
                {articles.map((article) => (
                  <AccordionItem key={article._id} value={article._id}>
                    <AccordionTrigger>{article.title}</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        {typeof article.content === "string"
                          ? article.content
                          : "FAQ answer content goes here."}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              articles.map((article) => (
                <Link
                  key={article._id}
                  href={`/help-center/${slug}/${article.slug}`}
                  className={`group hover:bg-neutral-075 text-neutral-650 mb-2 flex items-center justify-between rounded-sm px-4 py-2 text-base font-normal transition-colors`}
                >
                  <span>{article.title}</span>
                  <ArrowRight
                    size={24}
                    color="#0a0a0a"
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              ))
            )}
          </Show>
        </div>
      </div>
      <HelpQuickAssistance />
    </>
  );
}
