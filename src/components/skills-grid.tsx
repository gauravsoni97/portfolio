"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/data/content";
import { SkillIcon } from "@/components/skill-icon";

const ease = [0.22, 1, 0.36, 1] as const;

function SkillTile({
  name,
  delay = 0,
}: {
  name: string;
  delay?: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease }}
      className="flex min-w-0 flex-col items-center gap-3 rounded-[22px] border border-white/8 bg-white/[0.03] px-3 py-5 text-center transition-colors duration-300 hover:border-mint/30 hover:bg-mint/[0.05]"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-black/50">
        <SkillIcon name={name} size={22} />
      </span>
      <span className="text-[11px] leading-tight text-white/85">{name}</span>
    </motion.li>
  );
}

export function SkillsGrid() {
  return (
    <div className="w-full space-y-5">
      {skillGroups.map((group, groupIndex) => (
        <motion.article
          key={group.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: groupIndex * 0.05, ease }}
          className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#0b0b0d] p-5 md:p-6"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                {group.number}
              </p>
              <h3 className="mt-1 font-display text-[26px] leading-[0.92] tracking-tight text-white md:text-[30px]">
                {group.title}
              </h3>
            </div>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mb-1 hidden h-px w-16 origin-left bg-mint/55 md:block"
            />
          </div>

          <ul className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {group.items.map((name, index) => (
              <SkillTile
                key={name}
                name={name}
                delay={0.06 + index * 0.03}
              />
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
