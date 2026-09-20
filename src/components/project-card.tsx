"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/content";
import { SkillChip } from "@/components/skill-icon";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex w-full flex-col overflow-hidden rounded-[28px] border border-white/8 bg-[#0c0c0e] text-left shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:h-[80vh]"
    >
      <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/8] lg:min-h-0 lg:flex-1 lg:aspect-auto">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 1100px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/35 to-transparent" />
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
    </button>
  );
}
