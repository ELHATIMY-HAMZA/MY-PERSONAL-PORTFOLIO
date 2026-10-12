import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LANG, LANGS, getContent } from './content';

/**
 * i18n — EN / FR / AR without a library; the copy is static.
 *
 * The inline script in index.html has already resolved the language
 * (?lang= → saved choice → browser → French) and set <html lang dir> before
 * first paint, so the initial state just reads it back. Switching updates
 * <html>, the title and description, the saved choice, and any ?lang= in the
 * URL so a shared link keeps the language the visitor picked.
 */

const I18nContext = createContext(null);

function initialLang() {
  const lang = document.documentElement.lang;
  return LANGS.includes(lang) ? lang : DEFAULT_LANG;
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const t = getContent(lang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description);
  }, [lang, t]);

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem('lang', next);
    } catch {
      /* storage blocked — the choice just won't persist */
    }
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', next);
      window.history.replaceState(null, '', url);
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

/** The composed content object for the current language. */
export function useContent() {
  return useContext(I18nContext).t;
}
