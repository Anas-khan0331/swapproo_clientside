"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/auth-images/auth-logo.png";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "auth-bg flex min-h-screen w-full items-center justify-center px-4 py-16",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div
      className={cn(
        "flex min-h-[343px] w-full max-w-[550px] min-w-[300px] flex-col gap-6 rounded-[14px] bg-white py-6",
        className,
      )}
      style={{ boxShadow: "0px 4px 6px 0px rgba(0,0,0,0.10), 0px 2px 4px 0px rgba(0,0,0,0.10)" }}
    >
      <div className="px-6">{children}</div>
    </div>
  );
}

export function AuthLogo() {
  return (
    <div className="flex h-[90px] items-center">
      <Image src={logo} alt="Swapproo Logo" width={200} height={36} />
    </div>
  );
}
