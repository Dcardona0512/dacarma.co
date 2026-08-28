# DACARMA — Portfolio

Personal portfolio for David Cardona Martínez. A pixel-for-pixel rebuild of the
previous Framer site, now fully self-owned: Next.js App Router, TypeScript,
Tailwind v4, and Motion for the animations.

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` and fill it in. The contact form is the only
feature that needs configuration — everything else is static.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Verified sender on a domain you own in Resend |

Without these, `POST /api/contact` returns a 500 telling the visitor to email
directly. Validation and the honeypot still work.

## Where things live

```
app/
  page.tsx            Home — composes the sections inside the 1200px shell
  contact/            Contact page
  api/contact/        Form handler: validation, honeypot, Resend
  globals.css         Design tokens, typography scale, keyframes
content/
  site.ts             Every string on the site
  logos.ts            Marquee logos as raw SVG paths
components/
  sections/           One component per page section
  visuals/            The hero's animated night sky
  ui/                 Button, Heading, Reveal, SocialIconLink
public/
  fonts/              Satoshi (Fontshare) + Instrument Serif (Google Fonts)
  images/             Portrait, project shots, decorative art
```

**To edit copy, open `content/site.ts`.** Headings are arrays of segments;
`accent: true` renders that segment in Instrument Serif italic, which is the
typographic signature of the design.

## Design system

Tokens live at the top of `app/globals.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#120b0b` | Page background |
| `--color-surface` | `#0d0d0d` | Every card |
| `--color-text` | `#f5f5f8` | Primary text |
| `--color-muted` | `#ababab` | Secondary text |

Typography is a set of `.t-*` classes (`.t-h1`, `.t-body`, `.t-card-title`, …)
so size, line-height, tracking, and colour always travel together.

Breakpoints match the original exactly: desktop ≥ 1200px, tablet 810–1199px,
mobile ≤ 809px.

## Animations

All entrance animations run through `components/ui/Reveal.tsx`, so retiming the
whole page is a one-line change. The marquee, shooting stars, and light beam are
CSS keyframes in `globals.css`; the hero starfield is a `requestAnimationFrame`
canvas. Everything respects `prefers-reduced-motion`.

## Deploy

Push to a Git remote and import the repo on Vercel, adding the three environment
variables above. `npm run build` must pass first.
