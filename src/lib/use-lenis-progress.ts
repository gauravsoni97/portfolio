"use client";

import { useLenis } from "lenis/react";
import { useMotionValue, type MotionValue } from "motion/react";
import type { RefObject } from "react";

export function useLenisProgress(
  ref: RefObject<HTMLElement | null>,
  inset = { start: 0.42, end: 0.32 },
): MotionValue<number> {
  const progress = useMotionValue(0);

  useLenis(({ scroll }) => {
    const el = ref.current;
    if (!el) return;

    const top = scroll + el.getBoundingClientRect().top;
    const vh = window.innerHeight;
    const start = top - vh * inset.start;
    const end = top + el.offsetHeight - vh * inset.end;
    const next = (scroll - start) / Math.max(1, end - start);
    progress.set(Math.min(1, Math.max(0, next)));
  });

  return progress;
}
