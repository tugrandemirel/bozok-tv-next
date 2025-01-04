import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: new URL(process.env.NEXT_PUBLIC_URL || "").hostname, // API URL'den hostname alır
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: new URL(process.env.NEXT_PUBLIC_URL || "").hostname, // API URL'den hostname alır
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
