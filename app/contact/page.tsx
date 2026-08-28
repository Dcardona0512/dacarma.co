import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: site.contact.body,
};

export default function ContactPage() {
  const { contact } = site;

  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-0 px-16 py-16 max-tab:px-6">
        <div className="mask-fade-b self-start">
          <Image
            src={contact.visual}
            alt=""
            width={117}
            height={126}
            priority
            className="h-[126px] w-[117px] object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-6">
            <Reveal className="flex w-full flex-col gap-4">
              <h1 className="t-h1">{contact.heading}</h1>
              <p className="t-body">{contact.body}</p>
            </Reveal>

            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
