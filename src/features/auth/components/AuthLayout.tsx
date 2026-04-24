"use client";

import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-bg flex min-h-screen w-full items-center justify-center px-4 py-16">
      {children}
    </div>
  );
}

export function AuthCard({ children, maxWidth = "max-w-[520px]" }: AuthCardProps) {
  return (
    <div
      className={`w-full ${maxWidth} flex min-w-[328px] flex-col gap-6 rounded-[14px] bg-white py-6`}
      style={{ boxShadow: "0px 4px 6px 0px rgba(0,0,0,0.10), 0px 2px 4px 0px rgba(0,0,0,0.10)" }}
    >
      {children}
    </div>
  );
}

export function AuthLogo() {
  return (
    <div className="flex h-[90px] items-center px-6">
      <span className="brand-logo">SWAPPROo</span>
    </div>
  );
}
