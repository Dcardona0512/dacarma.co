import { socialIcons } from "@/components/icons";
import type { SocialLink } from "@/content/site";

// 36×36 square, 12px radius, same hairline ring as the buttons.
export function SocialIconLink({ label, href, icon }: SocialLink) {
  const Icon = socialIcons[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-9 shrink-0 items-center justify-center rounded-xl elevated transition-colors duration-300 hover:bg-[rgba(255,255,255,0.06)]"
    >
      <Icon className="size-[18px] text-text" />
    </a>
  );
}
