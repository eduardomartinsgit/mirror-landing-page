"use client"

import { useState } from "react"
import { Logo } from "@/components/logo"

interface GeoBlockProps {
  onClose?: () => void
}

export function GeoBlock({ onClose }: GeoBlockProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    // In production, this would send the email to an API
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#0D0B14] flex items-center justify-center px-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#7B2FBF]/10 rounded-full blur-[100px]" />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E91E8C] to-transparent opacity-60" />

      <div className="relative max-w-lg w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo showText={true} className="scale-125" />
        </div>

        {/* Divider */}
        <div className="w-16 h-[2px] mx-auto bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] rounded-full" />

        {/* Portuguese message */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] bg-clip-text text-transparent">
            O Mirror ainda não chegou ao teu país.
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
            Estamos a trabalhar nisso. Deixa o teu e-mail e avisamos-te quando chegarmos aí.
          </p>
        </div>

        {/* English message */}
        <div className="space-y-3 opacity-70">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white/80">
            Mirror is not yet available in your country.
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We&apos;re working on it. Drop your email and we&apos;ll let you know when we launch in your area.
          </p>
        </div>

        {/* Email form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#E91E8C]/60 focus:ring-1 focus:ring-[#E91E8C]/30 text-base"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] text-white font-bold text-sm hover:opacity-90 transition-opacity shrink-0"
            >
              Avisar-me
            </button>
          </form>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 max-w-md mx-auto">
            <p className="text-[#00D4FF] font-medium">
              Obrigado! Entraremos em contacto em breve.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Thank you! We&apos;ll be in touch soon.
            </p>
          </div>
        )}

        {/* Country note */}
        <p className="text-xs text-gray-500 mt-6">
          🇵🇹 Disponível em Portugal / Available in Portugal
        </p>

        {/* Optional close button for testing */}
        {onClose && (
          <button
            onClick={onClose}
            className="text-xs text-gray-500 hover:text-gray-300 underline underline-offset-2 transition-colors"
          >
            Fechar / Close
          </button>
        )}
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-60" />
    </div>
  )
}
