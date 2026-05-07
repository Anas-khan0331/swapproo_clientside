"use client";

import { useEffect, useState } from "react";
import { searchArticles } from "@/store/help-center";
import type { SearchArticle } from "@/types";

export function useSearchArticles(q: string, debounceMs = 400) {
  const [fetchedData, setFetchedData] = useState<SearchArticle[]>([]);
  const [debouncedQ, setDebouncedQ] = useState(q);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQ(q), debounceMs);
    return () => clearTimeout(timer);
  }, [q, debounceMs]);

  useEffect(() => {
    if (!debouncedQ.trim()) return;
    searchArticles(debouncedQ).then(([, res]) => {
      setFetchedData(res?.data ?? []);
    });
  }, [debouncedQ]);

  const data = debouncedQ.trim() ? fetchedData : [];
  const isLoading = q.trim().length > 0 && q !== debouncedQ;

  return { data, isLoading };
}
