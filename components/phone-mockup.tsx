import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

interface PhoneMockupProps {
  children: ReactNode
  className?: string
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[260px] aspect-[9/19]", className)} role="img" aria-label="Simulação da aplicação Mirror">
      {/* Outer glow */}
      <div className="absolute -inset-2 rounded-[3rem] bg-gradient-to-b from-[#E91E8C]/30 to-[#00D4FF]/30 blur-xl opacity-60" />

      {/* Phone body */}
      <div className="relative w-full h-full rounded-[2.5rem] border-2 border-white/10 bg-[#0D0B14] overflow-hidden shadow-2xl">
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />

        {/* Screen content */}
        <div className="w-full h-full pt-12 pb-4 px-4 overflow-hidden">
          {children}
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  )
}
