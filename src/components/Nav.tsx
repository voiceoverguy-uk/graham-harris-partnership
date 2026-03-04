"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/planning-permission", label: "Planning Permission" },
  { href: "/building-regulations", label: "Building Regulations" },
  { href: "/our-experience", label: "Our Experience" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-4 md:gap-6 flex-wrap px-4 py-4 text-sm md:text-base">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`pb-0.5 transition-colors hover:text-gray-600 ${
              isActive
                ? "border-b-2 border-amber-600 text-gray-900 font-medium"
                : "text-gray-700"
            }`}
            style={{
              fontFamily: '"Century Gothic", "Montserrat", sans-serif',
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
