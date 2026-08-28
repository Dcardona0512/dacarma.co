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
      <Image
        src={project.image}
        alt={`${project.title} — ${project.description}`}
        fill
        sizes="(min-width: 1200px) 524px, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Diagonal sheen that sweeps across on hover. */}
      <span className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-[48px]">
        <span className="absolute top-0 -left-1/3 h-[200%] w-1/3 -translate-y-1/4 bg-[linear-gradient(270deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_100%)] opacity-0 group-hover:opacity-100 group-hover:[animation:sheen_900ms_ease-out]" />
      </span>

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
      distance={240}
      id="work"
      className="grid w-full max-w-[1200px] scroll-mt-16 grid-cols-1 justify-center gap-6 desk:grid-cols-2"
    >
      {site.work.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Reveal>
  );
}
