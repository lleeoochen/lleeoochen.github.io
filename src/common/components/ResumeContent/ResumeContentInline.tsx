import clsx from "clsx";
import { IExperience } from "@/types";

type IResumeContentInline = {
  selectedExperience: IExperience | undefined;
  onBackClicked(): void;
};

export const ResumeContentInline = ({
  selectedExperience,
}: IResumeContentInline) => {
  return (
    <div className={clsx("w-full whitespace-pre-wrap sm:hidden sm:min-w-0")}>
      {selectedExperience?.descriptions.map((description, index) => (
        <div key={index} className="mt-4">
          {description}
        </div>
      ))}
    </div>
  );
};
