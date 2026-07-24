import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Assxiate | Pure Professional",
	description: "A dynamic platform where professionals find opportunities.",
};

import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/animation/SmoothScroll";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn("dark", "antialiased", poppins.variable, "font-sans", inter.variable)}
		>
			<body className="min-h-screen flex flex-col font-sans bg-white text-foreground">
				<SmoothScroll />
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}
