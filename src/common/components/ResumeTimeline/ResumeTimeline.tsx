import { useCallback } from "react";
import {
  ucsbEducationExperience,
  workExperiences,
} from "@/common/data/experiences";
import { IExperience } from "@/types";
import { JobTitleTile } from "../JobTitleTile/JobTitleTile";
import { EducationTile } from "../JobTitleTile/EducationTile";
import { TimelineBackground } from "./TimelineBackground";

type IResumeTimeline = {
  selectedExperience: IExperience | undefined;
  setSelectedExperience(exp: IExperience): void;
};

export const ResumeTimeline = ({
  selectedExperience,
  setSelectedExperience,
}: IResumeTimeline) => {
  const internshipExperiences = workExperiences.filter(
    (workExperience) => workExperience.isInternship,
  );
  const fullTimeExperiences = workExperiences.filter(
    (workExperience) => !workExperience.isInternship,
  );

  const onExperienceClicked = useCallback(
    (experience: IExperience) => {
      setSelectedExperience(experience);
    },
    [setSelectedExperience],
  );

  return (
    <div className="relative h-full min-w-[calc(100vw-2.5rem)] snap-start pb-4 pt-2 sm:-top-12 sm:mr-4 sm:h-full sm:min-w-[22rem] sm:px-4 sm:pb-3">
      <div className="relative h-full">
        <TimelineBackground />

        <div className="flex h-full select-none flex-col gap-5 py-10">
          {fullTimeExperiences.map((work) => (
            <JobTitleTile
              key={work.time}
              work={work}
              onWorkClicked={onExperienceClicked}
              selected={selectedExperience === work}
            />
          ))}
          <EducationTile
            education={ucsbEducationExperience}
            onClick={onExperienceClicked}
            selected={selectedExperience === ucsbEducationExperience}
          />
          {internshipExperiences.map((work) => (
            <JobTitleTile
              key={work.time}
              work={work}
              onWorkClicked={onExperienceClicked}
              selected={selectedExperience === work}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
