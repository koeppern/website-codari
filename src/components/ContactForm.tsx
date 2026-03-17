"use client";

import { useTranslations } from "next-intl";

export default function ContactForm({ showCompanyField = false }: { showCompanyField?: boolean }) {
  const t = useTranslations("Kontakt");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          {showCompanyField ? t("nameCompany") : t("name")} *
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      {showCompanyField && (
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            {t("company")}
          </label>
          <input
            id="company"
            type="text"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          {t("emailLabel")} *
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          {t("message")} *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <p className="text-sm text-muted">
        {t("formDisabled", {
          email: "info@codari.de",
          phone: "+49 2151 6476293",
        })}
      </p>
      <button
        type="button"
        disabled
        className="w-full rounded-lg bg-primary/50 px-8 py-3 font-semibold text-white"
      >
        {t("send")}
      </button>
    </form>
  );
}
