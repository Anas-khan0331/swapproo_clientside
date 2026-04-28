"use client";

import { useState } from "react";

export function useReviewModal(total: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lastIndex, setLastIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setLastIndex(index);
    setActiveIndex(index);
  };

  const closeModal = () => setActiveIndex(null);

  const goPrev = () =>
    setActiveIndex((prev) => {
      const next = prev !== null && prev > 0 ? prev - 1 : prev;
      if (next !== null) setLastIndex(next);
      return next;
    });

  const goNext = () =>
    setActiveIndex((prev) => {
      const next = prev !== null && prev < total - 1 ? prev + 1 : prev;
      if (next !== null) setLastIndex(next);
      return next;
    });

  return {
    isOpen: activeIndex !== null,
    lastIndex,
    openModal,
    closeModal,
    goPrev,
    goNext,
  };
}
