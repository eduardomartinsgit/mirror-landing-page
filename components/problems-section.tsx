"use client"

import { Brain, CloudRain, HeartCrack, AlertCircle, Moon, Sparkles } from "lucide-react"

const problems = [
  {
    icon: Brain,
    color: "#E91E8C",
    title: "Pensamentos acelerados",
    description: "A tua mente não pára e sentes dificuldade em processar tudo o que estás a sentir.",
  },
  {
    icon: CloudRain,
    color: "#00D4FF",
    title: "Ansiedade constante",
    description: "Preocupações que parecem não ter fim e afetam o teu dia a dia e as tuas relações.",
  },
  {
    icon: HeartCrack,
    color: "#7B2FBF",
    title: "Sobrecarga emocional",
    description: "Sentimentos intensos que parecem difíceis de controlar ou compreender.",
  },
  {
    icon: Moon,
    color: "#FF6B9D",
    title: "Noites mal dormidas",
    description: "Pensamentos que não te deixam descansar e afetam a tua energia vital.",
  },
  {
    icon: AlertCircle,
    color: "#00D4FF",
    title: "Stress crónico",
    description: "Pressão constante que drena a tua energia e impacta a tua qualidade de vida.",
  },
  {
    icon: Sparkles,
    color: "#E91E8C",
    title: "Procura de equilíbrio",
    description: "Queres cuidar de ti, mas não sabes por onde começar a tua jornada.",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E91E8C]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E91E8C]/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/8 rounded-full blur-[150px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7B2FBF]/10 border border-[#7B2FBF]/20 text-sm font-medium mb-6">
            <HeartCrack className="h-4 w-4 text-[#7B2FBF]" />
            <span className="text-[#7B2FBF]">Não estás sozinho</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Identificas-te com <span className="gradient-text">algum destes</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            22% dos portugueses são afetados por perturbações psiquiátricas.
            O primeiro passo é reconhecer e procurar apoio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/30 hover:border-transparent transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hover gradient border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 p-[1px]"
                style={{
                  background: `linear-gradient(135deg, ${problem.color}50 0%, transparent 50%, ${problem.color}30 100%)`
                }}
              />

              {/* Inner glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 60px ${problem.color}10, 0 0 40px ${problem.color}15`
                }}
              />

              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: `${problem.color}15`,
                    boxShadow: `0 0 30px ${problem.color}20`
                  }}
                >
                  <problem.icon className="h-8 w-8" style={{ color: problem.color }} />
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            O Mirror pode ajudar-te a compreender e processar essas emoções
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] text-white font-semibold hover:opacity-90 transition-opacity glow-magenta"
          >
            Quero começar a minha jornada
          </a>
        </div>
      </div>
    </section>
  )
}
