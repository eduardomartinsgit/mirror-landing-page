"use client"

import { useLanguage } from "@/lib/i18n/context"

const languages = [
  { code: "pt-PT" as const, flag: "\ud83c\uddf5\ud83c\uddf9", label: "Portugu\u00eas" },
  { code: "en-GB" as const, flag: "\ud83c\uddec\ud83c\udde7", label: "English" },
]

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Language">
      {languages.map((lang) => (
        <button
          key={lang.code}
          role="radio"
          aria-checked={language === lang.code}
          aria-label={lang.label}
          onClick={() => setLanguage(lang.code)}
          className={`text-xl leading-none px-1.5 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
            language === lang.code
              ? "bg-white/10 scale-110 ring-1 ring-[#E91E8C]/40"
              : "opacity-50 hover:opacity-80 hover:bg-white/5"
          }`}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  )
}
