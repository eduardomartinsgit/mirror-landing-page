// Onde o site sera servido decide o basePath:
// - dominio proprio na raiz (HostGator usemirror.com.br): SEM basePath. Padrao.
// - GitHub Pages (projeto): subcaminho /mirror-landing-page. Defina DEPLOY_TARGET=ghpages.
const isGhPages = process.env.DEPLOY_TARGET === 'ghpages'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGhPages ? '/mirror-landing-page' : '',
  assetPrefix: isGhPages ? '/mirror-landing-page/' : undefined,
  // Sem barra final: gera arquivos .html planos. O .htaccess remove a barra
  // e serve o .html sem extensao (URLs limpas no Apache/cPanel).
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
