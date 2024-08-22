import { IWorkExperience } from "@/types";
import { ResumeContentInline } from "../ResumeContent/ResumeContentInline";
import { ExperienceTile } from "./ExperienceTile";

export const JobTitleTile = ({
  work,
  onWorkClicked,
  selected,
}: {
  work: IWorkExperience;
  onWorkClicked(work: IWorkExperience): void;
  selected: boolean;
}) => {
  return (
    <ExperienceTile
      className="mx-2 sm:mr-0 sm:p-3"
      experience={work}
      onClick={onWorkClicked}
      selected={selected}
      expandedContent={<ResumeContentInline selectedExperience={work} />}
    >
      <div className="flex flex-row items-center sm:leading-6">
        <img className="size-14 rounded-2xl sm:size-16" src={work.logo} />
        <div className="ml-5 flex flex-1 flex-col">
          <div className="font-bold">{work.title}</div>
          <div className="flex flex-row flex-wrap gap-x-2 sm:flex-col">
            <div>{work.organization}</div>
            <div className="sm:hidden">•</div>
            <div>{work.time}</div>
          </div>
        </div>
        {selected && (
          <div className="my-auto ml-3 hidden h-9 w-2 rounded-2xl bg-accent-color sm:block"></div>
        )}
      </div>
    </ExperienceTile>
  );
};
