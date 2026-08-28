import Image from "next/image";
import { site } from "@/content/site";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/visuals/HeroVisual";

export function Introduction() {
  const { hero, profile } = site;

  return (
    <section
      id="introduction"
      className="grid w-full max-w-[1200px] grid-cols-1 justify-center gap-6 desk:grid-cols-3 desk:grid-rows-1"
    >
      {/* Left card spans two of the three columns. */}
      <div className="flex flex-col justify-center gap-8 overflow-hidden rounded-[48px] bg-surface p-12 desk:col-span-2">
        <Reveal className="flex w-full flex-row items-center justify-between max-tab:flex-col max-tab:items-start max-tab:gap-6">
          <div className="flex items-center gap-2">
            <Image
              src={profile.avatar}
              alt=""
              width={38}
              height={38}
              className="size-[38px] shrink-0 object-contain"
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="t-name">{profile.shortName}</p>
              <p className="t-role">{profile.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {hero.socials.map((social) => (
              <SocialIconLink key={social.label} {...social} />
            ))}
            <ButtonLink href={hero.cta.href} label={hero.cta.label} icon={false} />
          </div>
        </Reveal>

        <div className="flex flex-col items-start justify-center gap-6">
          <Reveal className="w-full" delay={0.1}>
            <Heading segments={hero.heading} />
          </Reveal>
          <Reveal className="w-full" delay={0.2}>
            <p className="t-body">{hero.body}</p>
          </Reveal>
        </div>
      </div>

      {/* Right card: the animated night-sky visual. */}
      <HeroVisual />
    </section>
  );
}
