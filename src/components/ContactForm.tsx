"use client";

export default function ContactForm({ showCompanyField = false }: { showCompanyField?: boolean }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          {showCompanyField ? "Name" : "Vor- und Nachname"} *
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      {showCompanyField && (
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Unternehmen
          </label>
          <input
            id="company"
            type="text"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          E-Mail {showCompanyField ? "Adresse" : ""} *
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Nachricht *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <p className="text-sm text-muted">
        Dieses Formular ist derzeit nicht funktional. Bitte kontaktieren Sie uns
        direkt per E-Mail an{" "}
        <a href="mailto:info@codari.de" className="text-primary hover:underline">
          info@codari.de
        </a>{" "}
        oder telefonisch unter{" "}
        <a href="tel:+4921516476293" className="text-primary hover:underline">
          +49 2151 6476293
        </a>
        .
      </p>
      <button
        type="button"
        disabled
        className="w-full rounded-lg bg-accent/50 px-8 py-3 font-semibold text-white"
      >
        Versenden
      </button>
    </form>
  );
}
