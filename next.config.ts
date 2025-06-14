import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co","'www.oiaproperties.com"],
    dangerouslyAllowSVG: true, // ⚠️ Use with caution
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
