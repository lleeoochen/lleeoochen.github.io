import clsx from "clsx";
import { IExperience } from "@/types";
import { TextContentPanel } from "../ContentPanel/TextContentPanel";
import { ResumeDescriptions } from "./ResumeDescriptions";

type IResumeContentArea = {
  selectedExperience: IExperience | undefined;
};

export const ResumeContentArea = ({
  selectedExperience,
}: IResumeContentArea) => {
  return (
    <div
      className={clsx(
        "hidden min-w-[calc(100vw-2.5rem)] snap-start whitespace-pre-wrap sm:block sm:min-w-0",
        {
          "w-full": selectedExperience,
        },
      )}
    >
      {selectedExperience && (
        <TextContentPanel className="mt-5 overflow-y-auto sm:mt-0">
          <div className="mb-3 text-2xl">
            {`${selectedExperience.title} at ${selectedExperience.organization}`}
          </div>
          <ResumeDescriptions descriptions={selectedExperience.descriptions} />
        </TextContentPanel>
      )}
    </div>
  );
};

ResumeContentArea.displayName = "ResumeContentArea";
