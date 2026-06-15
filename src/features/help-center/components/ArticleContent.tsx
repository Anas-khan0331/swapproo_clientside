import { ArticleSection } from "@/types";
import { SanitizedContent } from "./SanitizedContent";

export default function ArticleContent({ sections }: { sections: ArticleSection[] }) {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          <h2 className="text-foreground mb-2 text-xl leading-7 font-semibold">
            <SanitizedContent content={section.heading} />
          </h2>
          <SanitizedContent content={section.content} />
        </div>
      ))}
    </div>
  );
}
