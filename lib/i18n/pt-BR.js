// Brazilian Portuguese (pt-BR) for the landing page.
//
// Built as an override LAYER on top of pt-PT (deep merge): only keys that
// differ are listed in `overrides`; everything else falls back to pt-PT.
//
// NOT overridden here (tracked for human review before public launch):
//  - stats numbers/sources: the Portuguese figures (SNS, OPP, INE) are not
//    Brazilian. The language is translated and sources marked "a confirmar";
//    real Brazilian statistics must replace them.
//  - privacyPolicy: the full LGPD privacy policy is a lawyer's job; it still
//    falls back to the Portuguese (RGPD) text. Do not ship to the public
//    until a Brazilian privacy policy is authored.

import ptPT from "./pt-PT"

function isObj(v) {
  return v && typeof v === "object" && !Array.isArray(v)
}
function deepMerge(base, over) {
  if (!isObj(base) || !isObj(over)) return over === undefined ? base : over
  const out = { ...base }
  for (const k of Object.keys(over)) {
    out[k] = isObj(base[k]) && isObj(over[k]) ? deepMerge(base[k], over[k]) : over[k]
  }
  return out
}

const overrides = {
  page: {
    skipToContent: "Pular para o conteúdo",
  },

  header: {
    cta: "Quero Participar",
    openMenu: "Abrir menu",
  },

  hero: {
    badge: "A sua saúde mental importa",
    titlePrefix: "Entenda",
    typingTexts: ["a sua mente", "as suas emoções", "o seu bem-estar", "a sua paz interior"],
    subtitleBefore: "Você fala, a IA entende o que você sente e te devolve",
    subtitleHighlight: " insights sobre você",
    subtitleAfter: ". Simples.",
    pills: [{ label: "Análise Emocional" }, { label: "100% Privado" }, { label: "Insights Diários" }],
  },

  leadForm: {
    title: "Entre na lista",
    subtitle: "Seja um dos primeiros a experimentar o Mirror.",
    nameLabel: "Nome completo",
    namePlaceholder: "Seu nome",
    emailLabel: "E-mail",
    emailPlaceholder: "email@exemplo.com.br",
    phoneLabel: "Celular",
    phoneOptional: "(opcional)",
    phonePlaceholder: "+55 11 91234-5678",
    consentBefore: "Li e aceito a ",
    consentLink: "política de privacidade",
    submit: "Quero entrar",
    successTitle: "Você está dentro!",
    successMessageBefore: "Boa, ",
    successMessageAfter: "! A gente avisa assim que o Mirror estiver pronto. Fique de olho no e-mail.",
    successFooter: "Você cuida de você. A gente cuida do resto.",
    badgeGdpr: "Dados protegidos (LGPD)",
    badgeInterested: "+500 interessados",
    errorEmail: "Por favor, digite um endereço de e-mail válido.",
    errorPhone: "Por favor, digite um número de celular válido (ex: +55 11 91234-5678).",
    errorSubmit: "Ocorreu um erro ao enviar. Por favor, tente novamente.",
  },

  // Language translated; numbers/sources still PT-derived. Replace with
  // verified Brazilian statistics before public launch.
  stats: {
    titleBefore: "O Brasil precisa do ",
    titleHighlight: "Mirror",
    subtitle:
      "Cuidar da saúde mental ainda é caro e difícil de acessar. O Mirror torna o autoconhecimento acessível, todos os dias.",
    source: "Fontes brasileiras a confirmar antes do lançamento",
    items: [
      {
        suffix: ",8%",
        description: "dos jovens de 18-24 com sintomas de transtorno mental",
        source: "(fonte a confirmar)",
      },
      {
        suffix: " dias",
        description: "de espera no SUS por atendimento psicológico",
        source: "(fonte a confirmar)",
      },
      {
        suffix: "%",
        description: "dos brasileiros em estresse elevado",
        source: "(fonte a confirmar)",
      },
      {
        suffix: "×",
        description: "mais acessível que uma consulta particular",
        source: "Mirror vs. consulta particular",
      },
    ],
  },

  features: {
    sectionTitleBefore: "Conheça o ",
    sectionTitleHighlight: "Mirror",
    ariaLabel: "Funcionalidades do Mirror",
    items: [
      {
        badge: "O essencial",
        title: "Fale. O Mirror ouve.",
        description: "Você grava a sua voz, a IA entende o que você sente e te devolve reflexões úteis.",
      },
      {
        badge: "Os seus padrões",
        title: "Veja como você se sente ao longo do tempo.",
        description: "As suas emoções num gráfico. Veja padrões que você não notava.",
      },
      {
        badge: "O seu score",
        title: "O seu bem-estar, num número.",
        description: "De 0 a 100, veja como você está e acompanhe a sua evolução.",
      },
      {
        badge: "Para os dias difíceis",
        title: "Quando você precisa, a gente está aqui.",
        description: "Exercícios de respiração e técnicas para acalmar. Sem julgamento.",
      },
    ],
    screens: {
      ariaLabel: "Simulação da tela do Mirror",
      voiceDiary: {
        title: "Diário de Voz",
        date: "Terça, 18 Mar 2026",
        emotionsDetected: "Emoções detectadas",
        emotions: ["Ansiedade", "Esperança", "Calma"],
        patternLabel: "Padrão detectado:",
        patternText: "às terças você sente mais ansiedade",
      },
      timeline: {
        title: "Linha do Tempo Emocional",
        period: "Última semana",
        days: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
        emotions: ["Alegria", "Ansiedade", "Calma"],
        insightLabel: "Insight:",
        insightText: "depois de exercício o seu humor melhora 40%",
        bestDay: "Melhor dia",
        bestDayValue: "Quinta",
        mostFrequent: "Mais frequente",
        mostFrequentValue: "Calma",
      },
      mirrorScore: {
        title: "Mirror Score™",
        subtitle: "O seu índice de bem-estar",
        of100: "de 100",
        thisWeek: "+5 esta semana",
        streak: "12 dias seguidos",
        last7Days: "Últimos 7 dias",
        barDays: ["S", "T", "Q", "Q", "S", "S", "D"],
        stats: [
          { label: "Média", value: "72" },
          { label: "Recorde", value: "85" },
          { label: "Consist.", value: "94%" },
        ],
      },
      emergency: {
        title: "Modo Desabafar",
        subtitle: "Exercício de respiração guiada",
        breatheIn: "Inspire...",
        phases: [
          { label: "Inspire", sec: "4s" },
          { label: "Segure", sec: "7s" },
          { label: "Expire", sec: "8s" },
        ],
        supportMessage: "Estou aqui com você 💜",
      },
    },
  },

  pricing: {
    titleBefore: "Planos para ",
    titleHighlight: "todos",
    subtitle: "Comece de graça. O Essencial custa menos que um café por semana.",
    monthly: "Mensal",
    yearly: "Anual",
    discount: "-33%",
    mostPopular: "Mais popular",
    cta: "Entrar na lista",
    perYear: "/ano",
    perMonth: "/mês",
    plans: [
      {
        name: "Free",
        description: "Para experimentar o conceito",
        features: [
          "3 entradas de voz por mês",
          "Mirror Score™ (só hoje, sem histórico)",
          "Insight básico (resumo curto)",
          "Modo Desabafar (1× por mês)",
        ],
      },
      {
        name: "Essencial",
        description: "Para quem quer mesmo se cuidar",
        features: [
          "Entradas de voz ilimitadas",
          "Mirror Score™ com histórico completo",
          "Linha do tempo emocional sem limite",
          "Modo Desabafar ilimitado",
          "Insights completos com padrões",
          "Insight Cards compartilháveis",
          "Resumo semanal em storytelling",
          "Desafios de 7 dias",
          "Modo Noite (check-in pré-sono)",
        ],
      },
      {
        name: "Plus",
        description: "Para ir mais fundo",
        features: [
          "Tudo do Essencial",
          "Resumos mensais e trimestrais",
          "Análise avançada de padrões",
          "Relatórios detalhados em PDF",
          "Exportação de dados",
          "Suporte prioritário",
          "Sem publicidade",
        ],
      },
    ],
  },

  faq: {
    titleBefore: "Perguntas ",
    titleHighlight: "frequentes",
    subtitle: "As dúvidas mais comuns.",
    items: [
      {
        question: "O que é o Mirror?",
        answer:
          "O Mirror é um diário de voz com IA. Você fala alguns minutos por dia, a IA transcreve, detecta emoções e te devolve insights em português. Você tem uma linha do tempo emocional, o Mirror Score e um modo para os dias mais difíceis. Não substitui acompanhamento profissional. É uma ferramenta para você se conhecer melhor.",
      },
      {
        question: "O Mirror substitui um psicólogo?",
        answer:
          "Não. O Mirror ajuda você a se conhecer melhor, mas não substitui um psicólogo. Não faz diagnósticos nem dá conselhos clínicos. O Mirror é um serviço de bem-estar e não faz alegações clínicas. Se você precisar de ajuda profissional, procure um especialista.",
      },
      {
        question: "Os meus dados estão seguros?",
        answer:
          "Sim. Tudo criptografado com AES-256 em repouso e TLS 1.3 em trânsito. Só você acessa os seus dados graças ao Row Level Security. Como são dados de saúde (dado sensível), aplica-se a LGPD (art. 11) e o tratamento se baseia no seu consentimento explícito. Dados armazenados no Brasil (São Paulo). Autoridade de controle: ANPD.",
      },
      {
        question: "Como funciona o diário de voz?",
        answer:
          "Você fala de 2 a 5 minutos por dia sobre o que sentiu ou viveu. A IA transcreve, analisa emoções e te dá insights em português. Com o tempo, você vai construindo uma linha do tempo que ajuda a ver padrões. Nenhum dado é compartilhado com terceiros sem o seu consentimento.",
      },
      {
        question: "Quanto custa o Mirror?",
        answer:
          "Você pode experimentar de graça com 3 entradas por mês. Os planos pagos (Essencial e Plus) desbloqueiam entradas ilimitadas, histórico e recursos avançados. Você sai quando quiser. Preços em reais serão anunciados no lançamento.",
      },
      {
        question: "Posso apagar os meus dados?",
        answer:
          "Sim. Você tem um botão «Excluir tudo» que remove os seus dados, conforme o direito de eliminação da LGPD (art. 18). Você também pode exportar tudo a qualquer momento.",
      },
      {
        question: "O Mirror usa os meus dados para treinar IA?",
        answer:
          "Não. As suas gravações e entradas nunca são usadas para treinar IA. Os seus dados servem apenas para gerar os seus insights, conforme o princípio da finalidade da LGPD.",
      },
      {
        question: "A partir de que idade posso usar o Mirror?",
        answer:
          "A partir dos 18 anos. Por se tratar de dado sensível de saúde e considerando o Estatuto Digital da Criança e do Adolescente (Lei 15.211/2025), adotamos 18+ como padrão. (Sujeito a confirmação jurídica.)",
      },
    ],
  },

  cta: {
    badge: "Lançamento em breve",
    title: "Comece a cuidar de você.",
    subtitle: "Entre na lista de espera. Seja um dos primeiros a usar o Mirror quando lançar.",
    button: "Quero experimentar",
    disclaimer: "Sem compromisso. Saia quando quiser.",
  },

  footer: {
    brandDescription: "O seu diário de voz com IA. Para você se conhecer melhor, um dia de cada vez.",
    product: "Produto",
    company: "Empresa",
    legal: "Legal",
    productLinks: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Planos", href: "#precos" },
      { label: "FAQ", href: "#faq" },
    ],
    companyLinks: [
      { label: "Sobre nós", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contato", href: "#" },
    ],
    legalLinks: [
      { label: "Privacidade", href: "#" },
      { label: "Termos de uso", href: "#" },
      { label: "LGPD", href: "#" },
    ],
    copyright: "Todos os direitos reservados.",
    madeWith: "Feito com",
    madeIn: "para você",
  },

  geoBlock: {
    ptTitle: "O Mirror ainda não chegou ao seu país.",
    ptDescription: "Estamos trabalhando nisso. Deixe o seu e-mail e a gente avisa quando chegar aí.",
    placeholder: "email@exemplo.com",
    submit: "Avisar-me",
    thanksPt: "Obrigado! Entraremos em contato em breve.",
    availableNote: "🇧🇷 Disponível no Brasil",
    close: "Fechar / Close",
  },
}

const ptBR = deepMerge(ptPT, overrides)

export default ptBR
