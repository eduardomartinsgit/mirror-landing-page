import type { Metadata, Viewport } from 'next'
import { GeoGate } from '@/components/geo-gate'
import { LanguageProvider } from '@/lib/i18n/context'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://usemirror.com.br'),
  title: 'Mirror: diário de voz com IA | Entenda sua mente em 3 minutos',
  description:
    'Fale 3 minutos por dia e a IA te devolve clareza: seu Mirror Score, suas emoções e os padrões do seu bem-estar. Diário de voz com IA, privado e em português. Entre na lista de espera.',
  keywords: [
    'diário de voz', 'saúde mental', 'bem-estar', 'ansiedade', 'autoconhecimento',
    'diário emocional', 'mindfulness', 'inteligência artificial', 'Mirror Score', 'journaling',
  ],
  applicationName: 'Mirror',
  manifest: '/manifest.json',
  alternates: { canonical: 'https://usemirror.com.br' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://usemirror.com.br',
    siteName: 'Mirror',
    title: 'Mirror: diário de voz com IA | Entenda sua mente em 3 minutos',
    description:
      'Fale 3 minutos por dia e a IA te devolve clareza: Mirror Score, emoções e padrões do seu bem-estar. Privado e em português. Entre na lista.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirror: diário de voz com IA',
    description:
      'Fale 3 minutos por dia e entenda como você está. Diário de voz com IA, privado e em português. Entre na lista.',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Mirror',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0D0B14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          <GeoGate>
            {children}
          </GeoGate>
        </LanguageProvider>
      </body>
    </html>
  )
}
