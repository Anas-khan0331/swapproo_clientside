"use client";

export const DateSpan = ({ date }: { date: string }) => (
  <span
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
    className="cursor-default text-base"
  >
    {date}
  </span>
);
