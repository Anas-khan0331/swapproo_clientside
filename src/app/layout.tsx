import { Providers } from "@/components/providers";
import "./globals.css";
import Header from "@/components/common/Header";
import { Geist } from "next/font/google";
import Footer from "@/components/common/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <body className={geist.className}>
        <Providers>
          <main className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
