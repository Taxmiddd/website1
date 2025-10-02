/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "igacmun.vercel.app",
      },
      {
        protocol: "https",
        hostname: "igacmun-session-3.netlify.app",
      },
    ],
  },
};

module.exports = nextConfig;
