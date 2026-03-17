"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: "de" | "en") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale("de")}
        className={`rounded px-1.5 py-0.5 transition-colors ${
          locale === "de"
            ? "text-primary"
            : "text-muted hover:text-foreground"
        }`}
        aria-label="Deutsch"
      >
        DE
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={`rounded px-1.5 py-0.5 transition-colors ${
          locale === "en"
            ? "text-primary"
            : "text-muted hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
