"use client";

import { ProjectTypes } from "../types/projectTypes";
import { ProjectItem } from "./project-item";

interface ProjectProps {
  projects: ProjectTypes[];
}

const Projects = ({ projects }: ProjectProps) => {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          index={index}
          totalProjects={projects.length}
        />
      ))}
    </ul>
  );
};

export default Projects;
