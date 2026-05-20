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
    <ul className="flex flex-col">
      {items?.map((item) => (
        <li key={item.label} className="pt-5">
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
      <div className="hidden md:flex md:flex-col md:gap-4">
        <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
        {content}
      </div>
      <details className="group border-b border-neutral-200 md:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-lg font-bold open:py-5 [&::-webkit-details-marker]:hidden">
          {title}
          <ArrowDown2
            width={16}
            height={16}
            className="transition-transform duration-300 group-open:rotate-180"
          />
        </summary>
        <div className="pt-0 pb-4">{content}</div>
      </details>
    </div>
  );
}
