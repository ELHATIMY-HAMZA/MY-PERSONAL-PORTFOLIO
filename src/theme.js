import { useSyncExternalStore } from 'react';

/**
 * Theme — dark / light via <html data-theme>.
 *
 * index.html sets the attribute before first paint (saved choice, else the
 * OS preference), so there is no flash. The attribute itself is the store:
 * every toggle (navbar, footer) subscribes to it, so they never disagree.
 * All colours come from tokens in index.css, which `data-theme="light"`
 * remaps.
 */

const THEME_COLORS = { dark: '#07080A', light: '#F6F7FA' };
const listeners = new Set();

const getTheme = () => document.documentElement.dataset.theme || 'dark';

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setTheme(next) {
  document.documentElement.dataset.theme = next;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLORS[next]);
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* storage blocked — the choice just won't persist */
  }
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme);
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return { theme, toggle };
}
