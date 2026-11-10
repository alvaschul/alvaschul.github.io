"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

type RevealStyle = CSSProperties & { "--reveal-delay"?: string };

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) {
      element.classList.add("is-visible");
      return;
    }

    element.classList.add("reveal-pending");
    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const revealForReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) {
        element.classList.add("is-visible");
        observer.disconnect();
      }
    };

    motionPreference.addEventListener("change", revealForReducedMotion);
    observer.observe(element);
    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", revealForReducedMotion);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delayMs}ms` } as RevealStyle}
    >
      {children}
    </div>
  );
}
