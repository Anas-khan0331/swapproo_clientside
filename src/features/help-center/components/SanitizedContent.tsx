"use client";

import { useEffect, useState } from "react";

export function SanitizedContent({ content }) {
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    if (content && typeof window !== "undefined") {
      import("dompurify").then(({ default: DOMPurify }) => {
        const sanitized = DOMPurify.sanitize(content, {
          USE_PROFILES: { html: true },
          ADD_ATTR: ["target", "style", "class"],
        });
        setSanitizedHtml(sanitized);
      });
    }
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
