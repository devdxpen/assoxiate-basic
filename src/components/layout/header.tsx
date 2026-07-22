import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Associates", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Articles", href: "#" },
];

export function Header() {
  return (
    <header className="fixed! w-full top-0 z-50 flex h-20 items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-md container-custom">
      <BrandMark logo="light" />

      <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-wider text-gray-700 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            className={`transition hover:text-black ${
              link.hasDropdown ? "flex items-center gap-1.5" : ""
            }`}
            href={link.href}
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDown className="size-3" strokeWidth={2.6} />
            )}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="lg" className="hidden sm:inline-flex">
          Sign In
        </Button>
        <Button variant="default" className="min-w-28" size="lg">
          Join
        </Button>
      </div>
    </header>
  );
}
