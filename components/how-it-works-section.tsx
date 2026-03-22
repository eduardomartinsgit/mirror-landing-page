"use client"

import { Mic, Brain, TrendingUp, Heart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Mic,
    color: "#E91E8C",
    title: "Fala ou escreve",
    description: "Fala 2-5 minutos por dia ou escreve livremente sobre os teus pensamentos e sentimentos. Sem julgamento, apenas tu e as tuas palavras.",
    detail: "Diário de voz com IA"
  },
  {
    number: "02",
    icon: Brain,
    color: "#00D4FF",
    title: "Recebe insights",
    description: "A IA analisa os teus padrões emocionais e devolve reflexões personalizadas para te compreenderes melhor.",
    detail: "Análise emocional"
  },
  {
    number: "03",
    icon: Heart,
    color: "#7B2FBF",
    title: "Evolui",
    description: "Acompanha a tua jornada com o Mirror Score™, identifica gatilhos e celebra o teu progresso emocional.",
    detail: "Crescimento pessoal"
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 scroll-mt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B2FBF]/5 to-transparent" />

        {/* Animated rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#E91E8C]/5 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#00D4FF]/5 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-[#7B2FBF]/5 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-sm font-medium mb-6">
            <Brain className="h-4 w-4 text-[#00D4FF]" />
            <span className="text-[#00D4FF]">Simples e poderoso</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Como o Mirror <span className="gradient-text">transforma</span> a tua mente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Em três passos simples, inicias uma jornada profunda de
            autoconhecimento com o suporte de inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-[60%] w-[80%] h-[2px]">
                  <div className="h-full bg-gradient-to-r from-[#E91E8C]/40 via-[#00D4FF]/40 to-transparent" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00D4FF]/40" />
                </div>
              )}

              <div className="relative bg-card/30 backdrop-blur-xl rounded-3xl p-8 border border-border/30 hover:border-transparent transition-all duration-500 h-full group-hover:-translate-y-2">
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]"
                  style={{
                    background: `linear-gradient(135deg, ${step.color} 0%, transparent 60%)`
                  }}
                />

                <div className="relative">
                  {/* Icon container */}
                  <div className="relative inline-flex mb-8">
                    {/* Glow ring */}
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity scale-150"
                      style={{ backgroundColor: step.color }}
                    />

                    <div
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${step.color}15`,
                        boxShadow: `0 0 40px ${step.color}30`
                      }}
                    >
                      <step.icon className="h-9 w-9" style={{ color: step.color }} />
                    </div>

                    <span
                      className="absolute -top-3 -right-3 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}aa 100%)`,
                        boxShadow: `0 4px 20px ${step.color}50`
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Detail badge */}
                  <div
                    className="inline-flex px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      backgroundColor: `${step.color}15`,
                      color: step.color
                    }}
                  >
                    {step.detail}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
