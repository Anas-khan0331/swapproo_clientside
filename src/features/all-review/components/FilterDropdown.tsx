"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowDown2 } from "iconsax-reactjs";

function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <Button
        variant="outline"
        className="border-border bg-background flex h-9 items-center justify-center gap-2 rounded-lg border px-4 py-2 shadow-xs"
        onClick={() => setOpen((p) => !p)}
      >
        {value === "All" ? label : value}
        <ArrowDown2
          color="#0a0a0a"
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </Button>
      {open && (
        <div className="border-border absolute top-full left-0 z-50 mt-1 min-w-[148px] overflow-hidden rounded-lg border bg-white shadow-md">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`flex w-full cursor-pointer items-center px-4 py-2 text-sm transition hover:bg-neutral-50 ${
                value === opt ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { FilterDropdown };
