import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E91E8C" />
            <stop offset="1" stopColor="#00D4FF" />
          </linearGradient>
          <linearGradient id="waveGradient" x1="8" y1="20" x2="32" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Circle background */}
        <circle cx="20" cy="20" r="19" stroke="url(#logoGradient)" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="17" fill="url(#logoGradient)" fillOpacity="0.12" />
        {/* M waveform - a voice/heartbeat wave that forms an M shape */}
        <path
          d="M8 24 L12 24 L15 12 L20 28 L25 12 L28 24 L32 24"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Small dot accent */}
        <circle cx="32" cy="24" r="2" fill="url(#logoGradient)" />
      </svg>

      {showText && (
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] bg-clip-text text-transparent">
          mirror
        </span>
      )}
    </div>
  )
}
