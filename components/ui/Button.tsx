import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type ButtonLinkProps = {
  href: string;
  label: string;
  /** The services CTA stretches to fill its column; everywhere else the
   *  pill hugs its label. */
  fullWidth?: boolean;
  /** The hero CTA is the one button in the design with no trailing arrow. */
  icon?: boolean;
  className?: string;
};

const BASE =
  "group inline-flex h-9 items-center justify-center gap-2 rounded-[10px] " +
  "bg-[rgba(13,13,13,0.5)] px-[13px] py-[9px] backdrop-blur-[10px] elevated " +
  "transition-colors duration-300 hover:bg-[rgba(30,30,30,0.6)]";

export function ButtonLink({
  href,
  label,
  fullWidth,
  icon = true,
  className = "",
}: ButtonLinkProps) {
  // mailto: has to be a plain anchor — routing it through Link would have the
  // router try to navigate to it.
  const isMail = href.startsWith("mailto:");
  const isExternal = href.startsWith("http");
  const content = (
    <>
      <span className="t-button whitespace-nowrap">{label}</span>
      {icon ? (
        <ArrowRightIcon className="size-[18px] shrink-0 text-text transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );
  const classes = `${BASE} ${fullWidth ? "w-full" : ""} ${className}`;

  if (isMail) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
