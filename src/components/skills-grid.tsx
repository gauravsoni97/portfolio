"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/data/content";
import { SkillIcon } from "@/components/skill-icon";

const ease = [0.22, 1, 0.36, 1] as const;

export function SkillsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group, groupIndex) => (
        <motion.article
          key={group.title}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: groupIndex * 0.08, ease }}
          className="rounded-[28px] border border-white/8 bg-white/[0.025] p-5 md:p-6"
        >
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-mint">
                {group.number}
              </p>
              <h3 className="mt-2 font-display text-[26px] leading-none tracking-tight md:text-[30px]">
                {group.title}
              </h3>
            </div>
            <span className="text-sm text-white/30">
              {String(group.items.length).padStart(2, "0")}
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.045, delayChildren: 0.12 } },
            }}
            className="flex flex-wrap gap-2.5"
          >
            {group.items.map((name) => (
              <motion.div
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 transition-colors duration-300 hover:border-mint/35 hover:bg-mint/[0.06]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/8 bg-black/30 transition-transform duration-300 group-hover:scale-110">
                  <SkillIcon name={name} size={15} />
                </span>
                <span className="text-sm text-white/85">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.article>
      ))}
    </div>
  );
}
