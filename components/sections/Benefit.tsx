import Image from "next/image";
import { site } from "@/content/site";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Benefit() {
  const { benefit } = site;

  return (
    <section
      id="benefit"
      className="flex w-full items-center justify-center gap-16 overflow-hidden rounded-[48px] bg-surface p-12 max-tab:flex-col max-tab:px-8 max-desk:flex-col"
    >
      <div className="mask-fade-b shrink-0">
        <Image
          src={benefit.visual}
          alt=""
          width={270}
          height={291}
          className="h-[291px] w-[270px] object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col items-start justify-center gap-6">
        <Reveal className="w-full">
          <Heading segments={benefit.heading} />
        </Reveal>
        <Reveal className="w-full" delay={0.1}>
          <p className="t-body">{benefit.body}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <ButtonLink href={benefit.cta.href} label={benefit.cta.label} />
        </Reveal>
      </div>
    </section>
  );
}
