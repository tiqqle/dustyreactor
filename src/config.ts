export const SITE = {
  name: 'Dusty Reactor',
  tagline: 'Development Shop',
  url: 'https://dustyreactor.com',
  description:
    'Dusty Reactor is a chill development shop crafting games, tools, and services for playful ideas.',
} as const;

export const DISCORD_INVITE_URL = 'https://discord.gg/WTAZQ4kn';

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
    title: 'TCGSidekick',
    subtitle: 'TCGPlayer helper',
    description:
      'A card scanning tool that makes collecting and selling trading cards a little easier.',
    status: 'In development',
    image: '/images/project-tcg.webp',
    imageAlt: 'Scout robot mascot scanning a trading card',
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
