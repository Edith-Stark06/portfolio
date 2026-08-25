"use client";

import { useEffect, useRef, useState } from "react";

interface DecryptTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function DecryptText({
  text,
  className = "",
  style,
  as: Tag = "span",
  delay = 0,
}: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [visible, setVisible] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let iterations = 0;

    const timeout = setTimeout(() => {
      setVisible(true);
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iterations) return text[index];
              if (letter === " ") return " ";
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iterations >= text.length) {
          clearInterval(interval);
        }
        iterations += 1 / 3;
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <Tag
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
      aria-label={text}
    >
      <span aria-hidden="true">{displayText}</span>
    </Tag>
  );
}
