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
  image: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "x" | "youtube";
};

export const site = {
  url: "https://dacarma.dev",
  description:
    "David Cardona Martínez — Commercial Pilot & Full-Stack Software Developer building React and Next.js products.",

  profile: {
    name: "David Cardona Martínez",
    shortName: "Hey, I'm David.",
    role: "Software Developer",
    logo: "DACARMA",
    avatar: "/images/avatar.png",
    /** Drives the footer clock. */
    timeZone: "Europe/London",
    location: "London, United Kingdom",
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
      { label: "LinkedIn", href: "https://twitter.com", icon: "linkedin" },
      { label: "GitHub", href: "https://youtube.com", icon: "github" },
    ] satisfies SocialLink[],
  },

  marquee: {
    eyebrow: "Worked with the best of the best",
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
      title: "Conversion",
      description: "Website for a digital marketing & paid advertising agency.",
      image: "/images/work-conversion.jpg",
      href: "https://www.hxmzaehsan.com/templates/conversion",
    },
    {
      title: "Scalable",
      description: "Landing Page for an analytics & sales SaaS business.",
      image: "/images/work-scalable.jpg",
      href: "https://www.hxmzaehsan.com/templates/scalable",
    },
    {
      title: "Limitless",
      description: "Landing page for a design subscription service.",
      image: "/images/work-limitless.jpg",
      href: "https://www.hxmzaehsan.com/templates/limitless",
    },
    {
      title: "Solopreneur",
      description: "Website for a freelance web designer & digital creator.",
      image: "/images/work-solopreneur.jpg",
      href: "https://www.framer.com/marketplace/templates/solopreneur/",
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
      { label: "X", href: "https://twitter.com", icon: "x" },
      { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    ] satisfies SocialLink[],
    credit: "Created by David Cardona Martínez",
  },

  contact: {
    heading: "Let's have a chat!",
    body: "Enter your details below and I'll get back to you as soon as possible.",
    visual: "/images/services-visual.png",
    budgets: [
      "Select Budget",
      "Up to $2,000",
      "$2,000 - $5,000",
      "$10,000 +",
    ],
    submitLabel: "Submit",
    successMessage: "Thanks — your message is on its way. I'll be in touch soon.",
    errorMessage: "Something went wrong. Please try again, or email me directly.",
  },
} as const;
