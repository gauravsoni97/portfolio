"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { site, testimonials } from "@/data/content";
import { Reveal } from "@/components/reveal";
import { FaLinkedin } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1] as const;

function Quote({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const [collapsed, setCollapsed] = useState(84);
  const [expanded, setExpanded] = useState(84);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const line = Number.parseFloat(getComputedStyle(el).lineHeight) || 28;
    const nextCollapsed = line * 3;
    const nextExpanded = el.scrollHeight;
    setCollapsed(nextCollapsed);
    setExpanded(nextExpanded);
    setOverflows(nextExpanded > nextCollapsed + 1);
  }, [text]);

  return (
    <div>
      <motion.div
        initial={false}
        animate={{ height: open ? expanded : collapsed }}
        transition={{ duration: 0.5, ease }}
        className="relative overflow-hidden"
      >
        <p
          ref={ref}
          className="whitespace-pre-line text-[15px] leading-7 text-white/80"
        >
          {text}
        </p>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0c0c0e] to-transparent transition-opacity duration-500"
          style={{ opacity: open ? 0 : overflows ? 1 : 0 }}
        />
      </motion.div>
      {(overflows || open) && (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="mt-3 text-sm text-mint transition-colors hover:text-[#d7efc8]"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {testimonials.map((item, index) => {
        const initials = item.name
          .split(" ")
          .map((part) => part[0])
          .slice(0, 2)
          .join("");

        return (
          <Reveal
            key={item.name}
            delay={index * 0.08}
            from={index % 2 === 0 ? "left" : "right"}
            className="h-full"
          >
            <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/8 bg-[#0c0c0e] p-6 md:p-8">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 font-display text-[120px] leading-none text-white/[0.04]"
              >
                ”
              </span>

              <p className="text-[11px] uppercase tracking-[0.2em] text-mint">
                Recommendation
              </p>

              <div className="relative mt-5 flex-1">
                <Quote text={item.quote} />
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint/12 font-display text-sm text-mint">
                    {initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm text-white">{item.name}</span>
                    <span className="block truncate text-[12px] text-muted">{item.role}</span>
                  </span>
                </div>
                <a
                  href={item.linkedin ?? site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn recommendation from ${item.name}`}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/8 text-[#0A66C2] transition-colors hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
