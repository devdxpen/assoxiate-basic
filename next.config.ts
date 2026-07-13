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
<<<<<<< HEAD
};

export default nextConfig;
=======
  experimental: {
    preloadEntriesOnStart: false,
  },
};

export default nextConfig;

>>>>>>> dc0db1e61bdf7e9034fb64da12a071622db78145
