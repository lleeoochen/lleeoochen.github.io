import clsx from "clsx";
import { IExperience } from "@/types";

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
        <div className="mt-5 overflow-y-auto text-pretty rounded-2xl bg-menu-top p-8 shadow-md sm:mt-0">
          <div className="mb-3 text-2xl">
            {`${selectedExperience.title} at ${selectedExperience.organization}`}
          </div>
          {selectedExperience?.descriptions.map((description, index) => (
            <div key={index} className="mt-2">
              {description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ResumeContentArea.displayName = "ResumeContentArea";
