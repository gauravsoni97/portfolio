"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/content";
import { GlowCard } from "@/components/glow-card";
import { SkillChip } from "@/components/skill-icon";

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
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group h-full w-full text-left"
    >
      <GlowCard className="flex h-full flex-col overflow-hidden rounded-[30px] transition-transform duration-500 group-hover:-translate-y-1.5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs backdrop-blur">
            {project.category}
          </span>
        </div>
        <span className="absolute right-4 top-4 font-display text-3xl leading-none text-white/35">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.logo ? (
          <span className="absolute bottom-4 left-4 h-11 w-11 overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <Image
              src={project.logo}
              alt=""
              fill
              className="object-contain p-1.5"
            />
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-[30px] leading-[0.95] tracking-tight md:text-[36px]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <SkillChip key={skill} name={skill} />
          ))}
        </div>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-white transition-all group-hover:gap-3">
          View details
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04]">
            <ArrowUpRight size={14} />
          </span>
        </span>
      </div>
      </GlowCard>
    </button>
  );
}
