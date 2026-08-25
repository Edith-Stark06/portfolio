"use client";

import { socialLinks } from "@/data/navigation";
import MagneticHover from "@/components/effects/MagneticHover";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { media } from "@/data/media";

interface FooterProps {
  cta?: string;
  variant?: "default" | "research" | "ibm" | "architect";
}

export default function Footer({ cta = "Initiate Sequence?", variant = "default" }: FooterProps) {
  const footerLinks = [
    { label: "LinkedIn", category: "Connect", href: socialLinks.linkedin },
    { label: "GitHub", category: "Code", href: socialLinks.github },
    { label: "Email", category: "Comm", href: `mailto:${socialLinks.email}` },
  ];

  if (variant === "architect") {
    return (
      <footer
        className="w-full relative py-24 md:py-[160px] bg-background flex flex-col items-center justify-center px-5 md:px-[80px] text-center overflow-hidden"
        role="contentinfo"
      >
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.footer}
            fallbackSrc={media.placeholders.hero}
            alt="Footer Background"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent -z-10 pointer-events-none" aria-hidden="true" />
        <div className="film-grain -z-10" aria-hidden="true" />
        <div
          className="relative z-10 text-[48px] sm:text-[64px] md:text-[120px] leading-[1] tracking-[-0.05em] font-extrabold uppercase text-on-background mb-12 font-display"
          aria-hidden="true"
        >
          AETHER_ENG
        </div>
        <nav className="flex gap-8 mb-12" aria-label="Social links">
          {[
            { name: "LinkedIn", href: socialLinks.linkedin },
            { name: "GitHub", href: socialLinks.github },
            { name: "X", href: socialLinks.x },
            { name: "Email", href: `mailto:${socialLinks.email}` },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="font-mono text-mono-label text-on-surface-variant hover:text-primary transition-all duration-500 hover:tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <p className="font-mono text-mono-label text-on-surface-variant opacity-50">
          ©2024 AETHER AUTOMATION SEQUENCE
        </p>
      </footer>
    );
  }

  if (variant === "research") {
    return (
      <footer
        className="w-full min-h-[614px] flex flex-col justify-end border-t border-white/5 px-5 md:px-[80px] pb-12 pt-24 md:pt-[160px] bg-surface relative overflow-hidden"
        role="contentinfo"
      >
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow mb-16">
          <h2 className="font-display text-[48px] sm:text-[64px] md:text-[120px] leading-[1] tracking-[-0.05em] font-extrabold text-on-surface text-center mb-12">
            Access Manuscripts?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.scholar ? (
              <a
                href={socialLinks.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button bg-primary-container text-white font-mono font-bold uppercase px-6 md:px-8 py-3 md:py-4 rounded-full text-[12px] tracking-[0.05em] hover:brightness-110 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Google Scholar
              </a>
            ) : (
              <span
                className="glass-panel text-on-surface-variant/60 font-mono font-bold uppercase px-6 md:px-8 py-3 md:py-4 rounded-full text-[12px] tracking-[0.05em] cursor-not-allowed"
                title="Google Scholar profile unavailable"
              >
                Google Scholar
              </span>
            )}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel text-on-surface font-mono font-bold uppercase px-6 md:px-8 py-3 md:py-4 rounded-full text-[12px] tracking-[0.05em] hover:bg-white/10 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              GitHub
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="glass-panel text-on-surface font-mono font-bold uppercase px-6 md:px-8 py-3 md:py-4 rounded-full text-[12px] tracking-[0.05em] hover:bg-white/10 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Email
            </a>
          </div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 w-full border-t border-white/5 pt-8">
          <span
            className="font-display text-[80px] md:text-[120px] leading-[1] font-extrabold opacity-5 select-none absolute left-0 bottom-0 pointer-events-none translate-y-1/4"
            aria-hidden="true"
          >
            ARCHITECT_OS
          </span>
          <p className="font-mono text-mono-label uppercase text-on-surface-variant relative z-10">
            ©2024 ARCHITECT_OS. ALL RIGHTS RESERVED. ENGINEERED FOR PRECISION.
          </p>
        </div>
      </footer>
    );
  }

  return (
      <footer
        className="w-full relative py-24 md:py-[160px] bg-background flex flex-col items-center justify-center px-5 md:px-[80px] text-center mt-32 border-t border-white/5 overflow-hidden"
        role="contentinfo"
      >
        <div className="absolute inset-0 -z-20 w-full h-full opacity-35 pointer-events-none">
          <ImageWithFallback
            src={media.backgrounds.footer}
            fallbackSrc={media.placeholders.hero}
            alt="Footer Background"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent -z-10 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary-container/10 blur-[100px] rounded-full pointer-events-none -z-10"
          aria-hidden="true"
        />
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="font-display text-[48px] sm:text-[64px] md:text-[120px] leading-[1] tracking-[-0.05em] font-extrabold uppercase text-on-background mb-16">
          {cta}
        </h2>
        <nav className="flex flex-wrap justify-center gap-12 md:gap-24" aria-label="Contact links">
          {footerLinks.map((link) => (
            <MagneticHover key={link.label}>
              <a
                href={link.href}
                className="group relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-mono text-mono-label text-on-surface-variant group-hover:text-primary transition-all duration-500 group-hover:tracking-widest uppercase block mb-2">
                  {link.category}
                </span>
                <span className="font-display text-headline-md text-on-background group-hover:text-secondary-container transition-colors duration-300">
                  {link.label}
                </span>
              </a>
            </MagneticHover>
          ))}
        </nav>
        <p className="mt-32 font-mono text-mono-label text-outline-variant opacity-50">
          ©2024 AETHER AUTOMATION SEQUENCE
        </p>
      </div>
    </footer>
  );
}
