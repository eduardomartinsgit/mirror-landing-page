"use client"

import { createContext, useContext, useState, useCallback, useEffect } from "react"
import ptBR from "./pt-BR"
import ptPT from "./pt-PT"
import enUS from "./en-US"

type Language = "pt-BR" | "pt-PT" | "en-US"

const translations: Record<Language, Record<string, unknown>> = {
  "pt-BR": ptBR,
  "pt-PT": ptPT,
  "en-US": enUS,
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  ta: <T = unknown>(key: string) => T[]
  to: <T = unknown>(key: string) => T
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function resolve(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt-BR")

  useEffect(() => {
    const saved = localStorage.getItem("mirror-lang") as Language | null
    if (saved && translations[saved]) {
      setLanguageState(saved)
      return
    }
    // Sem preferencia salva: idioma pelo pais. Brasil -> pt-BR; fora do
    // Brasil -> pt-PT. Ingles (en-US) so por escolha manual no seletor.
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 3000)
    fetch("https://ipapi.co/json/", { signal: ctrl.signal })
      .then((r) => r.json())
      .then((d) => setLanguageState(d?.country === "BR" ? "pt-BR" : "pt-PT"))
      .catch(() => {})
      .finally(() => clearTimeout(timer))
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("mirror-lang", lang)
    document.documentElement.lang = lang
  }, [])

  // t() returns a string (for simple text labels)
  const t = useCallback(
    (key: string): string => {
      const value = resolve(translations[language], key)
      if (typeof value === "string") return value
      return key
    },
    [language],
  )

  // ta() returns an array (for lists like FAQ items, plans, etc.)
  const ta = useCallback(
    <T = unknown,>(key: string): T[] => {
      const value = resolve(translations[language], key)
      if (Array.isArray(value)) return value as T[]
      return []
    },
    [language],
  )

  // to() returns an object (for nested structures)
  const to = useCallback(
    <T = unknown,>(key: string): T => {
      const value = resolve(translations[language], key)
      return value as T
    },
    [language],
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, ta, to }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
