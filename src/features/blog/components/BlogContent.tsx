"use client";

import { BlogSection } from "../constants/blogData";

interface BlogContentProps {
  sections: BlogSection[];
}

export function BlogContent({ sections }: BlogContentProps) {
  return (
    <div className="prose prose-neutral mt-12 max-w-none space-y-10 text-neutral-800">
      {sections.map((section) => {
        const HeadingTag = section.level === 1 ? "h2" : "h3";
        const headingClass =
          section.level === 1
            ? "text-foreground scroll-mt-24 text-2xl font-bold sm:text-3xl"
            : "text-foreground scroll-mt-24 text-xl font-bold";

        return (
          <section key={section.id} className="space-y-4">
            <HeadingTag id={section.id} className={headingClass}>
              {section.title}
            </HeadingTag>

            {section.paragraphs?.map((p, pIdx) => (
              <p key={pIdx} className="text-base leading-7 text-neutral-600">
                {p}
              </p>
            ))}

            {section.bullets && (
              <ul className="list-disc space-y-2.5 pl-5 text-base leading-7 text-neutral-600">
                {section.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            )}

            {section.italicText && (
              <p className="text-base leading-7 text-neutral-700 italic">{section.italicText}</p>
            )}
          </section>
        );
      })}
    </div>
  );
}
