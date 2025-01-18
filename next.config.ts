import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "3001",
        protocol: "http"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://luxry-backend.onrender.com/api/:path*"
      }
    ]
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true"},
          { key: "Access-Control-Allow-Origin", value: "https://luxry.vercel.app"},
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,POST,PUT,DELETE"},
          { key: "Access-Control-Allow-Headers", value: "Content-Type,Authorization"}
        ]
      }
    ]
  }
};

export default nextConfig;
