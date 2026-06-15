import * as React from "react";
import { cn } from "@/lib/utils";

const Timeline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-row gap-4", className)} {...props} />
  ),
);
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props} />
  ),
);
TimelineItem.displayName = "TimelineItem";

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col items-start justify-start gap-1.5", className)}
      {...props}
    />
  ),
);
TimelineContent.displayName = "TimelineContent";

const TimelineTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-foreground text-base leading-6 font-medium", className)}
    {...props}
  />
));
TimelineTitle.displayName = "TimelineTitle";

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground text-sm leading-5 whitespace-pre-line", className)}
    {...props}
  />
));
TimelineDescription.displayName = "TimelineDescription";

const TimelineIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    status?:
      | "completed"
      | "pending"
      | "inactive"
      | "processing"
      | "shipped"
      | "delivered"
      | "inspection"
      | "approved"
      | "paid";
  }
>(({ className, status = "inactive", children, ...props }, ref) => {
  const isCompleted = status === "completed";
  const isPending =
    status === "pending" ||
    status === "processing" ||
    status === "shipped" ||
    status === "delivered" ||
    status === "inspection" ||
    status === "approved" ||
    status === "paid";
  const isInactive = status === "inactive";

  return (
    <div
      ref={ref}
      className={cn(
        "flex size-[38px] items-center justify-center rounded-full",
        isCompleted && "bg-foreground",
        isPending && "bg-primary-50 border-foreground border",
        isInactive && "bg-neutral-075",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "size-[24px]",
          isCompleted && "text-primary-foreground",
          isPending && "text-[#292d32]",
          isInactive && "text-foreground",
        )}
      >
        {children}
      </div>
    </div>
  );
});
TimelineIndicator.displayName = "TimelineIndicator";

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    status?:
      | "completed"
      | "pending"
      | "inactive"
      | "processing"
      | "shipped"
      | "delivered"
      | "inspection"
      | "approved"
      | "paid";
  }
>(({ className, status = "inactive", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-0.5 w-[122px]",
      status === "completed" && "bg-foreground",
      status !== "completed" && "bg-border",
      className,
    )}
    {...props}
  />
));
TimelineConnector.displayName = "TimelineConnector";

const TimelineRow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-row items-center gap-2 pr-4", className)} {...props} />
  ),
);
TimelineRow.displayName = "TimelineRow";

export {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineIndicator,
  TimelineConnector,
  TimelineRow,
};
