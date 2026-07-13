import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

function BrandMark() {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        className="size-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 2h4l8 20h-4z" />
        <path d="M20 2h-4L8 22h4z" />
      </svg>
      <div>
        <div className="text-lg font-bold leading-none text-white tracking-wide">
          AssoXiate
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky! w-full top-0 z-50 flex h-20 items-center justify-between border-b border-gray-700 bg-black/80 backdrop-blur-md container-custom">
      <BrandMark />

      <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-wider text-gray-500 lg:flex">
        <Link className="transition hover:text-white" href="#">
          Home
        </Link>
        <Link className="transition hover:text-white" href="#">
          Associates
        </Link>
        <Link className="transition hover:text-white" href="#">
          Jobs
        </Link>
        <Link className="flex items-center gap-1.5 transition hover:text-white" href="#">
          Solutions
          <ChevronDown className="size-3" strokeWidth={2.6} />
        </Link>
        <Link className="transition hover:text-white" href="#">
          Articles
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="lg"
          className="hidden sm:inline-flex"
        >
          Sign In
        </Button>
        <Button
          className="min-w-28"
          size="lg"
        >
          Join
        </Button>
      </div>
    </header>
  );
}
