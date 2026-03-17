"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import GradientBorderButton from "./GradientBorderButton";

export default function Header() {
  const t = useTranslations("Nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems = [
    { label: t("home"), href: "/" as const },
    {
      label: t("hrServices"),
      href: "/fur-unternehmen" as const,
      children: [
        { label: t("furUnternehmen"), href: "/fur-unternehmen" as const },
        { label: t("furKandidaten"), href: "/fur-kandidaten" as const },
      ],
    },
    { label: t("employerBranding"), href: "/employer-branding" as const },
    { label: t("uberUns"), href: "/uber-uns" as const },
    { label: t("kontakt"), href: "/kontakt" as const },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDropdownBlur = (e: React.FocusEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget as Node)) {
      setDropdownOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="CODARI Consulting"
            width={140}
            height={35}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onFocus={() => setDropdownOpen(true)}
                onBlur={handleDropdownBlur}
              >
                <Link
                  href={item.href}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href) || isActive("/fur-kandidaten")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <svg className="ml-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {dropdownOpen && (
                  <div className="dropdown-menu absolute left-0 top-full mt-2 w-48 rounded-lg border border-border bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(child.href) ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
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
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side: Language + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <GradientBorderButton href="/kontakt">{t("cta")}</GradientBorderButton>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 text-foreground transition-colors hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
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
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="border-t border-border bg-white px-6 py-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className={`block py-2 text-sm font-medium ${isActive(item.href) ? "text-primary" : "text-foreground"}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block py-2 pl-4 text-sm ${isActive(child.href) ? "text-primary" : "text-muted"}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-4 border-t border-border pt-4">
            <Link
              href="/kontakt"
              className="btn-primary block text-center text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {t("cta")}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
