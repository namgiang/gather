import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Project Pages URL: https://namgiang.github.io/gather/
// For a custom domain at the root again, drop basePath/assetPrefix and add public/CNAME.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "gather";

const nextConfig: NextConfig = {
  output: "export", // produces static ./out on build
  images: { unoptimized: true }, // GitHub Pages: no on-the-fly optimization
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
