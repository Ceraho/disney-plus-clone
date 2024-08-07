/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "image.tmdb.org",
                pathname: "/t/p/**",
            },
        ],
    }
};

export default nextConfig;
