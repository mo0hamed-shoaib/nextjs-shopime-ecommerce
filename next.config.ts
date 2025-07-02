import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'fakestoreapi.in',
      'storage.googleapis.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com', // Facebook profile images
    ],
  },
};

export default nextConfig;
