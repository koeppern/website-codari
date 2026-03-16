import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CODARI — Employer Branding & HR Services",
    short_name: "CODARI",
    description: "Employer Branding, Recruitment und HR-Services in der DACH-Region.",
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#3de2e5",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
