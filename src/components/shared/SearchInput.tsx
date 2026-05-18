"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";
import { SUGGESTIONS } from "@/constants/search";
import type { SearchInputProps } from "./types";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export function SearchInput({
  placeholder = "Search",
  id = "header-search",
  className,
}: SearchInputProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? SUGGESTIONS.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  const showDropdown = open && query.trim().length > 0;

  const handleClick = useCallback((e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handleClick]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(showDropdown && activeIndex >= 0 ? filtered[activeIndex].label : query);
      return;
    }
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    }
  }

  function navigate(value: string) {
    const q = value.trim();
    if (!q) return;
    setQuery(q);
    setActiveIndex(-1);
    setOpen(false);
    inputRef.current?.focus();
    router.push(`/category?q=${encodeURIComponent(q)}`);
  }

  const handleClear = useCallback(() => {
    setQuery("");
    setActiveIndex(-1);
    setOpen(false);
    inputRef.current?.focus();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <InputGroup
        className={cn(
          "h-10 overflow-hidden py-3 pr-1 pl-[2px]",
          showDropdown &&
            "border-neutral-150 has-[[data-slot=input-group-control]:focus-visible]:border-neutral-150 rounded-b-none has-[[data-slot=input-group-control]:focus-visible]:ring-0",
          !showDropdown && "border-primary-500",
        )}
      >
        {!query && (
          <InputGroupAddon align="inline-end" className="pr-2">
            <span className="text-muted-foreground flex items-center">
              <SearchNormal1 size="16" className="shrink-0" />
            </span>
          </InputGroupAddon>
        )}
        <InputGroupInput
          ref={inputRef}
          id={id}
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <InputGroupAddon align="inline-end" className="pr-3!">
            <button
              type="button"
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <CloseCircle size="16" />
            </button>
          </InputGroupAddon>
        )}
      </InputGroup>
      {showDropdown && (
        <div className="bg-background border-border absolute top-full left-0 z-50 max-h-[448px] w-full min-w-[320px] overflow-auto rounded-t-none rounded-b-lg border border-t-0 text-start shadow-lg">
          {filtered.length > 0 ? (
            <ul role="listbox" className="px-2 py-1" onMouseLeave={() => setActiveIndex(-1)}>
              {filtered.map((item, i) => (
                <li
                  key={item.id}
                  role="option"
                  aria-selected={i === activeIndex}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    navigate(item.label);
                  }}
                  className={cn(
                    "text-foreground cursor-pointer rounded-xl p-3 text-sm transition-colors",
                    "hover:bg-neutral-075 hover:rounded-md",
                    activeIndex >= 0 && i === activeIndex && "bg-neutral-075 rounded-md",
                  )}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center py-12">
              <p className="text-foreground text-4xl font-semibold">Not found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
