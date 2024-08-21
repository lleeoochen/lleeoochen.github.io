import clsx from "clsx";
import { useCallback, useState } from "react";
import { IWorkExperience } from "@/types";
import { ResumeContentInline } from "../ResumeContent/ResumeContentInline";

export const JobTitleTile = ({
  work,
  onWorkClicked,
  selected,
}: {
  work: IWorkExperience;
  onWorkClicked(work: IWorkExperience): void;
  selected: boolean;
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const _onWorkClicked = useCallback(() => {
    onWorkClicked(work);
    setShowDescription((_showDescription) => !_showDescription);
  }, [onWorkClicked, work]);

  return (
    <div
      className={clsx(
        "job-title-tile items-left mx-2 flex cursor-pointer flex-col gap-4 rounded-2xl bg-menu-top p-5 shadow-md sm:mr-0 sm:p-3 sm:hover:shadow-lg",
        {
          "outline outline-4 outline-job-selected-bar": selected,
        },
      )}
      onClick={_onWorkClicked}
    >
      <div className="flex flex-row items-center leading-6">
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
          <div className="my-auto ml-3 hidden h-9 w-2 rounded-2xl bg-job-selected-bar sm:block"></div>
        )}
      </div>
      {showDescription && (
        <ResumeContentInline
          selectedExperience={work}
          onBackClicked={() => undefined}
        />
      )}
    </div>
  );
};
