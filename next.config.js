/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeImages: true,
    scrollRestoration: true,
  },
  images: {
    domains: ['api.bozok.tv'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    remotePatterns: [
        {
            protocol: "http",
            hostname: new URL(process.env.NEXT_PUBLIC_URL || "").hostname,
            port: "",
            pathname: "/**",
        },
        {
            protocol: "https",
            hostname: new URL(process.env.NEXT_PUBLIC_URL || "").hostname,
            port: "",
            pathname: "/**",
        },
    ],
  },
}

module.exports = nextConfig 