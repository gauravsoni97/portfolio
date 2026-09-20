"use client";

import { skillGroups } from "@/data/content";
import { SkillIcon } from "@/components/skill-icon";

const uniqueSkills = [...new Set(skillGroups.flatMap((group) => group.items))];

export function SkillsGrid() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.02] p-5 md:p-7">
      <div className="flex flex-wrap gap-3">
        {uniqueSkills.map((name) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.04]">
              <SkillIcon name={name} size={18} />
            </span>
            <span className="whitespace-nowrap text-sm text-white/90">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
