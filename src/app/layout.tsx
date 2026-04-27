import { Providers } from "@/components/providers";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <body className={geist.className}>
        <Providers>
          <ScrollToTop />

          {children}
        </Providers>
      </body>
    </html>
  );
}
