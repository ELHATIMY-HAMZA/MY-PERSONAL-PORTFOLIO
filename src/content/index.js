/**
 * CONTENT — composes shared data (`shared.js`) with one locale's words.
 *
 * Components never import locale files directly; they call `useContent()`
 * (see `i18n.jsx`), which returns `getContent(lang)`. The composed object is
 * memoised per language, so switching back and forth is free.
 */
import * as shared from './shared';
import en from './en';
import fr from './fr';
import ar from './ar';

const LOCALES = { en, fr, ar };
const cache = {};

function compose(L) {
  return {
    ...L,
    profile: { ...shared.profile, ...L.profile },
    socials: shared.socials,
    nav: shared.navIds.map((id) => ({ label: L.nav[id], href: `#${id}` })),
    hero: {
      ...L.hero,
      stats: shared.heroStats.map((stat) => ({ ...stat, label: L.hero.stats[stat.id] })),
    },
    devStack: shared.devStack,
    services: {
      ...L.services,
      items: shared.serviceIds.map((id) => ({ id, ...L.services.items[id] })),
    },
    work: {
      ...L.work,
      projects: shared.projects.map((p) => ({ ...p, ...L.work.projects[p.id] })),
      caseStudies: shared.caseStudies.map((c) => ({
        ...c,
        ...L.work.caseStudies[c.id],
        markets: c.markets.map((m) => ({ ...m, name: L.work.markets[m.code] })),
        metrics: c.metrics.map((m) => ({ ...m, label: L.work.metricLabels[m.id] })),
      })),
    },
    skills: {
      ...L.skills,
      groups: shared.skillGroups.map((group) => ({
        id: group.id,
        ...L.skills.groups[group.id],
        items: group.items.map((item) => ({ ...item, ...L.skills.items[item.id] })),
      })),
    },
  };
}

export function getContent(lang) {
  const key = LOCALES[lang] ? lang : shared.DEFAULT_LANG;
  return (cache[key] ??= compose(LOCALES[key]));
}

export const { LANGS, DEFAULT_LANG } = shared;
