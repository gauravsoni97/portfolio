"use client";

import { useRef, useState } from "react";
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
  active,
}: {
  role: Experience;
  index: number;
  active: boolean;
}) {
  const current = role.period.includes("Present");

  return (
    <motion.article
      id={`exp-${role.slug}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay: index * 0.04, ease }}
      className={cn(
        "relative overflow-hidden rounded-[28px] border px-5 py-6 transition-colors duration-500 md:px-8 md:py-8",
        active || current
          ? "border-mint/25 bg-white/[0.035]"
          : "border-white/8 bg-white/[0.018]",
      )}
    >
      <span
        className={cn(
          "absolute bottom-8 left-0 top-8 w-px transition-colors duration-500",
          active || current ? "bg-mint" : "bg-white/10",
        )}
      />

      <div className="pl-5 md:pl-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display text-sm tracking-[0.18em] text-white/28">
              {String(index + 1).padStart(2, "0")}
            </span>
            {current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-0.5 text-[11px] font-medium text-black">
                <span className="timeline-node-live h-1.5 w-1.5 rounded-full bg-black" />
                Current
              </span>
            )}
          </div>
          <p className="text-sm text-mint">{yearLabel(role.period)}</p>
        </div>

        <h3 className="mt-4 font-display text-[28px] leading-[0.95] tracking-tight md:text-[40px]">
          {role.company}
        </h3>
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/75">
          <span>{role.role}</span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <MapPin size={13} />
            {role.location}
          </span>
        </p>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
          {role.summary}
        </p>

        {role.stats?.length ? (
          <div className="mt-6 grid grid-cols-3 divide-x divide-white/8 border-y border-white/8">
            {role.stats.map((stat) => (
              <div key={stat.label} className="px-2 py-4 first:pl-0 last:pr-0 md:px-4">
                <p className="font-display text-[22px] leading-none tracking-tight text-mint md:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] leading-4 text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {role.stack.map((item) => (
            <SkillChip key={item} name={item} />
          ))}
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04, delayChildren: 0.06 } },
          }}
          className="mt-6 space-y-2.5"
        >
          {role.bullets.map((bullet) => (
            <motion.li
              key={bullet}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
              }}
              className="grid grid-cols-[12px_1fr] gap-3 text-sm leading-7 text-white/78"
            >
              <span className="mt-3 h-px w-3 bg-mint/70" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}

function scrollPaneToRole(list: HTMLDivElement, slug: string) {
  const card = list.querySelector<HTMLElement>(`#exp-${slug}`);
  if (!card) return;
  const top =
    card.getBoundingClientRect().top -
    list.getBoundingClientRect().top +
    list.scrollTop -
    8;
  list.scrollTo({ top, behavior: "smooth" });
}

export function ExperienceTimeline({ roles }: { roles: readonly Experience[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const selectYear = (index: number) => {
    setActive(index);
    const list = listRef.current;
    if (list) scrollPaneToRole(list, roles[index].slug);
  };

  const syncActiveFromScroll = () => {
    const list = listRef.current;
    if (!list) return;
    const marker = list.getBoundingClientRect().top + 88;
    let next = 0;
    for (let index = 0; index < roles.length; index += 1) {
      const card = list.querySelector<HTMLElement>(`#exp-${roles[index].slug}`);
      if (!card) continue;
      if (card.getBoundingClientRect().top <= marker) next = index;
    }
    setActive((current) => (current === next ? current : next));
  };

  return (
    <div className="relative grid items-start gap-6 lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-12">
      <div
        className="exp-years -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden"
        data-lenis-prevent
      >
        {roles.map((role, index) => (
          <button
            key={role.slug}
            type="button"
            onClick={() => selectYear(index)}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 text-sm transition-colors",
              active === index
                ? "border-mint/40 bg-mint/15 text-mint"
                : "border-white/10 text-muted",
            )}
          >
            {startYear(role.period)}
          </button>
        ))}
      </div>

      <aside className="hidden self-start lg:sticky lg:top-32 lg:block">
        <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-white/35">
          Years
        </p>
        <ol className="relative">
          <span className="absolute bottom-2 left-[7px] top-2 w-px bg-white/8" />
          {roles.map((role, index) => {
            const selected = active === index;
            return (
              <li key={role.slug} className="relative">
                <button
                  type="button"
                  onClick={() => selectYear(index)}
                  className={cn(
                    "flex w-full items-start gap-3 py-3 text-left transition-colors",
                    selected ? "text-mint" : "text-white/28 hover:text-white/60",
                  )}
                >
                  <span
                    className={cn(
                      "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border transition-all duration-300",
                      selected
                        ? "timeline-node-live border-mint bg-mint"
                        : "border-white/20 bg-[#070708]",
                    )}
                  />
                  <span>
                    <span className="block font-display text-[34px] leading-none tracking-tight">
                      {startYear(role.period)}
                    </span>
                    <span
                      className={cn(
                        "mt-1 block text-[11px] leading-4 transition-opacity",
                        selected ? "text-white/55 opacity-100" : "opacity-0",
                      )}
                    >
                      {role.role}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </aside>

      <div
        ref={listRef}
        data-lenis-prevent
        onScroll={syncActiveFromScroll}
        className="exp-scroll relative max-h-[min(78vh,880px)] space-y-4 overflow-y-auto overscroll-contain pr-1"
      >
        {roles.map((role, index) => (
          <ExperienceCard
            key={role.slug}
            role={role}
            index={index}
            active={active === index}
          />
        ))}
      </div>
    </div>
  );
}
