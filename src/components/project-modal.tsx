"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, X } from "lucide-react";
import type { Project } from "@/data/content";
import { ButtonLink } from "@/components/ui";
import { SkillChip } from "@/components/skill-icon";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!project) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  useEffect(() => {
    setCopied(false);
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 md:items-center md:p-6">
          <motion.button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c0e] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
          >
            <div className="relative h-[220px] shrink-0 overflow-hidden md:h-[280px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/35 to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs backdrop-blur">
                  {project.category}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur transition-colors hover:bg-white/10"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-6 md:px-8">
              <h3
                id="project-modal-title"
                className="font-display text-[34px] leading-[0.95] tracking-tight md:text-[48px]"
              >
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-[15px]">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <SkillChip key={skill} name={skill} />
                ))}
              </div>

              {project.password && (
                <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-mint/20 bg-mint/8 px-4 py-2">
                  <span className="text-sm text-mint">Password</span>
                  <code className="text-sm text-white">{project.password}</code>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(project.password);
                        setCopied(true);
                      } catch {
                        setCopied(false);
                      }
                    }}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/80 hover:bg-white/14"
                    aria-label="Copy password"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                </div>
              )}

              <div className="mt-8 space-y-4">
                {project.bullets.map((detail) => (
                  <p
                    key={detail}
                    className="max-w-2xl text-sm leading-7 text-white/80 md:text-[15px]"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>

            {project.href && (
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 bg-[#0c0c0e] px-5 py-4 md:px-8">
                <p className="text-sm text-muted">Live preview</p>
                <div className="flex flex-wrap gap-2">
                  <ButtonLink href={project.href} className="gap-2">
                    Open project
                    <ArrowUpRight size={15} />
                  </ButtonLink>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
