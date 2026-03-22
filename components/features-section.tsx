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
    <div className="flex flex-col h-full gap-2 text-white overflow-hidden" role="img" aria-label="Simulação do ecrã do Mirror">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <p className="text-sm font-semibold">Diário de Voz</p>
          <p className="text-xs text-white/60">Terça, 18 Mar 2026</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#7B2FBF] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M12 1v14M19 10a7 7 0 01-14 0M12 19v4M8 23h8" />
          </svg>
        </div>
      </div>

      {/* Waveform */}
      <div className="flex-1 flex flex-col items-center justify-center gap-2 min-h-0">
        <svg viewBox="0 0 240 60" className="w-full shrink" aria-hidden="true">
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
        <p className="text-xl font-mono font-bold tracking-wider bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] bg-clip-text text-transparent shrink-0">
          2:34
        </p>

        {/* Recording button */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#7B2FBF] flex items-center justify-center shadow-lg shadow-[#E91E8C]/30 shrink-0">
          <div className="w-4 h-4 rounded-sm bg-white" />
        </div>
      </div>

      {/* Emotions detected */}
      <div className="shrink-0">
        <p className="text-[10px] text-white/60 mb-1">Emoções detectadas</p>
        <div className="flex gap-1.5 flex-wrap">
          {[
            { label: "Ansiedade", color: "#E91E8C" },
            { label: "Esperança", color: "#00D4FF" },
            { label: "Calma", color: "#7B2FBF" },
          ].map((e) => (
            <span
              key={e.label}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
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
          <p className="text-xs text-white/70 leading-relaxed">
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
    <div className="flex flex-col h-full gap-3 text-white" role="img" aria-label="Simulação do ecrã do Mirror">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold">Timeline Emocional</p>
        <p className="text-xs text-white/60">Última semana</p>
      </div>

      {/* Chart */}
      <div className="flex-1 flex flex-col justify-center">
        <svg viewBox="0 0 248 80" className="w-full" aria-hidden="true">
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
            <span key={d} className="text-[11px] text-white/60">{d}</span>
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
            <span className="text-[11px] text-white/70">{e.label}</span>
          </div>
        ))}
      </div>

      {/* Insight card */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
        <div className="flex items-start gap-2">
          <span className="text-sm mt-0.5">📊</span>
          <p className="text-xs text-white/70 leading-relaxed">
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
            <p className="text-[11px] text-white/60">{s.label}</p>
            <p className="text-xs font-semibold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MirrorScoreScreen() {
  const circumference = 2 * Math.PI * 45
  const progress = (78 / 100) * circumference
  const weekBars = [60, 72, 68, 74, 70, 75, 78]
  const barDays = ["S", "T", "Q", "Q", "S", "S", "D"]

  return (
    <div className="flex flex-col h-full gap-2 text-white" role="img" aria-label="Simulação do ecrã do Mirror">
      {/* Header */}
      <div className="w-full shrink-0">
        <p className="text-sm font-semibold text-center">Mirror Score&trade;</p>
        <p className="text-xs text-white/60 text-center">O teu índice de bem-estar</p>
      </div>

      {/* Gauge */}
      <div className="relative flex items-center justify-center shrink-0 mx-auto" style={{ width: 120, height: 120 }}>
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E91E8C" />
              <stop offset="50%" stopColor="#7B2FBF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="7" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gaugeGrad)" strokeWidth="7" strokeLinecap="round" strokeDasharray={`${progress} ${circumference}`} transform="rotate(-90 50 50)" />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-bold bg-gradient-to-br from-[#E91E8C] via-[#7B2FBF] to-[#00D4FF] bg-clip-text text-transparent">78</span>
          <span className="text-[10px] text-white/60 -mt-0.5">de 100</span>
        </div>
      </div>

      {/* Trend */}
      <div className="flex items-center gap-3 justify-center shrink-0">
        <div className="flex items-center gap-1 text-[#00D4FF]">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M18 15l-6-6-6 6" /></svg>
          <span className="text-[11px] font-semibold">+5 esta semana</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs">🔥</span>
          <span className="text-[11px] font-medium text-white/70">12 dias seguidos</span>
        </div>
      </div>

      {/* Weekly bars */}
      <div className="w-full flex-1 min-h-0 flex flex-col justify-center">
        <p className="text-[10px] text-white/60 mb-1">Últimos 7 dias</p>
        <div className="flex items-end justify-between gap-1 h-12">
          {weekBars.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div className="w-full rounded-t-sm" style={{ height: `${(v / 100) * 40}px`, background: i === 6 ? "linear-gradient(to top, #E91E8C, #00D4FF)" : "rgba(255,255,255,0.08)" }} />
              <span className="text-[9px] text-white/50">{barDays[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="w-full flex gap-1.5 shrink-0">
        {[
          { label: "Média", value: "72", color: "#7B2FBF" },
          { label: "Recorde", value: "85", color: "#00D4FF" },
          { label: "Consist.", value: "94%", color: "#E91E8C" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-lg bg-white/5 p-1.5 text-center">
            <p className="text-[9px] text-white/60">{s.label}</p>
            <p className="text-[11px] font-bold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmergencyModeScreen() {
  return (
    <div className="flex flex-col h-full text-white items-center relative" role="img" aria-label="Simulação do ecrã do Mirror">
      {/* Calming gradient background */}
      <div className="absolute inset-0 -m-4 bg-gradient-to-b from-[#7B2FBF]/30 via-[#0D0B14] to-[#0D0B14]" />

      <div className="relative flex flex-col h-full items-center gap-3 w-full">
        {/* Header */}
        <div className="flex items-center gap-2 w-full">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#E91E8C" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p className="text-sm font-semibold">Modo Desabafar</p>
        </div>

        <p className="text-xs text-white/60 w-full">Exercício de respiração guiada</p>

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
              className="w-28 h-28 rounded-full border-2 border-[#7B2FBF]/60 flex items-center justify-center"
              style={{
                background: "radial-gradient(circle at center, #7B2FBF20 0%, transparent 70%)",
                animation: "breathe 8s ease-in-out infinite",
              }}
            >
              <div
                className="w-20 h-20 rounded-full border border-[#E91E8C]/30 flex items-center justify-center"
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
                  backgroundColor: p.active ? "#7B2FBF30" : "rgba(255,255,255,0.08)",
                  borderWidth: 1,
                  borderColor: p.active ? "#7B2FBF60" : "rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-[11px] font-medium" style={{ color: p.active ? "#E91E8C" : "rgba(255,255,255,0.6)" }}>
                  {p.label}
                </p>
                <p className="text-xs font-bold" style={{ color: p.active ? "#ffffff" : "rgba(255,255,255,0.6)" }}>
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
              className="flex-1 text-center py-1.5 rounded-lg text-xs font-medium"
              style={{
                backgroundColor: i === 0 ? "#7B2FBF25" : "rgba(255,255,255,0.08)",
                color: i === 0 ? "#00D4FF" : "rgba(255,255,255,0.6)",
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
    badge: "O essencial",
    title: "Fala. O Mirror ouve.",
    description:
      "Gravas a tua voz, a IA percebe o que sentes e devolve-te reflexões úteis.",
    screen: <VoiceDiaryScreen />,
    accent: "#E91E8C",
  },
  {
    badge: "Os teus padrões",
    title: "Vê como te sentes ao longo do tempo.",
    description:
      "As tuas emoções num gráfico. Vê padrões que não notavas.",
    screen: <EmotionalTimelineScreen />,
    accent: "#7B2FBF",
  },
  {
    badge: "O teu score",
    title: "O teu bem-estar, num número.",
    description:
      "De 0 a 100, vê como estás e acompanha a tua evolução.",
    screen: <MirrorScoreScreen />,
    accent: "#00D4FF",
  },
  {
    badge: "Para os dias difíceis",
    title: "Quando precisas, estamos cá.",
    description:
      "Exercícios de respiração e técnicas para acalmar. Sem julgamento.",
    screen: <EmergencyModeScreen />,
    accent: "#E91E8C",
  },
]

/* ─── progress dots ─── */

function ProgressDots({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex gap-2.5 items-center justify-center lg:flex-col lg:gap-3 lg:mr-8" role="tablist" aria-label="Funcionalidades do Mirror">
      {features.map((feature, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={feature.badge}
          tabIndex={-1}
          className="w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-default"
          style={{
            background:
              i === activeIndex
                ? "linear-gradient(135deg, #E91E8C, #7B2FBF, #00D4FF)"
                : "rgba(255,255,255,0.15)",
            transform: i === activeIndex ? "scale(1.5)" : "scale(1)",
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
  const activeIndex = Math.min(3, Math.floor(progress * 4))

  return (
    <section ref={containerRef} className="relative" style={{ height: "400svh" }}>
      {/* Sticky container — full viewport, all devices */}
      <div className="sticky top-0 h-[100svh] flex flex-col overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.15 }}>
          <div
            className="absolute top-1/4 -right-20 lg:-right-40 w-60 lg:w-80 h-60 lg:h-80 rounded-full blur-[100px] lg:blur-[120px] transition-colors duration-700"
            style={{ backgroundColor: features[activeIndex].accent }}
          />
          <div
            className="absolute bottom-1/4 -left-20 lg:-left-40 w-48 lg:w-60 h-48 lg:h-60 rounded-full blur-[80px] lg:blur-[100px] transition-colors duration-700"
            style={{ backgroundColor: features[activeIndex === 0 ? 2 : activeIndex - 1]?.accent || "#7B2FBF" }}
          />
        </div>

        {/* Header area */}
        <div className="relative shrink-0 pt-20 lg:pt-24 pb-2 lg:pb-4 px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight mb-3">
            <span className="text-white">Conhece o </span>
            <span className="bg-gradient-to-r from-[#E91E8C] via-[#7B2FBF] to-[#00D4FF] bg-clip-text text-transparent">
              Mirror
            </span>
          </h2>
          <div className="lg:hidden">
            <ProgressDots activeIndex={activeIndex} />
          </div>
        </div>

        {/* Content area — fills remaining space */}
        <div className="relative flex-1 flex items-center min-h-0 px-5 sm:px-6 lg:px-8 pb-4 lg:pb-12">
          <div className="mx-auto max-w-7xl w-full">
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-16">
              {/* Text — order 2 on mobile (below phone), order 1 on desktop (left) */}
              <div className="order-2 lg:order-1 flex-1 w-full">
                {/* Desktop dots — inline with text */}
                <div className="hidden lg:flex items-center gap-6">
                  <ProgressDots activeIndex={activeIndex} />
                  <div className="relative flex-1 max-w-lg min-h-[240px]">
                    {features.map((feature, i) => {
                      const opacity = getFeatureOpacity(progress, i)
                      return (
                        <div
                          key={i}
                          className="absolute inset-0 flex flex-col justify-center text-left transition-opacity duration-150"
                          style={{ opacity, visibility: opacity < 0.1 ? "hidden" : "visible" }}
                          aria-hidden={opacity < 0.5}
                        >
                          <Badge accent={feature.accent}>{feature.badge}</Badge>
                          <h3 className="text-3xl xl:text-4xl font-bold leading-tight tracking-tight mb-4">
                            <span className="text-white">{feature.title}</span>
                          </h3>
                          <p className="text-base text-white/70 leading-relaxed max-w-md">{feature.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile text — centered, compact */}
                <div className="lg:hidden relative w-full min-h-[100px] px-2">
                  {features.map((feature, i) => {
                    const opacity = getFeatureOpacity(progress, i)
                    return (
                      <div
                        key={i}
                        className="absolute inset-0 flex flex-col justify-start text-center transition-opacity duration-150"
                        style={{ opacity, visibility: opacity < 0.1 ? "hidden" : "visible" }}
                        aria-hidden={opacity < 0.5}
                      >
                        <span className="inline-block mx-auto mb-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest rounded-full bg-white/5 border border-white/10" style={{ color: feature.accent }}>{feature.badge}</span>
                        <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight mb-1.5">
                          <span className="text-white">{feature.title}</span>
                        </h3>
                        <p className="text-sm text-white/70 leading-relaxed line-clamp-2">{feature.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Phone — ONE instance, order 1 on mobile (top), order 2 on desktop (right) */}
              <div className="order-1 lg:order-2 w-[42%] sm:w-[38%] lg:w-[280px] max-w-[170px] lg:max-w-[280px] shrink-0">
                <PhoneMockup>
                  <div className="relative w-full h-full">
                    {features.map((feature, i) => {
                      const opacity = getFeatureOpacity(progress, i)
                      return (
                        <div
                          key={i}
                          className="absolute inset-0 transition-opacity duration-150"
                          style={{ opacity, visibility: opacity < 0.1 ? "hidden" : "visible" }}
                          aria-hidden={opacity < 0.5}
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
      </div>
    </section>
  )
}
