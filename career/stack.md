# Everything you use

Full inventory, assembled by reading your three repos, your Supabase project and
the live deployments. **Nothing from memory or assumption.** If something isn't
here, it doesn't appear anywhere in your code.

---

## Languages

| | Where |
|---|---|
| **TypeScript** | All three projects, without exception. 647 KB in TUMARKET, 536 KB in DCM ACCESS |
| **JavaScript** | Config and scripts |
| **SQL** | 73 migrations: tables, policies, functions, triggers |
| **HTML** | Semantic, throughout the markup |
| **CSS** | Tailwind plus hand-written CSS for animations and masks |

## Frontend

- **React 19** — Server and Client Components
- **Next.js** — App Router, versions 15 and 16
- **Tailwind CSS v4** — with `@theme` and design tokens
- **Motion** (formerly Framer Motion) — spring-based animation
- **Hand-written SVG** — TUMARKET's report charts use no charting library:
  axes, scales, stacked bars and labels are all your own
- **lucide-react** — icons in DCM ACCESS
- **clsx** and **tailwind-merge** — class composition
- **Responsive design** and **WCAG accessibility** (verified contrast,
  `prefers-reduced-motion`)

## Backend and data

- **PostgreSQL 17**
- **Supabase** — managed Postgres, plus:
  - **Auth** with sessions
  - **Storage** with per-folder policies
  - **Realtime** for live orders
  - **RPC** — business logic as database functions
  - **Versioned migrations** (73 in TUMARKET)
  - **Generated types** from the schema (`database.types.ts`)
- **Row-Level Security** — enabled on all 9 tables
- **Multi-tenancy** — per-store isolation through policies and triggers
- **Next.js Server Actions**
- **API Routes** — webhooks, cron, account confirmation
- **Next.js Middleware** — session refresh and route protection
- **Zod** — input validation in DCM ACCESS

## Authentication and security

- Supabase Auth: email sign-up, sign-in and confirmation
- **OAuth**: Google, Facebook and Apple
- Row-Level Security as the authorization layer
- Reserved and protected routes
- Honeypot and server-side validation on forms

## Integrations

- **MercadoPago** — checkout, webhook, subscriptions with trial period, expiry,
  monthly and annual plans
- **Resend** — transactional email
- **ZXing** — barcode scanning through the camera
- **QR code** generation
- **Cron jobs** — expiry notices
- **Vercel Analytics**
- **`next/og` ImageResponse** — per-store icons generated on the fly, versioned
  in the URL to defeat stale caching

## Infrastructure and tooling

- **Vercel** — continuous deployment from Git, custom domains, environment
  variables, deployment protection
- **Cloudflare** — DNS
- **Git** and **GitHub**
- **ESLint** and **Prettier** (with `prettier-plugin-tailwindcss`)
- **Claude Code**
- **i18n** — locale routing through a `[locale]` segment

## Practices

- Versioned migrations, replayable from zero
- Authorization in the database rather than in application code
- Strict typing end to end, with types generated from the schema
- Accessibility: WCAG contrast, reduced motion, real alt text
- SEO: metadata, Open Graph, domain redirects

---

## The 15 for LinkedIn

The Skills section shouldn't carry everything above. LinkedIn weights **the
first three** most, and those are the ones endorsements validate. In this order:

```
1. TypeScript          6. Tailwind CSS        11. Database Design
2. React               7. Node.js             12. Authentication & Authorization
3. Next.js             8. REST APIs           13. Web Accessibility (WCAG)
4. PostgreSQL          9. Git                 14. Responsive Web Design
5. Supabase           10. Vercel              15. SQL
```

## What you should NOT list

I searched all three repos for each of these and found nothing. List them and
you will be asked about them:

| Don't claim | What you actually use |
|---|---|
| Firebase | Supabase |
| SASS / CSS preprocessors | Tailwind CSS v4 |
| MySQL | PostgreSQL 17 |
| Docker | Vercel |
| AWS | Vercel + Supabase |
| Testing (Jest, Vitest, Playwright) | No tests in any of the three |
| GraphQL | REST and Server Actions |
| Redux / Zustand | React state and Context |

**Tests are the most visible gap in your profile.** A technical recruiter will
notice: three projects, zero automated tests. Don't list it as a skill — but
consider adding a few to TUMARKET, and then it becomes something you can.
