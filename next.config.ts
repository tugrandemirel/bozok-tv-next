import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: new URL(process.env.NEXT_PUBLIC_API_URL || "").hostname, // API URL'den hostname alır
                port: "",
                pathname: "/uploads/**",

            },
        ],
    },
};

export default nextConfig;
