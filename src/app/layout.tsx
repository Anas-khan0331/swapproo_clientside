import { Providers } from "@/components/providers";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Geist } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Swapproo — Trade In Your Devices",
    template: "%s | Swapproo",
  },
  description:
    "Swapproo makes it easy to trade in your old devices for cash or credit. Get an instant quote, ship for free, and get paid fast.",
};

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
