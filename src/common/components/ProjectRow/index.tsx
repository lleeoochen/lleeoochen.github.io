import { IProject } from "@/types";
import { Project } from "./Project";

export const ProjectRow = ({ projects }: { projects: IProject[] }) => {
  return (
    <div className="columns-2 gap-5 sm:gap-8 lg:columns-3 2xl:columns-5">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
