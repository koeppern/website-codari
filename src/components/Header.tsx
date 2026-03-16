"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "HR Services",
    href: "/recruitment-services",
    children: [
      { label: "Für Unternehmen", href: "/fur-unternehmen" },
      { label: "Für Kandidaten", href: "/fur-kandidaten" },
    ],
  },
  { label: "Employer Branding", href: "/employer-branding" },
  { label: "Über Uns", href: "/uber-uns" },
  { label: "SCR", href: "/social-corporate-responsibility" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="CODARI Consulting"
            width={140}
            height={35}
            priority
            className="brightness-0 invert"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`font-heading text-sm transition-colors ${
                    isActive(item.href) || isActive("/fur-unternehmen") || isActive("/fur-kandidaten")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.label}
                  <svg className="ml-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 rounded bg-surface py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(child.href) ? "text-primary" : "text-white hover:text-primary"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href) ? "text-primary" : "text-white hover:text-primary"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-black px-6 py-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className={`block py-2 text-sm ${isActive(item.href) ? "text-primary" : "text-white"}`}
                style={{ fontFamily: "var(--font-heading)" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block py-2 pl-4 text-sm ${isActive(child.href) ? "text-primary" : "text-muted"}`}
                  style={{ fontFamily: "var(--font-heading)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
