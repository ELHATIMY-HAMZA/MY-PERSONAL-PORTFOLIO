import { Check } from 'lucide-react';
import MagicCard from './magic-card';
import { TechIcon } from './tech-icons';

/**
 * Ads case study: context, what was done, real metrics, markets.
 *
 * Built as a card rather than an Ads Manager screenshot so it reads in all
 * three languages and both themes. Metrics are optional — a study with no
 * numbers yet simply has no stat strip.
 */
export default function CaseStudyCard({ study }) {
  return (
    <MagicCard className="h-full">
      <article className="flex h-full flex-col p-7">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-[0.12em] text-ink-300 uppercase">
            {study.category}
          </p>
          <span className="flex items-center gap-1.5">
            {study.platforms.map((slug) => (
              <TechIcon key={slug} slug={slug} className="size-4" />
            ))}
          </span>
        </div>

        <h4 className="mt-4 text-xl font-bold tracking-tight text-ink-50 sm:text-2xl">
          {study.title}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-ink-300">{study.context}</p>

        {study.metrics.length > 0 && (
          <div className="mt-6 rounded-card border border-fg/8 bg-fg/3 p-4">
            <p className="font-mono text-[10px] tracking-[0.12em] text-accent-400 uppercase">
              {study.metricsLabel}
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.id}>
                  <dt className="text-[11px] leading-snug text-ink-400">{metric.label}</dt>
                  <dd
                    dir="ltr"
                    className={`mt-1 font-mono font-bold tracking-tight rtl:text-end ${
                      metric.id === 'cpc' ? 'text-2xl text-signal-400' : 'text-xl text-ink-50'
                    }`}
                  >
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <p className="mt-6 text-xs font-semibold text-ink-100">{study.didLabel}</p>
        <ul className="mt-3 space-y-2">
          {study.did.map((line) => (
            <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-ink-300">
              <Check className="mt-1 size-3.5 shrink-0 text-signal-400" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <p className="font-mono text-[10px] tracking-[0.12em] text-ink-400 uppercase">
            {study.marketsLabel}
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {study.markets.map((market) => (
              <li
                key={market.code}
                className="inline-flex items-center gap-1.5 rounded-full border border-fg/8 bg-fg/4 px-2.5 py-1 text-[11px] text-ink-200"
              >
                <span aria-hidden="true">{market.flag}</span>
                {market.name}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </MagicCard>
  );
}
