import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CODARI — IT & Engineering Recruiting",
    short_name: "CODARI",
    description: "IT & Engineering Recruiting und Employer Branding in der DACH-Region.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
