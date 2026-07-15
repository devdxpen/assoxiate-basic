import Link from "next/link";
import Image from "next/image";

export function BrandMark() {
  return (
    <Link href="/">
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