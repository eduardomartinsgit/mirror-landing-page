// Onde o site sera servido decide o basePath:
// - dominio proprio na raiz (HostGator usemirror.com.br): SEM basePath. Padrao.
// - GitHub Pages (projeto): subcaminho /mirror-landing-page. Defina DEPLOY_TARGET=ghpages.
const isGhPages = process.env.DEPLOY_TARGET === 'ghpages'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGhPages ? '/mirror-landing-page' : '',
  assetPrefix: isGhPages ? '/mirror-landing-page/' : undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
