import clsx from "clsx";
import { IExperience } from "@/types";
import { ResumeDescriptions } from "./ResumeDescriptions";

type IResumeContentInline = {
  selectedExperience: IExperience | undefined;
  onBackClicked(): void;
};

export const ResumeContentInline = ({
  selectedExperience,
}: IResumeContentInline) => {
  return (
    <div className={clsx("w-full whitespace-pre-wrap sm:hidden sm:min-w-0")}>
      <ResumeDescriptions descriptions={selectedExperience?.descriptions} />
    </div>
  );
};
