"use client";

import { useEffect, useState } from "react";

export interface ToCItem {
  id: string;
  label: string;
  level: number; // 1 for H2, 2 for H3
}

interface BlogSidebarToCProps {
  tocItems: ToCItem[];
}

export function BlogSidebarToC({ tocItems }: BlogSidebarToCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Offset for header + padding

      // 1. Highlight the bottom-most item (Conclusion) at the absolute page end
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        if (tocItems.length > 0) {
          setActiveId(tocItems[tocItems.length - 1].id);
        }
        return;
      }

      // 2. Find the current active section based on scroll offset
      let currentActiveId = "";
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            currentActiveId = item.id;
          }
        }
      }

      if (currentActiveId) {
        setActiveId(currentActiveId);
      } else if (tocItems.length > 0) {
        // Default to first item if we are scrolled to the very top
        setActiveId(tocItems[0].id);
      }
    };

    // Run once on mount to set initial active item
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tocItems]);

  const handleToCClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <aside className="hidden lg:col-span-4 lg:block">
      <div className="sticky top-36 max-h-[calc(100vh-120px)] overflow-y-auto py-0 pr-4">
        <p className="text-foreground mb-4 text-sm font-bold tracking-wider uppercase">
          On This Page
        </p>
        <nav className="relative">
          <ul className="space-y-4">
            {tocItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li
                  key={item.id}
                  className="flex items-start gap-3.5 transition-all duration-200"
                  style={{ paddingLeft: `${(item.level - 1) * 24}px` }}
                >
                  <span
                    className={`mt-px shrink-0 text-sm transition-colors duration-200 select-none ${
                      isActive ? "font-bold text-neutral-950" : "font-light text-neutral-400"
                    }`}
                  >
                    —
                  </span>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleToCClick(e, item.id)}
                    className={`block text-sm leading-5 transition-colors duration-200 ${
                      isActive
                        ? "text-neutral-975 font-semibold"
                        : "text-muted-foreground leading-6 font-medium hover:text-neutral-800"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
