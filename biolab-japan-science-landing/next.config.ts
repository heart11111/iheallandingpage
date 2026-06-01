import type { NextConfig } from "next";
import { existsSync, readFileSync } from "node:fs";

// Deployment target detection:
// - A GitHub Pages *project* site is served under /<repo> (e.g. /iheallandingpage),
//   so it needs a basePath / assetPrefix.
// - A *custom domain* (or user/organization page) is served from the root,
//   so basePath / assetPrefix must be empty.
// Set CUSTOM_DOMAIN in CI, or commit public/CNAME, to switch to the root build.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const customDomain =
  process.env.CUSTOM_DOMAIN?.trim() ||
  (existsSync("./public/CNAME") ? readFileSync("./public/CNAME", "utf8").trim() : "");
const useProjectBasePath = isGitHubActions && !customDomain;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: useProjectBasePath ? "/iheallandingpage" : undefined,
  assetPrefix: useProjectBasePath ? "/iheallandingpage/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
