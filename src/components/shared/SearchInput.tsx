"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";
import Show from "@/components/common/show";
import { SUGGESTIONS } from "@/constants/search";
import type { SearchInputProps } from "./types";

export function SearchInput({
  placeholder = "Search",
  id = "header-search",
  className,
}: SearchInputProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
      navigate(showDropdown ? filtered[activeIndex].label : query);
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
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
  }

  function navigate(value: string) {
    const q = value.trim();
    if (!q) return;
    setQuery(q);
    setActiveIndex(0);
    setOpen(false);
    inputRef.current?.focus();
    router.push(`/category?q=${encodeURIComponent(q)}`);
  }

  const handleClear = useCallback(() => {
    setQuery("");
    setActiveIndex(0);
    setOpen(false);
    inputRef.current?.focus();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className ?? ""}`}>
      {/* Input */}
      <div className="relative flex items-center">
        <SearchNormal1 size="16" className="text-muted-foreground absolute left-3 shrink-0" />
        <input
          ref={inputRef}
          id={id}
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          className={`bg-background text-foreground placeholder:text-muted-foreground focus:border-border h-10 w-full rounded-lg border py-2 pr-9 pl-9 text-sm transition-colors outline-none focus:ring-0 ${
            showDropdown ? "border-border rounded-b-none" : "border-primary-600"
          }`}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground absolute right-3 transition-colors"
            aria-label="Clear search"
          >
            <CloseCircle size="16" />
          </button>
        )}
      </div>
      {showDropdown && (
        <div className="bg-background border-border border-t-border/60 absolute top-full left-0 z-50 w-full min-w-[320px] overflow-hidden rounded-t-none rounded-b-lg border border-t text-start shadow-lg">
          <Show when={filtered.length > 0}>
            <ul role="listbox" className="px-2 py-1">
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
                  className={`text-foreground cursor-pointer rounded-xl p-3 text-sm transition-colors hover:rounded-2xl ${
                    i === activeIndex ? "rounded-2xl bg-neutral-100" : "hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </Show>
          <Show when={filtered.length === 0 && !showMenu}>
            <div className="flex items-center justify-center py-12">
              <p className="text-foreground text-4xl font-semibold">Not found</p>
            </div>
          </Show>
        </div>
      )}
    </div>
  );
}
