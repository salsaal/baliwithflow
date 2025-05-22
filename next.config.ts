import type { NextConfig } from "next";
import { join } from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = join(__dirname, "src"); // Adjust if assets is under src/
    return config;
  },
};

export default nextConfig;
