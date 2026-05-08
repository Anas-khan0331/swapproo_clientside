import { useEffect } from "react";
import type { RefObject } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (ref && ref.current) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [ref, callback]);

  return;
};

export default useOutsideClick;
