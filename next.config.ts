import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "gather";

const nextConfig: NextConfig = {
  output: "export", // enables `next export`
  images: { unoptimized: true }, // GH Pages can't run the Image optimizer
  basePath: isProd ? `/${repo}` : "", // needed for project pages
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true, // helps with static hosting
};

export default nextConfig;
