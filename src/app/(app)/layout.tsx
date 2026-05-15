"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="sticky top-0 z-50" showSearch={true} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
