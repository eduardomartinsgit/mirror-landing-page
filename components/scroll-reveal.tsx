"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade"
  delay?: number
  duration?: number
  threshold?: number
}

const animations = {
  "fade-up": { hidden: "translate3d(0, 60px, 0)", visible: "translate3d(0, 0, 0)" },
  "fade-down": { hidden: "translate3d(0, -60px, 0)", visible: "translate3d(0, 0, 0)" },
  "fade-left": { hidden: "translate3d(-60px, 0, 0)", visible: "translate3d(0, 0, 0)" },
  "fade-right": { hidden: "translate3d(60px, 0, 0)", visible: "translate3d(0, 0, 0)" },
  "zoom-in": { hidden: "scale(0.85)", visible: "scale(1)" },
  "fade": { hidden: "none", visible: "none" },
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold })
  const anim = animations[animation]

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? anim.visible : anim.hidden,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
