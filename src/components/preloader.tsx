"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  animate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { SkillIcon } from "@/components/skill-icon";
import { images, projects } from "@/data/content";

const MIN_MS = 2200;
const MAX_MS = 4500;

const PageLoadContext = createContext(true);

export function usePageReady() {
  return useContext(PageLoadContext);
}

const loaderSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Redux Toolkit",
  "Git",
  "Figma",
  "Cursor",
  "SEO Optimization",
];

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

function waitForWindowLoad() {
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise<void>((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

const preloadSrcs = [images.hero, images.avatar, ...projects.map((item) => item.image)];
let hasBooted = false;

export function Preloader({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(hasBooted);
  const [visible, setVisible] = useState(!hasBooted);
  const progress = useMotionValue(0);
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(progress, "change", (value) => {
    setPercent(Math.round(value));
  });

  useEffect(() => {
    if (hasBooted) {
      setReady(true);
      setVisible(false);
      return;
    }

    let cancelled = false;
    const started = performance.now();
    const drift = animate(progress, 88, {
      duration: reduce ? 0.15 : 2.4,
      ease: "linear",
    });

    const assets = Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      waitForWindowLoad(),
      ...preloadSrcs.map(preloadImage),
    ]);

    const finish = async () => {
      await Promise.race([
        assets,
        new Promise<void>((resolve) => window.setTimeout(resolve, MAX_MS)),
      ]);
      const wait = MIN_MS - (performance.now() - started);
      if (wait > 0) {
        await new Promise((resolve) => window.setTimeout(resolve, wait));
      }
      if (cancelled) return;
      drift.stop();
      await animate(progress, 100, { duration: reduce ? 0.05 : 0.35, ease: "linear" });
      if (cancelled) return;
      hasBooted = true;
      setReady(true);
      window.dispatchEvent(new Event("portfolio:ready"));
      window.setTimeout(() => {
        if (!cancelled) setVisible(false);
      }, reduce ? 80 : 400);
    };

    void finish();
    return () => {
      cancelled = true;
      drift.stop();
    };
  }, [progress, reduce]);

  useEffect(() => {
    if (hasBooted) return;
    const fallback = window.setTimeout(() => {
      hasBooted = true;
      setReady(true);
      setVisible(false);
      window.dispatchEvent(new Event("portfolio:ready"));
    }, MAX_MS + 800);
    return () => window.clearTimeout(fallback);
  }, []);

  const skill = loaderSkills[Math.min(loaderSkills.length - 1, Math.floor((percent / 100) * loaderSkills.length))];

  return (
    <PageLoadContext.Provider value={ready}>
      {visible && (
        <div
          role="status"
          aria-live="polite"
          aria-label="Loading"
          className="fixed inset-0 z-[90] flex items-center justify-center transition-opacity duration-500"
          style={{ background: "#050505", opacity: ready ? 0 : 1 }}
        >
          <div className="flex w-[200px] flex-col items-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10">
              <SkillIcon name={skill} size={26} />
            </span>
            <div className="mt-8 h-px w-full overflow-hidden bg-white/10">
              <div
                className="h-full origin-left bg-mint"
                style={{ transform: `scaleX(${percent / 100})` }}
              />
            </div>
            <p className="mt-4 font-display text-sm tabular-nums text-mint">
              {String(percent).padStart(2, "0")}%
            </p>
          </div>
        </div>
      )}
      {children}
    </PageLoadContext.Provider>
  );
}
