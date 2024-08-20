import clsx from "clsx";
import { IExperience } from "@/types";

type IResumeContentArea = {
  selectedExperience: IExperience | undefined;
  onBackClicked(): void;
};

export const ResumeContentArea = ({
  selectedExperience,
  onBackClicked,
}: IResumeContentArea) => {
  return (
    <div
      className={clsx(
        "hidden w-full min-w-[calc(100vw-2.5rem)] snap-start whitespace-pre-wrap sm:block sm:min-w-0",
      )}
    >
      <a className="block sm:hidden" onClick={onBackClicked}>
        {"← Back"}
      </a>
      <div className="mt-5 overflow-y-auto text-pretty rounded-2xl bg-menu-top p-8 shadow-md sm:mt-0">
        <div className="mb-3 text-2xl">
          {selectedExperience?.title}
          {" at "}
          {selectedExperience?.organization}
        </div>
        {selectedExperience?.descriptions.join("\n")}
      </div>
    </div>
  );
};

ResumeContentArea.displayName = "ResumeContentArea";
