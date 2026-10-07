import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.replit.dev",
    "*.worf.replit.dev",
    "*.repl.co",
  ],
  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/architects-south-leicestershire",
        destination: "/architectural-services-south-leicestershire",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
