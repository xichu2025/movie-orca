/** @type {import('next').NextConfig} */
import _withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = _withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["image.tmdb.org"],
  },
  webpack: (config, { isServer, dev }) => {
    // 只在生产环境构建时禁用缓存
    if (!dev) {
      config.cache = false;
    }
    return config;
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
