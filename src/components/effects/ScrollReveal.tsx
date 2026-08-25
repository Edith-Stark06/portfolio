"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1,
  y = 60,
  stagger = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(ref.current.children.length > 0 && stagger > 0 ? ref.current.children : ref.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
      return;
    }

    const targets =
      stagger > 0 && ref.current.children.length > 1
        ? ref.current.children
        : ref.current;

    gsap.set(targets, {
      opacity: 0,
      y,
      filter: "blur(8px)",
    });

    const currentRef = ref.current;
    const tl = gsap.to(targets, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration,
      delay,
      stagger: stagger > 0 ? stagger : undefined,
      ease: "power3.out",
      scrollTrigger: {
        trigger: currentRef,
        start: "top 85%",
        end: "bottom 15%",
        once,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === currentRef) st.kill();
      });
    };
  }, [delay, duration, y, stagger, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
