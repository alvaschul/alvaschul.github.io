"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

const languages = Array.from(new Set(projects.map((project) => project.language)));
const filters = ["All", ...languages];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.language === activeFilter,
  );

  return (
    <>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects by language">
          {filters.map((filter) => {
            const count =
              filter === "All"
                ? projects.length
                : projects.filter((project) => project.language === filter).length;

            return (
              <button
                key={filter}
                type="button"
                className={`filter-button${activeFilter === filter ? " is-active" : ""}`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                <span className="filter-count" aria-hidden="true">{count}</span>
              </button>
            );
          })}
        </div>
        <span className="project-count" aria-live="polite" aria-atomic="true">
          <strong>{String(visibleProjects.length).padStart(2, "0")}</strong>{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="project-grid" aria-label="Selected projects">
        {visibleProjects.map((project) => {
          const originalIndex = projects.indexOf(project);
          return (
            <ScrollReveal
              key={project.name}
              className="project-reveal"
              delayMs={Math.min(originalIndex * 65, 195)}
            >
              <ProjectCard
                index={originalIndex + 1}
                name={project.name}
                description={project.description}
                language={project.language}
              />
            </ScrollReveal>
          );
        })}
      </div>
    </>
  );
}
