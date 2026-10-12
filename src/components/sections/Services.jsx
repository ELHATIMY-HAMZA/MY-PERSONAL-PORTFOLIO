import { Briefcase, Code2, Filter, Megaphone, Workflow } from 'lucide-react';
import BlurFade from '../ui/blur-fade';
import MagicCard from '../ui/magic-card';
import SectionHeading from '../ui/section-heading';
import { useContent } from '../../i18n';

const ICONS = {
  web: Code2,
  ads: Megaphone,
  automation: Workflow,
  funnel: Filter,
};

/**
 * Services — the four things Hamza sells, each written as the client's
 * problem first and the fix second. Moroccan SMEs buy outcomes ("more
 * WhatsApp messages"), not stacks, so the problem line leads every card.
 */
export default function Services() {
  const { services } = useContent();

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 sm:py-28"
    >
      <SectionHeading
        kicker={services.kicker}
        icon={Briefcase}
        title={services.title}
        lead={services.lead}
      />

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.items.map((item, index) => {
          const Icon = ICONS[item.id];
          return (
            <BlurFade key={item.id} delay={0.06 * index}>
              <MagicCard className="h-full">
                <article className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid size-10 place-items-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-300">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[11px] text-ink-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-ink-50">
                    {item.title}
                  </h3>

                  <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="font-mono text-[10px] tracking-[0.14em] text-ink-400 uppercase">
                        {services.problemLabel}
                      </dt>
                      <dd className="mt-1 text-ink-300">{item.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] tracking-[0.14em] text-accent-400 uppercase">
                        {services.solutionLabel}
                      </dt>
                      <dd className="mt-1 text-ink-100">{item.solution}</dd>
                    </div>
                  </dl>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {item.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-lg border border-fg/8 bg-fg/4 px-2.5 py-1 font-mono text-[11px] text-ink-200"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </MagicCard>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
