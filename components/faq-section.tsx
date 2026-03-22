"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    question: "O que é o Mirror?",
    answer:
      "O Mirror é um diário de voz com IA. Falas uns minutos por dia, a IA transcreve, detecta emoções e devolve-te insights em português. Tens uma timeline emocional, o Mirror Score e um modo para os dias mais difíceis. Não substitui acompanhamento profissional. É uma ferramenta para te conheceres melhor.",
  },
  {
    question: "O Mirror substitui um psicólogo?",
    answer:
      "Não. O Mirror ajuda-te a conhecer-te melhor, mas não substitui um psicólogo. Não faz diagnósticos nem dá conselhos clínicos. Em conformidade com o EU MDR 2017/745, o Mirror não faz reivindicações clínicas. Se precisares de ajuda profissional, procura um especialista.",
  },
  {
    question: "Os meus dados estão seguros?",
    answer:
      "Sim. Tudo encriptado com AES-256 em repouso e TLS 1.3 em trânsito. Só tu acedes aos teus dados graças a Row Level Security. Como são dados de saúde, aplica-se o RGPD Art. 9 e o tratamento baseia-se no teu consentimento explícito (Art. 6(1)(a)). Dados armazenados na UE (Frankfurt). Autoridade de controlo: CNPD.",
  },
  {
    question: "Como funciona o diário de voz?",
    answer:
      "Falas 2 a 5 minutos por dia sobre o que sentiste ou viveste. A IA transcreve, analisa emoções e dá-te insights em português. Com o tempo, vais construindo uma timeline que te ajuda a ver padrões. Nenhum dado é partilhado com terceiros sem o teu consentimento (RGPD Art. 7).",
  },
  {
    question: "Quanto custa o Mirror?",
    answer:
      "Tem um plano gratuito com 7 entradas por mês. O Essencial custa €5,99/mês ou €47,99/ano (poupas 33%). Sais quando quiseres. Pagamentos seguros via Stripe, com cartão ou SEPA.",
  },
  {
    question: "Posso apagar os meus dados?",
    answer:
      "Sim. Tens um botão «Apagar tudo» que remove os teus dados em até 30 dias, conforme o RGPD Art. 17 (direito a ser esquecido). Podes também exportar tudo a qualquer momento (RGPD Art. 20).",
  },
  {
    question: "O Mirror usa os meus dados para treinar IA?",
    answer:
      "Não. As tuas gravações e entradas nunca são usadas para treinar IA. Os teus dados servem apenas para gerar os teus insights, conforme o RGPD Art. 5(1)(b).",
  },
  {
    question: "A partir de que idade posso usar o Mirror?",
    answer:
      "A partir dos 16 anos. É o mínimo definido pelo RGPD Art. 8 e pela Lei 58/2019 Art. 16 para consentimento autónomo em Portugal.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#E91E8C]/10 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Perguntas <span className="gradient-text">frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              As dúvidas mais comuns.
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
