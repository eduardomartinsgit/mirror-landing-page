"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O Mirror substitui um psicólogo?",
    answer: "Não. O Mirror é uma ferramenta de autoconhecimento que complementa, mas não substitui, o acompanhamento profissional de saúde mental. Recomendamos sempre procurar ajuda de um profissional qualificado quando necessário. A partir da V2.0, teremos um marketplace de psicólogos verificados pela OPP.",
  },
  {
    question: "Os meus dados estão seguros?",
    answer: "Sim! A privacidade é a nossa prioridade. Todos os dados são encriptados com AES-256 em repouso e TLS 1.3 em trânsito. Cumprimos integralmente o RGPD, incluindo proteção máxima para dados de saúde mental (Art. 9). Tu és o único que tem acesso aos teus registos.",
  },
  {
    question: "Quando é que a app será lançada?",
    answer: "Estamos em fase final de desenvolvimento. Ao entrar na lista de espera, serás um dos primeiros a ter acesso ao Mirror quando lançarmos. Fica atento ao teu e-mail!",
  },
  {
    question: "A app funciona offline?",
    answer: "Sim! Podes fazer os teus registos de voz mesmo sem internet. Quando a ligação for restabelecida, os dados serão sincronizados automaticamente.",
  },
  {
    question: "Como é que a IA gera os insights?",
    answer: "A nossa IA transcreve os teus registos de voz, detecta emoções e padrões, e devolve insights personalizados em português europeu. Identifica temas recorrentes e ligações entre eventos e sentimentos — tudo de forma privada.",
  },
  {
    question: "Terei acesso antecipado ao entrar na lista?",
    answer: "Sim! Todos os que entrarem na lista de espera terão acesso antecipado e exclusivo ao Mirror antes do lançamento oficial, além de descontos especiais no plano Essencial.",
  },
  {
    question: "Quanto custa o Mirror?",
    answer: "O Mirror tem um plano gratuito com 7 entradas por mês. O plano Essencial custa €5,99/mês (ou €47,99/ano com 33% de desconto) — 25× mais acessível que uma consulta privada. Há também o plano Plus a €9,99/mês com funcionalidades premium.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#E91E8C]/10 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Esclarece as tuas dúvidas sobre o Mirror.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
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
          ))}
        </Accordion>
      </div>
    </section>
  )
}
