/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  // },
  images: {
    deviceSizes: [567, 768, 992, 1200, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
    // domains: ["cdn.shopify.com", "8-themes.fra1.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;
