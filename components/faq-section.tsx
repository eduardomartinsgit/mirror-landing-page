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
      "O Mirror é um diário de voz com análise emocional por inteligência artificial. Falas durante alguns minutos por dia, e a IA transcreve as tuas palavras, detecta emoções e devolve-te insights personalizados em português europeu. Inclui funcionalidades como a linha temporal emocional, o Mirror Score e um modo de emergência. O Mirror não é um substituto para acompanhamento profissional de saúde mental — é uma ferramenta complementar de autoconhecimento.",
  },
  {
    question: "O Mirror substitui um psicólogo?",
    answer:
      "Não, de forma alguma. O Mirror é uma ferramenta de autoconhecimento que complementa, mas nunca substitui, o acompanhamento de um profissional de saúde mental qualificado. A aplicação não faz diagnósticos clínicos, não prescreve tratamentos e não emite qualquer tipo de parecer médico. Em conformidade com o Regulamento Europeu de Dispositivos Médicos (EU MDR 2017/745), o Mirror não faz reivindicações clínicas. Se sentires que precisas de apoio profissional, recomendamos sempre que procures ajuda especializada.",
  },
  {
    question: "Os meus dados estão seguros?",
    answer:
      "Sim. A segurança dos teus dados é tratada com o máximo rigor. Todos os dados são encriptados com AES-256 em repouso e TLS 1.3 em trânsito. A nível de base de dados, utilizamos Row Level Security (RLS) para garantir que apenas tu acedes aos teus registos. Por se tratarem de dados relativos a saúde, aplica-se o RGPD Art. 9 (categorias especiais de dados pessoais), sendo o tratamento baseado no teu consentimento explícito nos termos do Art. 6(1)(a). Os dados ficam armazenados na União Europeia (Frankfurt, Alemanha). A autoridade de controlo competente é a CNPD (Comissão Nacional de Proteção de Dados).",
  },
  {
    question: "Como funciona o diário de voz?",
    answer:
      "Falas entre 2 a 5 minutos por dia sobre o que sentiste, pensaste ou viveste. A IA transcreve o teu registo de voz, analisa as emoções presentes e devolve-te insights personalizados em português europeu. Ao longo do tempo, constróis uma linha temporal emocional que te ajuda a identificar padrões e a conhecer-te melhor. Nenhum dado é partilhado com terceiros sem o teu consentimento explícito, conforme o RGPD Art. 7.",
  },
  {
    question: "Quanto custa o Mirror?",
    answer:
      "O Mirror tem um plano gratuito com 7 entradas por mês. O plano Essencial custa €5,99/mês ou €47,99/ano (poupas 33%). Sem compromisso — podes cancelar a qualquer momento. Os pagamentos são processados de forma segura via Stripe, com suporte para cartão bancário e SEPA.",
  },
  {
    question: "Posso apagar os meus dados?",
    answer:
      "Sim. Tens o direito ao apagamento dos teus dados nos termos do RGPD Art. 17 (direito a ser esquecido). O Mirror disponibiliza um botão «Apagar tudo» que remove os teus dados de todos os sistemas e sub-processadores num prazo máximo de 30 dias. Tens também o direito à portabilidade dos dados (RGPD Art. 20), podendo exportar as tuas entradas a qualquer momento.",
  },
  {
    question: "O Mirror usa os meus dados para treinar IA?",
    answer:
      "Não. As tuas gravações de voz e entradas de diário nunca são utilizadas para treinar modelos de inteligência artificial. Os teus dados são processados exclusivamente para gerar os teus insights pessoais, em estrito cumprimento do princípio da limitação da finalidade previsto no RGPD Art. 5(1)(b).",
  },
  {
    question: "A partir de que idade posso usar o Mirror?",
    answer:
      "Podes utilizar o Mirror a partir dos 16 anos. Este limite está em conformidade com o RGPD Art. 8 (condições aplicáveis ao consentimento de menores) e com a Lei 58/2019 Art. 16 (lei portuguesa de proteção de dados), que fixa os 16 anos como idade mínima para consentimento autónomo no tratamento de dados pessoais.",
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
              Esclarece as tuas dúvidas sobre o Mirror.
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
