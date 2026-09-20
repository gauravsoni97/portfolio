"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { skillGroups } from "@/data/content";
import { SkillIcon } from "@/components/skill-icon";

const CYCLE_MS = 3800;
const ease = [0.22, 1, 0.36, 1] as const;
const gridClass = "grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3";
const titleClass =
  "break-words font-display text-[28px] leading-[1.05] tracking-tight sm:text-[34px] md:text-[44px]";

const tallestGroup = skillGroups.reduce((a, b) =>
  a.items.length >= b.items.length ? a : b,
);
const longestTitle = skillGroups.reduce(
  (title, group) => (group.title.length > title.length ? group.title : title),
  "",
);

function SkillTile({ name }: { name: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3 overflow-hidden rounded-[18px] border border-white/8 bg-white/[0.03] px-3 py-3 sm:gap-4 sm:rounded-[22px] sm:px-4">
      <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-black/55 sm:h-16 sm:w-16">
        <span className="sm:hidden">
          <SkillIcon name={name} size={32} />
        </span>
        <span className="hidden sm:inline-flex">
          <SkillIcon name={name} size={40} />
        </span>
      </span>
      <span className="min-w-0 break-words text-[13px] leading-snug text-white/88 sm:text-sm">
        {name}
      </span>
    </div>
  );
}

export function SkillsGrid() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.3 });
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  useEffect(() => {
    if (!inView) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % skillGroups.length);
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [inView]);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[#0a0a0c]"
    >
      <div className="absolute inset-x-0 top-0 z-20 h-[2px] bg-white/6">
        <motion.div
          key={active}
          className="h-full origin-left bg-mint"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
        />
      </div>

      <div>
        <div className="relative overflow-hidden border-b border-white/8 px-5 py-10 md:px-8 md:py-14">
          <div className="relative min-w-0">
            <h3 className={`${titleClass} invisible`} aria-hidden>
              {longestTitle}
            </h3>
            <AnimatePresence mode="wait">
              <motion.h3
                key={group.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
                className={`${titleClass} absolute inset-0`}
              >
                {group.title}
              </motion.h3>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative min-w-0 p-4 sm:p-5 md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(200,230,181,0.09),transparent_52%)]" />

          <ul className={`${gridClass} invisible`} aria-hidden>
            {tallestGroup.items.map((name) => (
              <li key={name}>
                <SkillTile name={name} />
              </li>
            ))}
          </ul>

          <div className="absolute inset-4 sm:inset-5 md:inset-8">
            <AnimatePresence mode="wait">
              <motion.ul
                key={group.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                className={gridClass}
              >
                {group.items.map((name, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.04, ease }}
                  >
                    <SkillTile name={name} />
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
