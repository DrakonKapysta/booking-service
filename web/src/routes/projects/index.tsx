import { ProjectList } from "@/components/shared/ProjectList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Description 1",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description 2",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description 3",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    name: "Project 4",
    description: "Description 4",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    name: "Project 5",
    description: "Description 5",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 6,
    name: "Project 6",
    description:
      "Description 6 lorem ipsum Description 6 lorem ipsumDescription 6 lorem ipsumDescription 6 lorem ipsum",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 7,
    name: "Project 7",
    description: "Description 7",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

function RouteComponent() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
