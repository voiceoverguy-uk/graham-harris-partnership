"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex-1">
          <div className="border-t-2 border-gray-800 pt-1 pb-0.5 mb-0.5">
            <div className="border-b-2 border-gray-800 pb-1">
              <span
                className="text-lg font-bold text-gray-900 block"
                style={{
                  fontFamily: '"Century Gothic", "Montserrat", sans-serif',
                  letterSpacing: "0.02em",
                }}
              >
                GRAHAM HARRIS PARTNERSHIP Ltd.
              </span>
            </div>
          </div>
        </Link>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-3 p-2 text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-3 text-sm border-b border-gray-100 transition-colors ${
                  isActive
                    ? "text-gray-900 font-medium bg-gray-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                style={{
                  fontFamily: '"Century Gothic", "Montserrat", sans-serif',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <nav className="hidden md:flex justify-center gap-4 md:gap-6 flex-wrap px-4 py-4 text-sm md:text-base">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link relative pb-1 transition-colors hover:text-gray-600 ${
                isActive
                  ? "text-gray-900 font-medium active"
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
    </>
  );
}
