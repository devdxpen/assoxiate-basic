"use client";

import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

const socialLinks = [
  {
    icon: <IconBrandFacebook className="size-5" />,
    href: "#",
  },
  {
    icon: <IconBrandTwitter className="size-5" />,
    href: "#",
  },
  {
    icon: <IconBrandInstagram className="size-5" />,
    href: "#",
  },
  {
    icon: <IconBrandLinkedin className="size-5" />,
    href: "#",
  },
];

const aboutLinks = [
  { label: "About Us", href: "#" },
  { label: "Help", href: "#" },
  { label: "FAQ", href: "#" },
];

const contactLinks = [
  {
    href: "mailto:info@assoxiate.com",
    icon: <IconMail className="size-5 text-gray-500 shrink-0" />,
    text: "info@assoxiate.com",
  },
  {
    href: "tel:+97148742145",
    icon: <IconPhone className="size-5 text-gray-500 shrink-0" />,
    text: "Toll Free No: +971 4 874 2145",
  },
];

const policyLinks = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Copyright Policy", href: "#" },
  { label: "Brand Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-700 pt-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-6">
          <div className="flex flex-col items-start">
            <BrandMark logo="dark" />
            <div className="flex gap-2.5 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex size-9 items-center justify-center rounded-xl border border-gray-700 bg-gray-950 text-gray-400 hover:border-gray-500 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <ul className="space-y-3">
              {aboutLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-md text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-2.5 text-md text-gray-400 hover:text-white transition-colors font-medium"
                >
                  {link.icon}
                  {link.text}
                </Link>
              ))}
            </div>

            <ul className="space-y-3 pt-2">
              {policyLinks.map((policy, i) => (
                <li key={i}>
                  <Link
                    href={policy.href}
                    className="text-md text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex size-24 shrink-0 items-center justify-center rounded-lg bg-gray-900 p-1.5 shadow-sm border border-gray-700">
              <Image src="qu-code.svg" alt="QR Code" width={120} height={120} />
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src="/app-store.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <Link
                href="https://play.google.com/store/games?hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src="/play-store.svg"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-base font-regular text-gray-400">
              © 2025 • Assoxiate Reserved
            </p>
            <div className="flex items-center gap-1.5 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Community Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
