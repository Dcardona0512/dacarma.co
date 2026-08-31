// Every string rendered on the site lives here, so copy edits never touch JSX.
// Headings are split into segments: `accent: true` renders in Instrument Serif
// italic, which is the typographic signature of the original design.

export type HeadingSegment = {
  text: string;
  accent?: boolean;
  break?: boolean;
};

export type Project = {
  title: string;
  description: string;
  /** Omitted on placeholder cards, which render an empty slot instead. */
  image?: string;
  href: string;
  /** An open slot for work still to come, rather than a finished project. */
  placeholder?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "instagram";
};

export const site = {
  url: "https://dacarma.co",
  description:
    "David Cardona Martínez — Commercial Pilot & Full-Stack Software Developer building React and Next.js products.",

  profile: {
    name: "David Cardona Martínez",
    shortName: "Hey, I'm David.",
    role: "Software Developer",
    logo: "DACARMA",
    avatar: "/images/avatar.png",
    /** Drives the footer clock. */
    timeZone: "America/Bogota",
    location: "Santiago de Cali, Colombia",
  },

  hero: {
    heading: [
      { text: "Focused on piloting " },
      { text: "standout ", accent: true, break: true },
      { text: "digital experiences with " },
      { text: "React", accent: true },
    ] satisfies HeadingSegment[],
    body: "Hey, I'm David Cardona Martínez, Commercial Pilot & Full-Stack Software Developer. A Colombian doing what I love.",
    cta: { label: "Get In Touch", href: "/contact" },
    portrait: "/images/hero-portrait.png",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dacarma/",
        icon: "linkedin",
      },
      {
        label: "GitHub",
        href: "https://github.com/Dcardona0512",
        icon: "github",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/david.cardonam/",
        icon: "instagram",
      },
    ] satisfies SocialLink[],
  },

  marquee: {
    eyebrow: "The stack I build with",
  },

  benefit: {
    heading: [
      { text: "What makes me " },
      { text: "different?", accent: true },
    ] satisfies HeadingSegment[],
    body: "I build applications with React and Next.js, aligned with your brand and objectives. From the cockpit, I bring something that matters just as much here: following procedures, checking every performance detail before takeoff, and deciding with the correct information. The result: products built to look good and navigate with confidence.",
    cta: { label: "Browse My Work", href: "/#work" },
    visual: "/images/benefit-visual.png",
  },

  work: [
    {
      title: "TUMARKET.CO",
      description: "Online ordering platform for local markets & grocery stores.",
      image: "/images/work-tumarket.png",
      href: "https://www.tumarket.co/",
    },
    {
      title: "DCM ACCESS",
      description: "Bilingual brokerage marketplace with an in-house CRM.",
      image: "/images/work-dcm.png",
      href: "https://dcmxaccess.vercel.app/",
    },
    {
      title: "Available",
      description: "A slot for the next project. Yours could go here.",
      href: "/contact",
      placeholder: true,
    },
    {
      title: "Available",
      description: "A slot for the next project. Yours could go here.",
      href: "/contact",
      placeholder: true,
    },
  ] satisfies Project[],

  services: {
    heading: [
      { text: "How I can help " },
      { text: "you?", accent: true },
    ] satisfies HeadingSegment[],
    lead: "Let's build something great",
    priceBadge: "Starting from $800",
    body: "Always open to connecting with new people — sharing ideas, discussing projects, and exploring potential collaborations.",
    cta: { label: "Get In Touch", href: "/contact" },
    visual: "/images/services-visual.png",
  },

  footer: {
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dacarma/",
        icon: "linkedin",
      },
      {
        label: "GitHub",
        href: "https://github.com/Dcardona0512",
        icon: "github",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/david.cardonam/",
        icon: "instagram",
      },
    ] satisfies SocialLink[],
    credit: "Created by David Cardona Martínez",
  },

  contact: {
    heading: "Let's have a chat!",
    body: "Enter your details below and I'll get back to you as soon as possible.",
    visual: "/images/services-visual.png",
    budgets: ["Select Budget", "Up to $2,000", "$2,000 - $5,000", "$10,000 +"],
    submitLabel: "Submit",
    successMessage:
      "Thanks — your message is on its way. I'll be in touch soon.",
    errorMessage:
      "Something went wrong. Please try again, or email me directly.",
  },
} as const;
