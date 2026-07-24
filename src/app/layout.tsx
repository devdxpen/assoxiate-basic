import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assxiate | Pure Professional",
  description: "A dynamic platform where professionals find opportunities.",
};

import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} typography relative`}>
        <TooltipProvider>
          <SmoothScroll />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
