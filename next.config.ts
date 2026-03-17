import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ueber-uns", destination: "/uber-uns", permanent: true },
      { source: "/fuer-kandidaten", destination: "/fur-kandidaten", permanent: true },
      { source: "/fuer-unternehmen", destination: "/fur-unternehmen", permanent: true },
      { source: "/datenschutzerklaerung", destination: "/datenschutzerklarung", permanent: true },
      { source: "/social-corporate-responsibility", destination: "/", permanent: true },
      { source: "/recruitment-services", destination: "/fur-unternehmen", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
