import Image from "next/image";
import { site } from "@/content/site";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Benefit() {
  const { benefit } = site;

  return (
    // The whole card rises 40px as one block — the copy inside does not animate
    // separately. Only the artwork gets its own, much longer 240px travel.
    <Reveal
      as="section"
      id="benefit"
      delay={0.6}
      className="flex w-full items-center justify-center gap-16 overflow-hidden rounded-[48px] bg-surface p-12 max-tab:flex-col max-tab:px-8 max-desk:flex-col"
    >
      <Reveal distance={240} delay={0.8} className="mask-fade-b shrink-0">
        <Image
          src={benefit.visual}
          alt=""
          width={270}
          height={291}
          className="h-[291px] w-[270px] object-cover"
        />
      </Reveal>

      <div className="flex flex-1 flex-col items-start justify-center gap-6">
        <Heading segments={benefit.heading} />
        <p className="t-body">{benefit.body}</p>
        <ButtonLink href={benefit.cta.href} label={benefit.cta.label} />
      </div>
    </Reveal>
  );
}
