"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SearchNormal } from "iconsax-reactjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export default function HelpBreadcrumb() {
  const pathname = usePathname();

  const items = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      const label = segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const isLast = index === segments.length - 1;
      return { href, label, isLast };
    });
  }, [pathname]);

  return (
    <div className="flex items-center justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              {index > 0 && <BreadcrumbSeparator key={`sep-${item.href}`} />}
              <BreadcrumbItem key={item.href}>
                {item.isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative w-72">
        <SearchNormal
          className="text-muted-foreground absolute top-1/2 right-4 -translate-y-1/2"
          size={18}
        />
        <input
          type="text"
          placeholder="Search"
          className="border-input bg-background focus:border-ring w-full rounded-lg border py-2.5 pr-10 pl-4 text-sm transition-colors focus:outline-none"
        />
      </div>
    </div>
  );
}
