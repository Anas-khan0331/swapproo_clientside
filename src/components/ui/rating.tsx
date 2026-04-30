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
  "M12.4739 19.4866C12.1824 19.333 11.834 19.3329 11.5423 19.4862L6.65262 22.057C5.91898 22.4427 5.06151 21.8197 5.20165 21.0028L6.13575 15.5575C6.19144 15.2328 6.08369 14.9016 5.84766 14.6718L1.887 10.8165C1.29273 10.2381 1.62033 9.22924 2.44108 9.11029L7.90499 8.31842C8.23085 8.2712 8.51258 8.06659 8.6583 7.77132L11.1034 2.81701C11.4702 2.07376 12.53 2.07376 12.8968 2.81701L15.3419 7.77133C15.4876 8.06659 15.7694 8.2712 16.0952 8.31842L21.5591 9.11029C22.3799 9.22924 22.7075 10.2381 22.1132 10.8165L18.1526 14.6718C17.9165 14.9016 17.8088 15.2328 17.8645 15.5575L18.7982 21.0005C18.9384 21.8178 18.08 22.4408 17.3464 22.0542L12.4739 19.4866Z";

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
      <path d={STAR_PATH} fill={variantFill[variant]} fillRule="evenodd" clipRule="evenodd" />
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
      <path d={STAR_PATH} fill="#F3F4F6" fillRule="evenodd" clipRule="evenodd" />
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
