/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
