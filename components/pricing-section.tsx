"use client"

import { useState } from "react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollReveal } from "@/components/scroll-reveal"

const plans = [
  {
    name: "Free",
    description: "Para experimentar",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "7 entradas de voz por mês",
      "Mirror Score™ diário",
      "Timeline emocional (últimos 7 dias)",
      "Modo Desabafar (3× por mês)",
      "1 Insight Card partilhável por mês",
    ],
    popular: false,
    accent: "#E91E8C",
  },
  {
    name: "Essencial",
    description: "Para quem quer mesmo cuidar de si",
    monthlyPrice: 5.99,
    yearlyPrice: 47.99,
    features: [
      "Entradas de voz ilimitadas",
      "Mirror Score™ com histórico completo",
      "Timeline emocional sem limite",
      "Modo Desabafar ilimitado",
      "Insight Cards partilháveis ilimitados",
      "Resumo semanal em storytelling",
      "Desafios de 7 dias",
      "Modo Noite (check-in pré-sono)",
      "Exportação de dados",
    ],
    popular: true,
    accent: "#00D4FF",
  },
  {
    name: "Plus",
    description: "Para ir mais fundo",
    monthlyPrice: 9.99,
    yearlyPrice: 79.99,
    features: [
      "Tudo do Essencial",
      "Resumos mensais e trimestrais",
      "Análise avançada de padrões",
      "Relatórios detalhados em PDF",
      "Suporte prioritário",
    ],
    popular: false,
    accent: "#7B2FBF",
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const formatPrice = (price: number) => {
    if (price === 0) return "€0"
    return `€${price.toFixed(2).replace(".", ",")}`
  }

  const scrollToForm = () => {
    const form = document.getElementById("lead-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="precos" className="py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E91E8C]/10 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Planos para <span className="gradient-text">todos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Começa a €0. O Essencial sai-te a menos que um café por semana.
            </p>

            {/* Yearly / Monthly toggle */}
            <div className="flex items-center justify-center gap-3">
              <Label
                htmlFor="billing"
                className={`cursor-pointer transition-colors ${
                  !isYearly ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Mensal
              </Label>
              <Switch
                id="billing"
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#E91E8C] data-[state=checked]:to-[#00D4FF]"
              />
              <Label
                htmlFor="billing"
                className={`cursor-pointer transition-colors ${
                  isYearly ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Anual
                <span className="ml-2 text-xs bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] text-white px-2 py-1 rounded-full">
                  -33%
                </span>
              </Label>
            </div>
          </div>
        </ScrollReveal>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, index) => (
            <ScrollReveal
              key={plan.name}
              animation="fade-up"
              delay={index * 150}
            >
              <div
                className={`relative rounded-3xl p-6 sm:p-8 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#E91E8C]/20 to-[#00D4FF]/20 border-[#E91E8C]/50 md:scale-105 md:py-10"
                    : "bg-card/50 border-border/50 hover:border-[#E91E8C]/30"
                }`}
              >
                {/* "Mais popular" badge */}
                {plan.popular && (
                  <>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E91E8C]/10 to-[#00D4FF]/10 blur-xl -z-10" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] text-white text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                      <Sparkles className="w-4 h-4" />
                      Mais popular
                    </div>
                  </>
                )}

                {/* Plan name & description */}
                <div className="mb-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-serif text-4xl font-bold text-foreground">
                    {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-sm text-muted-foreground">
                      /{isYearly ? "ano" : "mês"}
                    </span>
                  )}
                </div>

                {/* Feature list */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${plan.accent}30` }}
                      >
                        <Check className="h-3 w-3" style={{ color: plan.accent }} />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={scrollToForm}
                  className={`w-full h-12 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] hover:opacity-90 text-white glow-magenta"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  Entrar na lista
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
