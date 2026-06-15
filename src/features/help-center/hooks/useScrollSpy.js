import { useEffect, useState } from "react";

export function useScrollIdsSpy(selector, offset = 100) {
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(selector);
      if (!container) return;

      const elements = Array.from(container.querySelectorAll("[id]"));
      if (elements.length === 0) return;

      let activeId = null;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();

        if (rect.top <= offset && rect.bottom >= 0) {
          activeId = el.id;
        }
      }

      if (activeId !== currentId) {
        setCurrentId(activeId);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selector, offset, currentId]);

  return currentId;
}
