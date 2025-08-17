/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Handle static assets from Anima
  async rewrites() {
    return [
      {
        source: '/img/:path*',
        destination: '/static/img/:path*',
      },
    ];
  },
}

export default nextConfig