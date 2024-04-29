/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "images.unsplash.com" },
            { hostname: "plus.unsplash.com" },
            { hostname: "cdn-icons-png.flaticon.com" },
            { hostname: "daisyui.com" },
        ]
    }
};

export default nextConfig;