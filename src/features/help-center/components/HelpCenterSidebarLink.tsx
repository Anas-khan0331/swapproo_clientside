"use client";

import { useArticleScroll } from "../hooks/useArticleScroll";
import { SanitizedContent } from "./SanitizedContent";

export default function HelpCenterSidebarLink(props) {
  const { title, href } = props;
  const currentId = useArticleScroll();

  const normalizedHref = href?.startsWith("#") ? href.slice(1) : href;
  const isActive = currentId === normalizedHref;

  const handleClick = (e) => {
    e.preventDefault();
    window.location.hash = normalizedHref;
  };

  return (
    <button
      key={normalizedHref}
      style={{ textDecoration: "none" }}
      onClick={handleClick}
      className={`nav-item ${isActive ? "nav-item--active" : ""}`}
    >
      <span className={`nav-link ${isActive ? "nav-link--active" : ""}`}>
        <SanitizedContent content={title} />
      </span>
    </button>
  );
}
