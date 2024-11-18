import { MetadataRoute } from "next";
import { getPostListAction } from "@/app/actions/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get the base URL from environment variable or default to localhost in development
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const locales = ["uz", "ru", "en"];
  const routes = ["", "about-us", "contact-us", "portfolio", "blog"];

  const paths: {
    url: string;
    lastModified: Date;
    changeFrequency: "weekly";
    priority: number;
  }[] = [];

  routes.map((route) => {
    locales.map((locale) => {
      paths.push({
        url: `${baseUrl}/${locale}/${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    });
  });

  const posts = await getPostListAction();
  posts.map((post) => {
    locales.map((locale) => {
      paths.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    });
  });

  // Define your static routes
  const staticRoutes = [...paths];

  return [...staticRoutes];
}
