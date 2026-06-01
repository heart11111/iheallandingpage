import type { NextConfig } from "next";

// Deployment target detection:
// - A GitHub Pages *project* site is served under /<repo> (e.g. /iheallandingpage),
//   so it needs a basePath / assetPrefix.
// - A *custom domain* (or user/organization page) is served from the root,
//   so basePath / assetPrefix must be empty.
// Set the CUSTOM_DOMAIN env var (a GitHub repo variable in CI) to switch to the
// root-served custom-domain build without touching code.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const customDomain = process.env.CUSTOM_DOMAIN?.trim();
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
