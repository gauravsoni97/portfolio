"use client";

import { skillGroups } from "@/data/content";
import { SkillIcon } from "@/components/skill-icon";
import { cn } from "@/lib/cn";

const allSkills = skillGroups.flatMap((group) => group.items);
const rowOne = allSkills.filter((_, index) => index % 2 === 0);
const rowTwo = allSkills.filter((_, index) => index % 2 === 1);

function SkillSlide({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.04]">
        <SkillIcon name={name} size={18} />
      </span>
      <span className="whitespace-nowrap text-sm text-white/90">{name}</span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = "38s",
}: {
  items: string[];
  reverse?: boolean;
  duration?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={cn("skill-marquee flex w-max gap-3", reverse && "skill-marquee-reverse")}
        style={{ animationDuration: duration }}
      >
        {loop.map((name, index) => (
          <SkillSlide key={`${name}-${index}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export function SkillsGrid() {
  return (
    <div className="skills-marquee-wrap relative overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.02] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070708] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070708] to-transparent md:w-24" />
      <div className="space-y-3">
        <MarqueeRow items={rowOne} duration="36s" />
        <MarqueeRow items={rowTwo} reverse duration="42s" />
        <MarqueeRow items={[...allSkills].reverse()} duration="48s" />
      </div>
    </div>
  );
}
