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
    badgeInterested: "interessados",
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
      "O Brasil é o país mais ansioso do mundo. Cuidar da mente ainda é caro e difícil de acessar. O Mirror torna o autoconhecimento acessível, todos os dias.",
    source: "Fontes: OMS, Covitel 2024 e Ministério da Saúde (Saúde Mental em Dados, 2025)",
    items: [
      {
        suffix: ",8%",
        description: "dos brasileiros com diagnóstico de ansiedade (Covitel 2024)",
        source: "CNN Brasil / Covitel 2024",
      },
      {
        suffix: "º",
        description: "o Brasil é o país mais ansioso do mundo, segundo a OMS",
        source: "OMS / Jornal da USP",
      },
      {
        suffix: " mil",
        description: "afastamentos do trabalho por transtornos mentais em 2024 (+68%)",
        source: "Ministério da Previdência, 2024",
      },
      {
        suffix: "×",
        description: "mais acessível que uma consulta particular (~R$ 150/sessão)",
        source: "Ministério da Saúde",
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
          "Você pode experimentar de graça com 3 entradas por mês. O Essencial custa R$ 24,90/mês (ou R$ 199,90/ano, economia de ~33%) e o Plus R$ 39,90/mês, com tudo incluído e sem publicidade. Você sai quando quiser.",
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

  // Política de privacidade adaptada à LGPD (Lei 13.709/2018). Rascunho de
  // boa-fé com base na lei vigente (jun/2026); recomenda-se validação por
  // advogado(a) antes do lançamento público.
  privacyPolicy: {
    title: "Política de Privacidade",
    subtitle: "Em conformidade com a LGPD (Lei n.º 13.709/2018) e o Marco Civil da Internet (Lei n.º 12.965/2014)",
    sections: [
      {
        title: "1. Controlador dos Dados",
        content:
          "O controlador dos seus dados pessoais é a Mirror (“nós”, “nosso”).\n\nPara qualquer questão relacionada à proteção de dados, você pode falar com o nosso Encarregado (DPO) pelo e-mail: privacidade@mirror.app",
      },
      {
        title: "2. Dados Pessoais Coletados",
        content:
          "Ao se inscrever na lista de espera, coletamos:\n• Nome completo - para personalizar a comunicação\n• E-mail - para contato e informações sobre o lançamento\n• Celular (opcional) - para contato adicional, se autorizado\n• Data e hora da inscrição - para registro e auditoria\n• Consentimento explícito - registro de que você aceitou esta política",
      },
      {
        title: "3. Finalidade do Tratamento",
        content:
          "Os seus dados são tratados exclusivamente para:\n• Gestão da lista de espera e comunicação sobre o lançamento do Mirror\n• Envio de informações sobre o produto, funcionalidades e acesso antecipado\n• Contato para condições especiais de pré-lançamento\n\nOs seus dados nunca serão usados para finalidades diferentes das acima sem o seu consentimento prévio e explícito.",
      },
      {
        title: "4. Base Legal do Tratamento",
        content:
          "O tratamento se baseia no seu consentimento (art. 7º, I da LGPD), fornecido ao marcar a caixa de consentimento e enviar o formulário.\n\nVocê pode revogar o consentimento a qualquer momento, sem prejuízo da licitude do tratamento já realizado.",
      },
      {
        title: "5. Período de Conservação",
        content:
          "Os seus dados serão mantidos enquanto a lista de espera estiver ativa e por no máximo 24 meses após a inscrição, salvo se:\n• Você se tornar usuário do Mirror (aplica-se a política do aplicativo)\n• Você solicitar a eliminação antecipada\n• Você revogar o consentimento\n\nApós o período, os dados são eliminados de forma segura e irreversível.",
      },
      {
        title: "6. Compartilhamento e Operadores",
        content:
          "Os seus dados podem ser tratados pelos seguintes operadores, estritamente para as finalidades indicadas:\n\n• Supabase Inc. - armazenamento de dados - Brasil (São Paulo)\n• GitHub Pages - hospedagem do site - EUA (com salvaguardas adequadas)\n\nTodos os operadores assinam Acordo de Tratamento de Dados. Transferências internacionais seguem as salvaguardas do art. 33 da LGPD.\n\nOs seus dados nunca são vendidos a terceiros nem usados para publicidade de terceiros.",
      },
      {
        title: "7. Publicidade",
        content:
          "Nas modalidades gratuitas, a plataforma pode exibir anúncios de vídeo recompensados (rewarded ads), de visualização facultativa e iniciada por ação voluntária do usuário.\n\nOs seus dados pessoais não são compartilhados com anunciantes para segmentação, profiling ou personalização. Planos pagos podem remover a publicidade.",
      },
      {
        title: "8. Medidas de Segurança",
        content:
          "Adotamos medidas técnicas e organizacionais adequadas:\n• Criptografia AES-256 em repouso\n• Criptografia TLS 1.3 em trânsito\n• Controle de acesso por linha (Row Level Security)\n• Auditorias regulares de segurança",
      },
      {
        title: "9. Isenções e Limitação de Responsabilidade",
        content:
          "O serviço é fornecido “no estado em que se encontra”. O Mirror é um serviço de bem-estar e autoconhecimento; não é serviço de saúde nem dispositivo médico (não se enquadra como software como dispositivo médico perante a ANVISA) e não substitui acompanhamento por profissionais de saúde mental.",
      },
      {
        title: "10. Indenização",
        content:
          "O usuário concorda em isentar a Mirror, seus administradores, diretores, colaboradores e agentes de quaisquer reclamações, responsabilidades, danos e despesas decorrentes do uso indevido do serviço.",
      },
      {
        title: "11. Direitos do Titular (art. 18 da LGPD)",
        content:
          "Você tem direito a:\n• Confirmação da existência de tratamento\n• Acesso aos dados\n• Correção de dados incompletos ou desatualizados\n• Anonimização, bloqueio ou eliminação de dados desnecessários\n• Portabilidade\n• Eliminação dos dados tratados com consentimento\n• Informação sobre compartilhamento\n• Revogação do consentimento\n\nContato: privacidade@mirror.app. Prazo de resposta: conforme a LGPD.",
      },
      {
        title: "12. Autoridade de Controle",
        content:
          "ANPD - Autoridade Nacional de Proteção de Dados\nhttps://www.gov.br/anpd",
      },
      {
        title: "13. Cookies",
        content:
          "Este site utiliza apenas cookies estritamente necessários ao seu funcionamento.",
      },
      {
        title: "14. Menores",
        content:
          "Idade mínima: 18 anos. Por tratar de dado sensível de saúde (art. 11 da LGPD) e considerando o Estatuto Digital da Criança e do Adolescente (Lei 15.211/2025), adotamos 18+ como padrão. (Sujeito a confirmação jurídica.)",
      },
      {
        title: "15. Lei Aplicável e Foro",
        content:
          "Esta política rege-se pela legislação brasileira. Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer controvérsias, salvo competência legal diversa (por exemplo, foro do domicílio do consumidor nos termos do CDC).",
      },
      {
        title: "16. Disposições Finais",
        content:
          "A Mirror pode alterar esta política, comunicando as mudanças por e-mail com antecedência mínima de 15 dias.",
      },
    ],
    lastUpdate: "Última atualização: junho de 2026",
    legalRefs:
      "Lei n.º 13.709/2018 (LGPD) · Lei n.º 12.965/2014 (Marco Civil) · Lei n.º 8.078/1990 (CDC) · Lei n.º 15.211/2025 (ECA Digital) · Orientações da ANPD",
  },
}

const ptBR = deepMerge(ptPT, overrides)

export default ptBR
