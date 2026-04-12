"use client"

import { useState } from "react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/i18n/context"

const planPrices = [
  { monthlyPrice: 0, yearlyPrice: 0 },
  { monthlyPrice: 5.99, yearlyPrice: 47.99 },
  { monthlyPrice: 9.99, yearlyPrice: 79.99 },
]

const planAccents = ["#E91E8C", "#00D4FF", "#7B2FBF"]
const popularIndex = 1

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const { t, ta } = useLanguage()
  const plans = ta<{ name: string; description: string; features: string[] }>("pricing.plans")

  const formatPrice = (price: number) => {
    if (price === 0) return "\u20ac0"
    return `\u20ac${price.toFixed(2).replace(".", ",")}`
  }

  const scrollToForm = () => {
    const form = document.getElementById("lead-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="precos" className="py-20 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E91E8C]/10 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t("pricing.titleBefore")}<span className="gradient-text">{t("pricing.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("pricing.subtitle")}
            </p>

            <div className="flex items-center justify-center gap-3">
              <Label
                htmlFor="billing"
                className={`cursor-pointer transition-colors ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
              >
                {t("pricing.monthly")}
              </Label>
              <Switch
                id="billing"
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#E91E8C] data-[state=checked]:to-[#00D4FF]"
              />
              <Label
                htmlFor="billing"
                className={`cursor-pointer transition-colors ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
              >
                {t("pricing.yearly")}
                <span className="ml-2 text-xs bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] text-white px-2 py-1 rounded-full">
                  {t("pricing.discount")}
                </span>
              </Label>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, index) => {
            const isPopular = index === popularIndex
            const prices = planPrices[index]
            const accent = planAccents[index]

            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                <div
                  className={`relative rounded-3xl p-6 sm:p-8 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-2 ${
                    isPopular
                      ? "bg-gradient-to-br from-[#E91E8C]/20 to-[#00D4FF]/20 border-[#E91E8C]/50 md:scale-105 md:py-10"
                      : "bg-card/50 border-border/50 hover:border-[#E91E8C]/30"
                  }`}
                >
                  {isPopular && (
                    <>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E91E8C]/10 to-[#00D4FF]/10 blur-xl -z-10" />
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] text-white text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                        <Sparkles className="w-4 h-4" />
                        {t("pricing.mostPopular")}
                      </div>
                    </>
                  )}

                  <div className="mb-6">
                    <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <span className="font-serif text-4xl font-bold text-foreground">
                      {formatPrice(isYearly ? prices.yearlyPrice : prices.monthlyPrice)}
                    </span>
                    {prices.monthlyPrice > 0 && (
                      <span className="text-sm text-muted-foreground">
                        {isYearly ? t("pricing.perYear") : t("pricing.perMonth")}
                      </span>
                    )}
                  </div>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}30` }}>
                          <Check className="h-3 w-3" style={{ color: accent }} />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToForm}
                    className={`w-full h-12 font-semibold transition-all duration-300 ${
                      isPopular
                        ? "bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] hover:opacity-90 text-white glow-magenta"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {t("pricing.cta")}
                  </Button>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
