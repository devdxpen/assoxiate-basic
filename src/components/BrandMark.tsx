import Link from "next/link";
import Image from "next/image";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-2.5 transition hover:opacity-90">
      <Image
        src="/logo.png"
        alt="AssoXiate Logo"
        width={153}
        height={40}
        className="h-10 w-auto object-contain"
        priority
      />
    </Link>
  );
}