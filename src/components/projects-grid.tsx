"use client";

import { useState } from "react";
import type { Project } from "@/data/content";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

export function ProjectsGrid({ projects }: { projects: readonly Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="space-y-5 md:space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onOpen={setActive}
          />
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
