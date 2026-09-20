"use client";

import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { Experience } from "@/data/content";
import { SkillChip } from "@/components/skill-icon";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

function yearLabel(period: string) {
  const years = period.match(/\d{4}/g) ?? [];
  if (period.includes("Present") && years[0]) return `${years[0]} — Now`;
  if (years.length >= 2 && years[0] !== years[1]) {
    return `${years[0]} — ${years[1]}`;
  }
  return years[0] ?? period;
}

function startYear(period: string) {
  return period.match(/\d{4}/)?.[0] ?? period;
}

function ExperienceCard({
  role,
  index,
}: {
  role: Experience;
  index: number;
}) {
  const current = role.period.includes("Present");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, delay: index * 0.04, ease }}
      className="relative grid gap-5 overflow-hidden md:grid-cols-[140px_minmax(0,1fr)] md:gap-8"
    >
      <div className="relative md:pt-2">
        <p className="font-display text-[34px] leading-none tracking-tight text-mint md:text-[40px]">
          {startYear(role.period)}
        </p>
        <p className="mt-2 hidden text-sm text-white/50 md:block">
          {yearLabel(role.period)}
        </p>
        <span
          className={cn(
            "absolute -right-[5px] top-4 hidden h-2.5 w-2.5 rounded-full border-2 md:block",
            current
              ? "timeline-node-live border-mint bg-mint"
              : "border-white/20 bg-[#070708]",
          )}
        />
      </div>

      <div
        className={cn(
          "rounded-[26px] border p-5 md:p-7",
          current
            ? "border-mint/20 bg-mint/[0.04]"
            : "border-white/8 bg-white/[0.02]",
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            {current && (
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-0.5 text-[11px] font-medium text-black">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                Current
              </span>
            )}
            <h3 className="font-display text-[28px] leading-[0.94] tracking-tight md:text-[38px]">
              {role.company}
            </h3>
            <p className="mt-2 text-sm text-white/75 md:text-base">{role.role}</p>
          </div>
          <p className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={13} />
            {role.location}
          </p>
        </div>

        <p className="mt-2 text-sm text-muted md:hidden">{role.period}</p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
          {role.summary}
        </p>

        {role.stats?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {role.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5"
              >
                <span className="font-display text-sm text-mint">{stat.value}</span>
                <span className="ml-2 text-[11px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {role.stack.map((item) => (
            <SkillChip key={item} name={item} />
          ))}
        </div>

        <ul className="mt-6 space-y-2.5">
          {role.bullets.map((bullet) => (
            <li
              key={bullet}
              className="grid grid-cols-[8px_minmax(0,1fr)] gap-3 text-sm leading-7 text-white/78"
            >
              <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-mint" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function ExperienceTimeline({ roles }: { roles: readonly Experience[] }) {
  return (
    <div className="relative space-y-6 overflow-hidden md:space-y-8">
      <span className="absolute bottom-8 left-[137px] top-6 hidden w-px bg-gradient-to-b from-mint/50 via-white/10 to-transparent md:block" />
      {roles.map((role, index) => (
        <ExperienceCard key={role.slug} role={role} index={index} />
      ))}
    </div>
  );
}
