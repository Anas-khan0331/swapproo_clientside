import { ARTICLE_TYPES } from "../data/article";
import { slugify } from ".";

export function parseSidebarTitle(content) {
  if (!content) return [];
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const matches = [...content.matchAll(h2Regex)];
  return matches.map((match) => match[1].replace(/<[^>]*>/g, "").trim());
}

export function parseSections(content) {
  if (!content || typeof content !== "string") return [];

  const parts = content.split(/(<h2[^>]*>.*?<\/h2>)/gi);
  const sections = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (!part) continue;

    const h2Match = part.match(/<h2[^>]*>(.*?)<\/h2>/i);
    if (h2Match && i + 1 < parts.length) {
      const heading = h2Match[1].replace(/<[^>]*>/g, "").trim();
      const content = parts[i + 1].trim();

      if (heading) {
        sections.push({
          heading,
          id: slugify(heading),
          content,
        });
      }
      i++;
    } else if (i === 0 && !h2Match) {
      sections.push({
        heading: "",
        id: "intro",
        content: part,
      });
    }
  }

  return sections;
}

export function getSidebarData(content, type, id) {
  if (!content || !type || !id) return [];
  const sidebar = [];

  switch (type) {
    case ARTICLE_TYPES.TEXT:
      const headings = parseSidebarTitle(content);
      headings.forEach((heading) => {
        sidebar.push({ title: heading, href: slugify(heading), id });
      });
      break;
    case ARTICLE_TYPES.FAQ:
      content.forEach((faq) => {
        sidebar.push({ title: faq.question, href: slugify(faq.question), id });
      });
      break;
  }

  return sidebar;
}
