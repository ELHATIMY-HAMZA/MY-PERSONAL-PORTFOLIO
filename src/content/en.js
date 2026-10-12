/** English copy. Same shape as `fr.js` and `ar.js`; data lives in `shared.js`. */
export default {
  meta: {
    title: 'Hamza Elhatimy — Web & Growth Developer in Casablanca',
    description:
      'I build websites and web apps, run Meta and TikTok ads, and automate lead follow-up with n8n and AI, for businesses in Morocco, the Gulf and Europe.',
  },

  ui: {
    skip: 'Skip to content',
    home: 'home',
    menu: 'Toggle navigation menu',
    language: 'Language',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    backToTop: 'Back to top',
    copyEmail: 'Copy email',
    copied: 'Copied!',
    copyEmailAria: 'Copy email address',
    downloadCv: 'Download my CV',
    downloadCvNote: 'PDF · French',
    previewCv: 'Preview CV',
    close: 'Close',
    openPdf: 'Open PDF',
    cvPreviewAlt: "Preview of Hamza Elhatimy's CV",
    visitLive: 'Visit live app',
    visitLiveAria: (name) => `Visit ${name} live app (opens in a new tab)`,
    viewSource: 'View source',
    privateSource: 'Private source',
    techStack: 'Technology stack',
  },

  profile: {
    role: 'Web & Growth Developer',
    roleLine: 'Full-Stack · Paid Ads · AI Automation',
    location: 'Casablanca, Morocco',
    locationLong: 'Casablanca, Morocco (GMT+1)',
    availability: 'Available for projects',
    statusValue: 'Open to projects',
  },

  nav: {
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
  },
  navCta: "Let's talk",

  hero: {
    headline: ['Websites that sell.', 'Ads that bring clients.', 'Follow-up on autopilot.'],
    subheadPrefix: "I'm ",
    subheadRest:
      ', a full-stack developer who also runs the ads. I build your website or web app, launch Meta and TikTok campaigns that fill your WhatsApp, and automate the follow-up with n8n and AI, so no lead goes cold.',
    primaryCta: 'Message me on WhatsApp',
    secondaryCta: 'See my work',
    stats: {
      apps: 'Live web apps',
      cpl: 'Per WhatsApp lead (KSA campaign)',
      markets: 'Ad markets: Morocco, Gulf, Europe',
    },
  },

  services: {
    kicker: 'What I do',
    title: 'Four ways I help your business grow',
    lead: 'Pick one, or let me handle the whole chain: the site, the traffic, the follow-up and the tracking.',
    problemLabel: 'The problem',
    solutionLabel: 'What I do',
    items: {
      web: {
        title: 'Websites & web apps',
        problem: 'No website, or one that loads slowly and never brings in a client.',
        solution:
          'Fast, mobile-first websites and custom web apps: booking and quote forms, client dashboards, SaaS products.',
        deliverables: ['Landing pages', 'Booking systems', 'Dashboards', 'Full-stack apps'],
      },
      ads: {
        title: 'Paid ads on Meta & TikTok',
        problem: 'Boosted posts that burn budget with no messages or sales to show for it.',
        solution:
          'Campaigns built around one goal: WhatsApp conversations, leads or orders. I test creatives and audiences, then move the budget to what works.',
        deliverables: ['Meta Ads', 'TikTok Ads', 'Creative testing', 'Morocco · Gulf · Europe'],
      },
      automation: {
        title: 'Automation & AI agents',
        problem: 'Leads answered hours later, or forgotten. The same copy-paste work every day.',
        solution:
          'n8n workflows that capture every lead, reply instantly and log it in your CRM, plus AI agents built with Claude Code and Codex for repetitive tasks.',
        deliverables: ['n8n workflows', 'Instant follow-up', 'AI agents', 'Sheets & API sync'],
      },
      funnel: {
        title: 'CRM, CMS & sales funnels',
        problem: 'No tracking, so nobody knows which ad or page actually brings clients.',
        solution:
          'CRM and CMS integration, Meta Pixel and Conversions API, GA4, and landing pages improved step by step to convert more visitors.',
        deliverables: ['CRM integration', 'CMS setup', 'Pixel & CAPI', 'GA4 tracking'],
      },
    },
  },

  work: {
    kicker: 'Selected work',
    title: 'Proof, not promises',
    lead: 'Two live web apps I designed and built, and ad campaigns with real numbers from Ads Manager.',
    webLabel: 'Web apps',
    adsLabel: 'Ads & growth',
    projects: {
      dayweave: {
        category: 'Productivity',
        coverLabel: 'Full-stack app',
        status: 'Live on Vercel',
        tagline: 'A calmer way to plan your day.',
        description:
          'Overloaded to-do lists make it hard to know where to start. Dayweave brings time budgeting, task priorities and focused work into one place, so you can plan a day that fits your actual capacity.',
        imageAlt:
          "Dayweave's live landing page with a daily planner for planning, focusing and reflecting.",
        stackLabel: 'Built with MERN',
        auth: 'Clerk authentication',
      },
      shortlist: {
        category: 'AI career tool',
        coverLabel: 'AI web app',
        status: 'Live on Vercel',
        tagline: 'Read your CV the way a recruiter does.',
        description:
          'Upload a CV as a PDF, Word file or photo and Shortlist scores it across eight weighted categories, pointing to the exact lines behind every point. Paste a job description to see shared skills, gaps and the edits that close them.',
        imageAlt:
          "Shortlist's landing page showing a sample CV with highlighted evidence lines and per-category scores.",
        stackLabel: 'Built with',
        auth: 'Clerk authentication · private file storage',
      },
    },
    caseStudies: {
      carRental: {
        category: 'Car rental · Lead generation',
        title: 'Filling WhatsApp for car-rental agencies',
        context:
          'Car-rental agencies needed booking requests from travellers, not likes. I ran Meta campaigns optimised for WhatsApp conversations, so every result is a real person asking about a car.',
        didLabel: 'What I did',
        did: [
          'Targeting by country, language and travel intent',
          'Creatives and offers tested side by side',
          'Messaging objective that opens a WhatsApp chat in one tap',
          'Daily budget control and weekly optimisation',
        ],
        metricsLabel: 'Saudi Arabia campaign · Meta Ads',
        marketsLabel: 'Markets I have run ads in',
      },
      ecommerce: {
        category: 'E-commerce · Sales',
        title: 'Selling products online in Morocco',
        context:
          'Meta campaigns for e-commerce products sold to Moroccan buyers, from the first ad to the confirmed order.',
        didLabel: 'What I did',
        did: [
          'Offer and angle testing to find what makes people buy',
          'Video and image creatives for Facebook and Instagram',
          'Order flow built for how Moroccans buy online',
          'Budget scaled on winning ads, the rest cut early',
        ],
        metricsLabel: 'Meta Ads',
        marketsLabel: 'Market',
      },
    },
    metricLabels: {
      conversations: 'Conversations started',
      cpc: 'Cost per conversation',
      reach: 'People reached',
      impressions: 'Impressions',
      budget: 'Daily budget',
    },
    markets: {
      SA: 'Saudi Arabia',
      AE: 'UAE',
      QA: 'Qatar',
      FR: 'France',
      NL: 'Netherlands',
      MA: 'Morocco',
    },
  },

  process: {
    kicker: 'How I work',
    title: 'From the first call to steady clients',
    steps: [
      {
        title: 'Audit',
        body: 'I look at your site, your ads and how leads are handled today, and find where clients are lost.',
      },
      {
        title: 'Build',
        body: 'I build or fix the website, landing page and tracking, so every visit can be measured.',
      },
      {
        title: 'Launch ads',
        body: 'Meta and TikTok campaigns aimed at messages, leads or sales, with a budget you control.',
      },
      {
        title: 'Automate & improve',
        body: 'Follow-ups and CRM routing run on their own, and I improve the results week after week.',
      },
    ],
  },

  skills: {
    kicker: 'Toolbox',
    title: 'The tools behind the results',
    lead: 'Development, ads and automation in one stack, so every piece actually connects.',
    groups: {
      dev: { label: 'Development', blurb: 'Websites, web apps & APIs' },
      ads: { label: 'Ads & tracking', blurb: 'Paid traffic you can measure' },
      automation: { label: 'Automation & AI', blurb: 'Workflows and agents that do the busywork' },
    },
    items: {
      javascript: { tag: 'ES6+ · Modern runtimes' },
      react: { tag: 'Components · State · Hooks' },
      node: { tag: 'APIs & servers' },
      express: { tag: 'REST APIs & middleware' },
      mongodb: { tag: 'Document databases' },
      postgresql: { tag: 'Relational databases' },
      tailwind: { tag: 'Design systems' },
      supabase: { tag: 'Postgres, auth & storage' },
      clerk: { tag: 'Authentication & user accounts' },
      docker: { tag: 'Containers & deployment' },
      vercel: { tag: 'Hosting & CI deploys' },
      cloudflare: { tag: 'DNS, CDN & security' },
      metaAds: { tag: 'Facebook & Instagram campaigns' },
      tiktokAds: { tag: 'Short-video campaigns' },
      pixel: { tag: 'Accurate conversion tracking' },
      ga4: { tag: 'Traffic & goal tracking' },
      whatsapp: { tag: 'Click-to-chat campaigns' },
      funnels: { tag: 'Landing pages that convert' },
      n8n: { tag: 'Workflow automation' },
      claude: { tag: 'AI agent for building & automating' },
      codex: { tag: 'AI coding agent' },
      crm: { tag: 'CRM integration · leads followed up' },
      cms: { tag: 'CMS · content clients edit themselves' },
      github: { tag: 'Version control & CI' },
    },
  },

  about: {
    kicker: 'About',
    title: 'A developer who thinks like a marketer',
    intro:
      'Code only matters if it brings results. I connect the technical side and the marketing side, so your website, ads and follow-up work as one system.',
    story: {
      title: 'Built for results, not just for looks',
      body: 'I started as a full-stack developer building MERN apps. Then I ran ads for real businesses and saw where clients get lost: slow pages, ads without tracking, leads nobody answers. Now I fix the whole chain.',
      tags: ['Full-stack (MERN)', 'Meta & TikTok Ads', 'n8n & AI agents'],
      hiring: 'Also open to full-time roles in web development or marketing tech.',
    },
    based: {
      title: 'Based in Casablanca',
      body: 'Morocco (GMT+1). Working with businesses in Morocco, the Gulf and Europe.',
      clockLabel: 'Casablanca:',
      clockLoading: 'Loading...',
    },
    ai: {
      title: 'Automation that never sleeps',
      body: 'Leads from ads, your site and WhatsApp go to an AI agent, then n8n routes them into your CRM and sends the follow-up.',
      badge: 'Automated pipelines',
      nodes: {
        ads: 'Ads & forms',
        site: 'Website',
        chat: 'WhatsApp',
        agent: 'AI agent',
        crm: 'n8n → CRM',
      },
      legend: 'ads · site · whatsapp → agent → crm',
    },
    languages: {
      title: 'I speak your language',
      body: 'Arabic, French and English, for clients and teams in Morocco and abroad.',
      chips: ['Arabic (native)', 'French (intermediate)', 'English (intermediate)'],
    },
  },

  contact: {
    pill: 'Start a conversation',
    title: 'Tell me what you want to grow.',
    body: 'A new website, more clients from ads, or less manual work. WhatsApp is the fastest way to reach me, or use the form.',
    whatsapp: {
      cta: 'Chat on WhatsApp',
      note: 'Fastest reply',
      message: "Hi Hamza, I saw your portfolio and I'd like to talk about a project.",
    },
    channels: {
      emailLabel: 'EMAIL',
      phoneLabel: 'PHONE / WHATSAPP',
      locationLabel: 'LOCATION',
    },
    fields: {
      name: { label: 'Your name', placeholder: 'Youssef Benali' },
      email: { label: 'Your email', placeholder: 'you@company.com' },
      subject: { label: 'What do you need?', placeholder: 'Website, ads, automation...' },
      message: {
        label: 'Message',
        placeholder: 'Tell me about your business, your goal and your timeline...',
      },
    },
    submit: 'Send message',
    submitting: 'Sending...',
    messages: {
      success: 'Thank you! Your message has been sent.',
      error: 'The message could not be sent. Please reach me on WhatsApp or by email.',
    },
  },

  footer: {
    text: 'Hamza Elhatimy. Built with React & Tailwind.',
  },
};
