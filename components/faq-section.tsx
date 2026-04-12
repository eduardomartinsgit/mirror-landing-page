"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/i18n/context"

export function FaqSection() {
  const { t, ta } = useLanguage()
  const faqs = ta<{ question: string; answer: string }>("faq.items")

  return (
    <section id="faq" className="py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#E91E8C]/10 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t("faq.titleBefore")}<span className="gradient-text">{t("faq.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("faq.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 data-[state=open]:border-[#E91E8C]/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
