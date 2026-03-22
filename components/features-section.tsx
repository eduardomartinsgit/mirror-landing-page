"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { PhoneMockup } from "@/components/phone-mockup"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

/* ─── helpers ─── */

function getFeatureOpacity(progress: number, featureIndex: number): number {
  const segmentSize = 0.25
  const start = featureIndex * segmentSize
  const end = start + segmentSize
  const fadeRange = 0.05 // 5% of total scroll for transition

  if (progress >= start + fadeRange && progress <= end - fadeRange) return 1
  if (progress < start) return 0
  if (progress > end) return 0
  if (progress < start + fadeRange) return (progress - start) / fadeRange
  return (end - progress) / fadeRange
}

function Badge({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <span
      className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/5 border border-white/10"
      style={{ color: accent }}
    >
      {children}
    </span>
  )
}

/* ─── phone screen mockups ─── */

function VoiceDiaryScreen() {
  const barHeights = [18, 32, 24, 40, 28, 36, 20, 44, 30, 22, 38, 26, 42, 16, 34, 28, 46, 20, 36, 30, 24, 40, 18, 32, 44, 22, 38, 34, 26, 42]
  return (
    <div className="flex flex-col h-full gap-3 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Diário de Voz</p>
          <p className="text-[10px] text-white/40">Terça, 18 Mar 2026</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#7B2FBF] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 1v14M19 10a7 7 0 01-14 0M12 19v4M8 23h8" />
          </svg>
        </div>
      </div>

      {/* Waveform */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <svg viewBox="0 0 240 60" className="w-full h-14">
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E91E8C" />
              <stop offset="50%" stopColor="#7B2FBF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          {barHeights.map((h, i) => (
            <rect
              key={i}
              x={i * 8 + 1}
              y={30 - h / 2}
              width={4}
              height={h}
              rx={2}
              fill="url(#waveGrad)"
              opacity={i < 18 ? 1 : 0.3}
            />
          ))}
        </svg>

        {/* Timer */}
        <p className="text-2xl font-mono font-bold tracking-wider bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] bg-clip-text text-transparent">
          2:34
        </p>

        {/* Recording button */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#7B2FBF] flex items-center justify-center shadow-lg shadow-[#E91E8C]/30">
          <div className="w-5 h-5 rounded-sm bg-white" />
        </div>
      </div>

      {/* Emotions detected */}
      <div>
        <p className="text-[10px] text-white/40 mb-1.5">Emoções detectadas</p>
        <div className="flex gap-1.5 flex-wrap">
          {[
            { label: "Ansiedade", color: "#E91E8C" },
            { label: "Esperança", color: "#00D4FF" },
            { label: "Calma", color: "#7B2FBF" },
          ].map((e) => (
            <span
              key={e.label}
              className="px-2.5 py-1 rounded-full text-[10px] font-medium"
              style={{ backgroundColor: e.color + "20", color: e.color }}
            >
              {e.label}
            </span>
          ))}
        </div>
      </div>

      {/* Insight card */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
        <div className="flex items-start gap-2">
          <span className="text-sm mt-0.5">💡</span>
          <p className="text-[10px] text-white/70 leading-relaxed">
            <span className="text-white/90 font-medium">Padrão detectado:</span> às terças sentes mais ansiedade
          </p>
        </div>
      </div>
    </div>
  )
}

function EmotionalTimelineScreen() {
  const points = [
    { x: 10, y: 55 },
    { x: 48, y: 30 },
    { x: 86, y: 42 },
    { x: 124, y: 18 },
    { x: 162, y: 35 },
    { x: 200, y: 22 },
    { x: 238, y: 28 },
  ]
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ")
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]

  return (
    <div className="flex flex-col h-full gap-3 text-white">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold">Timeline Emocional</p>
        <p className="text-[10px] text-white/40">Última semana</p>
      </div>

      {/* Chart */}
      <div className="flex-1 flex flex-col justify-center">
        <svg viewBox="0 0 248 80" className="w-full">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E91E8C" />
              <stop offset="50%" stopColor="#7B2FBF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B2FBF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7B2FBF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path d={`${pathD} L238,75 L10,75 Z`} fill="url(#areaGrad)" />
          {/* Grid lines */}
          {[20, 40, 60].map((y) => (
            <line key={y} x1="10" y1={y} x2="238" y2={y} stroke="white" strokeOpacity="0.05" />
          ))}
          {/* Line */}
          <path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Dots */}
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="5" fill="#0D0B14" />
              <circle cx={p.x} cy={p.y} r="3.5" fill={i === 3 ? "#00D4FF" : "url(#lineGrad)"} />
            </g>
          ))}
        </svg>
        {/* Day labels */}
        <div className="flex justify-between px-1 mt-1">
          {days.map((d) => (
            <span key={d} className="text-[9px] text-white/30">{d}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-3">
        {[
          { label: "Alegria", color: "#00D4FF" },
          { label: "Ansiedade", color: "#E91E8C" },
          { label: "Calma", color: "#7B2FBF" },
        ].map((e) => (
          <div key={e.label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: e.color }} />
            <span className="text-[9px] text-white/50">{e.label}</span>
          </div>
        ))}
      </div>

      {/* Insight card */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
        <div className="flex items-start gap-2">
          <span className="text-sm mt-0.5">📊</span>
          <p className="text-[10px] text-white/70 leading-relaxed">
            <span className="text-white/90 font-medium">Insight:</span> depois de exercício o teu humor melhora 40%
          </p>
        </div>
      </div>

      {/* Emotions summary */}
      <div className="flex gap-2">
        {[
          { label: "Melhor dia", value: "Quinta", color: "#00D4FF" },
          { label: "Mais frequente", value: "Calma", color: "#7B2FBF" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-lg bg-white/5 p-2">
            <p className="text-[9px] text-white/40">{s.label}</p>
            <p className="text-xs font-semibold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MirrorScoreScreen() {
  const circumference = 2 * Math.PI * 52
  const progress = (78 / 100) * circumference

  const weekBars = [60, 72, 68, 74, 70, 75, 78]
  const barDays = ["S", "T", "Q", "Q", "S", "S", "D"]

  return (
    <div className="flex flex-col h-full gap-3 text-white items-center">
      {/* Header */}
      <div className="w-full">
        <p className="text-sm font-semibold text-center">Mirror Score&trade;</p>
        <p className="text-[10px] text-white/40 text-center">O teu índice de bem-estar</p>
      </div>

      {/* Gauge */}
      <div className="relative flex items-center justify-center py-2">
        <svg width="140" height="140" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E91E8C" />
              <stop offset="50%" stopColor="#7B2FBF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          {/* Background ring */}
          <circle cx="60" cy="60" r="52" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="8" />
          {/* Progress ring */}
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-4xl font-bold bg-gradient-to-br from-[#E91E8C] via-[#7B2FBF] to-[#00D4FF] bg-clip-text text-transparent">
            78
          </span>
          <span className="text-[9px] text-white/40 -mt-0.5">de 100</span>
        </div>
      </div>

      {/* Trend */}
      <div className="flex items-center gap-4 justify-center">
        <div className="flex items-center gap-1 text-[#00D4FF]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <span className="text-xs font-semibold">+5 esta semana</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm">🔥</span>
          <span className="text-xs font-medium text-white/70">12 dias seguidos</span>
        </div>
      </div>

      {/* Weekly bars */}
      <div className="w-full px-2">
        <p className="text-[10px] text-white/40 mb-2">Últimos 7 dias</p>
        <div className="flex items-end justify-between gap-1.5 h-16">
          {weekBars.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-sm relative" style={{ height: `${(v / 100) * 56}px` }}>
                <div
                  className="absolute inset-0 rounded-t-sm"
                  style={{
                    background: i === 6
                      ? "linear-gradient(to top, #E91E8C, #00D4FF)"
                      : "rgba(255,255,255,0.08)",
                  }}
                />
              </div>
              <span className="text-[8px] text-white/30">{barDays[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="w-full flex gap-2">
        {[
          { label: "Média mensal", value: "72", color: "#7B2FBF" },
          { label: "Recorde", value: "85", color: "#00D4FF" },
          { label: "Consistência", value: "94%", color: "#E91E8C" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-lg bg-white/5 p-2 text-center">
            <p className="text-[8px] text-white/40">{s.label}</p>
            <p className="text-xs font-bold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmergencyModeScreen() {
  return (
    <div className="flex flex-col h-full text-white items-center relative">
      {/* Calming gradient background */}
      <div className="absolute inset-0 -m-4 bg-gradient-to-b from-[#7B2FBF]/30 via-[#0D0B14] to-[#0D0B14]" />

      <div className="relative flex flex-col h-full items-center gap-3 w-full">
        {/* Header */}
        <div className="flex items-center gap-2 w-full">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#E91E8C">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p className="text-sm font-semibold">Modo Desabafar</p>
        </div>

        <p className="text-[10px] text-white/40 w-full">Exercício de respiração guiada</p>

        {/* Breathing circle */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-40"
              style={{
                background: "radial-gradient(circle, #7B2FBF 0%, transparent 70%)",
                margin: "-20px",
              }}
            />
            {/* Breathing ring */}
            <div
              className="w-32 h-32 rounded-full border-2 border-[#7B2FBF]/60 flex items-center justify-center"
              style={{
                background: "radial-gradient(circle at center, #7B2FBF20 0%, transparent 70%)",
                animation: "breathe 8s ease-in-out infinite",
              }}
            >
              <div
                className="w-24 h-24 rounded-full border border-[#E91E8C]/30 flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at center, #E91E8C15 0%, transparent 70%)",
                  animation: "breathe 8s ease-in-out infinite 0.3s",
                }}
              >
                <div className="text-center">
                  <p className="text-lg font-light text-white/90">Inspira...</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#E91E8C] to-[#7B2FBF] bg-clip-text text-transparent">
                    4s
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase indicators */}
          <div className="flex gap-3 mt-2">
            {[
              { label: "Inspira", sec: "4s", active: true },
              { label: "Segura", sec: "7s", active: false },
              { label: "Expira", sec: "8s", active: false },
            ].map((p) => (
              <div
                key={p.label}
                className="px-3 py-1.5 rounded-full text-center"
                style={{
                  backgroundColor: p.active ? "#7B2FBF30" : "rgba(255,255,255,0.05)",
                  borderWidth: 1,
                  borderColor: p.active ? "#7B2FBF60" : "rgba(255,255,255,0.05)",
                }}
              >
                <p className="text-[9px] font-medium" style={{ color: p.active ? "#E91E8C" : "rgba(255,255,255,0.4)" }}>
                  {p.label}
                </p>
                <p className="text-[10px] font-bold" style={{ color: p.active ? "#ffffff" : "rgba(255,255,255,0.3)" }}>
                  {p.sec}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technique selector */}
        <div className="w-full flex gap-1.5 mb-1">
          {["4-7-8", "5-4-3-2-1"].map((t, i) => (
            <div
              key={t}
              className="flex-1 text-center py-1.5 rounded-lg text-[10px] font-medium"
              style={{
                backgroundColor: i === 0 ? "#7B2FBF25" : "rgba(255,255,255,0.05)",
                color: i === 0 ? "#00D4FF" : "rgba(255,255,255,0.4)",
                borderWidth: 1,
                borderColor: i === 0 ? "#7B2FBF40" : "transparent",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="w-full rounded-xl bg-gradient-to-r from-[#E91E8C]/10 to-[#7B2FBF]/10 border border-white/5 p-3 text-center">
          <p className="text-xs text-white/80 font-medium">Estou aqui contigo 💜</p>
        </div>
      </div>

      {/* Breathing keyframes injected via style tag */}
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(0.92); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

/* ─── feature data ─── */

interface Feature {
  badge: string
  title: string
  description: string
  screen: React.ReactNode
  accent: string
}

const features: Feature[] = [
  {
    badge: "Feature principal",
    title: "Fala. A IA ouve, compreende e reflete.",
    description:
      "Fala 2 a 5 minutos por dia. O Mirror transcreve, detecta emoções e padrões, e devolve-te insights personalizados. É o espelho que dá nome à app.",
    screen: <VoiceDiaryScreen />,
    accent: "#E91E8C",
  },
  {
    badge: "Visualização",
    title: "Vê os teus padrões. Compreende-te melhor.",
    description:
      "Um mapa visual das tuas emoções ao longo do tempo. Identifica padrões como 'às terças estás mais ansioso' ou 'depois de exercício o humor melhora 40%.'",
    screen: <EmotionalTimelineScreen />,
    accent: "#7B2FBF",
  },
  {
    badge: "Gamificação",
    title: "O teu bem-estar, num número.",
    description:
      "Um score de 0 a 100 calculado com base nas tuas entradas, sentimentos e consistência. Simples, gamificado e comparável ao longo do tempo.",
    screen: <MirrorScoreScreen />,
    accent: "#00D4FF",
  },
  {
    badge: "Suporte 24/7",
    title: "Nos momentos difíceis, estamos aqui.",
    description:
      "Um botão de acesso rápido para momentos de crise. Conversa guiada com técnicas de grounding — respiração 4-7-8, exercício sensorial 5-4-3-2-1. Empática, nunca clínica.",
    screen: <EmergencyModeScreen />,
    accent: "#E91E8C",
  },
]

/* ─── progress dots ─── */

function ProgressDots({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex lg:flex-col gap-3 items-center mb-6 lg:mb-0 lg:mr-8">
      {features.map((_, i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full transition-all duration-500"
          style={{
            background:
              i === activeIndex
                ? "linear-gradient(135deg, #E91E8C, #7B2FBF, #00D4FF)"
                : "rgba(255,255,255,0.15)",
            transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
            boxShadow:
              i === activeIndex
                ? "0 0 12px rgba(233, 30, 140, 0.4)"
                : "none",
          }}
        />
      ))}
    </div>
  )
}

/* ─── main export ─── */

export function FeaturesSection() {
  const { containerRef, progress } = useScrollProgress()

  // Determine active feature index
  const activeIndex = Math.min(3, Math.floor(progress * 4))

  return (
    <section ref={containerRef} className="relative" style={{ height: "400vh" }}>
      {/* Section heading */}
      <div className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <ScrollReveal animation="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Conhece o </span>
            <span className="bg-gradient-to-r from-[#E91E8C] via-[#7B2FBF] to-[#00D4FF] bg-clip-text text-transparent">
              Mirror
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Navega pelas funcionalidades do MVP enquanto fazes scroll.
          </p>
        </ScrollReveal>
      </div>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background glow based on active feature */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{ opacity: 0.15 }}
        >
          <div
            className="absolute top-1/4 -right-40 w-80 h-80 rounded-full blur-[120px] transition-colors duration-700"
            style={{ backgroundColor: features[activeIndex].accent }}
          />
          <div
            className="absolute bottom-1/4 -left-40 w-60 h-60 rounded-full blur-[100px] transition-colors duration-700"
            style={{ backgroundColor: features[activeIndex === 0 ? 2 : activeIndex - 1]?.accent || "#7B2FBF" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left side: progress dots + text */}
            <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start">
              <ProgressDots activeIndex={activeIndex} />

              {/* Stacked text layers */}
              <div className="relative w-full max-w-xl min-h-[280px]">
                {features.map((feature, i) => {
                  const opacity = getFeatureOpacity(progress, i)
                  return (
                    <div
                      key={i}
                      className="absolute inset-0 flex flex-col justify-center transition-opacity duration-100 text-center lg:text-left"
                      style={{
                        opacity,
                        pointerEvents: opacity > 0.5 ? "auto" : "none",
                      }}
                    >
                      <Badge accent={feature.accent}>{feature.badge}</Badge>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-4 lg:mb-6">
                        <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                          {feature.title}
                        </span>
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right side: phone mockup with cross-fading screens */}
            <div className="flex-1 flex justify-center">
              <PhoneMockup>
                <div className="relative w-full h-full">
                  {features.map((feature, i) => {
                    const opacity = getFeatureOpacity(progress, i)
                    return (
                      <div
                        key={i}
                        className="absolute inset-0 transition-opacity duration-100"
                        style={{
                          opacity,
                          pointerEvents: opacity > 0.5 ? "auto" : "none",
                        }}
                      >
                        {feature.screen}
                      </div>
                    )
                  })}
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
