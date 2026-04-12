const ptPT = {
  // Page
  page: {
    skipToContent: "Saltar para o conteudo",
  },

  // Header
  header: {
    nav: {
      features: "Funcionalidades",
      plans: "Planos",
      faq: "FAQ",
    },
    cta: "Quero Participar",
    openMenu: "Abrir menu",
  },

  // Hero Section
  hero: {
    badge: "A tua saude mental importa",
    titlePrefix: "Entende",
    typingTexts: [
      "a tua mente",
      "as tuas emocoes",
      "o teu bem-estar",
      "a tua paz interior",
    ],
    subtitleBefore: "Falas, a IA percebe o que sentes e devolve-te",
    subtitleHighlight: " insights sobre ti",
    subtitleAfter: ". Simples.",
    pills: [
      { label: "Analise Emocional" },
      { label: "100% Privado" },
      { label: "Insights Diarios" },
    ],
  },

  // Lead Form
  leadForm: {
    title: "Entra na lista",
    subtitle: "Se dos primeiros a experimentar o Mirror.",
    nameLabel: "Nome completo",
    namePlaceholder: "O teu nome",
    emailLabel: "E-mail",
    emailPlaceholder: "email@exemplo.pt",
    phoneLabel: "Telemovel",
    phoneOptional: "(opcional)",
    phonePlaceholder: "+351 912 345 678",
    consentBefore: "Li e aceito a ",
    consentLink: "politica de privacidade",
    submit: "Quero entrar",
    successTitle: "Estas dentro!",
    successMessageBefore: "Boa, ",
    successMessageAfter: "! Vamos avisar-te assim que o Mirror estiver pronto. Fica atento ao e-mail.",
    successFooter: "Tu cuidas de ti. Nos tratamos do resto.",
    badgeGdpr: "Dados protegidos (RGPD)",
    badgeInterested: "+500 interessados",
    errorEmail: "Por favor, introduz um endereco de e-mail valido.",
    errorPhone: "Por favor, introduz um numero de telefone portugues valido (ex: +351 912 345 678).",
    errorSubmit: "Ocorreu um erro ao submeter. Por favor, tenta novamente.",
  },

  // Stats Section
  stats: {
    titleBefore: "Portugal precisa do ",
    titleHighlight: "Mirror",
    subtitle: "O SNS nao da conta. 22% dos portugueses vivem com perturbacoes de saude mental. E mais do que a media europeia.",
    source: "Fonte: World Mental Health Survey \u2014 Harvard Medical School / NOVA Medical School, 2023",
    items: [
      {
        suffix: ",8%",
        description: "dos jovens 18-24 com sintomas de perturbacao mental",
        source: "INE/INSA \u2014 Inquerito Nacional de Saude, 2024",
      },
      {
        suffix: " dias",
        description: "de espera no SNS para consulta de psicologia",
        source: "Ordem dos Psicologos Portugueses, 2024",
      },
      {
        suffix: "%",
        description: "dos portugueses em stress elevado",
        source: "Eurobarometro 529 \u2014 Comissao Europeia, 2023",
      },
      {
        suffix: "\u00d7",
        description: "mais acessivel que uma consulta privada",
        source: "Mirror \u20ac5,99/mes vs. ~\u20ac150/consulta (OPP, 2024)",
      },
    ],
  },

  // Features Section
  features: {
    sectionTitleBefore: "Conhece o ",
    sectionTitleHighlight: "Mirror",
    ariaLabel: "Funcionalidades do Mirror",
    items: [
      {
        badge: "O essencial",
        title: "Fala. O Mirror ouve.",
        description: "Gravas a tua voz, a IA percebe o que sentes e devolve-te reflexoes uteis.",
      },
      {
        badge: "Os teus padroes",
        title: "Ve como te sentes ao longo do tempo.",
        description: "As tuas emocoes num grafico. Ve padroes que nao notavas.",
      },
      {
        badge: "O teu score",
        title: "O teu bem-estar, num numero.",
        description: "De 0 a 100, ve como estas e acompanha a tua evolucao.",
      },
      {
        badge: "Para os dias dificeis",
        title: "Quando precisas, estamos ca.",
        description: "Exercicios de respiracao e tecnicas para acalmar. Sem julgamento.",
      },
    ],
    screens: {
      ariaLabel: "Simulacao do ecra do Mirror",
      voiceDiary: {
        title: "Diario de Voz",
        date: "Terca, 18 Mar 2026",
        emotionsDetected: "Emocoes detectadas",
        emotions: ["Ansiedade", "Esperanca", "Calma"],
        patternLabel: "Padrao detectado:",
        patternText: "as tercas sentes mais ansiedade",
      },
      timeline: {
        title: "Timeline Emocional",
        period: "Ultima semana",
        days: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
        emotions: ["Alegria", "Ansiedade", "Calma"],
        insightLabel: "Insight:",
        insightText: "depois de exercicio o teu humor melhora 40%",
        bestDay: "Melhor dia",
        bestDayValue: "Quinta",
        mostFrequent: "Mais frequente",
        mostFrequentValue: "Calma",
      },
      mirrorScore: {
        title: "Mirror Score\u2122",
        subtitle: "O teu indice de bem-estar",
        of100: "de 100",
        thisWeek: "+5 esta semana",
        streak: "12 dias seguidos",
        last7Days: "Ultimos 7 dias",
        barDays: ["S", "T", "Q", "Q", "S", "S", "D"],
        stats: [
          { label: "Media", value: "72" },
          { label: "Recorde", value: "85" },
          { label: "Consist.", value: "94%" },
        ],
      },
      emergency: {
        title: "Modo Desabafar",
        subtitle: "Exercicio de respiracao guiada",
        breatheIn: "Inspira...",
        phases: [
          { label: "Inspira", sec: "4s" },
          { label: "Segura", sec: "7s" },
          { label: "Expira", sec: "8s" },
        ],
        supportMessage: "Estou aqui contigo \ud83d\udc9c",
      },
    },
  },

  // Pricing Section
  pricing: {
    titleBefore: "Planos para ",
    titleHighlight: "todos",
    subtitle: "Comeca a \u20ac0. O Essencial sai-te a menos que um cafe por semana.",
    monthly: "Mensal",
    yearly: "Anual",
    discount: "-33%",
    mostPopular: "Mais popular",
    cta: "Entrar na lista",
    perYear: "/ano",
    perMonth: "/mes",
    plans: [
      {
        name: "Free",
        description: "Para provar o conceito",
        features: [
          "3 entradas de voz por mes",
          "Mirror Score\u2122 (so hoje, sem historico)",
          "Insight basico (resumo curto)",
          "Modo Desabafar (1\u00d7 por mes)",
        ],
      },
      {
        name: "Essencial",
        description: "Para quem quer mesmo cuidar de si",
        features: [
          "Entradas de voz ilimitadas",
          "Mirror Score\u2122 com historico completo",
          "Timeline emocional sem limite",
          "Modo Desabafar ilimitado",
          "Insights completos com padroes",
          "Insight Cards partilhaveis",
          "Resumo semanal em storytelling",
          "Desafios de 7 dias",
          "Modo Noite (check-in pre-sono)",
        ],
      },
      {
        name: "Plus",
        description: "Para ir mais fundo",
        features: [
          "Tudo do Essencial",
          "Resumos mensais e trimestrais",
          "Analise avancada de padroes",
          "Relatorios detalhados em PDF",
          "Exportacao de dados",
          "Suporte prioritario",
          "Sem publicidade",
        ],
      },
    ],
  },

  // FAQ Section
  faq: {
    titleBefore: "Perguntas ",
    titleHighlight: "frequentes",
    subtitle: "As duvidas mais comuns.",
    items: [
      {
        question: "O que e o Mirror?",
        answer: "O Mirror e um diario de voz com IA. Falas uns minutos por dia, a IA transcreve, detecta emocoes e devolve-te insights em portugues. Tens uma timeline emocional, o Mirror Score e um modo para os dias mais dificeis. Nao substitui acompanhamento profissional. E uma ferramenta para te conheceres melhor.",
      },
      {
        question: "O Mirror substitui um psicologo?",
        answer: "Nao. O Mirror ajuda-te a conhecer-te melhor, mas nao substitui um psicologo. Nao faz diagnosticos nem da conselhos clinicos. Em conformidade com o EU MDR 2017/745, o Mirror nao faz reivindicacoes clinicas. Se precisares de ajuda profissional, procura um especialista.",
      },
      {
        question: "Os meus dados estao seguros?",
        answer: "Sim. Tudo encriptado com AES-256 em repouso e TLS 1.3 em transito. So tu acedes aos teus dados gracas a Row Level Security. Como sao dados de saude, aplica-se o RGPD Art. 9 e o tratamento baseia-se no teu consentimento explicito (Art. 6(1)(a)). Dados armazenados na UE (Frankfurt). Autoridade de controlo: CNPD.",
      },
      {
        question: "Como funciona o diario de voz?",
        answer: "Falas 2 a 5 minutos por dia sobre o que sentiste ou viveste. A IA transcreve, analisa emocoes e da-te insights em portugues. Com o tempo, vais construindo uma timeline que te ajuda a ver padroes. Nenhum dado e partilhado com terceiros sem o teu consentimento (RGPD Art. 7).",
      },
      {
        question: "Quanto custa o Mirror?",
        answer: "Podes experimentar gratis com 3 entradas por mes. O Essencial custa \u20ac5,99/mes ou \u20ac47,99/ano (poupas 33%). O plano Plus a \u20ac9,99/mes inclui tudo e sem publicidade. Sais quando quiseres. Pagamentos seguros via Stripe, com cartao ou SEPA.",
      },
      {
        question: "Posso apagar os meus dados?",
        answer: "Sim. Tens um botao \u00abApagar tudo\u00bb que remove os teus dados em ate 30 dias, conforme o RGPD Art. 17 (direito a ser esquecido). Podes tambem exportar tudo a qualquer momento (RGPD Art. 20).",
      },
      {
        question: "O Mirror usa os meus dados para treinar IA?",
        answer: "Nao. As tuas gravacoes e entradas nunca sao usadas para treinar IA. Os teus dados servem apenas para gerar os teus insights, conforme o RGPD Art. 5(1)(b).",
      },
      {
        question: "A partir de que idade posso usar o Mirror?",
        answer: "A partir dos 16 anos. E o minimo definido pelo RGPD Art. 8 e pela Lei 58/2019 Art. 16 para consentimento autonomo em Portugal.",
      },
    ],
  },

  // CTA Section
  cta: {
    badge: "Lancamento em breve",
    title: "Comeca a cuidar de ti.",
    subtitle: "Entra na lista de espera. Se dos primeiros a usar o Mirror quando sair.",
    button: "Quero experimentar",
    disclaimer: "Sem compromisso. Sais quando quiseres.",
  },

  // Footer
  footer: {
    brandDescription: "O teu diario de voz com IA. Para te conheceres melhor, um dia de cada vez.",
    product: "Produto",
    company: "Empresa",
    legal: "Legal",
    productLinks: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Planos", href: "#precos" },
      { label: "FAQ", href: "#faq" },
    ],
    companyLinks: [
      { label: "Sobre nos", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contacto", href: "#" },
    ],
    legalLinks: [
      { label: "Privacidade", href: "#" },
      { label: "Termos de utilizacao", href: "#" },
      { label: "RGPD", href: "#" },
    ],
    copyright: "Todos os direitos reservados.",
    madeWith: "Feito com",
    madeIn: "em Portugal",
  },

  // Geo Block
  geoBlock: {
    ptTitle: "O Mirror ainda nao chegou ao teu pais.",
    ptDescription: "Estamos a trabalhar nisso. Deixa o teu e-mail e avisamos-te quando chegarmos ai.",
    enTitle: "Mirror is not yet available in your country.",
    enDescription: "We're working on it. Drop your email and we'll let you know when we launch in your area.",
    placeholder: "email@exemplo.com",
    submit: "Avisar-me",
    thanksPt: "Obrigado! Entraremos em contacto em breve.",
    thanksEn: "Thank you! We'll be in touch soon.",
    availableNote: "\ud83c\uddf5\ud83c\uddf9 Disponivel em Portugal / Available in Portugal",
    close: "Fechar / Close",
  },

  // Privacy Policy
  privacyPolicy: {
    title: "Politica de Privacidade",
    subtitle: "Em conformidade com o RGPD (UE) 2016/679 e a Lei n.\u00ba 58/2019 de Portugal",
    sections: [
      {
        title: "1. Responsavel pelo Tratamento de Dados",
        content: "A entidade responsavel pelo tratamento dos teus dados pessoais e a Mirror (\u201cnos\u201d, \u201cnosso\u201d), com sede em Portugal.\n\nPara qualquer questao relacionada com a protecao de dados, podes contactar-nos atraves do e-mail: privacidade@mirror.app",
      },
      {
        title: "2. Dados Pessoais Recolhidos",
        content: "Ao inscreveres-te na lista de espera, recolhemos os seguintes dados:\n\u2022 Nome completo \u2014 para personalizar a comunicacao\n\u2022 Endereco de e-mail \u2014 para contacto e envio de informacoes sobre o lancamento\n\u2022 Numero de telemovel (opcional) \u2014 para contacto adicional, caso autorizado\n\u2022 Data e hora de inscricao \u2014 para registo e auditoria\n\u2022 Consentimento explicito \u2014 registo de que aceitaste esta politica",
      },
      {
        title: "3. Finalidade do Tratamento",
        content: "Os teus dados sao tratados exclusivamente para as seguintes finalidades:\n\u2022 Gestao da lista de espera e comunicacao sobre o lancamento do Mirror\n\u2022 Envio de informacoes relevantes sobre o produto, funcionalidades e acesso antecipado\n\u2022 Contacto para oferta de condicoes especiais de pre-lancamento\n\nOs teus dados nunca serao utilizados para fins diferentes dos acima indicados sem o teu consentimento previo e explicito.",
      },
      {
        title: "4. Base Juridica do Tratamento",
        content: "O tratamento dos teus dados pessoais baseia-se no teu consentimento explicito (Artigo 6.\u00ba, n.\u00ba 1, alinea a) do RGPD), prestado ao assinalar a caixa de consentimento e submeter o formulario de inscricao.\n\nTens o direito de retirar o teu consentimento a qualquer momento, sem que isso comprometa a licitude do tratamento efetuado com base no consentimento previamente dado.",
      },
      {
        title: "5. Periodo de Conservacao dos Dados",
        content: "Os teus dados serao conservados enquanto a lista de espera estiver ativa e durante um periodo maximo de 24 meses apos a tua inscricao, salvo se:\n\u2022 Te tornares utilizador do Mirror (caso em que se aplicara a politica de privacidade da aplicacao)\n\u2022 Solicitares a eliminacao antecipada dos teus dados\n\u2022 Retirares o teu consentimento\n\nFindo o periodo de conservacao, os dados serao eliminados de forma segura e irreversivel de todos os nossos sistemas e sub-processadores.",
      },
      {
        title: "6. Destinatarios e Sub-processadores",
        content: "Os teus dados podem ser partilhados com os seguintes sub-processadores, estritamente para as finalidades indicadas:\n\n\u2022 Supabase Inc. \u2014 Armazenamento de dados \u2014 UE (Frankfurt)\n\u2022 GitHub Pages \u2014 Alojamento do website \u2014 EUA (SCCs)\n\nTodos os sub-processadores estao vinculados por Acordos de Processamento de Dados (DPA) e cumprem o RGPD. As transferencias para fora do EEE sao protegidas por Clausulas Contratuais-Tipo (SCCs) aprovadas pela Comissao Europeia.\n\nOs teus dados nunca serao vendidos a terceiros nem utilizados para fins publicitarios de entidades externas.",
      },
      {
        title: "7. Publicidade e Conteudos Patrocinados",
        content: "A Plataforma podera apresentar, nas modalidades de utilizacao gratuita, conteudos publicitarios de terceiros sob a forma de anuncios de video recompensados (rewarded ads), cuja visualizacao e facultativa e iniciada exclusivamente por accao voluntaria do Utilizador.\n\nOs dados pessoais do Utilizador nao sao em circunstancia alguma partilhados com anunciantes, redes publicitarias ou quaisquer terceiros para efeitos de segmentacao publicitaria, profiling ou personalizacao de anuncios.\n\nOs planos de subscricao pagos poderao incluir a supressao total de conteudos publicitarios, conforme especificado nas condicoes de cada plano.",
      },
      {
        title: "8. Medidas de Seguranca",
        content: "Implementamos medidas tecnicas e organizativas adequadas para proteger os teus dados:\n\u2022 Encriptacao AES-256 em repouso\n\u2022 Encriptacao TLS 1.3 em transito\n\u2022 Controlo de acesso baseado em funcoes (Row Level Security)\n\u2022 Auditorias regulares de seguranca",
      },
      {
        title: "9. Limitacao de Responsabilidade e Exclusao de Garantias",
        content: "O Servico e disponibilizado \u201ctal como esta\u201d (as is) e \u201cconforme disponivel\u201d (as available), sem quaisquer garantias, expressas ou implicitas.\n\nA Mirror nao constitui, em caso algum, um servico de saude, dispositivo medico na acepcao do Regulamento (UE) 2017/745 (MDR), nem substitui o acompanhamento por profissionais de saude mental devidamente habilitados.",
      },
      {
        title: "10. Indemnizacao",
        content: "O Utilizador compromete-se a defender, indemnizar e isentar de responsabilidade a Mirror, os seus administradores, directores, colaboradores e agentes, de e contra quaisquer reclamacoes, responsabilidades, danos, perdas e despesas.",
      },
      {
        title: "11. Direitos do Titular dos Dados",
        content: "Nos termos do RGPD e da Lei n.\u00ba 58/2019, sao reconhecidos ao Utilizador os seguintes direitos:\n\u2022 Acesso (Art. 15.\u00ba)\n\u2022 Retificacao (Art. 16.\u00ba)\n\u2022 Apagamento (Art. 17.\u00ba)\n\u2022 Limitacao do tratamento (Art. 18.\u00ba)\n\u2022 Portabilidade (Art. 20.\u00ba)\n\u2022 Oposicao (Art. 21.\u00ba)\n\u2022 Retirada do consentimento a qualquer momento\n\nContacto: privacidade@mirror.app. Prazo de resposta: 30 dias.",
      },
      {
        title: "12. Autoridade de Controlo",
        content: "CNPD\nAv. D. Carlos I, 134 - 1.\u00ba, 1200-651 Lisboa\nwww.cnpd.pt | geral@cnpd.pt",
      },
      {
        title: "13. Cookies",
        content: "Este website utiliza exclusivamente cookies estritamente necessarios, isentos de consentimento nos termos da Diretiva ePrivacy e da Lei n.\u00ba 41/2004.",
      },
      {
        title: "14. Menores",
        content: "Idade minima: 16 anos (RGPD Art. 8.\u00ba, Lei 58/2019 Art. 16.\u00ba).",
      },
      {
        title: "15. Lei Aplicavel e Foro Competente",
        content: "Os presentes termos e condicoes regem-se pela legislacao da Republica Portuguesa. Para a resolucao de quaisquer litigios e competente o foro da comarca de Lisboa.",
      },
      {
        title: "16. Disposicoes Finais",
        content: "A Mirror reserva-se o direito de modificar unilateralmente os presentes termos a qualquer momento, sendo as alteracoes comunicadas ao Utilizador por e-mail com antecedencia minima de 15 dias.",
      },
    ],
    lastUpdate: "Ultima atualizacao: marco de 2026",
    legalRefs: "Regulamento (UE) 2016/679 (RGPD) \u00b7 Lei n.\u00ba 58/2019 \u00b7 Lei n.\u00ba 41/2004 \u00b7 Regulamento (UE) 2017/745 (MDR) \u00b7 Lei n.\u00ba 24/96 (Defesa do Consumidor) \u00b7 Orientacoes da CNPD",
  },
}

export default ptPT
