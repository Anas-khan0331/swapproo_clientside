"use client";

import { type ComponentType } from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface MobileTabNavItem {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string; size?: number; color?: string }>;
  iconSize?: number;
  iconColor?: string;
}

interface MobileTabNavProps {
  tabs: MobileTabNavItem[];
  className?: string;
}

export function MobileTabNav({ tabs, className }: MobileTabNavProps) {
  return (
    <TabsList className={`h-auto w-full rounded-2xl bg-gray-100 p-1.5 ${className ?? ""}`}>
      {tabs.map(({ value, label, icon: Icon, iconSize, iconColor }) => (
        <TabsTrigger
          key={value}
          value={value}
          className="data-active:text-foreground flex-1 gap-2 rounded-xl py-2.5 text-sm font-medium text-[#0A0A0A] data-active:bg-white data-active:shadow-sm"
        >
          <Icon size={iconSize ?? 20} color={iconColor} className="size-5" />
          {label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
