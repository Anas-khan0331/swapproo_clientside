"use client";

import { useCallback, useRef, useState } from "react";
import Show from "@/components/common/show";
import { SearchNormal1 } from "iconsax-reactjs";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function SearchInput({
  value,
  setValue,
  loading = false,
  items = [],
  renderItems,
  placeholder = "Search",
  onEnterClick = () => null,
  onSearchIconClick = () => null,
}: {
  value: string;
  setValue: (value: string) => void;
  loading?: boolean;
  items?: [];
  renderItems?: (items: [], loading: boolean) => React.ReactNode;
  placeholder?: string;
  onEnterClick?: (value: string, e: React.KeyboardEvent) => void;
  onSearchIconClick?: (value: string) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => setIsFocused(false));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnterClick(value, e);
    }
  };

  const handleIconClick = useCallback(() => {
    inputRef.current?.focus();
    setIsFocused(true);
    onSearchIconClick(value);
  }, [value, onSearchIconClick]);

  const showResults = !!(renderItems && items.length > 0 && value && isFocused);

  return (
    <div
      className={`search-input ${isFocused ? "is-focused" : ""}`}
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      <input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
      />

      <div className="search-input__icon">
        <Show when={loading}>
          <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
        </Show>

        <Show when={!loading}>
          <button
            type="button"
            aria-label="Submit search"
            onClick={handleIconClick}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <SearchNormal1 size={24} />
          </button>
        </Show>
      </div>

      {showResults && renderItems(items, loading)}
    </div>
  );
}
