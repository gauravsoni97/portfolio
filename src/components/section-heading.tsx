"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  title,
  eyebrow,
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
    <div className="relative mb-10 overflow-hidden md:mb-12">
      <div className="flex items-start gap-4 md:gap-6">
        {index && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="mt-2 font-display text-sm tracking-[0.22em] text-mint md:mt-3"
          >
            {index}
          </motion.span>
        )}

        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-white/40">
              {eyebrow}
            </p>
          )}

          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[40px] leading-[0.88] tracking-[-0.03em] text-white md:text-[60px]">
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

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-4 block h-px max-w-40 origin-left bg-mint/55 md:max-w-56"
          />

          {description && (
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted">{description}</p>
          )}
        </div>
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
    <div className={cn("relative overflow-hidden pb-10 pt-10 md:pb-14 md:pt-16", className)}>
      <p className="relative z-10 mb-3 text-[11px] uppercase tracking-[0.24em] text-mint">
        {eyebrow}
      </p>
      <h1 className="relative z-10 max-w-4xl font-display text-[48px] leading-[0.88] tracking-[-0.03em] md:text-[80px]">
        {title}
      </h1>
      <span className="mt-5 block h-px max-w-40 bg-mint/55" />
    </div>
  );
}
