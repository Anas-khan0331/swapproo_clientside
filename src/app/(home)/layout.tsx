import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header className="sticky top-0 z-50" />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
