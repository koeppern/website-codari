import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="mx-auto max-w-md px-6 text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-8 text-lg text-muted">
          Diese Seite existiert nicht.
        </p>
        <Link href="/" className="btn-primary">
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}
