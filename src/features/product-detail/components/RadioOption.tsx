"use client";

import Show from "@/components/common/show";

interface RadioOptionProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
  price?: string;
}

function RadioOption({ label, selected, onSelect, price }: RadioOptionProps) {
  return (
    <div
      onClick={onSelect}
      className={`flex cursor-pointer items-center gap-3 rounded-[10px] border p-3 transition-colors ${
        selected ? "border-neutral-975 bg-primary-50" : "bg-background hover:bg-muted/40"
      } ${price ? "justify-between" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
            selected ? "border-neutral-975" : "border-muted-foreground/40"
          }`}
        >
          {selected && <div className="bg-neutral-975 size-2 rounded-full" />}
        </div>
        <span className="text-foreground text-sm font-medium">{label}</span>
      </div>
      <Show when={!!price}>
        <span
          className={`text-sm ${selected ? "text-neutral-975 font-medium" : "text-muted-foreground"}`}
        >
          {price}
        </span>
      </Show>
    </div>
  );
}

export default RadioOption;
