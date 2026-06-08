export const SITE = {
  name: 'Dusty Reactor',
  tagline: 'Development Shop',
  url: 'https://dustyreactor.com',
  description:
    'Dusty Reactor is the studio home for games, tools, and side projects — reach out by email for studio inquiries.',
} as const;

export const CONTACT_EMAIL = 'dustyreactor@gmail.com';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const TCGSIDEKICK_DISCORD_URL = 'https://discord.gg/WTAZQ4kn';

export const COPY = {
  heroLead:
    'The studio banner above everything we build — games, tools, and experiments crafted with curiosity and a bit of chaos.',
  heroCtaSecondary: 'Email Us',
  projectsLead:
    'What we are working on right now. For studio questions, email us; project communities live with their own apps.',
  aboutText:
    'We believe the best projects start with curiosity and a bit of chaos. Dusty Reactor is where those ideas take shape — not a community hub itself, but the workshop behind the work. Questions about the studio? Email us directly.',
  aboutCta: 'Email the Studio',
  footerLead:
    'Have an idea, collaboration, or studio question? Send an email — this is the best way to reach Dusty Reactor.',
  footerCta: 'Email the Studio',
} as const;

export const PROJECTS = [
  {
    id: 'mobile-game',
    title: 'Mobile Game',
    subtitle: 'Working title TBD',
    description:
      'A mining and resource-management game with gems, rigs, biomes, and plenty of dusty charm.',
    status: 'Coming soon',
    image: '/images/project-mobile.webp',
    imageAlt: 'Game icon theme sheet with gems, rigs, and biomes',
  },
  {
    id: 'tcgsidekick',
    title: 'TCGSideKick',
    subtitle: 'Scan. Grade. Sell.',
    description:
      'A TCGPlayer helper for scanning, grading, and selling cards — all in one place. Join the TCGSideKick Discord for app updates and support.',
    status: 'In development',
    image: '/images/tcgsidekick-logo.webp',
    imageAlt: 'TCGSideKick logo — trading cards with Scan. Grade. Sell. tagline',
    imageFit: 'contain',
    imageBackground: '#ffffff',
    link: {
      href: TCGSIDEKICK_DISCORD_URL,
      label: 'Join TCGSideKick Discord',
      external: true,
    },
  },
  {
    id: 'backpack-builder',
    title: 'Backpack Builder',
    subtitle: 'Inventory simulator',
    description:
      'An inventory simulator where organization is half the fun.',
    status: 'Concept',
    image: '/images/project-backpack.webp',
    imageAlt: 'Backpack Builder concept illustration',
  },
] as const;

export const VIBES = [
  { label: 'Playful', icon: '✦' },
  { label: 'Creative', icon: '⚙' },
  { label: 'Chill', icon: '☁' },
  { label: 'Trusted', icon: '▣' },
  { label: 'A Little Dusty', icon: '✺' },
] as const;

export const PILLARS = [
  { label: 'Games', icon: '🎮' },
  { label: 'Tools', icon: '🖥' },
  { label: 'Services', icon: '📦' },
] as const;
