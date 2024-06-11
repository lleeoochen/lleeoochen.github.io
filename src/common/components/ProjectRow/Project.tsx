import { useMemo } from "react";
import GithubSvg from "@/common/assets/images/icons/github.svg";
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
      <a href={project.product} target="_blank" rel="noreferrer">
        <img
          className="aspect-auto w-full rounded-t-xl"
          key={project.id}
          src={project.image}
        />
      </a>
    );
  }, [project.id, project.image, project.product, project.video]);

  return (
    <div className="mb-5 cursor-pointer break-inside-avoid rounded-xl bg-project-card leading-tight shadow-md hover:shadow-xl sm:mb-5">
      {media}
      <div className="px-5 py-3">
        <div>
          <div className="mb-2 font-bold">{project.title}</div>
          <div>{project.description}</div>
        </div>
        {project.repository && (
          <a
            className="flex flex-row items-center gap-2 pt-3 text-center underline"
            target="_blank"
            rel="noreferrer"
            href={project.repository}
          >
            <div className="my-2 size-5">
              <GithubSvg />
            </div>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};
