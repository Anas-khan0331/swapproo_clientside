"use client";

import Show from "@/components/common/show";
import { ArrowRight2 } from "iconsax-reactjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";

const Breadcrumb = () => {
  const pathname = usePathname();

  const { breadcrumbItems } = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const displaySegments = segments.length >= 4 ? segments.slice(0, -1) : segments;
    const items = displaySegments.map((segment, index) => {
      const href = "/" + displaySegments.slice(0, index + 1).join("/");
      const isLast = index === displaySegments.length - 1;
      const label = segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        href: href,
        label,
        isLast,
      };
    });

    return { breadcrumbItems: items };
  }, [pathname]);

  if (breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <div className="breadcrumb-container">
        {breadcrumbItems?.map((item) => (
          <span key={item.href || item.label} className="breadcrumb-item">
            <Show when={item.isLast}>
              <span className="breadcrumb-current">{item.label}</span>
            </Show>
            <Show when={!item.isLast}>
              <Link href={item.href} className="breadcrumb-link">
                {item.label}
              </Link>
            </Show>

            <Show when={!item.isLast}>
              <span className="breadcrumb-separator">
                <ArrowRight2 size={12} color="#8E8E8E" />
              </span>
            </Show>
          </span>
        ))}
      </div>
    </nav>
  );
};

export default memo(Breadcrumb);
