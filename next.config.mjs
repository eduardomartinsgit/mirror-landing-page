/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mirror-landing-page',
  assetPrefix: '/mirror-landing-page/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
