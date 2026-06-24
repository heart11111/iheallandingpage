import type { MetadataRoute } from "next";
import { productGroups } from "@/lib/corporate";

export const dynamic = "force-static";

const siteUrl = "https://biolabjp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/products", "/contact", "/news", "/recruitment"];
  const productRoutes = productGroups.map((group) => `/products/${group.slug}`);
  const now = new Date();

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${siteUrl}${route}/`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.7,
  }));
}
