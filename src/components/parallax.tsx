"use client";

import { useRef, type ReactNode } from "react";
import { useLenis } from "lenis/react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

export function Parallax({
  children,
  className,
  speed = 0.16,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const offset = useMotionValue(0);
  const y = useSpring(offset, { stiffness: 90, damping: 22, mass: 0.4 });

  useLenis(({ scroll }) => {
    const el = ref.current;
    if (!el) return;
    const top = scroll + el.getBoundingClientRect().top;
    const center = top + el.offsetHeight / 2;
    const viewCenter = scroll + window.innerHeight / 2;
    offset.set((viewCenter - center) * speed);
  });

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function ScrollProgress() {
  const progress = useMotionValue(0);
  const scaleX = useSpring(progress, { stiffness: 140, damping: 28, mass: 0.25 });

  useLenis(({ progress: value }) => {
    progress.set(value);
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-mint"
      style={{ scaleX }}
    />
  );
}

export function ScrollHint({
  href = "/#projects",
  className,
}: {
  href?: string;
  className?: string;
}) {
  const opacity = useMotionValue(1);
  const fade = useSpring(opacity, { stiffness: 120, damping: 24 });

  useLenis(({ scroll }) => {
    opacity.set(scroll > 80 ? 0 : 1);
  });

  return (
    <motion.a
      href={href}
      style={{ opacity: fade }}
      className={cn(
        "inline-flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted",
        className,
      )}
    >
      <span>Scroll</span>
      <span className="relative h-10 w-px overflow-hidden bg-white/12">
        <motion.span
          className="absolute inset-x-0 h-4 bg-mint"
          animate={{ y: ["-100%", "220%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.a>
  );
}

export function ParallaxText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const x = useTransform(progress, [0, 1], [-8, 8]);

  useLenis(({ scroll }) => {
    const el = ref.current;
    if (!el) return;
    const top = scroll + el.getBoundingClientRect().top;
    const start = top - window.innerHeight;
    const end = top + el.offsetHeight;
    progress.set((scroll - start) / Math.max(1, end - start));
  });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ x }}>{children}</motion.div>
    </div>
  );
}

export function SectionMark({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <ParallaxText
      className={cn(
        "pointer-events-none absolute inset-x-0 top-[-0.55em] z-0 overflow-hidden select-none",
        className,
      )}
    >
      <p className="section-mark max-w-full truncate font-display text-[64px] leading-none tracking-tight sm:text-[88px] md:text-[112px]">
        {text}
      </p>
    </ParallaxText>
  );
}
