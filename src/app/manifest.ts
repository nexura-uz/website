import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nexura - Building tomorrow's web today",
    short_name: "Nexura",
    description: "Professional web development and digital solutions",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    categories: ["business", "technology", "web development"],
    lang: "uz",
    dir: "ltr",
    prefer_related_applications: false,
    related_applications: [],
    shortcuts: [
      {
        name: "Portfolio",
        url: "/uz/portfolio",
        description: "View our work portfolio",
      },
      {
        name: "Contact",
        url: "/uz/contact-us",
        description: "Get in touch with us",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-1.png",
        sizes: "1920x1080",
        type: "image/png",
        label: "Homepage of Nexura",
      },
    ],
  };
}
