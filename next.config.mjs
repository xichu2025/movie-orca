/** @type {import('next').NextConfig} */
import _withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = _withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
