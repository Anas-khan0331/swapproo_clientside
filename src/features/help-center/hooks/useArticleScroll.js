import { useEffect, useRef } from "react";
import { useScrollIdsSpy } from "./useScrollSpy";

export function useArticleScroll(threshold = 50) {
  const currentId = useScrollIdsSpy(".content-main", threshold);
  const isUserScrolling = useRef(true);

  useEffect(() => {
    if (isUserScrolling.current && currentId) {
      history.replaceState(null, null, `#${currentId}`);
    }
  }, [currentId]);

  useEffect(() => {
    const handleHashChange = () => {
      isUserScrolling.current = false;
      const hash = window.location.hash.slice(1);

      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return currentId;
}
