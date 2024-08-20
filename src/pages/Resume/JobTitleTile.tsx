import clsx from "clsx";
import { useCallback, useState } from "react";
import { IWorkExperience } from "@/types";
import { ResumeContentInline } from "./ResumeContentInline";

const isPortraitMode = () => {
  return window.screen.width < 640;
};

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

  const _onWorkClicked = useCallback(
    (work: IWorkExperience) => {
      onWorkClicked(work);
      if (isPortraitMode()) {
        setShowDescription((_showDescription) => !_showDescription);
      }
    },
    [onWorkClicked],
  );

  return (
    <div
      className={clsx(
        "job-title-tile items-left mr-2 flex cursor-pointer flex-col gap-4 rounded-2xl bg-menu-top p-3 shadow-md sm:mr-0 sm:hover:shadow-lg",
        {
          "sm:outline sm:outline-4 sm:outline-job-selected-bar": selected,
        },
      )}
      onClick={() => _onWorkClicked(work)}
    >
      <div className="flex flex-row">
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
