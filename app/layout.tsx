import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
});

const instrumentSerif = localFont({
  variable: "--font-instrument-serif",
  display: "swap",
  src: [
    { path: "../public/fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.profile.name} — ${site.profile.role}`,
    template: `%s — ${site.profile.name}`,
  },
  description: site.description,
  // The icon and share image come from app/icon.png and
  // app/opengraph-image.png — Next wires the tags from the filenames, so
  // there is no `icons` or `openGraph.images` to keep in sync here.
  openGraph: {
    title: `${site.profile.name} — ${site.profile.role}`,
    description: site.description,
    url: site.url,
    siteName: site.profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.profile.name} — ${site.profile.role}`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="bg-bg text-text flex min-h-full flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
