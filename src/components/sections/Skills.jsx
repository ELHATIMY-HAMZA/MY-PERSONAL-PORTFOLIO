'use client';

import { Code2, Cpu, Filter, Layers, Megaphone, Radar, Sparkles } from 'lucide-react';
import BlurFade from '../ui/blur-fade';
import Marquee from '../ui/marquee';
import SectionHeading from '../ui/section-heading';
import { TechIcon, techColor } from '../ui/tech-icons';
import { useContent } from '../../i18n';

/**
 * Skills — the toolbox.
 *
 * Three permanent groups: Development, Ads & tracking, Automation & AI
 * (previously Frontend / Backend & DB / AI & Tools). The old "All Stack" pill was the default state,
 * which meant the filter could only ever subtract from what was already on
 * screen — clicking a category hid two thirds of the stack and the layout
 * jumped. Three columns show everything at once, so the labels become
 * structure instead of a control.
 *
 * Every mark is a real inlined brand logo (see `ui/tech-icons.jsx`), replacing
 * the two-letter text tiles ("JS", "Re", "TW", "DB") of the previous build.
 */

const GROUP_ICONS = {
  dev: Code2,
  ads: Megaphone,
  automation: Sparkles,
};

/* Practices that have no brand mark (tracking, funnels) use a lucide glyph. */
const LUCIDE = {
  radar: Radar,
  funnel: Filter,
};

function SkillIcon({ skill, className }) {
  if (skill.icon) return <TechIcon slug={skill.icon} className={className} />;
  const Icon = LUCIDE[skill.lucide] ?? Layers;
  return <Icon className={`${className} text-accent-300`} strokeWidth={1.75} />;
}

export default function Skills() {
  const { skills } = useContent();
  const skillsFlat = skills.groups.flatMap((group) => group.items);

  return (
    <section id="skills" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker={skills.kicker}
          icon={Cpu}
          title={skills.title}
          lead={skills.lead}
        />

        {/* Development is the largest group (stack + DevOps), so it spans the
            full width with a 4-up grid; the other two sit side by side. */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {skills.groups.map((group, groupIndex) => (
            <BlurFade
              key={group.id}
              delay={0.06 * groupIndex}
              className={groupIndex === 0 ? 'lg:col-span-2' : undefined}
            >
              <GroupPanel group={group} wide={groupIndex === 0} />
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Logo marquee — Magic UI. Full-bleed, and deliberately oversized: at
          chip scale the brand marks were 16px decorations. */}
      <BlurFade delay={0.1}>
        <div
          dir="ltr"
          className="fade-x relative mt-16 flex w-full flex-col gap-4 overflow-hidden sm:mt-20 sm:gap-5"
        >
          <Marquee pauseOnHover className="[--duration:60s] [--gap:1.25rem]">
            {skillsFlat.map((skill) => (
              <LogoChip key={skill.id} skill={skill} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:72s] [--gap:1.25rem]"
          >
            {[...skillsFlat].reverse().map((skill) => (
              <LogoChip key={`r-${skill.id}`} skill={skill} />
            ))}
          </Marquee>
        </div>
      </BlurFade>
    </section>
  );
}

function GroupPanel({ group, wide = false }) {
  const Icon = GROUP_ICONS[group.id] ?? Layers;

  return (
    <div className="hairline flex h-full flex-col rounded-panel border border-fg/7 bg-ink-800/40 p-5 backdrop-blur-md sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="flex items-center gap-2 text-base font-bold text-ink-50">
            <Icon className="size-4 shrink-0 text-accent-400" />
            {group.label}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-ink-400">
            {group.blurb}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-fg/8 bg-fg/4 px-2 py-0.5 font-mono text-[10px] text-ink-300">
          {String(group.items.length).padStart(2, '0')}
        </span>
      </div>

      <ul
        className={
          wide
            ? 'mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4'
            : 'mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2'
        }
      >
        {group.items.map((skill) => (
          <SkillRow key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ skill }) {
  return (
    <li
      /* The brand hue is exposed as a custom property so the hover tint can
         reuse the logo's own colour instead of a generic accent wash. */
      style={{ '--brand': techColor(skill.icon) ?? 'var(--color-accent-500)' }}
      className="group flex items-center gap-3.5 rounded-card border border-fg/6 bg-ink-900/40 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-fg/14 hover:bg-ink-700/45"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-fg/8 bg-fg/4 transition-colors duration-300 group-hover:border-[color-mix(in_oklab,var(--brand)_38%,transparent)] group-hover:bg-[color-mix(in_oklab,var(--brand)_12%,transparent)]">
        <SkillIcon
          skill={skill}
          className="size-6 transition-transform duration-300 group-hover:scale-110"
        />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-ink-50">
          {skill.name}
        </span>
        <span className="block truncate font-mono text-[11px] text-ink-400">
          {skill.tag}
        </span>
      </span>
    </li>
  );
}

function LogoChip({ skill }) {
  return (
    <div className="group/chip flex items-center gap-3.5 rounded-full border border-fg/8 bg-ink-800/45 px-5 py-3.5 whitespace-nowrap backdrop-blur-md transition-colors duration-300 hover:border-fg/16 hover:bg-ink-700/55 sm:gap-4 sm:px-7 sm:py-4">
      <SkillIcon
        skill={skill}
        className="size-7 shrink-0 transition-transform duration-300 group-hover/chip:scale-110 sm:size-8"
      />
      <span className="font-mono text-base font-medium text-ink-100 sm:text-lg">
        {skill.name}
      </span>
    </div>
  );
}
