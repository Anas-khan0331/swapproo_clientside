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
  isMobile = false,
  autoFocus = false,
}: SearchInputProps & { isMobile?: boolean; autoFocus?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [autoFocus]);

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
            !isMobile &&
            "border-neutral-150 has-[[data-slot=input-group-control]:focus-visible]:border-neutral-150 rounded-b-none has-[[data-slot=input-group-control]:focus-visible]:ring-0",
          !showDropdown && "border-primary-500",
        )}
      >
        {!query && (
          <InputGroupAddon
            align={isMobile ? "inline-start" : "inline-end"}
            className={isMobile ? "pl-3" : "pr-2"}
          >
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
        <div
          className={cn(
            "bg-background border-border z-50 overflow-auto text-start shadow-lg",
            isMobile
              ? "fixed inset-0 top-20 right-0 bottom-0 left-0"
              : "absolute top-full left-0 max-h-[448px] w-full rounded-t-none rounded-b-lg border border-t-0",
          )}
        >
          {filtered.length > 0 ? (
            <ul
              role="listbox"
              className={cn(isMobile ? "px-2 py-3" : "px-2 py-1")}
              onMouseLeave={() => setActiveIndex(-1)}
            >
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
                    "text-foreground cursor-pointer transition-colors",
                    isMobile
                      ? "hover:bg-neutral-075 px-2 py-3 text-base hover:rounded-md"
                      : "hover:bg-neutral-075 rounded-xl p-3 text-sm hover:rounded-md",
                    !isMobile &&
                      activeIndex >= 0 &&
                      i === activeIndex &&
                      "bg-neutral-075 rounded-md",
                  )}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          ) : (
            <div className={cn("flex items-center justify-center", isMobile ? "py-12" : "py-12")}>
              <p className={cn("font-semibold", isMobile ? "text-2xl" : "text-4xl")}>Not found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
