import type { MetadataRoute } from "next";
import {
  businessPages,
  communicationPages,
  companyPages,
  microbiomeProductItems,
  natureProductItems,
  productGroups,
  productLinePages,
} from "@/lib/corporate";

export const dynamic = "force-static";

const siteUrl = "https://biolabjp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/company",
    "/business",
    "/products",
    "/communication",
    "/contact",
    "/news",
    "/recruitment",
  ];
  const companyRoutes = companyPages.map((page) => page.href);
  const businessRoutes = businessPages.map((page) => page.href);
  const communicationRoutes = communicationPages.map((page) => page.href);
  const productLineRoutes = productLinePages.map((page) => page.href);
  const productGroupRoutes = productGroups.map((group) => `/products/${group.slug}`);
  const microbiomeRoutes = microbiomeProductItems.map((item) => `/products/microbiome-probiotics/${item.id}`);
  const natureRoutes = natureProductItems.map((item) => `/products/nature-ingredients/${item.id}`);
  const lastModified = new Date("2026-06-30T00:00:00+09:00");

  const routes = [
    ...staticRoutes,
    ...companyRoutes,
    ...businessRoutes,
    ...productLineRoutes,
    ...productGroupRoutes,
    ...microbiomeRoutes,
    ...natureRoutes,
    ...communicationRoutes,
  ];

  return [...new Set(routes)].map((route) => ({
    url: `${siteUrl}${route}/`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }));
}
