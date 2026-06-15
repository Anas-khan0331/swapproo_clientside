"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

interface HelpCenterSearchInputProps {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

export default function HelpCenterSearchInput({
  placeholder = "Search",
  defaultValue = "",
  className,
}: HelpCenterSearchInputProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  function navigate() {
    const q = query.trim();
    if (!q) return;
    router.push("/help-center/search?q=" + encodeURIComponent(q));
  }

  return (
    <InputGroup className={cn("p-10", className)}>
      <InputGroupAddon align="inline-end">
        <button type="button" onClick={navigate} aria-label="Search">
          <SearchNormal1 size="16" />
        </button>
      </InputGroupAddon>

      <InputGroupInput
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            navigate();
          }
        }}
      />

      {query && (
        <InputGroupAddon align="inline-end">
          <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
            <CloseCircle size="16" />
          </button>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
