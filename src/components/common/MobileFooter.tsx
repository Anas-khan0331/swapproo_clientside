import React from "react";
import { ArrowDown2 } from "iconsax-reactjs";
import Link from "next/link";

type FooterInfoProps = {
  title: string;
  items?: { label: string; href: string }[];
  children?: React.ReactNode;
};

export default function FooterInfo({ title, items, children }: FooterInfoProps) {
  const content = children ?? (
    <ul className="flex flex-col gap-3">
      {items?.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="text-neutral-125 text-base leading-6 font-normal transition-colors hover:text-neutral-900"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {/* Desktop: static title + content */}
      <div className="hidden md:flex md:flex-col md:gap-4">
        <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
        {content}
      </div>

      {/* Mobile: accordion */}
      <details className="group border-b border-neutral-200 md:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
          {title}
          <ArrowDown2
            width={16}
            height={16}
            className="transition-transform duration-300 group-open:rotate-180"
          />
        </summary>
        <div className="pt-2 pb-4">{content}</div>
      </details>
    </div>
  );
}
