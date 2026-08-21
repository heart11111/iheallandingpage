import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal draft previews — never index.
      disallow: ["/dev/", "/dev"],
    },
    sitemap: "https://biolabjp.com/sitemap.xml",
    host: "https://biolabjp.com",
  };
}
