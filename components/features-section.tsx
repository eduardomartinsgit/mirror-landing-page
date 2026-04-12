"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { PhoneMockup } from "@/components/phone-mockup"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useEffect, useState } from "react"
import { Mic, BarChart3, Gauge, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

/* --- helpers --- */

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

/* --- phone screen mockups --- */

function VoiceDiaryScreen() {
  const { t, ta } = useLanguage()
  const emotions = ta<string>("features.screens.voiceDiary.emotions")
  const emotionColors = ["#E91E8C", "#00D4FF", "#7B2FBF"]
  const barHeights = [18, 32, 24, 40, 28, 36, 20, 44, 30, 22, 38, 26, 42, 16, 34, 28, 46, 20, 36, 30, 24, 40, 18, 32, 44, 22, 38, 34, 26, 42]

  return (
    <div className="flex flex-col h-full gap-2 text-white overflow-hidden" role="img" aria-label={t("features.screens.ariaLabel")}>
      <div className="flex items-center justify-between shrink-0">
        <div>
          <p className="text-sm font-semibold">{t("features.screens.voiceDiary.title")}</p>
          <p className="text-xs text-white/60">{t("features.screens.voiceDiary.date")}</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#7B2FBF] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M12 1v14M19 10a7 7 0 01-14 0M12 19v4M8 23h8" />
          </svg>
        </div>
      </div>

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
            <rect key={i} x={i * 8 + 1} y={30 - h / 2} width={4} height={h} rx={2} fill="url(#waveGrad)" opacity={i < 18 ? 1 : 0.3} />
          ))}
        </svg>
        <p className="text-xl font-mono font-bold tracking-wider bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] bg-clip-text text-transparent shrink-0">2:34</p>
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#7B2FBF] flex items-center justify-center shadow-lg shadow-[#E91E8C]/30 shrink-0">
          <div className="w-4 h-4 rounded-sm bg-white" />
        </div>
      </div>

      <div className="shrink-0">
        <p className="text-[10px] text-white/60 mb-1">{t("features.screens.voiceDiary.emotionsDetected")}</p>
        <div className="flex gap-1.5 flex-wrap">
          {emotions.map((label, i) => (
            <span key={i} className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: emotionColors[i] + "20", color: emotionColors[i] }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
        <div className="flex items-start gap-2">
          <span className="text-sm mt-0.5">&#128161;</span>
          <p className="text-xs text-white/70 leading-relaxed">
            <span className="text-white/90 font-medium">{t("features.screens.voiceDiary.patternLabel")}</span> {t("features.screens.voiceDiary.patternText")}
          </p>
        </div>
      </div>
    </div>
  )
}

function EmotionalTimelineScreen() {
  const { t, ta } = useLanguage()
  const days = ta<string>("features.screens.timeline.days")
  const emotions = ta<string>("features.screens.timeline.emotions")
  const emotionColors = ["#00D4FF", "#E91E8C", "#7B2FBF"]

  const points = [
    { x: 10, y: 55 }, { x: 48, y: 30 }, { x: 86, y: 42 }, { x: 124, y: 18 },
    { x: 162, y: 35 }, { x: 200, y: 22 }, { x: 238, y: 28 },
  ]
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ")

  return (
    <div className="flex flex-col h-full gap-3 text-white" role="img" aria-label={t("features.screens.ariaLabel")}>
      <div>
        <p className="text-sm font-semibold">{t("features.screens.timeline.title")}</p>
        <p className="text-xs text-white/60">{t("features.screens.timeline.period")}</p>
      </div>

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
          <path d={`${pathD} L238,75 L10,75 Z`} fill="url(#areaGrad)" />
          {[20, 40, 60].map((y) => (
            <line key={y} x1="10" y1={y} x2="238" y2={y} stroke="white" strokeOpacity="0.05" />
          ))}
          <path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="5" fill="#0D0B14" />
              <circle cx={p.x} cy={p.y} r="3.5" fill={i === 3 ? "#00D4FF" : "url(#lineGrad)"} />
            </g>
          ))}
        </svg>
        <div className="flex justify-between px-1 mt-1">
          {days.map((d, i) => (
            <span key={i} className="text-[11px] text-white/60">{d}</span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        {emotions.map((label, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: emotionColors[i] }} />
            <span className="text-[11px] text-white/70">{label}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
        <div className="flex items-start gap-2">
          <span className="text-sm mt-0.5">&#128202;</span>
          <p className="text-xs text-white/70 leading-relaxed">
            <span className="text-white/90 font-medium">{t("features.screens.timeline.insightLabel")}</span> {t("features.screens.timeline.insightText")}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        {[
          { label: t("features.screens.timeline.bestDay"), value: t("features.screens.timeline.bestDayValue"), color: "#00D4FF" },
          { label: t("features.screens.timeline.mostFrequent"), value: t("features.screens.timeline.mostFrequentValue"), color: "#7B2FBF" },
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
  const { t, ta } = useLanguage()
  const barDays = ta<string>("features.screens.mirrorScore.barDays")
  const stats = ta<{ label: string; value: string }>("features.screens.mirrorScore.stats")
  const statsColors = ["#7B2FBF", "#00D4FF", "#E91E8C"]

  const circumference = 2 * Math.PI * 45
  const progress = (78 / 100) * circumference
  const weekBars = [60, 72, 68, 74, 70, 75, 78]

  return (
    <div className="flex flex-col h-full gap-2 text-white" role="img" aria-label={t("features.screens.ariaLabel")}>
      <div className="w-full shrink-0">
        <p className="text-sm font-semibold text-center">{t("features.screens.mirrorScore.title")}</p>
        <p className="text-xs text-white/60 text-center">{t("features.screens.mirrorScore.subtitle")}</p>
      </div>

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
          <span className="text-[10px] text-white/60 -mt-0.5">{t("features.screens.mirrorScore.of100")}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 justify-center shrink-0">
        <div className="flex items-center gap-1 text-[#00D4FF]">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M18 15l-6-6-6 6" /></svg>
          <span className="text-[11px] font-semibold">{t("features.screens.mirrorScore.thisWeek")}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs">&#128293;</span>
          <span className="text-[11px] font-medium text-white/70">{t("features.screens.mirrorScore.streak")}</span>
        </div>
      </div>

      <div className="w-full flex-1 min-h-0 flex flex-col justify-center">
        <p className="text-[10px] text-white/60 mb-1">{t("features.screens.mirrorScore.last7Days")}</p>
        <div className="flex items-end justify-between gap-1 h-12">
          {weekBars.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div className="w-full rounded-t-sm" style={{ height: `${(v / 100) * 40}px`, background: i === 6 ? "linear-gradient(to top, #E91E8C, #00D4FF)" : "rgba(255,255,255,0.08)" }} />
              <span className="text-[9px] text-white/50">{barDays[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex gap-1.5 shrink-0">
        {stats.map((s, i) => (
          <div key={i} className="flex-1 rounded-lg bg-white/5 p-1.5 text-center">
            <p className="text-[9px] text-white/60">{s.label}</p>
            <p className="text-[11px] font-bold" style={{ color: statsColors[i] }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmergencyModeScreen() {
  const { t, ta } = useLanguage()
  const phases = ta<{ label: string; sec: string }>("features.screens.emergency.phases")

  return (
    <div className="flex flex-col h-full text-white items-center relative" role="img" aria-label={t("features.screens.ariaLabel")}>
      <div className="absolute inset-0 -m-4 bg-gradient-to-b from-[#7B2FBF]/30 via-[#0D0B14] to-[#0D0B14]" />

      <div className="relative flex flex-col h-full items-center gap-3 w-full">
        <div className="flex items-center gap-2 w-full">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#E91E8C" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p className="text-sm font-semibold">{t("features.screens.emergency.title")}</p>
        </div>

        <p className="text-xs text-white/60 w-full">{t("features.screens.emergency.subtitle")}</p>

        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl opacity-40" style={{ background: "radial-gradient(circle, #7B2FBF 0%, transparent 70%)", margin: "-20px" }} />
            <div className="w-28 h-28 rounded-full border-2 border-[#7B2FBF]/60 flex items-center justify-center" style={{ background: "radial-gradient(circle at center, #7B2FBF20 0%, transparent 70%)", animation: "breathe 8s ease-in-out infinite" }}>
              <div className="w-20 h-20 rounded-full border border-[#E91E8C]/30 flex items-center justify-center" style={{ background: "radial-gradient(circle at center, #E91E8C15 0%, transparent 70%)", animation: "breathe 8s ease-in-out infinite 0.3s" }}>
                <div className="text-center">
                  <p className="text-lg font-light text-white/90">{t("features.screens.emergency.breatheIn")}</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#E91E8C] to-[#7B2FBF] bg-clip-text text-transparent">4s</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            {phases.map((p, i) => (
              <div
                key={i}
                className="px-3 py-1.5 rounded-full text-center"
                style={{
                  backgroundColor: i === 0 ? "#7B2FBF30" : "rgba(255,255,255,0.08)",
                  borderWidth: 1,
                  borderColor: i === 0 ? "#7B2FBF60" : "rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-[11px] font-medium" style={{ color: i === 0 ? "#E91E8C" : "rgba(255,255,255,0.6)" }}>{p.label}</p>
                <p className="text-xs font-bold" style={{ color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.6)" }}>{p.sec}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex gap-1.5 mb-1">
          {["4-7-8", "5-4-3-2-1"].map((technique, i) => (
            <div
              key={technique}
              className="flex-1 text-center py-1.5 rounded-lg text-xs font-medium"
              style={{
                backgroundColor: i === 0 ? "#7B2FBF25" : "rgba(255,255,255,0.08)",
                color: i === 0 ? "#00D4FF" : "rgba(255,255,255,0.6)",
                borderWidth: 1,
                borderColor: i === 0 ? "#7B2FBF40" : "transparent",
              }}
            >
              {technique}
            </div>
          ))}
        </div>

        <div className="w-full rounded-xl bg-gradient-to-r from-[#E91E8C]/10 to-[#7B2FBF]/10 border border-white/5 p-3 text-center">
          <p className="text-xs text-white/80 font-medium">{t("features.screens.emergency.supportMessage")}</p>
        </div>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(0.92); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

/* --- feature data --- */

interface FeatureItem {
  badge: string
  title: string
  description: string
}

function useIsLandscape() {
  const [isLandscape, setIsLandscape] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(orientation: landscape) and (max-height: 500px)")
    const update = () => setIsLandscape(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  return isLandscape
}

const featureIcons = [Mic, BarChart3, Gauge, HeartHandshake]
const featureAccents = ["#E91E8C", "#7B2FBF", "#00D4FF", "#E91E8C"]
const featureScreens = [
  <VoiceDiaryScreen key="voice" />,
  <EmotionalTimelineScreen key="timeline" />,
  <MirrorScoreScreen key="score" />,
  <EmergencyModeScreen key="emergency" />,
]

/* --- progress dots --- */

function ProgressDots({ activeIndex, items }: { activeIndex: number; items: FeatureItem[] }) {
  const { t } = useLanguage()

  return (
    <div className="flex gap-2.5 items-center justify-center lg:flex-col lg:gap-3 lg:mr-8" role="tablist" aria-label={t("features.ariaLabel")}>
      {items.map((item, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={item.badge}
          tabIndex={-1}
          className="w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-default"
          style={{
            background: i === activeIndex ? "linear-gradient(135deg, #E91E8C, #7B2FBF, #00D4FF)" : "rgba(255,255,255,0.15)",
            transform: i === activeIndex ? "scale(1.5)" : "scale(1)",
            boxShadow: i === activeIndex ? "0 0 12px rgba(233, 30, 140, 0.4)" : "none",
          }}
        />
      ))}
    </div>
  )
}

/* --- landscape feature card --- */

function LandscapeFeatureCard({ item, accent, icon: Icon, opacity }: { item: FeatureItem; accent: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; opacity: number }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-opacity duration-150"
      style={{ opacity, visibility: opacity < 0.1 ? "hidden" : "visible" }}
      aria-hidden={opacity < 0.5}
    >
      <div className="flex items-center gap-5 max-w-xl w-full px-6">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${accent}30, ${accent}10)` }}>
          <Icon className="w-8 h-8" style={{ color: accent }} />
        </div>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: accent }}>{item.badge}</span>
          <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
          <p className="text-sm text-white/70 leading-relaxed mt-1">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

/* --- main export --- */

export function FeaturesSection() {
  const { containerRef, progress } = useScrollProgress()
  const { t, ta } = useLanguage()
  const items = ta<FeatureItem>("features.items")
  const activeIndex = Math.min(3, Math.floor(progress * 4))
  const isLandscape = useIsLandscape()

  return (
    <section ref={containerRef} className="relative" style={{ height: "400svh" }}>
      <div className="sticky top-0 h-[100svh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.15 }}>
          <div className="absolute top-1/4 -right-20 lg:-right-40 w-60 lg:w-80 h-60 lg:h-80 rounded-full blur-[100px] lg:blur-[120px] transition-colors duration-700" style={{ backgroundColor: featureAccents[activeIndex] }} />
          <div className="absolute bottom-1/4 -left-20 lg:-left-40 w-48 lg:w-60 h-48 lg:h-60 rounded-full blur-[80px] lg:blur-[100px] transition-colors duration-700" style={{ backgroundColor: featureAccents[activeIndex === 0 ? 2 : activeIndex - 1] || "#7B2FBF" }} />
        </div>

        <div className="relative shrink-0 pt-20 lg:pt-24 pb-2 lg:pb-4 px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight mb-3">
            <span className="text-white">{t("features.sectionTitleBefore")}</span>
            <span className="bg-gradient-to-r from-[#E91E8C] via-[#7B2FBF] to-[#00D4FF] bg-clip-text text-transparent">
              {t("features.sectionTitleHighlight")}
            </span>
          </h2>
          <ProgressDots activeIndex={activeIndex} items={items} />
        </div>

        <div className="relative flex-1 flex items-center min-h-0 px-5 sm:px-6 lg:px-8 pb-4 lg:pb-12">
          <div className="mx-auto max-w-7xl w-full h-full">

            {isLandscape && (
              <div className="relative w-full h-full">
                {items.map((item, i) => (
                  <LandscapeFeatureCard key={i} item={item} accent={featureAccents[i]} icon={featureIcons[i]} opacity={getFeatureOpacity(progress, i)} />
                ))}
              </div>
            )}

            {!isLandscape && (
              <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-16">
                <div className="order-2 lg:order-1 flex-1 w-full">
                  <div className="hidden lg:flex items-center gap-6">
                    <div className="relative flex-1 max-w-lg min-h-[240px]">
                      {items.map((item, i) => {
                        const opacity = getFeatureOpacity(progress, i)
                        return (
                          <div key={i} className="absolute inset-0 flex flex-col justify-center text-left transition-opacity duration-150" style={{ opacity, visibility: opacity < 0.1 ? "hidden" : "visible" }} aria-hidden={opacity < 0.5}>
                            <Badge accent={featureAccents[i]}>{item.badge}</Badge>
                            <h3 className="text-3xl xl:text-4xl font-bold leading-tight tracking-tight mb-4">
                              <span className="text-white">{item.title}</span>
                            </h3>
                            <p className="text-base text-white/70 leading-relaxed max-w-md">{item.description}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="lg:hidden relative w-full min-h-[100px] px-2">
                    {items.map((item, i) => {
                      const opacity = getFeatureOpacity(progress, i)
                      return (
                        <div key={i} className="absolute inset-0 flex flex-col justify-start text-center transition-opacity duration-150" style={{ opacity, visibility: opacity < 0.1 ? "hidden" : "visible" }} aria-hidden={opacity < 0.5}>
                          <span className="inline-block mx-auto mb-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest rounded-full bg-white/5 border border-white/10" style={{ color: featureAccents[i] }}>{item.badge}</span>
                          <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight mb-1.5">
                            <span className="text-white">{item.title}</span>
                          </h3>
                          <p className="text-sm text-white/70 leading-relaxed line-clamp-2">{item.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="order-1 lg:order-2 w-[42%] sm:w-[38%] lg:w-[280px] max-w-[170px] lg:max-w-[280px] shrink-0">
                  <PhoneMockup>
                    <div className="relative w-full h-full">
                      {featureScreens.map((screen, i) => {
                        const opacity = getFeatureOpacity(progress, i)
                        return (
                          <div key={i} className="absolute inset-0 transition-opacity duration-150" style={{ opacity, visibility: opacity < 0.1 ? "hidden" : "visible" }} aria-hidden={opacity < 0.5}>
                            {screen}
                          </div>
                        )
                      })}
                    </div>
                  </PhoneMockup>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
