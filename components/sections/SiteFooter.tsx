import { site } from "@/content/site";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { LocalClock } from "@/components/LocalClock";
import { Reveal } from "@/components/ui/Reveal";

export function SiteFooter() {
  const { footer, profile } = site;

  return (
    <>
      <Reveal
        as="footer"
        className="flex w-full max-w-[900px] flex-col items-center justify-center gap-4 px-16 pt-8 max-tab:px-0"
      >
        <div className="flex w-min flex-col items-center justify-center gap-4">
          <p className="t-logo whitespace-nowrap">{profile.logo}</p>

          <div className="flex flex-col items-center justify-center gap-2">
            <LocalClock />
            <p className="t-eyebrow whitespace-nowrap">
              Local time in {profile.location}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            {footer.socials.map((social) => (
              <SocialIconLink key={social.label} {...social} />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="flex w-full max-w-[800px] flex-col items-center justify-center p-6">
        <div className="flex items-center gap-2">
          <p className="text-[10px] leading-3 font-light tracking-[-0.02em] text-[#999]">
            •
          </p>
          <p className="t-eyebrow">{footer.credit}</p>
        </div>
      </div>
    </>
  );
}
