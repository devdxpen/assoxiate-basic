import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    icon: (
      <svg
        className="size-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    href: "#",
  },
  {
    icon: (
      <svg
        className="size-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: "#",
  },
  {
    icon: (
      <svg
        className="size-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: "#",
  },
  {
    icon: (
      <svg
        className="size-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
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
    icon: <Mail className="size-4 text-gray-500 shrink-0" />,
    text: "info@assoxiate.com",
  },
  {
    href: "tel:+97148742145",
    icon: <Phone className="size-4 text-gray-500 shrink-0" />,
    text: "Toll Free No: +971 4 874 2145",
  },
];

const policyLinks = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Copyright Policy", href: "#" },
  { label: "Brand Policy", href: "#" },
];

const appBadges = [
  {
    icon: (
      <svg
        className="size-5 text-white fill-current shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-1 2.94 1.07.08 2.17-.52 2.83-1.33" />
      </svg>
    ),
    label: "Download",
    sublabel: "for iOS",
    href: "#",
  },
  {
    icon: (
      <svg
        className="size-5 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.25 1.5C3.04 1.71 2.92 2.05 2.92 2.47V21.53C2.92 21.95 3.04 22.29 3.25 22.5L3.33 22.58L13.88 12.03V11.97L3.33 1.42L3.25 1.5Z"
          fill="#00b0ff"
        />
        <path
          d="M17.38 15.58L13.88 12.03V11.97L17.38 8.42L17.47 8.47L21.67 10.86C22.87 11.54 22.87 12.46 21.67 13.14L17.47 15.53L17.38 15.58Z"
          fill="#ffca28"
        />
        <path
          d="M17.47 15.53L13.88 12L3.25 22.5C3.59 22.84 4.15 22.89 4.79 22.53L17.47 15.53Z"
          fill="#ff3d00"
        />
        <path
          d="M17.47 8.47L4.79 1.47C4.15 1.11 3.59 1.16 3.25 1.5L13.88 12L17.47 8.47Z"
          fill="#4caf50"
        />
      </svg>
    ),
    label: "Download",
    sublabel: "for Android",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-700 pt-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-6">
          <div className="flex flex-col items-start">
            <BrandMark />
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
                    className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
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
                <a
                  key={i}
                  href={link.href}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors font-medium"
                >
                  {link.icon}
                  {link.text}
                </a>
              ))}
            </div>

            <ul className="space-y-3 pt-2">
              {policyLinks.map((policy, i) => (
                <li key={i}>
                  <Link
                    href={policy.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-2.5">
              {appBadges.map((badge, i) => (
                <Link
                  key={i}
                  href={badge.href}
                  className="flex items-center gap-2 rounded-xl bg-gray-900 px-3 py-1.5 hover:bg-gray-800 transition-colors w-32 shadow-sm"
                >
                  {badge.icon}
                  <div className="text-base font-semibold text-white text-left">
                    <span className="text-sm font-regular text-gray-400 block font-normal capitalize">
                      {badge.label}
                    </span>
                    {badge.sublabel}
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-gray-900 p-1.5 shadow-sm border border-gray-700">
              <Image
                src="qu-code.svg"
                alt="Google Play"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-base font-regular text-gray-400">
              © 2025 • Assoxiated Reserved
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
