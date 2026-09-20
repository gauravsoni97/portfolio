"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionMark } from "@/components/parallax";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  title,
  eyebrow,
  watermark,
  description,
  index,
  href,
  hrefLabel = "See all",
}: {
  title: string;
  eyebrow?: string;
  watermark?: string;
  description?: string;
  index?: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className="relative mb-10 pt-6 md:mb-12 md:pt-8">
      <SectionMark text={watermark ?? title} />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          {index && (
            <span className="font-display text-sm tracking-[0.2em] text-mint">
              {index}
            </span>
          )}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="h-px flex-1 origin-left bg-gradient-to-r from-mint/50 via-white/10 to-transparent"
          />
          {eyebrow && (
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
              {eyebrow}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[42px] leading-[0.86] tracking-tight md:text-[64px]">
            {title}
          </h2>
          {href && (
            <Link
              href={href}
              className="mb-1 text-sm text-muted transition-colors hover:text-white"
            >
              {hrefLabel}
            </Link>
          )}
        </div>

        {description && (
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{description}</p>
        )}
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("relative pb-10 pt-10 md:pb-14 md:pt-16", className)}>
      <SectionMark text={eyebrow} className="-left-3 top-[-0.15em]" />
      <p className="relative z-10 mb-4 text-[11px] uppercase tracking-[0.22em] text-mint">
        {eyebrow}
      </p>
      <h1 className="relative z-10 max-w-4xl font-display text-[48px] leading-[0.9] tracking-tight md:text-[80px]">
        {title}
      </h1>
    </div>
  );
}
