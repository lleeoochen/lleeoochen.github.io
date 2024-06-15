import clsx from "clsx";
import { IWorkExperience } from "@/types";

export const JobTitleTile = ({
  work,
  onWorkClicked,
  selected,
}: {
  work: IWorkExperience;
  onWorkClicked(work: IWorkExperience): void;
  selected: boolean;
}) => (
  <div
    className={clsx(
      "job-title-tile mr-2 flex cursor-pointer flex-row items-center rounded-2xl bg-menu-top p-3 shadow-md sm:mr-0 sm:hover:shadow-lg",
      {
        "sm:outline sm:outline-4 sm:outline-job-selected-bar": selected,
      },
    )}
    onClick={() => onWorkClicked(work)}
  >
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
);
