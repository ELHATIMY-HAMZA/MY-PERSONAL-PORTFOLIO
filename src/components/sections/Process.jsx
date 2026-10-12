import { Hammer, Rocket, Route, Search, Workflow } from 'lucide-react';
import BlurFade from '../ui/blur-fade';
import SectionHeading from '../ui/section-heading';
import { useContent } from '../../i18n';

const STEP_ICONS = [Search, Hammer, Rocket, Workflow];

/**
 * Process — four steps that show one person can own the whole funnel:
 * audit, build, ads, automation. Numbered so the order reads at a glance.
 */
export default function Process() {
  const { process } = useContent();

  return (
    <section
      id="process"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 sm:py-28"
    >
      <SectionHeading kicker={process.kicker} icon={Route} title={process.title} />

      <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, index) => {
          const Icon = STEP_ICONS[index];
          return (
            <li key={step.title}>
              <BlurFade delay={0.06 * index} className="h-full">
                <div className="hairline relative flex h-full flex-col rounded-panel border border-fg/7 bg-ink-800/40 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-300">
                      <Icon className="size-4" />
                    </span>
                    <span className="font-mono text-3xl font-bold text-fg/10" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold tracking-tight text-ink-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
                </div>
              </BlurFade>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
