"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalScroll = container.scrollHeight - windowHeight

      // How far the top of the container has scrolled past the top of the viewport
      const scrolled = -rect.top

      // Clamp between 0 and 1
      const p = Math.max(0, Math.min(1, scrolled / totalScroll))
      setProgress(p)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return { containerRef, progress }
}
