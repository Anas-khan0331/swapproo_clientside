"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default function HelpCenterHeroSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function navigate() {
    const q = query.trim();
    if (!q) return;
    router.push("/help-center/search?q=" + encodeURIComponent(q));
  }

  return (
    <InputGroup className="min-h-[40px] p-3 shadow-xs">
      <InputGroupAddon align="inline-end">
        <button type="button" onClick={navigate} aria-label="Search">
          <SearchNormal1 size="16" />
        </button>
      </InputGroupAddon>
      <InputGroupInput
        placeholder="Ask Your Query"
        className="p-0"
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
