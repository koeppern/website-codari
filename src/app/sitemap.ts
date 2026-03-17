import type { MetadataRoute } from "next";

const locales = ["de", "en"];
const baseUrl = "https://codari.de";

const pages = [
  { path: "", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/fur-unternehmen", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/fur-kandidaten", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/employer-branding", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/uber-uns", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/kontakt", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/impressum", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/datenschutzerklarung", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${page.path}`])
        ),
      },
    }))
  );
}
