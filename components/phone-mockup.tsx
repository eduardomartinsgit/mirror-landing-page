"use client"

import { cn } from "@/lib/utils"
import { type ReactNode, useRef, useEffect, useState } from "react"

interface PhoneMockupProps {
  children: ReactNode
  className?: string
}

// Fixed internal design size — all screen content is authored at this size
const PHONE_W = 280
const PHONE_H = 560

/**
 * Renders a phone frame at fixed internal dimensions and scales it
 * to fit the container. Content always looks proportional and realistic.
 */
export function PhoneMockup({ children, className }: PhoneMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateScale = () => {
      const parentWidth = container.clientWidth
      const s = Math.min(1, parentWidth / PHONE_W)
      setScale(s)
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto w-full", className)}
      style={{
        maxWidth: PHONE_W,
        height: PHONE_H * scale,
      }}
      role="img"
      aria-label="Simulação da aplicação Mirror"
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-[3rem] bg-gradient-to-b from-[#E91E8C]/20 to-[#00D4FF]/20 blur-xl opacity-50 pointer-events-none"
        style={{
          top: -8 * scale,
          left: -8 * scale,
          right: -8 * scale,
          bottom: -8 * scale,
        }}
      />

      {/* Phone body — fixed size, transformed to fit */}
      <div
        className="absolute top-0 left-0 origin-top-left rounded-[2.5rem] border-2 border-white/10 bg-[#0D0B14] overflow-hidden shadow-2xl"
        style={{
          width: PHONE_W,
          height: PHONE_H,
          transform: `scale(${scale})`,
        }}
      >
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />

        {/* Screen content — always renders at 280×560 internal space */}
        <div className="w-full h-full pt-12 pb-4 px-4 overflow-hidden">
          {children}
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  )
}
