"use client";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Boxes,
  ChevronDown,
  CreditCardIcon,
  Menu,
  SlidersHorizontal,
  UserIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Associates", href: "#associates" },
  { label: "Jobs", href: "#jobs" },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Articles", href: "#articles" },
];

const solutionDropdownItems = [
  {
    icon: SlidersHorizontal,
    title: "Services",
    href: "#services",
  },
  {
    icon: Boxes,
    title: "Products",
    href: "#products",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  // Handle scroll detection for dynamic glassmorphism header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-lg py-3"
          : "border-gray-100 bg-white/80 backdrop-blur-md py-4",
      )}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <BrandMark
          logo="light"
          className="transition-transform duration-200 hover:scale-[1.02]"
        />
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-700 lg:flex"
        >
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <DropdownMenu
                  key={link.label}
                  open={isSolutionsOpen}
                  onOpenChange={setIsSolutionsOpen}
                >
                  <DropdownMenuTrigger
                    className={cn(
                      "flex items-center text-xs uppercase gap-1.5 py-2 transition hover:text-black focus:outline-none cursor-pointer",
                      isSolutionsOpen && "text-black font-bold",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        isSolutionsOpen && "rotate-180 text-black",
                      )}
                      strokeWidth={2.5}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent sideOffset={8} align="start">
                    {solutionDropdownItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <DropdownMenuItem
                          key={item.title}
                          render={
                            <Link
                              href={item.href}
                              onClick={() => setIsSolutionsOpen(false)}
                            />
                          }
                          className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-md cursor-pointer transition-colors"
                        >
                          <IconComponent className="size-4 text-blue-600 stroke-[2.2]" />
                          <span>{item.title}</span>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 transition hover:text-black"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Button size="xl" variant="black">
            Sign In
          </Button>
          <Button size="xl" variant="whiteGlass">
            Join
          </Button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none lg:hidden"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container-custom mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="border-b border-gray-50 pb-2"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSolutionsOpen(!mobileSolutionsOpen)
                      }
                      className="flex w-full items-center justify-between py-2 font-semibold uppercase tracking-wider text-gray-800"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          mobileSolutionsOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {mobileSolutionsOpen && (
                      <div className="mt-1 pl-3 space-y-2 border-l-2 border-gray-100">
                        {solutionDropdownItems.map((item) => {
                          const IconComponent = item.icon;
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 text-sm font-medium text-gray-700 hover:text-black py-1.5"
                            >
                              <IconComponent className="size-4 text-blue-600 stroke-[2.2]" />
                              <span>{item.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block border-b border-gray-50 py-2.5 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-black"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Action Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <Button variant="black" className="w-full">
                Sign In
              </Button>
              <Button variant="white" className="w-full">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
