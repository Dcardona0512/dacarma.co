import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/content/site";

const CARD =
  "group relative flex aspect-[524/394] w-full flex-col justify-end overflow-hidden rounded-[48px] bg-surface p-8";

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      {/* The artwork dissolves into the card's own background between 50% and
          83.6% of its height. That fade — not a baked-in gradient — is what
          gives the title and description something dark to sit on. */}
      {project.image ? (
        <span className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.07] [mask-image:linear-gradient(#000_50%,transparent_83.5916%)]">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.description}`}
            fill
            sizes="(min-width: 1200px) 524px, 100vw"
            className="object-cover"
          />
        </span>
      ) : (
        /* An open slot: a faint plus on empty space, so the grid stays whole
           without pretending there is work here that isn't. */
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 bottom-[38%] flex items-center justify-center"
        >
          <span className="text-[44px] leading-none font-medium text-white/[0.09] transition-colors duration-500 group-hover:text-white/[0.16]">
            +
          </span>
        </span>
      )}

      {/* Hairline border, itself fading out toward the bottom. Dashed on an
          empty slot — the same cue a blank field uses everywhere else. */}
      <span
        className={`pointer-events-none absolute inset-0 z-[1] rounded-[48px] border border-[var(--hairline)] [mask-image:linear-gradient(#000_0%,rgba(0,0,0,0.16)_82.8442%)] ${
          project.placeholder ? "border-dashed" : ""
        }`}
      />

      <div className="relative z-[2] flex w-full flex-col justify-center gap-2">
        <div className="flex w-full items-center justify-start gap-3">
          <p className="t-card-title whitespace-pre">{project.title}</p>
          {/* Hidden until hover — that reveal, plus the 1.07 image push, is
              the card's entire hover treatment. */}
          <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--chip)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRightIcon className="size-4 text-offwhite" />
          </span>
        </div>
        <p className="t-body-sm">{project.description}</p>
      </div>
    </>
  );

  // Open slots point at the contact page, so an empty card still does work.
  if (project.placeholder) {
    return (
      <Link href={project.href} className={CARD}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={CARD}
    >
      {inner}
    </a>
  );
}

export function Work() {
  return (
    <Reveal
      as="section"
      id="work"
      delay={0.7}
      className="grid w-full max-w-[1200px] scroll-mt-16 grid-cols-1 justify-center gap-6 desk:grid-cols-2"
    >
      {site.work.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Reveal>
  );
}
