const enGB = {
  // Page
  page: {
    skipToContent: "Skip to content",
  },

  // Header
  header: {
    nav: {
      features: "Features",
      plans: "Plans",
      faq: "FAQ",
    },
    cta: "Join Now",
    openMenu: "Open menu",
  },

  // Hero Section
  hero: {
    badge: "Your mental health matters",
    titlePrefix: "Understand",
    typingTexts: [
      "your mind",
      "your emotions",
      "your well-being",
      "your inner peace",
    ],
    subtitleBefore: "You talk, the AI understands how you feel and gives you",
    subtitleHighlight: " insights about yourself",
    subtitleAfter: ". Simple.",
    pills: [
      { label: "Emotional Analysis" },
      { label: "100% Private" },
      { label: "Daily Insights" },
    ],
  },

  // Lead Form
  leadForm: {
    title: "Join the waitlist",
    subtitle: "Be one of the first to try Mirror.",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "email@example.com",
    phoneLabel: "Phone",
    phoneOptional: "(optional)",
    phonePlaceholder: "+351 912 345 678",
    consentBefore: "I have read and accept the ",
    consentLink: "privacy policy",
    submit: "I want in",
    successTitle: "You're in!",
    successMessageBefore: "Great, ",
    successMessageAfter: "! We'll let you know as soon as Mirror is ready. Keep an eye on your email.",
    successFooter: "You take care of yourself. We'll handle the rest.",
    badgeGdpr: "GDPR protected data",
    badgeInterested: "+500 interested",
    errorEmail: "Please enter a valid email address.",
    errorPhone: "Please enter a valid Portuguese phone number (e.g. +351 912 345 678).",
    errorSubmit: "Something went wrong. Please try again.",
  },

  // Stats Section
  stats: {
    titleBefore: "Brazil needs ",
    titleHighlight: "Mirror",
    subtitle: "Brazil is the most anxious country in the world. Caring for your mind is still expensive and hard to access. Mirror makes self-knowledge affordable, every day.",
    source: "Source: World Mental Health Survey \u2014 Harvard Medical School / NOVA Medical School, 2023",
    items: [
      {
        suffix: ".8%",
        description: "of Brazilians diagnosed with anxiety (Covitel 2023)",
        source: "INE/INSA \u2014 National Health Survey, 2024",
      },
      {
        suffix: "st",
        description: "Brazil is the most anxious country in the world (WHO)",
        source: "Portuguese Psychologists Association, 2024",
      },
      {
        suffix: "k",
        description: "work leaves for mental disorders in 2024 (+68%)",
        source: "Eurobarometer 529 \u2014 European Commission, 2023",
      },
      {
        suffix: "\u00d7",
        description: "more affordable than a private consultation",
        source: "Mirror \u20ac5.99/mo vs. ~\u20ac150/session (OPP, 2024)",
      },
    ],
  },

  // Features Section
  features: {
    sectionTitleBefore: "Meet ",
    sectionTitleHighlight: "Mirror",
    ariaLabel: "Mirror Features",
    items: [
      {
        badge: "The essentials",
        title: "Speak. Mirror listens.",
        description: "Record your voice, the AI understands how you feel and gives you useful reflections.",
      },
      {
        badge: "Your patterns",
        title: "See how you feel over time.",
        description: "Your emotions on a chart. Spot patterns you never noticed.",
      },
      {
        badge: "Your score",
        title: "Your well-being, in a number.",
        description: "From 0 to 100, see how you're doing and track your progress.",
      },
      {
        badge: "For tough days",
        title: "When you need us, we're here.",
        description: "Breathing exercises and calming techniques. No judgement.",
      },
    ],
    screens: {
      ariaLabel: "Mirror app screen simulation",
      voiceDiary: {
        title: "Voice Diary",
        date: "Tuesday, 18 Mar 2026",
        emotionsDetected: "Emotions detected",
        emotions: ["Anxiety", "Hope", "Calm"],
        patternLabel: "Pattern detected:",
        patternText: "on Tuesdays you feel more anxious",
      },
      timeline: {
        title: "Emotional Timeline",
        period: "Last week",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        emotions: ["Joy", "Anxiety", "Calm"],
        insightLabel: "Insight:",
        insightText: "after exercising your mood improves by 40%",
        bestDay: "Best day",
        bestDayValue: "Thursday",
        mostFrequent: "Most frequent",
        mostFrequentValue: "Calm",
      },
      mirrorScore: {
        title: "Mirror Score\u2122",
        subtitle: "Your well-being index",
        of100: "of 100",
        thisWeek: "+5 this week",
        streak: "12 day streak",
        last7Days: "Last 7 days",
        barDays: ["M", "T", "W", "T", "F", "S", "S"],
        stats: [
          { label: "Average", value: "72" },
          { label: "Record", value: "85" },
          { label: "Consist.", value: "94%" },
        ],
      },
      emergency: {
        title: "Vent Mode",
        subtitle: "Guided breathing exercise",
        breatheIn: "Breathe in...",
        phases: [
          { label: "Inhale", sec: "4s" },
          { label: "Hold", sec: "7s" },
          { label: "Exhale", sec: "8s" },
        ],
        supportMessage: "I'm here with you \ud83d\udc9c",
      },
    },
  },

  // Pricing Section
  pricing: {
    titleBefore: "Plans for ",
    titleHighlight: "everyone",
    subtitle: "Starting at \u20ac0. The Essential plan costs less than a coffee per week.",
    monthly: "Monthly",
    yearly: "Yearly",
    discount: "-33%",
    mostPopular: "Most popular",
    cta: "Join the waitlist",
    perYear: "/year",
    perMonth: "/month",
    plans: [
      {
        name: "Free",
        description: "To try it out",
        features: [
          "3 voice entries per month",
          "Mirror Score\u2122 (today only, no history)",
          "Basic insight (short summary)",
          "Vent Mode (1\u00d7 per month)",
        ],
      },
      {
        name: "Essential",
        description: "For those who really want to take care of themselves",
        features: [
          "Unlimited voice entries",
          "Mirror Score\u2122 with full history",
          "Unlimited emotional timeline",
          "Unlimited Vent Mode",
          "Full insights with patterns",
          "Shareable Insight Cards",
          "Weekly storytelling summary",
          "7-day challenges",
          "Night Mode (pre-sleep check-in)",
        ],
      },
      {
        name: "Plus",
        description: "To go deeper",
        features: [
          "Everything in Essential",
          "Monthly and quarterly summaries",
          "Advanced pattern analysis",
          "Detailed PDF reports",
          "Data export",
          "Priority support",
          "Ad-free",
        ],
      },
    ],
  },

  // FAQ Section
  faq: {
    titleBefore: "Frequently asked ",
    titleHighlight: "questions",
    subtitle: "The most common questions.",
    items: [
      {
        question: "What is Mirror?",
        answer: "Mirror is a voice diary with AI. You speak for a few minutes a day, the AI transcribes, detects emotions and gives you insights. You get an emotional timeline, the Mirror Score, and a mode for tough days. It doesn't replace professional support. It's a tool to help you know yourself better.",
      },
      {
        question: "Does Mirror replace a psychologist?",
        answer: "No. Mirror helps you know yourself better, but it doesn't replace a psychologist. It doesn't make diagnoses or give clinical advice. In compliance with EU MDR 2017/745, Mirror makes no clinical claims. If you need professional help, seek a specialist.",
      },
      {
        question: "Is my data safe?",
        answer: "Yes. Everything is encrypted with AES-256 at rest and TLS 1.3 in transit. Only you can access your data thanks to Row Level Security. As this is health data, GDPR Art. 9 applies and processing is based on your explicit consent (Art. 6(1)(a)). Data stored in the EU (Frankfurt). Supervisory authority: CNPD.",
      },
      {
        question: "How does the voice diary work?",
        answer: "You speak 2 to 5 minutes a day about what you felt or experienced. The AI transcribes, analyses emotions and gives you insights. Over time, you build a timeline that helps you see patterns. No data is shared with third parties without your consent (GDPR Art. 7).",
      },
      {
        question: "How much does Mirror cost?",
        answer: "You can try it for free with 3 entries per month. The Essential plan costs \u20ac5.99/month or \u20ac47.99/year (save 33%). The Plus plan at \u20ac9.99/month includes everything and is ad-free. Cancel anytime. Secure payments via Stripe, with card or SEPA.",
      },
      {
        question: "Can I delete my data?",
        answer: "Yes. There's a \u00abDelete everything\u00bb button that removes your data within 30 days, as per GDPR Art. 17 (right to be forgotten). You can also export everything at any time (GDPR Art. 20).",
      },
      {
        question: "Does Mirror use my data to train AI?",
        answer: "No. Your recordings and entries are never used to train AI. Your data is only used to generate your insights, as per GDPR Art. 5(1)(b).",
      },
      {
        question: "What is the minimum age to use Mirror?",
        answer: "16 years old. This is the minimum set by GDPR Art. 8 and Portuguese Law 58/2019 Art. 16 for autonomous consent in Portugal.",
      },
    ],
  },

  // CTA Section
  cta: {
    badge: "Launching soon",
    title: "Start taking care of yourself.",
    subtitle: "Join the waitlist. Be one of the first to use Mirror when it launches.",
    button: "I want to try it",
    disclaimer: "No commitment. Cancel anytime.",
  },

  // Footer
  footer: {
    brandDescription: "Your AI voice diary. To know yourself better, one day at a time.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    productLinks: [
      { label: "Features", href: "#funcionalidades" },
      { label: "Plans", href: "#precos" },
      { label: "FAQ", href: "#faq" },
    ],
    companyLinks: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
    legalLinks: [
      { label: "Privacy", href: "#" },
      { label: "Terms of use", href: "#" },
      { label: "GDPR", href: "#" },
    ],
    copyright: "All rights reserved.",
    madeWith: "Made with",
    madeIn: "in Portugal",
  },

  // Geo Block
  geoBlock: {
    ptTitle: "O Mirror ainda nao chegou ao teu pais.",
    ptDescription: "Estamos a trabalhar nisso. Deixa o teu e-mail e avisamos-te quando chegarmos ai.",
    enTitle: "Mirror is not yet available in your country.",
    enDescription: "We're working on it. Drop your email and we'll let you know when we launch in your area.",
    placeholder: "email@example.com",
    submit: "Notify me",
    thanksPt: "Obrigado! Entraremos em contacto em breve.",
    thanksEn: "Thank you! We'll be in touch soon.",
    availableNote: "\ud83c\uddf5\ud83c\uddf9 Available in Portugal / Disponivel em Portugal",
    close: "Close / Fechar",
  },

  // Privacy Policy
  privacyPolicy: {
    title: "Privacy Policy",
    subtitle: "In compliance with GDPR (EU) 2016/679 and Portuguese Law No. 58/2019",
    sections: [
      {
        title: "1. Data Controller",
        content: "The entity responsible for processing your personal data is Mirror (\u201cwe\u201d, \u201cour\u201d), based in Portugal.\n\nFor any data protection queries, you can contact us at: privacidade@mirror.app",
      },
      {
        title: "2. Personal Data Collected",
        content: "When you sign up for the waitlist, we collect the following data:\n\u2022 Full name \u2014 to personalise communication\n\u2022 Email address \u2014 for contact and launch information\n\u2022 Phone number (optional) \u2014 for additional contact, if authorised\n\u2022 Date and time of registration \u2014 for record-keeping and auditing\n\u2022 Explicit consent \u2014 record that you accepted this policy",
      },
      {
        title: "3. Purpose of Processing",
        content: "Your data is processed exclusively for the following purposes:\n\u2022 Waitlist management and communication about the Mirror launch\n\u2022 Sending relevant information about the product, features and early access\n\u2022 Contact regarding special pre-launch offers\n\nYour data will never be used for purposes other than those stated above without your prior explicit consent.",
      },
      {
        title: "4. Legal Basis for Processing",
        content: "The processing of your personal data is based on your explicit consent (Article 6(1)(a) of the GDPR), given by checking the consent box and submitting the registration form.\n\nYou have the right to withdraw your consent at any time, without affecting the lawfulness of processing carried out prior to withdrawal.",
      },
      {
        title: "5. Data Retention Period",
        content: "Your data will be retained while the waitlist is active and for a maximum of 24 months after registration, unless:\n\u2022 You become a Mirror user (in which case the app's privacy policy will apply)\n\u2022 You request early deletion of your data\n\u2022 You withdraw your consent\n\nAfter the retention period, data will be securely and irreversibly deleted from all our systems and sub-processors.",
      },
      {
        title: "6. Recipients and Sub-processors",
        content: "Your data may be shared with the following sub-processors, strictly for the stated purposes:\n\n\u2022 Supabase Inc. \u2014 Data storage \u2014 EU (Frankfurt)\n\u2022 GitHub Pages \u2014 Website hosting \u2014 USA (SCCs)\n\nAll sub-processors are bound by Data Processing Agreements (DPA) and comply with the GDPR. Transfers outside the EEA are protected by Standard Contractual Clauses (SCCs) approved by the European Commission.\n\nYour data will never be sold to third parties or used for advertising purposes by external entities.",
      },
      {
        title: "7. Advertising and Sponsored Content",
        content: "The Platform may display, in free-tier usage, third-party advertising content in the form of rewarded video ads, which are optional and initiated exclusively by the User's voluntary action.\n\nThe User's personal data is never shared with advertisers, ad networks or any third parties for ad targeting, profiling or ad personalisation purposes.\n\nPaid subscription plans may include complete removal of advertising content, as specified in each plan's conditions.",
      },
      {
        title: "8. Security Measures",
        content: "We implement appropriate technical and organisational measures to protect your data:\n\u2022 AES-256 encryption at rest\n\u2022 TLS 1.3 encryption in transit\n\u2022 Role-based access control (Row Level Security)\n\u2022 Regular security audits",
      },
      {
        title: "9. Limitation of Liability and Disclaimer",
        content: "The Service is provided \u201cas is\u201d and \u201cas available\u201d, without any warranties, express or implied.\n\nMirror does not constitute, under any circumstances, a health service, medical device within the meaning of Regulation (EU) 2017/745 (MDR), nor does it replace support from duly qualified mental health professionals.",
      },
      {
        title: "10. Indemnification",
        content: "The User agrees to defend, indemnify and hold harmless Mirror, its directors, officers, employees and agents, from and against any claims, liabilities, damages, losses and expenses.",
      },
      {
        title: "11. Data Subject Rights",
        content: "Under the GDPR and Law No. 58/2019, Users are granted the following rights:\n\u2022 Access (Art. 15)\n\u2022 Rectification (Art. 16)\n\u2022 Erasure (Art. 17)\n\u2022 Restriction of processing (Art. 18)\n\u2022 Portability (Art. 20)\n\u2022 Objection (Art. 21)\n\u2022 Withdrawal of consent at any time\n\nContact: privacidade@mirror.app. Response time: 30 days.",
      },
      {
        title: "12. Supervisory Authority",
        content: "CNPD\nAv. D. Carlos I, 134 - 1.\u00ba, 1200-651 Lisboa\nwww.cnpd.pt | geral@cnpd.pt",
      },
      {
        title: "13. Cookies",
        content: "This website uses only strictly necessary cookies, exempt from consent under the ePrivacy Directive and Portuguese Law No. 41/2004.",
      },
      {
        title: "14. Minors",
        content: "Minimum age: 16 years (GDPR Art. 8, Portuguese Law 58/2019 Art. 16).",
      },
      {
        title: "15. Applicable Law and Jurisdiction",
        content: "These terms and conditions are governed by the laws of the Portuguese Republic. For the resolution of any disputes, the courts of Lisbon shall have jurisdiction.",
      },
      {
        title: "16. Final Provisions",
        content: "Mirror reserves the right to unilaterally modify these terms at any time, with changes communicated to the User by email with at least 15 days' notice.",
      },
    ],
    lastUpdate: "Last updated: March 2026",
    legalRefs: "Regulation (EU) 2016/679 (GDPR) \u00b7 Law No. 58/2019 \u00b7 Law No. 41/2004 \u00b7 Regulation (EU) 2017/745 (MDR) \u00b7 Law No. 24/96 (Consumer Protection) \u00b7 CNPD Guidelines",
  },
}

export default enGB
