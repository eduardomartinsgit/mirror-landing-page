"use client"

import { useEffect, useState } from "react"
import { Shield, Heart, Brain, Sparkles } from "lucide-react"
import { LeadForm } from "@/components/lead-form"
import { ScrollReveal } from "@/components/scroll-reveal"

const typingTexts = [
  "a tua mente",
  "as tuas emoções",
  "o teu bem-estar",
  "a tua paz interior",
]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex])

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 pb-16 overflow-hidden flex items-center">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B2FBF]/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#E91E8C]/25 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#00D4FF]/25 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#7B2FBF]/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E91E8C" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1.5" fill="url(#neuralGrad)" />
            <line x1="50" y1="50" x2="100" y2="0" stroke="url(#neuralGrad)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="0" y2="100" stroke="url(#neuralGrad)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="100" y2="100" stroke="url(#neuralGrad)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <ScrollReveal animation="fade-right" className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#E91E8C]/15 to-[#00D4FF]/15 border border-[#E91E8C]/30 text-sm font-medium mb-8 backdrop-blur-sm">
              <Heart className="h-4 w-4 text-[#E91E8C] animate-pulse" />
              <span className="gradient-text font-semibold">Cuida da tua saúde mental</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Entende{" "}
              <span className="relative inline-block">
                <span className="gradient-text glow-text">
                  {displayText}
                </span>
                <span className="text-[#00D4FF] animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              O Mirror é o teu espaço seguro para reflexão e autoconhecimento.
              Com inteligência artificial, transformamos os teus pensamentos em
              <span className="text-[#E91E8C]"> insights profundos </span>
              sobre a tua saúde emocional.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-[#E91E8C]/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#E91E8C]/50 focus-visible:outline-none">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E91E8C]/20 to-[#E91E8C]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-[#E91E8C]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">Análise Emocional</p>
                  <p className="text-xs text-muted-foreground">IA que te compreende</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-[#00D4FF]/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#E91E8C]/50 focus-visible:outline-none">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">100% Privado</p>
                  <p className="text-xs text-muted-foreground">Os teus dados protegidos</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-[#7B2FBF]/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#E91E8C]/50 focus-visible:outline-none">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2FBF]/20 to-[#7B2FBF]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-[#7B2FBF]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">Insights Diários</p>
                  <p className="text-xs text-muted-foreground">Evolui todos os dias</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Lead Form Card */}
          <ScrollReveal animation="fade-left" delay={200} className="flex-1 w-full max-w-md lg:max-w-lg">
            <div id="lead-form">
              <LeadForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
