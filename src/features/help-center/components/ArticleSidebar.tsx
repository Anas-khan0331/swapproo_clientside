"use client";

import Show from "@/components/common/show";
import { useArticleScroll } from "@/features/help-center/hooks/useArticleScroll";
import { SanitizedContent } from "./SanitizedContent";

type SidebarItem = {
  title: string;
  href: string;
  id: string;
};

type ArticleSidebarProps = {
  sidebar: SidebarItem[];
};

export default function ArticleSidebar({ sidebar }: ArticleSidebarProps) {
  const currentId = useArticleScroll();
  const activeId = currentId ?? sidebar[0]?.href ?? null;

  return (
    <aside className="sticky top-6 self-start">
      <nav className="">
        <Show when={sidebar && sidebar.length > 0}>
          {sidebar.map((item) => {
            const isActive = activeId === item.href;
            return (
              <div className="flex flex-col gap-2" key={item.href}>
                <a
                  href={`#${item.href}`}
                  style={{ textDecoration: "none" }}
                  className={`nav-item mb-2 px-4 py-2 transition-all duration-300 ease-in-out ${isActive ? "bg-neutral-975 rounded-sm" : "border-border text-neutral-025 min-w-[240px] rounded-sm border leading-6 font-normal"}`}
                >
                  <span
                    className={`nav-link transition-colors duration-300 ease-in-out ${isActive ? "text-white" : "text-neutral-650"}`}
                  >
                    <SanitizedContent content={item.title} />
                  </span>
                </a>
              </div>
            );
          })}
        </Show>
      </nav>

      <Show when={!sidebar || sidebar.length === 0}>
        <p className="text-muted">No articles available</p>
      </Show>
    </aside>
  );
}
