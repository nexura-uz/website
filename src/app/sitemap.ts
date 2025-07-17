import { base_url } from "@/utils/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const routes = ["", "porfolio"];

  const paths: {
    url: string;
    lastModified: Date;
    changeFrequency: "weekly";
    priority: number;
  }[] = [];

  routes.map((route) => {
    paths.push({
      url: `${base_url}/${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    });
  });

  // Define your static routes
  const staticRoutes = [...paths];

  return [...staticRoutes];
}