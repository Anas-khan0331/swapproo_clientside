"use client";

import { MENU_CATEGORIES } from "@/constants/menu";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof MENU_CATEGORIES)[0] | null>(null);

  function handleClose() {
    setActiveCategory(null);
    onClose();
  }

  return (
    <div
      className={`fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col transition-transform duration-300 ease-in-out md:top-16 lg:hidden ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {isOpen && (
        <div className="absolute -top-3.5 right-[19px] z-10 md:top-[-12px] md:right-[43px]">
          <svg width="29" height="25" viewBox="0 0 29 25" fill="none">
            <path d="M14.2893 0L28.5787 24.75H-0.000112534L14.2893 0Z" fill="white" />
          </svg>
        </div>
      )}

      <div className="bg-background flex flex-1 flex-col justify-between overflow-hidden">
        <div
          className={`cubic-bezier(0.16, 1, 0.3, 1) absolute inset-0 flex flex-col transition-all duration-500 ${
            activeCategory
              ? "-translate-x-full scale-95 opacity-0"
              : "translate-x-0 scale-100 opacity-100"
          }`}
        >
          <ul className="flex-1 overflow-y-auto px-4 py-5">
            {MENU_CATEGORIES.map((category) => (
              <li key={category.name}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className="text-muted-foreground flex w-full items-center justify-between py-3 text-base font-medium"
                >
                  <span>{category.name}</span>
                  <ArrowRight2 size={20} color="#171717" />
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/blogs"
                onClick={handleClose}
                className="text-muted-foreground flex w-full items-center justify-between py-3 text-base font-medium"
              >
                <span>Blogs</span>
              </Link>
            </li>
          </ul>

          <div className="border-neutral-150 flex gap-3 border-t px-4 py-4 pb-8">
            <Link href="/business" onClick={handleClose} className="flex-1">
              <Button className="bg-foreground hover:bg-foreground/80 font-regular w-full py-5 text-sm">
                For Business
              </Button>
            </Link>
            <Link href="/help" onClick={handleClose} className="flex-1">
              <Button variant="outline" className="font-regular w-full bg-white! py-5 text-sm">
                Help
              </Button>
            </Link>
          </div>
        </div>
        <div
          className={`cubic-bezier(0.16, 1, 0.3, 1) absolute inset-0 flex flex-col transition-all duration-500 ${
            activeCategory
              ? "translate-x-0 scale-100 opacity-100"
              : "translate-x-full scale-95 opacity-0"
          }`}
        >
          <div className="px-4 py-5">
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-1 text-base font-medium text-neutral-800"
            >
              <ArrowLeft2 size={18} color="#171717" />
              <span>{activeCategory?.name}</span>
            </button>
          </div>

          <Separator />
          <ul className="flex-1 overflow-y-auto px-4 pt-3 pb-2">
            {activeCategory?.items?.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={handleClose}
                  className="block py-3.5 text-base text-neutral-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-neutral-150 flex gap-3 border-t px-4 py-4 pb-8">
            <Link href="/business" onClick={handleClose} className="flex-1">
              <Button className="bg-foreground hover:bg-foreground/80 h-12 w-full text-sm font-semibold">
                For Business
              </Button>
            </Link>
            <Link href="/help" onClick={handleClose} className="flex-1">
              <Button variant="outline" className="h-12 w-full text-sm font-semibold">
                Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
