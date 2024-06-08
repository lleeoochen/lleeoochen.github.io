import { IProject } from "@/types";
import { Project } from "./Project";

export const ProjectRow = ({ projects }: { projects: IProject[] }) => {
  return (
    <div className="columns-2 gap-5 sm:columns-4 sm:gap-8">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
