import { LANGS } from '../../content';
import { useI18n } from '../../i18n';
import { cn } from '../../lib/utils';

const LABELS = { en: 'EN', fr: 'FR', ar: 'ع' };
const NAMES = { en: 'English', fr: 'Français', ar: 'العربية' };

/**
 * EN / FR / ع segmented control. Each option is labelled in its own
 * language so a visitor can find theirs whatever the page is showing.
 */
export default function LangSwitcher({ className }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.ui.language}
      dir="ltr"
      className={cn(
        'inline-flex items-center rounded-full border border-fg/8 bg-fg/4 p-0.5',
        className
      )}
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={NAMES[code]}
          className={cn(
            'min-w-7 rounded-full px-2 py-1 text-[11px] font-semibold transition-colors duration-200',
            lang === code
              ? 'bg-ink-50 text-ink-950'
              : 'text-ink-300 hover:text-ink-50'
          )}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  );
}
