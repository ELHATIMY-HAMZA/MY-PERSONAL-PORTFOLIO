import { ArrowUpRight, FolderGit2, LockKeyhole, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../ui/brand-icons';
import BlurFade from '../ui/blur-fade';
import CaseStudyCard from '../ui/case-study-card';
import ProjectCover from '../ui/project-cover';
import SectionHeading from '../ui/section-heading';
import { TechIcon } from '../ui/tech-icons';
import { useContent } from '../../i18n';

/**
 * Work — web apps first (the build proof), then ads case studies (the growth
 * proof). Two labelled groups rather than tabs: a visitor scanning for "can
 * he run ads?" should not have to find and click a control to see it.
 */
export default function Projects() {
  const { work } = useContent();

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 sm:py-28"
      aria-label={work.title}
    >
      <SectionHeading
        kicker={work.kicker}
        icon={FolderGit2}
        title={work.title}
        lead={work.lead}
      />

      <GroupLabel>{work.webLabel}</GroupLabel>
      <div className="space-y-20 sm:space-y-28">
        {work.projects.map((project, index) => (
          <BlurFade key={project.id} delay={0.08} yOffset={20}>
            <ProjectRow project={project} index={index} />
          </BlurFade>
        ))}
      </div>

      <GroupLabel className="mt-24 sm:mt-32">{work.adsLabel}</GroupLabel>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {work.caseStudies.map((study, index) => (
          <BlurFade
            key={study.id}
            delay={0.08 * index}
            className={index === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}
          >
            <CaseStudyCard study={study} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function GroupLabel({ children, className = 'mt-12 sm:mt-14' }) {
  return (
    <h3
      className={`${className} mb-8 flex items-center gap-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-ink-300 uppercase`}
    >
      {children}
      <span className="h-px flex-1 bg-fg/8" aria-hidden="true" />
    </h3>
  );
}

function ProjectRow({ project, index }) {
  const { ui } = useContent();

  return (
    <article className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <ProjectCover project={project} index={index} />

      <div className="min-w-0 lg:py-4">
        <p className="flex items-center gap-2 text-xs text-ink-200">
          <span className="size-1.5 rounded-full bg-signal-400" aria-hidden="true" />
          {project.status}
        </p>
        <h4 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          {project.name}
        </h4>
        <p className="mt-3 text-lg leading-snug text-ink-100">{project.tagline}</p>
        <p className="mt-4 max-w-lg text-sm leading-7 text-ink-200">{project.description}</p>

        <div className="mt-7 border-t border-fg/10 pt-5">
          <p className="font-mono text-[10px] tracking-[0.14em] text-ink-300 uppercase">
            {project.stackLabel}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-3" aria-label={ui.techStack}>
            {project.stack.map((technology) => (
              <li key={technology.name} className="flex items-center gap-1.5 text-xs text-ink-100">
                <TechIcon slug={technology.icon} className="size-3.5" mono />
                {technology.name}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-ink-200">
            <ShieldCheck className="size-3.5 text-accent-300" aria-hidden="true" />
            {project.auth}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-5 rounded-full bg-ink-50 px-5 py-3 text-xs font-semibold text-ink-950 transition-colors hover:bg-accent-100"
          >
            {ui.visitLive}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none rtl:-scale-x-100" aria-hidden="true" />
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-ink-100 transition-colors hover:text-accent-200"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
              {ui.viewSource}
            </a>
          )}
          {project.isPrivateSource && (
            <span className="inline-flex items-center gap-1.5 text-[11px] text-ink-300">
              <LockKeyhole className="size-3" aria-hidden="true" />
              {ui.privateSource}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
