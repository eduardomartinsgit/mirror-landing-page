"use client"

import { useState, useEffect } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useLanguage } from "@/lib/i18n/context"

function useCounter(end: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return count
}

interface StatItemProps {
  value: number
  suffix: string
  description: string
  source: string
  sourceUrl: string
  delay: number
  isVisible: boolean
  isLast: boolean
}

function StatItem({ value, suffix, description, source, sourceUrl, delay, isVisible, isLast }: StatItemProps) {
  const count = useCounter(value, 2000, isVisible)

  return (
    <ScrollReveal animation="fade-up" delay={delay} className="relative flex flex-col items-center text-center px-6 py-8">
      <span
        className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        style={{
          background: "linear-gradient(135deg, #E91E8C, #00D4FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {count}
        {suffix}
      </span>
      <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-white/70 sm:text-base">
        {description}
      </p>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 max-w-[260px] text-[10px] leading-snug text-[#00D4FF]/70 italic hover:text-[#00D4FF]/90 transition-colors underline underline-offset-2"
      >
        {source}
      </a>

      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 lg:block"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(233,30,140,0.3), transparent)",
          }}
        />
      )}
    </ScrollReveal>
  )
}

// Brazil-first stats (verified Jun 2026). Values pair with the per-locale
// suffixes: 26 -> "26,8%", 1 -> "1o", 500 -> "500 mil", 10 -> "10x".
const statValues = [26, 1, 500, 10]
const sourceUrls = [
  "https://www.cnnbrasil.com.br/saude/mais-de-26-dos-brasileiros-tem-diagnostico-de-ansiedade-diz-estudo/",
  "https://jornal.usp.br/atualidades/brasil-e-o-pais-mais-ansioso-do-mundo/",
  "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental",
  "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental",
]

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  const { t, ta } = useLanguage()
  const items = ta<{ suffix: string; description: string; source: string }>("stats.items")

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(123,47,191,0.12) 0%, transparent 70%), linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(123,47,191,0.04) 50%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal animation="fade-up" className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("stats.titleBefore")}
            <span
              style={{
                background: "linear-gradient(135deg, #E91E8C, #7B2FBF, #00D4FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("stats.titleHighlight")}
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            {t("stats.subtitle")}
          </p>
          <a
            href="https://www.cambridge.org/core/journals/the-british-journal-of-psychiatry/article/epidemiology-of-mental-disorders-in-portugal/3DC9E0C9B6D4E0C1A5D5B8F2E1A3C5D7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs text-[#00D4FF]/70 italic hover:text-[#00D4FF]/90 transition-colors underline underline-offset-2"
          >
            {t("stats.source")}
          </a>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {items.map((item, i) => (
            <StatItem
              key={i}
              value={statValues[i]}
              suffix={item.suffix}
              description={item.description}
              source={item.source}
              sourceUrl={sourceUrls[i]}
              delay={200 + i * 150}
              isVisible={isVisible}
              isLast={i === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
