"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";

const SUGGESTIONS = [
  { id: "iphone-15-pro-max", label: "iPhone 15 Pro Max" },
  { id: "iphone-15-pro", label: "iPhone 15 Pro" },
  { id: "iphone-15", label: "iPhone 15" },
  { id: "iphone-14-pro-max", label: "iPhone 14 Pro Max" },
  { id: "iphone-14-pro", label: "iPhone 14 Pro" },
  { id: "iphone-14", label: "iPhone 14" },
  { id: "iphone-13-pro-max", label: "iPhone 13 Pro Max" },
  { id: "iphone-13-pro", label: "iPhone 13 Pro" },
  { id: "iphone-13", label: "iPhone 13" },
  { id: "samsung-galaxy-s24", label: "Samsung Galaxy S24" },
  { id: "samsung-galaxy-s23", label: "Samsung Galaxy S23" },
  { id: "macbook-pro", label: "MacBook Pro" },
  { id: "ipad-pro", label: "iPad Pro" },
];

interface SearchInputProps {
  placeholder?: string;
  id?: string;
  className?: string;
}

export function SearchInput({
  placeholder = "Search",
  id = "header-search",
  className,
}: SearchInputProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? SUGGESTIONS.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  const showDropdown = open && filtered.length > 0;

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
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      selectSuggestion(filtered[activeIndex].label);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function selectSuggestion(value: string) {
    setQuery(value);
    setActiveIndex(0);
    setOpen(false);
    inputRef.current?.blur();
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
          className="bg-background text-foreground placeholder:text-muted-foreground focus:border-border h-10 w-full rounded-lg border border-transparent py-2 pr-9 pl-9 text-sm transition-colors outline-none focus:ring-0"
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
        <div className="bg-background border-border/60 absolute top-[calc(100%+6px)] left-0 z-50 w-full min-w-[320px] overflow-hidden rounded-2xl border shadow-lg">
          <ul role="listbox" className="p-2">
            {filtered.map((item, i) => (
              <li
                key={item.id}
                role="option"
                aria-selected={i === activeIndex}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectSuggestion(item.label);
                }}
                className={`cursor-pointer rounded-xl px-5 py-3 text-sm transition-colors ${
                  i === activeIndex
                    ? "text-foreground bg-neutral-100 hover:rounded-xl"
                    : "text-foreground hover:bg-neutral-50"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
