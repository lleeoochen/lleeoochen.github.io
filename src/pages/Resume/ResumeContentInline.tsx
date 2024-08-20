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
    <div className={clsx("w-full whitespace-pre-wrap sm:min-w-0")}>
      {selectedExperience?.descriptions.join("\n")}
    </div>
  );
};
