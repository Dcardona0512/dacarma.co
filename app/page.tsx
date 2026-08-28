import { Introduction } from "@/components/sections/Introduction";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Benefit } from "@/components/sections/Benefit";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      {/* 1200px shell, 64px gutters, 32px between sections — the original's
          layout frame. Content width lands at 1072px on desktop. */}
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-16 pt-16 max-tab:px-6">
        <Introduction />
        <LogoMarquee />
        <Benefit />
        <Work />
        <Services />
        <SiteFooter />
      </div>
    </main>
  );
}
