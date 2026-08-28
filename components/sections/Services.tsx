import Image from "next/image";
import { site } from "@/content/site";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

export function Services() {
  const { services } = site;

  return (
    <section
      id="services"
      className="relative z-[1] flex w-full items-center justify-center gap-16 rounded-[48px] bg-surface p-12 max-tab:px-8 max-desk:flex-col"
    >
      {/* No entrance animation here — the original leaves this section and the
          footer static, so they are simply present as you scroll in. */}
      <div className="flex flex-1 flex-col items-start justify-center gap-8 max-desk:order-2 max-desk:w-full">
        <Heading segments={services.heading} />

        <div className="flex w-full flex-col justify-center gap-4">
          <div className="flex items-center justify-start gap-2.5">
            <p className="t-lead">{services.lead}</p>
            <span className="flex shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.02)] px-2 py-1">
              <span className="t-badge">{services.priceBadge}</span>
            </span>
          </div>
          <p className="t-body-sm">{services.body}</p>
        </div>

        <ButtonLink
          href={services.cta.href}
          label={services.cta.label}
          fullWidth
        />
      </div>

      <div className="mask-fade-b z-[5] shrink-0 max-desk:order-1">
        <Image
          src={services.visual}
          alt=""
          width={270}
          height={291}
          className="h-[291px] w-[270px] object-cover"
        />
      </div>
    </section>
  );
}
