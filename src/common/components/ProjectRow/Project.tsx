import { useMemo } from "react";
import { IProject } from "@/types";

type IProjectProps = {
  project: IProject;
};

export const Project = ({ project }: IProjectProps) => {
  const media = useMemo(() => {
    if (project.video) {
      return (
        <iframe
          className="aspect-auto w-full rounded-t-xl"
          key={project.id}
          src={project.video}
        />
      );
    }
    return (
      <img
        className="aspect-auto w-full rounded-t-xl"
        key={project.id}
        src={project.image}
      />
    );
  }, []);

  return (
    <div className="mb-5 cursor-pointer break-inside-avoid rounded-xl bg-project-card leading-tight drop-shadow-md hover:drop-shadow-xl sm:mb-5">
      {media}
      <div className="p-5 pt-3">
        <div className="mb-2 font-bold">{project.title}</div>
        <div>{project.description}</div>
      </div>
    </div>
  );
};
