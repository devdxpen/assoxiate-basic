import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    preloadEntriesOnStart: false,
    // Tree-shake icon libraries — only import used icons instead of entire lib
    optimizePackageImports: [
      "lucide-react",
      "@tabler/icons-react",
      "motion",
    ],
  },
};

export default nextConfig;
