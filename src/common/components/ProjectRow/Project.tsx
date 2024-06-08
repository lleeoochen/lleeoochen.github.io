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
          className="w-full aspect-auto rounded-t-xl"
          key={project.id}
          src={project.video}
        />
      );
    }
    return (
      <img
        className="w-full aspect-auto rounded-t-xl"
        key={project.id}
        src={project.image}
      />
    );
  }, []);

  return (
    <div className="break-inside-avoid rounded-xl mb-5 shadow-xl leading-tight cursor-pointer sm:mb-5 hover:shadow-2xl">
      {media}
      <div className="p-5 pt-3">
        <div className="font-bold mb-2">{project.title}</div>
        <div>{project.description}</div>
      </div>
    </div>
  );
};
