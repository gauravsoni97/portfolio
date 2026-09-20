"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/content";
import { SkillChip } from "@/components/skill-icon";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({
  project,
  onOpen,
  index,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease }}
      className="group w-full overflow-hidden rounded-[28px] border border-white/8 bg-[#0c0c0e] text-left"
    >
      <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/8]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 1100px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/35 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/80 backdrop-blur">
            {project.category}
          </span>
        </div>
        <span className="absolute right-5 top-4 font-display text-[40px] leading-none text-white/25 md:text-[56px]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-5 px-5 py-6 md:flex-row md:items-end md:justify-between md:px-8 md:py-8">
        <div className="min-w-0 max-w-xl">
          <h3 className="font-display text-[32px] leading-[0.92] tracking-tight md:text-[44px]">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <SkillChip key={skill} name={skill} />
            ))}
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm text-white transition-all group-hover:gap-3">
          View case
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint text-black">
            <ArrowUpRight size={16} />
          </span>
        </span>
      </div>
    </motion.button>
  );
}
