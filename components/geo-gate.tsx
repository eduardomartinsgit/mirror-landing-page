"use client"

import { useEffect, useState } from "react"
import { GeoBlock } from "@/components/geo-block"

export function GeoGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "allowed" | "blocked">("loading")

  useEffect(() => {
    const timeout = setTimeout(() => {
      // If API takes more than 3s, allow access
      setStatus((prev) => (prev === "loading" ? "allowed" : prev))
    }, 3000)

    fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) })
      .then((res) => res.json())
      .then((data) => {
        clearTimeout(timeout)
        setStatus(data.country === "PT" ? "allowed" : "blocked")
      })
      .catch(() => {
        clearTimeout(timeout)
        setStatus("allowed")
      })

    return () => clearTimeout(timeout)
  }, [])

  // Show children while loading (don't flash empty screen)
  if (status === "loading") {
    return <>{children}</>
  }

  if (status === "blocked") {
    return <GeoBlock />
  }

  return <>{children}</>
}
