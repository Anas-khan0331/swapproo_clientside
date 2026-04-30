"use client";

import { useState } from "react";
import DpdIcon from "@/assets/icons/DpdIcon";
import RoyalMailIcon from "@/assets/icons/RoyalMailIcon";

const POSTAGE_OPTIONS = [
  {
    value: "dpd",
    label: "DPD (upto £1,000 insured)",
    icon: <DpdIcon />,
  },
  {
    value: "royal-mail",
    label: "Royal Mail (upto £100 insured)",
    icon: <RoyalMailIcon />,
  },
];

const PostageSelection = () => {
  const [selectedPostage, setSelectedPostage] = useState("royal-mail");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground text-xl leading-7 font-semibold">Postage</h2>
      <div className="grid grid-cols-2 gap-3">
        {POSTAGE_OPTIONS.map((opt) => (
          <div
            key={opt.value}
            onClick={() => setSelectedPostage(opt.value)}
            className={`flex cursor-pointer items-center gap-3 rounded-[10px] border p-3 transition-colors ${
              selectedPostage === opt.value
                ? "border-neutral-975 bg-primary-50"
                : "bg-background hover:bg-muted/40"
            }`}
          >
            <div
              className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
                selectedPostage === opt.value ? "border-neutral-975" : "border-muted-foreground/40"
              }`}
            >
              {selectedPostage === opt.value && (
                <div className="bg-neutral-975 size-2 rounded-full" />
              )}
            </div>
            <div className="flex size-6 items-center justify-center">{opt.icon}</div>
            <span className="text-foreground text-sm font-medium">{opt.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostageSelection;
