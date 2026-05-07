"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header showSearch={true} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
