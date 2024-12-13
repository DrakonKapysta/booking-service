import { Project } from "@/types/ProjectTypes";
import React, { FC } from "react";
import { ProjectItem } from "./ProjectItem";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 esm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 justify-items-center ">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};
