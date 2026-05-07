import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref && ref.current && !ref.current.contains(event.target)) {
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
