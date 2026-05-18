"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "iconsax-reactjs";
import { useState } from "react";

const LinkedinIcon = ({ size = 20, color = "#737373" }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.2 19.2V12.168C19.2 8.712 18.456 6.072 14.424 6.072C12.48 6.072 11.184 7.128 10.656 8.136H10.608V6.384H6.792V19.2H10.776V12.84C10.776 11.16 11.088 9.552 13.152 9.552C15.192 9.552 15.216 11.448 15.216 12.936V19.176H19.2V19.2ZM0.312 6.384H4.296V19.2H0.312V6.384ZM2.304 0C1.032 0 0 1.032 0 2.304C0 3.576 1.032 4.632 2.304 4.632C3.576 4.632 4.608 3.576 4.608 2.304C4.608 1.032 3.576 0 2.304 0Z"
      fill={color}
    />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export const FooterCTA = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="mt-8 flex flex-col gap-4 lg:mt-0">
      <h3 className="text-xl font-semibold text-neutral-950">Trade-in, Built For Your Store</h3>
      <div className="flex flex-col gap-3">
        <Input
          type="email"
          placeholder="Business email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus-visible:ring-primary-500 focus-visible:border-primary-500 py-[7px]text-sm h-10 rounded-md border-neutral-200 px-3 transition-colors placeholder:text-neutral-400 focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Button
          onClick={() => alert("CTA BTN CLICKED")}
          variant="secondary"
          disabled={!email}
          className="h-10 w-full text-sm font-medium text-neutral-900 transition-transform hover:text-neutral-900 disabled:pointer-events-auto! disabled:cursor-not-allowed! disabled:opacity-50"
        >
          Get started free
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3 pt-1 md:justify-start">
        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900"
          >
            <Icon size={24} variant="Bold" color="currentColor" />
          </a>
        ))}
      </div>
    </div>
  );
};
