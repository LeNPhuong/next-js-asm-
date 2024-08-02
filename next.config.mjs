/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.tgdd.vn'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
