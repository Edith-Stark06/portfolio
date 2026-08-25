export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/architect" },
  { label: "Journey", href: "/journey/ibm" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Knowledge", href: "/knowledge" },
];

/**
 * Verified destinations only.
 * `null` = profile unavailable / not yet published — the UI must render
 * these as unavailable rather than fabricating a link.
 */
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ramana-sree/",
  github: "https://github.com/Edith-Stark06",
  email: "ramanarobotech@gmail.com",
  x: "https://x.com/ramanasreekv",
  scholar: null,
  researchgate: null,
  resume: null,
} as const;

export type SocialLinks = typeof socialLinks;

