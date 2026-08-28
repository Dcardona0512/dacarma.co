import Image from "next/image";
import { site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/content/site";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[524/394] w-full flex-col justify-end overflow-hidden rounded-[48px] bg-surface p-8"
    >
      {/* The artwork dissolves into the card's own background between 50% and
          83.6% of its height. That fade — not a baked-in gradient — is what
          gives the title and description something dark to sit on. */}
      <span className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(#000_50%,transparent_83.5916%)]">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.description}`}
          fill
          sizes="(min-width: 1200px) 524px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </span>

      {/* Hairline border, itself fading out toward the bottom. */}
      <span className="pointer-events-none absolute inset-0 z-[1] rounded-[48px] border border-[var(--hairline)] [mask-image:linear-gradient(#000_0%,rgba(0,0,0,0.16)_82.8442%)]" />

      <div className="relative z-[2] flex w-full flex-col justify-center gap-2">
        <div className="flex w-full items-center justify-start gap-3">
          <p className="t-card-title whitespace-pre">{project.title}</p>
          <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--chip)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRightIcon className="size-3.5 text-offwhite" />
          </span>
        </div>
        <p className="t-body-sm">{project.description}</p>
      </div>
    </a>
  );
}

export function Work() {
  return (
    <Reveal
      as="section"
      id="work"
      className="grid w-full max-w-[1200px] scroll-mt-16 grid-cols-1 justify-center gap-6 desk:grid-cols-2"
    >
      {site.work.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Reveal>
  );
}
