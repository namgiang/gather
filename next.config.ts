import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// When deploying to a custom domain (recommended: commit public/CNAME), we do NOT want a basePath.
// The previous configuration hard-coded /gather which causes a 404 at the domain root.
// If you ever need a repo base path (project page without custom domain), set NEXT_PUBLIC_BASE_PATH=1 at build time.
const useRepoBasePath = process.env.NEXT_PUBLIC_BASE_PATH === "1";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "gather";

const nextConfig: NextConfig = {
  output: "export", // produces static ./out on build
  images: { unoptimized: true }, // GitHub Pages: no on-the-fly optimization
  basePath: isProd && useRepoBasePath ? `/${repo}` : undefined,
  assetPrefix: isProd && useRepoBasePath ? `/${repo}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
