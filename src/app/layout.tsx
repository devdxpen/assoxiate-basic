import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageLoaderWrapper } from "@/components/layout/page-reveal-wrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} typography relative`}>
        <PageLoaderWrapper />
        <TooltipProvider>
          <SmoothScroll />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
