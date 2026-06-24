import type { MetadataRoute } from "next";
import {
  businessPages,
  communicationPages,
  companyPages,
  microbiomeProductItems,
  natureProductItems,
  productLinePages,
} from "@/lib/corporate";

export const dynamic = "force-static";

const siteUrl = "https://biolabjp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/company", "/business", "/products", "/communication"];
  const companyRoutes = companyPages.map((page) => page.href);
  const businessRoutes = businessPages.map((page) => page.href);
  const communicationRoutes = communicationPages.map((page) => page.href);
  const productLineRoutes = productLinePages.map((page) => page.href);
  const microbiomeRoutes = microbiomeProductItems.map((item) => `/products/microbiome-probiotics/${item.id}`);
  const natureRoutes = natureProductItems.map((item) => `/products/nature-ingredients/${item.id}`);
  const now = new Date();

  return [
    ...staticRoutes,
    ...companyRoutes,
    ...businessRoutes,
    ...productLineRoutes,
    ...microbiomeRoutes,
    ...natureRoutes,
    ...communicationRoutes,
  ].map((route) => ({
    url: `${siteUrl}${route}/`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/communication/inquiries" ? 0.8 : 0.7,
  }));
}
