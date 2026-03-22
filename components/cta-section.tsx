"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E91E8C] via-[#7B2FBF] to-[#00D4FF]" />

          {/* Animated orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}
          />

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span>Lançamento em breve</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Começa a tua jornada de autoconhecimento
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Entra na lista de espera e sê um dos primeiros a experimentar
              o Mirror. Vagas limitadas para o acesso antecipado.
            </p>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-[#E91E8C] hover:bg-white/90 font-semibold px-8 h-14 text-base gap-2 rounded-xl shadow-lg shadow-black/20"
            >
              Garantir o meu lugar
              <ArrowRight className="h-5 w-5" />
            </Button>

            <p className="mt-6 text-sm text-white/70">
              Sem compromisso. Cancela quando quiseres.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
