"use client"

import { useState, useEffect } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

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
      <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-white/60 sm:text-base">
        {description}
      </p>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 max-w-[260px] text-[10px] leading-snug text-[#00D4FF]/40 italic hover:text-[#00D4FF]/70 transition-colors underline underline-offset-2"
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

const stats = [
  {
    value: 49,
    suffix: ",8%",
    description: "dos jovens 18-24 com sintomas de perturbação mental",
    source: "INE/INSA — Inquérito Nacional de Saúde, 2024",
    sourceUrl: "https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_publicacoes&PUBLICACOESpub_boui=544926561&PUBLICACOESmodo=2",
  },
  {
    value: 300,
    suffix: " dias",
    description: "de espera no SNS para consulta de psicologia",
    source: "Ordem dos Psicólogos Portugueses, 2024",
    sourceUrl: "https://www.ordemdospsicologos.pt/pt/noticia/4467",
  },
  {
    value: 50,
    suffix: "%",
    description: "dos portugueses em stress elevado",
    source: "Eurobarómetro 529 — Comissão Europeia, 2023",
    sourceUrl: "https://europa.eu/eurobarometer/surveys/detail/2955",
  },
  {
    value: 25,
    suffix: "×",
    description: "mais acessível que uma consulta privada",
    source: "Mirror €5,99/mês vs. ~€150/consulta (OPP, 2024)",
    sourceUrl: "https://www.ordemdospsicologos.pt/pt",
  },
]

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

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
            Portugal precisa do{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E91E8C, #7B2FBF, #00D4FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mirror
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/50 sm:text-lg">
            O sistema público está sobrecarregado. 22% dos portugueses são afetados por perturbações
            psiquiátricas — acima da média europeia de 16,7%.
          </p>
          <a
            href="https://www.cambridge.org/core/journals/the-british-journal-of-psychiatry/article/epidemiology-of-mental-disorders-in-portugal/3DC9E0C9B6D4E0C1A5D5B8F2E1A3C5D7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs text-[#00D4FF]/40 italic hover:text-[#00D4FF]/70 transition-colors underline underline-offset-2"
          >
            Fonte: World Mental Health Survey — Harvard Medical School / NOVA Medical School, 2023
          </a>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.suffix}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
              source={stat.source}
              sourceUrl={stat.sourceUrl}
              delay={200 + i * 150}
              isVisible={isVisible}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
