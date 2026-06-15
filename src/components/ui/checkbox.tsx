"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-[#0a0a0a] bg-white transition-colors outline-none",
        "after:absolute after:-inset-x-3 after:-inset-y-2",
        "focus-visible:ring-2 focus-visible:ring-[#0a0a0a]/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-[#0a0a0a] data-[state=checked]:bg-[#0a0a0a]",
        "dark:bg-transparent dark:data-[state=checked]:bg-[#0a0a0a]",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center"
      >
        <Check size={16} strokeWidth={3} color="#ffffff" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
