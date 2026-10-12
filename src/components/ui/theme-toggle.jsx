import { Moon, Sun } from 'lucide-react';
import { useContent } from '../../i18n';
import { useTheme } from '../../theme';
import { cn } from '../../lib/utils';

export default function ThemeToggle({ className }) {
  const { ui } = useContent();
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? ui.themeToLight : ui.themeToDark}
      title={isDark ? ui.themeToLight : ui.themeToDark}
      className={cn(
        'grid size-8 place-items-center rounded-full border border-fg/8 bg-fg/4 text-ink-200 transition-colors duration-200 hover:text-ink-50',
        className
      )}
    >
      {isDark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
    </button>
  );
}
