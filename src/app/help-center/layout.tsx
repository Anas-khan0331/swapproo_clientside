import HelpCenterHeader from "@/features/help-center/components/HelpCenterHeader";
import Footer from "@/components/common/Footer";
import { ReactNode } from "react";

export default function HelpCenterLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HelpCenterHeader />
      {children}
      <Footer />
    </>
  );
}
