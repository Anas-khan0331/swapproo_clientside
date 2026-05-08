"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer dark:bg-input/30 data-checked:text-primary-foreground relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-[#0a0a0a] transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-[#0a0a0a] focus-visible:ring-3 focus-visible:ring-[#0a0a0a]/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-[#0a0a0a] aria-invalid:ring-3 aria-invalid:ring-[#0a0a0a]/20 aria-invalid:aria-checked:border-[#0a0a0a] data-checked:border-[#0a0a0a] data-checked:bg-[#0a0a0a] dark:aria-invalid:border-[#0a0a0a]/50 dark:aria-invalid:ring-[#0a0a0a]/40 dark:data-checked:bg-[#0a0a0a]",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <Check color="#0a0a0a" style={{ backgroundColor: "#ffffff" }} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
