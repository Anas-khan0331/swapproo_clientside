"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header className="sticky top-0 z-50" showSearch={false} />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
