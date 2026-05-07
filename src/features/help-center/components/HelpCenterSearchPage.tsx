"use client";

import Show from "@/components/common/show";
import { ReceiptSearch } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
import { useSearchArticles } from "@/hooks/useSearchArticles";
import { SanitizedContent } from "./SanitizedContent";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HelpCenterSearchPage({ queryParams }) {
  const { q } = queryParams;
  const { data: articles, isLoading } = useSearchArticles(q || "");

  return (
    <div className="container">
      <div style={{ marginBlockEnd: "170px" }}>
        <div className="help-center-wrapper">
          <div style={{ display: "grid", placeItems: "center", gap: "24px" }}>
            <h1 style={{ fontWeight: "800", textTransform: "uppercase" }}>
              How can we help you today?
            </h1>
            <HelpCenterPageSearch initialQ={q || ""} />
            <HelpCenterSearchResults
              data={articles}
              search={(q || "").trim()}
              loading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpCenterPageSearch({ initialQ }) {
  const [query, setQuery] = useState(initialQ);
  const router = useRouter();

  function navigate() {
    const q = query.trim();
    if (!q) return;
    router.push("/help-center/search?q=" + encodeURIComponent(q));
  }

  return (
    <InputGroup className="w-full">
      <InputGroupAddon align="inline-start">
        <button type="button" onClick={navigate} aria-label="Search">
          <SearchNormal1 size="16" />
        </button>
      </InputGroupAddon>
      <InputGroupInput
        placeholder="Search articles…"
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
          <button type="button" onClick={() => setQuery("")} aria-label="Clear">
            <CloseCircle size="16" />
          </button>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}

function HelpCenterSearchResults({ data: articles, search, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
      </div>
    );
  }

  if (!search) {
    return (
      <div className="grid place-items-center gap-5 py-24">
        <span style={{ fontSize: "32px", fontWeight: "bold" }} className="clr-neutral-900">
          Type something to search
        </span>
        <Image
          src="/assets/images/search-not-found.png"
          width={120}
          height={120}
          alt="Search Not Found"
        />
      </div>
    );
  }

  return (
    <div className="flow" style={{ width: "100%" }}>
      <Show when={articles.length > 0}>
        <p className="search-info">
          {articles.length} search results for <em>&quot;{search}&quot;</em>
        </p>
        <div className="help-center-search-resutls">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/help-center/${article?.categorySlug}/${article?.slug}`}
              className="item -search"
            >
              <div className="item-icon">
                <ReceiptSearch />
              </div>
              <div className="item-content">
                <h2 className="item-title">
                  <SanitizedContent content={article._formatted?.title || article.title} />
                </h2>
                <div className="line-clamp item-text">
                  <SanitizedContent content={article._formatted?.content || article.content} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Show>
      <Show when={articles.length === 0}>
        <div className="grid place-items-center gap-5" style={{ marginBlockStart: "80px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "bold" }} className="clr-neutral-900">
            Search &quot;{search}&quot;
          </h2>
          <Image
            src="/assets/images/search-not-found.png"
            width={120}
            height={120}
            alt="Search Not Found"
          />
          <div className="grid place-items-center gap-4">
            <h3
              style={{
                fontWeight: "600",
                color: "var(--clr-neutral-600)",
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              We didn&apos;t find any results
            </h3>
            <p
              className="clr-neutral-500 fw-normal"
              style={{ maxWidth: "35ch", textAlign: "center" }}
            >
              Make sure everything is spelled correctly or try different keywords.
            </p>
          </div>
        </div>
      </Show>
    </div>
  );
}
