import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/iheallandingpage" : undefined,
  assetPrefix: isGitHubPages ? "/iheallandingpage/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
