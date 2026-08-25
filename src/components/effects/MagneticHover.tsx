"use client";

import { useRef, ReactNode } from "react";

interface MagneticHoverProps {
  children: ReactNode;
  maxDist?: number;
}

export default function MagneticHover({ children, maxDist = 15 }: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const h = rect.width / 2;
    const x = e.clientX - rect.left - h;
    const y = e.clientY - rect.top - rect.height / 2;
    const percentX = x / h;
    const percentY = y / (rect.height / 2);
    ref.current.style.transform = `translate(${percentX * maxDist}px, ${percentY * maxDist}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      ref={ref}
      className="magnetic"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
