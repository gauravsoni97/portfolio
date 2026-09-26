"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/data/content";
import { SkillIcon } from "@/components/skill-icon";

const ease = [0.22, 1, 0.36, 1] as const;

export function SkillsGrid() {
  return (
    <div className="grid w-full gap-4">
      {skillGroups.map((group, groupIndex) => (
        <motion.article
          key={group.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: groupIndex * 0.08, ease }}
          className="relative grid w-full items-start gap-4 overflow-hidden rounded-[28px] border border-white/8 bg-[#0b0b0d] p-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:gap-8 md:p-6"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-mint/10 blur-2xl"
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{
              duration: 4.5 + groupIndex * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <p className="relative text-[11px] uppercase tracking-[0.2em] text-mint">
            {group.title}
          </p>

          <ul className="relative flex flex-wrap gap-2">
            {group.items.map((name, index) => (
              <motion.li
                key={name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: 0.12 + index * 0.05, ease }}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/6 bg-white/[0.03] px-2.5 py-2"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-black/50">
                  <SkillIcon name={name} size={16} />
                </span>
                <span className="whitespace-nowrap text-sm text-white/88">
                  {name}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
