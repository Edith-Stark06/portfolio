"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navLinks } from "@/data/navigation";
import {
  openCommandCenter,
} from "@/data/knowledge";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Focus management for mobile drawer: trap focus, Escape closes,
  // focus returns to the menu button on close.
  useEffect(() => {
    if (!mobileOpen) return;

    const drawer = drawerRef.current;
    const menuButton = menuButtonRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = (): HTMLElement[] => {
      if (!drawer) return [];
      return Array.from(
        drawer.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
    };

    const focusables = getFocusable();
    focusables[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      const trigger = menuButton ?? previouslyFocused;
      trigger?.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  // Desktop keeps the cinematic hide on the home page, but the header
  // (hamburger included) must always remain reachable on mobile.
  const navHidden = isHome ? !scrolled : false;

  const isMac =
    typeof navigator !== "undefined" &&
    /mac|iphone|ipad/i.test(navigator.platform ?? navigator.userAgent ?? "");
  const shortcutLabel = isMac ? "⌘K" : "Ctrl+K";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-[80px] py-6 max-w-[1440px] mx-auto left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ${
          navHidden
            ? "opacity-0 -translate-y-full pointer-events-none max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto"
            : "opacity-100 translate-y-0"
        }`}
        role="banner"
      >
        <Link
          prefetch={false}
          href="/"
          className="font-mono text-mono-label font-bold text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
          aria-label="AETHER_ENG — Home"
        >
          AETHER_ENG
        </Link>

        <nav className="hidden md:flex gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(link.href + "/");
            return (
              <Link
                prefetch={false}
                key={link.href}
                href={link.href}
                className={`font-mono text-mono-label transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded ${
                  isActive
                    ? "text-primary font-bold border-b border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCommandCenter}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 glass-panel font-mono text-mono-label text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label={`Open command center (${shortcutLabel})`}
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              search
            </span>
            <kbd className="kbd-hint max-sm:hidden group-focus-visible:outline group-focus-visible:outline-primary/40">
              {shortcutLabel}
            </kbd>
          </button>

          <Link
            prefetch={false}
            href="/contact"
            className="glow-btn px-6 py-2 rounded-full font-mono text-mono-label font-bold text-white uppercase hidden md:block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Hire Me
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          className="md:hidden text-on-surface p-2 -mr-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        ref={drawerRef}
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex flex-col items-center gap-8"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              prefetch={false}
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-headline-md text-on-background hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
              tabIndex={mobileOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <Link
            prefetch={false}
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="glow-btn px-8 py-3 rounded-full font-mono text-mono-label font-bold text-white uppercase mt-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            tabIndex={mobileOpen ? 0 : -1}
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </>
  );
}

