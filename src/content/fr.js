/** Copie française. Même structure que `en.js` ; les données sont dans `shared.js`. */
export default {
  meta: {
    title: 'Hamza Elhatimy — Développeur Web & Growth à Casablanca',
    description:
      "Je crée des sites et applications web, je gère vos publicités Meta et TikTok, et j'automatise le suivi de vos prospects avec n8n et l'IA, pour les entreprises au Maroc, dans le Golfe et en Europe.",
  },

  ui: {
    skip: 'Aller au contenu',
    home: 'accueil',
    menu: 'Ouvrir ou fermer le menu',
    language: 'Langue',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
    backToTop: 'Retour en haut',
    copyEmail: "Copier l'e-mail",
    copied: 'Copié !',
    copyEmailAria: "Copier l'adresse e-mail",
    downloadCv: 'Télécharger mon CV',
    downloadCvNote: 'PDF · Français',
    previewCv: 'Aperçu du CV',
    close: 'Fermer',
    openPdf: 'Ouvrir le PDF',
    cvPreviewAlt: "Aperçu du CV de Hamza Elhatimy",
    visitLive: "Voir l'application",
    visitLiveAria: (name) => `Voir l'application ${name} (nouvel onglet)`,
    viewSource: 'Voir le code',
    privateSource: 'Code privé',
    techStack: 'Technologies utilisées',
  },

  profile: {
    role: 'Développeur Web & Growth',
    roleLine: 'Full-Stack · Publicité en ligne · Automatisation IA',
    location: 'Casablanca, Maroc',
    locationLong: 'Casablanca, Maroc (GMT+1)',
    availability: 'Disponible pour vos projets',
    statusValue: 'Disponible',
  },

  nav: {
    services: 'Services',
    work: 'Réalisations',
    about: 'À propos',
    contact: 'Contact',
  },
  navCta: 'Parlons-en',

  hero: {
    headline: ['Des sites qui vendent.', 'Des pubs qui convertissent.', 'Un suivi automatisé.'],
    subheadPrefix: 'Je suis ',
    subheadRest:
      ", développeur full-stack qui gère aussi vos publicités. Je crée votre site ou application web, je lance des campagnes Meta et TikTok qui remplissent votre WhatsApp, et j'automatise le suivi avec n8n et l'IA pour qu'aucun prospect ne soit oublié.",
    primaryCta: 'Écrivez-moi sur WhatsApp',
    secondaryCta: 'Voir mes réalisations',
    stats: {
      apps: 'Applications web en ligne',
      cpl: 'Par contact WhatsApp (campagne Arabie saoudite)',
      markets: 'Marchés publicitaires : Maroc, Golfe, Europe',
    },
  },

  services: {
    kicker: 'Ce que je fais',
    title: 'Quatre leviers pour faire grandir votre activité',
    lead: "Choisissez-en un, ou confiez-moi toute la chaîne : le site, le trafic, le suivi des prospects et la mesure des résultats.",
    problemLabel: 'Le problème',
    solutionLabel: 'Ma solution',
    items: {
      web: {
        title: 'Sites & applications web',
        problem: "Pas de site, ou un site lent qui ne ramène aucun client.",
        solution:
          "Des sites rapides, pensés mobile, et des applications sur mesure : réservation, demande de devis, espace client, SaaS.",
        deliverables: ['Landing pages', 'Systèmes de réservation', 'Tableaux de bord', 'Applications full-stack'],
      },
      ads: {
        title: 'Publicité Meta & TikTok',
        problem: 'Des publications boostées qui consomment le budget sans messages ni ventes.',
        solution:
          "Des campagnes construites autour d'un seul objectif : conversations WhatsApp, prospects ou commandes. Je teste les visuels et les audiences, puis j'investis là où ça marche.",
        deliverables: ['Meta Ads', 'TikTok Ads', 'Tests de créas', 'Maroc · Golfe · Europe'],
      },
      automation: {
        title: 'Automatisation & agents IA',
        problem: 'Des prospects rappelés des heures plus tard, ou oubliés. Les mêmes copier-coller tous les jours.',
        solution:
          "Des workflows n8n qui captent chaque prospect, répondent tout de suite et l'enregistrent dans votre CRM, et des agents IA (Claude Code, Codex) pour les tâches répétitives.",
        deliverables: ['Workflows n8n', 'Relance instantanée', 'Agents IA', 'Sync Sheets & API'],
      },
      funnel: {
        title: 'CRM, CMS & tunnels de vente',
        problem: 'Aucun suivi : personne ne sait quelle pub ou quelle page amène vraiment des clients.',
        solution:
          "Intégration CRM et CMS, Pixel Meta et API Conversions, GA4, et des landing pages améliorées étape par étape pour convertir plus de visiteurs.",
        deliverables: ['Intégration CRM', 'Mise en place CMS', 'Pixel & CAPI', 'Suivi GA4'],
      },
    },
  },

  work: {
    kicker: 'Réalisations',
    title: 'Des preuves, pas des promesses',
    lead: "Deux applications web en ligne que j'ai conçues et développées, et des campagnes publicitaires avec de vrais chiffres.",
    webLabel: 'Applications web',
    adsLabel: 'Publicité & croissance',
    projects: {
      dayweave: {
        category: 'Productivité',
        coverLabel: 'Application full-stack',
        status: 'En ligne sur Vercel',
        tagline: 'Une façon plus sereine de planifier sa journée.',
        description:
          "Avec une liste de tâches surchargée, difficile de savoir par où commencer. Dayweave réunit budget de temps, priorités et travail concentré au même endroit, pour planifier une journée à la mesure de votre vraie capacité.",
        imageAlt:
          "Page d'accueil de Dayweave avec un planificateur pour organiser, se concentrer et faire le bilan de sa journée.",
        stackLabel: 'Développé avec MERN',
        auth: 'Authentification Clerk',
      },
      shortlist: {
        category: 'Outil carrière IA',
        coverLabel: 'Application web IA',
        status: 'En ligne sur Vercel',
        tagline: 'Lisez votre CV comme un recruteur.',
        description:
          "Importez un CV en PDF, Word ou photo : Shortlist le note sur huit critères pondérés et montre les lignes exactes derrière chaque point. Collez une offre d'emploi pour voir les compétences communes, les manques et les modifications à faire.",
        imageAlt:
          "Page d'accueil de Shortlist montrant un exemple de CV avec les lignes justificatives surlignées et les scores par catégorie.",
        stackLabel: 'Développé avec',
        auth: 'Authentification Clerk · stockage privé des fichiers',
      },
    },
    caseStudies: {
      carRental: {
        category: 'Location de voitures · Génération de prospects',
        title: 'Remplir le WhatsApp des agences de location',
        context:
          "Des agences de location de voitures avaient besoin de demandes de réservation de voyageurs, pas de likes. J'ai lancé des campagnes Meta optimisées pour les conversations WhatsApp : chaque résultat est une vraie personne qui demande une voiture.",
        didLabel: "Ce que j'ai fait",
        did: [
          'Ciblage par pays, langue et intention de voyage',
          'Visuels et offres testés en parallèle',
          'Objectif messages qui ouvre une conversation WhatsApp en un clic',
          'Contrôle du budget quotidien et optimisation chaque semaine',
        ],
        metricsLabel: 'Campagne Arabie saoudite · Meta Ads',
        marketsLabel: "Marchés où j'ai lancé des campagnes",
      },
      ecommerce: {
        category: 'E-commerce · Ventes',
        title: 'Vendre des produits en ligne au Maroc',
        context:
          "Des campagnes Meta pour des produits e-commerce vendus à des acheteurs marocains, de la première publicité jusqu'à la commande confirmée.",
        didLabel: "Ce que j'ai fait",
        did: [
          "Tests d'offres et d'angles pour trouver ce qui fait acheter",
          'Visuels et vidéos pour Facebook et Instagram',
          "Parcours de commande adapté à la façon d'acheter au Maroc",
          'Budget augmenté sur les pubs gagnantes, le reste coupé tôt',
        ],
        metricsLabel: 'Meta Ads',
        marketsLabel: 'Marché',
      },
    },
    metricLabels: {
      conversations: 'Conversations lancées',
      cpc: 'Coût par conversation',
      reach: 'Personnes touchées',
      impressions: 'Impressions',
      budget: 'Budget quotidien',
    },
    markets: {
      SA: 'Arabie saoudite',
      AE: 'Émirats',
      QA: 'Qatar',
      FR: 'France',
      NL: 'Pays-Bas',
      MA: 'Maroc',
    },
  },

  process: {
    kicker: 'Ma méthode',
    title: 'Du premier appel à des clients réguliers',
    steps: [
      {
        title: 'Audit',
        body: "J'analyse votre site, vos publicités et la gestion actuelle de vos prospects, et je repère où vous perdez des clients.",
      },
      {
        title: 'Construction',
        body: 'Je crée ou corrige le site, la landing page et le suivi, pour que chaque visite soit mesurée.',
      },
      {
        title: 'Lancement des pubs',
        body: 'Des campagnes Meta et TikTok orientées messages, prospects ou ventes, avec un budget que vous maîtrisez.',
      },
      {
        title: 'Automatisation & suivi',
        body: "Les relances et l'envoi vers le CRM tournent seuls, et j'améliore les résultats semaine après semaine.",
      },
    ],
  },

  skills: {
    kicker: 'Boîte à outils',
    title: 'Les outils derrière les résultats',
    lead: 'Développement, publicité et automatisation dans une seule stack, pour que tout soit vraiment connecté.',
    groups: {
      dev: { label: 'Développement', blurb: 'Sites, applications web & API' },
      ads: { label: 'Publicité & mesure', blurb: 'Du trafic payant que l’on peut mesurer' },
      automation: { label: 'Automatisation & IA', blurb: 'Des workflows et des agents qui font le travail répétitif' },
    },
    items: {
      javascript: { tag: 'ES6+ · Environnements modernes' },
      react: { tag: 'Composants · État · Hooks' },
      node: { tag: 'API & serveurs' },
      express: { tag: 'API REST & middlewares' },
      mongodb: { tag: 'Bases orientées documents' },
      postgresql: { tag: 'Bases relationnelles' },
      tailwind: { tag: 'Design systems' },
      supabase: { tag: 'Postgres, auth & stockage' },
      clerk: { tag: 'Authentification & comptes' },
      docker: { tag: 'Conteneurs & déploiement' },
      vercel: { tag: 'Hébergement & déploiement continu' },
      cloudflare: { tag: 'DNS, CDN & sécurité' },
      metaAds: { tag: 'Campagnes Facebook & Instagram' },
      tiktokAds: { tag: 'Campagnes vidéo courtes' },
      pixel: { name: 'Pixel & API Conversions', tag: 'Suivi précis des conversions' },
      ga4: { tag: 'Suivi du trafic & des objectifs' },
      whatsapp: { tag: 'Campagnes click-to-chat' },
      funnels: { name: 'Tunnels de vente', tag: 'Landing pages qui convertissent' },
      n8n: { tag: 'Automatisation de workflows' },
      claude: { tag: 'Agent IA pour développer & automatiser' },
      codex: { tag: 'Agent IA de développement' },
      crm: { tag: 'Intégration CRM · prospects relancés' },
      cms: { tag: 'CMS · contenu modifiable par le client' },
      github: { tag: 'Versioning & CI' },
    },
  },

  about: {
    kicker: 'À propos',
    title: 'Un développeur qui pense comme un marketeur',
    intro:
      "Le code n'a de valeur que s'il apporte des résultats. Je fais le lien entre la technique et le marketing, pour que votre site, vos pubs et votre suivi fonctionnent comme un seul système.",
    story: {
      title: 'Pensé pour les résultats, pas seulement pour le look',
      body: "J'ai commencé comme développeur full-stack sur des applications MERN. Puis j'ai géré des publicités pour de vraies entreprises et j'ai vu où se perdent les clients : pages lentes, pubs sans suivi, prospects sans réponse. Aujourd'hui, je m'occupe de toute la chaîne.",
      tags: ['Full-stack (MERN)', 'Meta & TikTok Ads', 'n8n & agents IA'],
      hiring: 'Également ouvert à un poste en développement web ou marketing tech.',
    },
    based: {
      title: 'Basé à Casablanca',
      body: 'Maroc (GMT+1). Je travaille avec des entreprises au Maroc, dans le Golfe et en Europe.',
      clockLabel: 'Casablanca :',
      clockLoading: 'Chargement...',
    },
    ai: {
      title: 'Une automatisation qui ne dort jamais',
      body: "Les prospects venant des pubs, du site et de WhatsApp passent par un agent IA, puis n8n les envoie dans votre CRM et déclenche la relance.",
      badge: 'Pipelines automatisés',
      nodes: {
        ads: 'Pubs & formulaires',
        site: 'Site web',
        chat: 'WhatsApp',
        agent: 'Agent IA',
        crm: 'n8n → CRM',
      },
      legend: 'pubs · site · whatsapp → agent → crm',
    },
    languages: {
      title: 'Je parle votre langue',
      body: "Arabe, français et anglais, pour les clients et les équipes au Maroc comme à l'étranger.",
      chips: ['Arabe (langue maternelle)', 'Français (intermédiaire)', 'Anglais (intermédiaire)'],
    },
  },

  contact: {
    pill: 'Démarrons la discussion',
    title: 'Dites-moi ce que vous voulez développer.',
    body: "Un nouveau site, plus de clients grâce à la pub, ou moins de travail manuel. WhatsApp est le moyen le plus rapide de me joindre, sinon utilisez le formulaire.",
    whatsapp: {
      cta: 'Discuter sur WhatsApp',
      note: 'Réponse la plus rapide',
      message: "Bonjour Hamza, j'ai vu votre portfolio et j'aimerais parler d'un projet.",
    },
    channels: {
      emailLabel: 'E-MAIL',
      phoneLabel: 'TÉLÉPHONE / WHATSAPP',
      locationLabel: 'LOCALISATION',
    },
    fields: {
      name: { label: 'Votre nom', placeholder: 'Youssef Benali' },
      email: { label: 'Votre e-mail', placeholder: 'vous@entreprise.com' },
      subject: { label: 'Votre besoin', placeholder: 'Site web, publicité, automatisation...' },
      message: {
        label: 'Message',
        placeholder: 'Parlez-moi de votre activité, de votre objectif et de vos délais...',
      },
    },
    submit: 'Envoyer le message',
    submitting: 'Envoi...',
    messages: {
      success: 'Merci ! Votre message a bien été envoyé.',
      error: "Le message n'a pas pu être envoyé. Contactez-moi sur WhatsApp ou par e-mail.",
    },
  },

  footer: {
    text: 'Hamza Elhatimy. Réalisé avec React & Tailwind.',
  },
};
