import { Link } from "@/i18n/navigation";

interface GradientBorderButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function GradientBorderButton({ href, children, external, className = "" }: GradientBorderButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-gradient-border ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`btn-gradient-border ${className}`}>
      {children}
    </Link>
  );
}
