import { Project } from "@/types/ProjectTypes";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { Router, useNavigate } from "@tanstack/react-router";

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between p-2 rounded-lg border gap-2 max-w-[280px] w-full">
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {project.name}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. {project.description}
        </p>
      </div>

      <Button
        onClick={() =>
          navigate({
            to: `/projects/${project.name}`,
            params: { projectName: project.name },
          })
        }
      >
        View
      </Button>
    </div>
  );
};
