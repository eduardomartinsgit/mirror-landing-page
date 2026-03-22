"use client"

import { useEffect, useState } from "react"
import { GeoBlock } from "@/components/geo-block"

export function GeoGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "allowed" | "blocked">("loading")

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        setStatus(data.country === "PT" ? "allowed" : "blocked")
      })
      .catch(() => {
        // On error, allow access (don't block users due to API failure)
        setStatus("allowed")
      })
  }, [])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#E91E8C] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (status === "blocked") {
    return <GeoBlock />
  }

  return <>{children}</>
}
