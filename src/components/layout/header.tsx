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
  ArrowRight,
  Boxes,
  ChevronDown,
  Menu,
  SlidersHorizontal,
  Users,
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
    description: "Expert CA, CS & legal Advisory",
    href: "#services",
    badge: "Popular",
  },
  {
    icon: Boxes,
    title: "Products & Tools",
    description: "Compliance software & templates",
    href: "#products",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  // Handle scroll state for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
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
    <header className="fixed w-full top-0 z-50 transition-all duration-300 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 mx-auto container-custom">
      <div className="flex mx-auto items-center justify-between rounded-2xl p-4 border border-gray-200/60 bg-white/60 backdrop-blur-md shadow-md">
        <div className="flex items-center gap-6">
          <BrandMark
            logo="light"
            className="transition-transform duration-200 hover:scale-[1.02]"
          />
        </div>
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-1 text-lg font-regular text-gray-600 lg:flex"
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
                      "group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-lg font-medium transition-all hover:bg-gray-100/80 hover:text-gray-900 focus:outline-none cursor-pointer",
                      isSolutionsOpen &&
                      "bg-gray-100 text-gray-900 font-semibold",
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "size-4 text-gray-500 transition-transform duration-200 group-hover:text-gray-700",
                        isSolutionsOpen && "rotate-180 text-gray-900",
                      )}
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
                          className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-md cursor-pointer transition-colors"
                        >
                          <IconComponent className="size-4 text-blue-400 stroke-[2.2]" />
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
                className="rounded-full px-4 py-2 transition-all hover:bg-gray-100/80 hover:text-gray-900"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link href="#signin">
            <Button size="xl" variant="ghost">
              Sign In
            </Button>
          </Link>

          <Link href="#join">
            <Button size="xl">
              <span>Join Now</span>
              <ArrowRight className="ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-gray-700 hover:bg-gray-100 focus:outline-none lg:hidden"
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
      {isMobileMenuOpen && (
        <div className="mt-2 rounded-2xl border border-gray-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-2xl lg:hidden animate-in fade-in-50 slide-in-from-top-2">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="rounded-xl border border-gray-100 bg-gray-50/50 p-2.5"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSolutionsOpen(!mobileSolutionsOpen)
                      }
                      className="flex w-full items-center justify-between font-semibold text-sm text-gray-800 px-1"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 text-gray-500 transition-transform duration-200",
                          mobileSolutionsOpen && "rotate-180 text-blue-600",
                        )}
                      />
                    </button>

                    {mobileSolutionsOpen && (
                      <div className="mt-2 space-y-2 pt-2 border-t border-gray-200/60">
                        {solutionDropdownItems.map((item) => {
                          const IconComponent = item.icon;
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 rounded-lg p-2 hover:bg-white text-gray-700 hover:text-gray-900 transition-colors"
                            >
                              <div className="flex size-7 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                                <IconComponent className="size-3.5 stroke-[2.2]" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-[10px] text-gray-500">
                                  {item.description}
                                </div>
                              </div>
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
                  className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link href="#signin" className="w-full">
              <Button
                size="xl"
                variant="outline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Button>
            </Link>
            <Link href="#join" className="w-full">
              <Button size="xl" onClick={() => setIsMobileMenuOpen(false)}>
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
