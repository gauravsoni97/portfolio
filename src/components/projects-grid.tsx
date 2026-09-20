"use client";

import { useRef, useState } from "react";
import { useLenis } from "lenis/react";
import type { Project } from "@/data/content";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ProjectsGrid({ projects }: { projects: readonly Project[] }) {
  const stackRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<Array<HTMLDivElement | null>>([]);
  const currentY = useRef<number[]>([]);
  const [active, setActive] = useState<Project | null>(null);
  const count = projects.length;

  useLenis(() => {
    if (window.innerWidth < 1024) return;

    const stack = stackRef.current;
    if (!stack) return;

    const pin = 112;
    const distance = Math.max(1, stack.offsetHeight - window.innerHeight);
    const progress = clamp((pin - stack.getBoundingClientRect().top) / distance);
    const firstHeight = layersRef.current[0]?.offsetHeight ?? 520;
    const peek = 52;

    layersRef.current.forEach((layer, index) => {
      if (!layer) return;

      if (index === 0) {
        const cover = count > 1 ? clamp(progress) : 0;
        const scale = 1 - cover * 0.08;
        layer.style.transform = `scale(${scale})`;
        layer.style.transformOrigin = "top center";
        return;
      }

      const start = (index - 1) / Math.max(1, count - 1);
      const end = index / Math.max(1, count - 1);
      const local = clamp((progress - start) / Math.max(0.0001, end - start));
      const target = (1 - local) * (firstHeight + 112) + index * peek;
      const prev = currentY.current[index] ?? target;
      const next = prev + (target - prev) * 0.26;

      currentY.current[index] = next;
      layer.style.transform = `translate3d(0, ${next}px, 0)`;
    });
  });

  return (
    <>
      <div className="space-y-5 lg:hidden">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={setActive}
          />
        ))}
      </div>

      <div
        ref={stackRef}
        className="relative hidden lg:block"
        style={{ height: `${95 + Math.max(0, count - 1) * 85}vh` }}
      >
        <div className="sticky top-28">
          <div className="relative">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                ref={(node) => {
                  layersRef.current[index] = node;
                }}
                className={index === 0 ? "relative" : "absolute inset-x-0 top-0"}
                style={{
                  zIndex: index + 1,
                  transform:
                    index === 0
                      ? undefined
                      : `translate3d(0, calc(100% + 112px), 0)`,
                }}
              >
                <ProjectCard project={project} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
