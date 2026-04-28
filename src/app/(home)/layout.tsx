<<<<<<< HEAD
"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
=======
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
>>>>>>> 0029d4a (Auth Screens Implementation)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col">
<<<<<<< HEAD
      <Header className="sticky top-0 z-50" showSearch={false} />
=======
      <Header />
>>>>>>> 0029d4a (Auth Screens Implementation)
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
