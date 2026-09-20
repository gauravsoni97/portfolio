"use client";

import { useState } from "react";
import type { Project } from "@/data/content";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { Reveal } from "@/components/reveal";

export function ProjectsGrid({ projects }: { projects: readonly Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            delay={index * 0.1}
            from={index % 2 === 0 ? "left" : "right"}
          >
            <ProjectCard
              project={project}
              index={index}
              onOpen={setActive}
            />
          </Reveal>
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
