/**
 * SHARED CONTENT — everything that is the same in every language.
 *
 * URLs, images, icons, numbers and stacks live here; the locale files
 * (`en.js`, `fr.js`, `ar.js`) hold only words. `index.js` merges the two by
 * id, so adding a project or a skill means one entry here plus its text in
 * each locale.
 */

export const LANGS = ['en', 'fr', 'ar'];
export const DEFAULT_LANG = 'fr';

export const profile = {
  name: 'Hamza Elhatimy',
  initials: 'HE',
  email: 'hamzaelhatimy7@gmail.com',
  phone: '+212 609 510 158',
  phoneHref: 'tel:+212609510158',
  /* Digits only, as wa.me expects. */
  whatsapp: '212609510158',
  timezone: 'Africa/Casablanca',
  /* French CV, same file for every locale. Built from cv/cv-fr.html by
     cv/build.sh — edit the HTML and rebuild rather than replacing the PDF. */
  cv: '/cv-hamza-elhatimy.pdf',
  /* Page-1 render of the PDF for the in-page preview (built by cv/build.sh). */
  cvPreview: { src: '/cv-preview.webp', width: 1240, height: 1754 },
  /* The original 1107x1421 PNG was 1.65 MB but renders at ~390px wide.
     These derivatives are 26 KB / 40 KB — a 98% reduction. The PNG is kept
     as the final fallback. */
  avatar: {
    webp800: '/profile-pic-800.webp',
    webp1200: '/profile-pic-1200.webp',
    jpg800: '/profile-pic-800.jpg',
    png: '/profile-pic.png',
    width: 800,
    height: 1027,
  },
};

export const socials = {
  github: 'https://github.com/ELHATIMY-HAMZA',
  linkedin: 'https://linkedin.com/in/hamza-elhatimy',
  instagram: 'https://instagram.com/7amza_el__',
  email: 'mailto:hamzaelhatimy7@gmail.com',
};

export const navIds = ['services', 'work', 'about', 'contact'];

/** Hero proof stats. `numeric` animates with NumberTicker; `value` is static. */
export const heroStats = [
  { id: 'apps', numeric: 2 },
  { id: 'cpl', value: '€0.78' },
  { id: 'markets', numeric: 6 },
];

export const devStack = ['React', 'Node', 'n8n', 'Meta Ads'];

export const serviceIds = ['web', 'ads', 'automation', 'funnel'];

export const projects = [
  {
    id: 'dayweave',
    name: 'Dayweave',
    image: '/dayweave-preview.webp',
    deployUrl: 'https://dayweave-todo-list-app.vercel.app/',
    isPrivateSource: true,
    stack: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Express', icon: 'express' },
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodedotjs' },
    ],
  },
  {
    id: 'shortlist',
    name: 'Shortlist',
    image: '/shortlist-preview.webp',
    deployUrl: 'https://shortlist-ai-cv-analyser.vercel.app/',
    repoUrl: 'https://github.com/ELHATIMY-HAMZA/Ai-CV-Analyser-',
    isPrivateSource: false,
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Supabase', icon: 'supabase' },
    ],
  },
];

/**
 * Ads case studies. Metric values are copied from Meta Ads Manager — keep
 * them exact; the label says which campaign they come from.
 */
export const caseStudies = [
  {
    id: 'carRental',
    platforms: ['meta'],
    markets: [
      { code: 'SA', flag: '🇸🇦' },
      { code: 'AE', flag: '🇦🇪' },
      { code: 'QA', flag: '🇶🇦' },
      { code: 'FR', flag: '🇫🇷' },
      { code: 'NL', flag: '🇳🇱' },
    ],
    metrics: [
      { id: 'conversations', value: '57' },
      { id: 'cpc', value: '€0.78' },
      { id: 'reach', value: '4.9K' },
      { id: 'impressions', value: '12.3K' },
      { id: 'budget', value: '€10' },
    ],
  },
  {
    id: 'ecommerce',
    platforms: ['meta'],
    markets: [{ code: 'MA', flag: '🇲🇦' }],
    // TODO(hamza): add real results when you have them, e.g.
    // { id: 'orders', value: '120' }, { id: 'cpa', value: '35 MAD' }
    // and the matching labels in each locale's `metricLabels`.
    metrics: [],
  },
];

/**
 * Skill groups. `icon` is a Simple Icons slug from `ui/tech-icons.jsx`;
 * `lucide` is used instead for things that are a practice, not a brand.
 * Display names and tags come from the locale (`skills.items[id]`), falling
 * back to `name` here.
 */
export const skillGroups = [
  {
    id: 'dev',
    items: [
      { id: 'javascript', name: 'JavaScript', icon: 'javascript' },
      { id: 'react', name: 'React', icon: 'react' },
      { id: 'node', name: 'Node.js', icon: 'nodedotjs' },
      { id: 'express', name: 'Express', icon: 'express' },
      { id: 'mongodb', name: 'MongoDB', icon: 'mongodb' },
      { id: 'postgresql', name: 'PostgreSQL', icon: 'postgresql' },
      { id: 'tailwind', name: 'Tailwind CSS', icon: 'tailwindcss' },
      { id: 'supabase', name: 'Supabase', icon: 'supabase' },
      { id: 'clerk', name: 'Clerk', icon: 'clerk' },
      { id: 'docker', name: 'Docker', icon: 'docker' },
      { id: 'vercel', name: 'Vercel', icon: 'vercel' },
      { id: 'cloudflare', name: 'Cloudflare', icon: 'cloudflare' },
    ],
  },
  {
    id: 'ads',
    items: [
      { id: 'metaAds', name: 'Meta Ads', icon: 'meta' },
      { id: 'tiktokAds', name: 'TikTok Ads', icon: 'tiktok' },
      { id: 'pixel', name: 'Pixel & Conversions API', lucide: 'radar' },
      { id: 'ga4', name: 'Google Analytics 4', icon: 'googleanalytics' },
      { id: 'whatsapp', name: 'WhatsApp Business', icon: 'whatsapp' },
      { id: 'funnels', name: 'Sales funnels', lucide: 'funnel' },
    ],
  },
  {
    id: 'automation',
    items: [
      { id: 'n8n', name: 'n8n', icon: 'n8n' },
      { id: 'claude', name: 'Claude Code', icon: 'claude' },
      { id: 'codex', name: 'Codex', icon: 'openai' },
      { id: 'crm', name: 'HubSpot CRM', icon: 'hubspot' },
      { id: 'cms', name: 'WordPress', icon: 'wordpress' },
      { id: 'github', name: 'Git & GitHub', icon: 'github' },
    ],
  },
];
