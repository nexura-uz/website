import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/portfolio", destination: "/uz/loyihalar", permanent: true },
      { source: "/about-us", destination: "/uz/biz-haqimizda", permanent: true },
    ];
  },
};

export default nextConfig;
