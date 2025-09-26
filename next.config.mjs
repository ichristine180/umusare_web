/** @type {import('next').NextConfig} */

 



const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    staleTimes: {
      dynamic: 30, 
      static: 300, 
    },
  },
};

 
export default nextConfig
