"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RatingVariant = "yellow" | "default";

interface RatingProps {
  value?: number;
  max?: number;
  precision?: number;
  size?: number;
  readOnly?: boolean;
  variant?: RatingVariant;
  onChange?: (value: number) => void;
  className?: string;
}

const STAR_PATH =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

const variantFill: Record<RatingVariant, string> = {
  yellow: "#F59E0B",
  default: "hsl(var(--primary))",
};

function FilledStar({ size, variant = "yellow" }: { size: number; variant?: RatingVariant }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={STAR_PATH} fill={variantFill[variant]} />
    </svg>
  );
}

function EmptyStar({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={STAR_PATH} fill="#F3F4F6" />
    </svg>
  );
}

function StarIcon({
  size,
  fillPercent,
  variant = "yellow",
}: {
  size: number;
  fillPercent: number;
  variant?: RatingVariant;
}) {
  return (
    <span className="relative inline-flex" style={{ width: size, height: size }}>
      <EmptyStar size={size} />
      <span className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercent * 100}%` }}>
        <FilledStar size={size} variant={variant} />
      </span>
    </span>
  );
}

function Rating({
  value = 0,
  max = 5,
  precision = 1,
  size = 20,
  readOnly = false,
  variant = "yellow",
  onChange,
  className,
}: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  const displayValue = hoverValue ?? value;

  const getFillPercent = (starIndex: number) => {
    const diff = displayValue - starIndex;
    if (diff >= 1) return 1;
    if (diff <= 0) return 0;
    const steps = 1 / precision;
    return Math.round(diff * steps) / steps;
  };

  const resolveValue = (starIndex: number, clientX: number, rect: DOMRect) => {
    const isLeft = precision <= 0.5 && clientX - rect.left < rect.width / 2;
    const raw = starIndex + (isLeft ? 0.5 : 1);
    return Math.round(raw / precision) * precision;
  };

  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      role={readOnly ? "img" : "radiogroup"}
      aria-label={`Rating: ${value} out of ${max}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={cn("relative", !readOnly && "cursor-pointer")}
          onMouseLeave={!readOnly ? () => setHoverValue(null) : undefined}
          onMouseMove={
            !readOnly
              ? (e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  setHoverValue(resolveValue(i, e.clientX, rect));
                }
              : undefined
          }
          onClick={
            !readOnly
              ? (e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  onChange?.(resolveValue(i, e.clientX, rect));
                }
              : undefined
          }
        >
          <StarIcon size={size} fillPercent={getFillPercent(i)} variant={variant} />
        </span>
      ))}
    </div>
  );
}

export { Rating };
export type { RatingProps };
