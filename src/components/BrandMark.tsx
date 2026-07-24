import Link from "next/link";
import Image from "next/image";

interface BrandMarkProps {
	logo?: "light" | "dark";
	className?: string;
}

export function BrandMark({ logo = "light", className = "" }: BrandMarkProps) {
	const logoSrc = logo === "dark" ? "/logo.png" : "/logo-1.png";

	return (
		<Link href="/" className={`inline-block ${className}`}>
			<Image
				src={logoSrc}
				alt="AssoXiate Logo"
				width={153}
				height={40}
				className="h-10 w-auto object-contain"
				priority
			/>
		</Link>
	);
}
