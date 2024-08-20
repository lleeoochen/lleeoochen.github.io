import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { BasicLayout } from "@/common/components/BasicLayout";
import { RouteDefinitions } from "@/main";
import { IExperience } from "@/types";
import { TopMenuHeader } from "@/common/components/TopMenuHeader";
import DiplomaIcon from "@/common/assets/images/icons/diploma_icon.svg";
import {
  ucsbEducationExperience,
  workExperiences,
} from "@/common/data/experiences";
import { JobTitleTile } from "./JobTitleTile";
import { ResumeContentArea } from "./ResumeContentArea";

const isPortraitMode = () => {
  return window.screen.width < 640;
};

export const Resume = () => {
  const [selectedExperience, setSelectedExperience] = useState<
    IExperience | undefined
  >();

  useEffect(() => {
    if (!isPortraitMode()) {
      setSelectedExperience(workExperiences[0]);
    }
  }, []);

  const onExperienceClicked = useCallback((experience: IExperience) => {
    setSelectedExperience(experience);
  }, []);

  const onBackClicked = useCallback(() => {
    setSelectedExperience(undefined);
  }, []);

  const internshipExperiences = workExperiences.filter(
    (workExperience) => workExperience.isInternship,
  );
  const fullTimeExperiences = workExperiences.filter(
    (workExperience) => !workExperience.isInternship,
  );

  return (
    <BasicLayout
      topMenuHeader={
        <TopMenuHeader
          title="RESUME"
          subtitle="A full stack software engineer focused on front-end and user experience."
          leftRoute={RouteDefinitions.HOME}
          rightRoute={RouteDefinitions.HOBBIES}
        />
      }
    >
      <div className="resume flex h-full snap-x snap-mandatory content-center overflow-x-auto sm:overflow-x-clip">
        <div className="relative h-full min-w-[calc(100vw-2.5rem)] snap-start pb-4 pt-2 sm:-top-12 sm:mr-4 sm:h-full sm:min-w-[22rem] sm:px-4 sm:pb-3">
          <div className="relative h-full">
            {/* Timeline background */}
            <div className="absolute -z-10 flex size-full flex-col items-center">
              <div className="size-4 rounded-full bg-job-selected-bar"></div>
              <div className="absolute top-3 h-full w-1 rounded-lg bg-job-selected-bar"></div>
            </div>
            <div className="flex h-full select-none flex-col gap-5 py-10">
              {fullTimeExperiences.map((work) => (
                <JobTitleTile
                  key={work.time}
                  work={work}
                  onWorkClicked={onExperienceClicked}
                  selected={selectedExperience === work}
                />
              ))}
              <div
                className={clsx(
                  "mx-auto size-12 cursor-pointer rounded-full bg-menu-top p-2 shadow-md sm:hover:shadow-lg",
                  {
                    "sm:outline sm:outline-4 sm:outline-job-selected-bar":
                      selectedExperience === ucsbEducationExperience,
                  },
                )}
                onClick={() => onExperienceClicked(ucsbEducationExperience)}
              >
                <DiplomaIcon />
              </div>
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
        <ResumeContentArea
          selectedExperience={selectedExperience}
          onBackClicked={onBackClicked}
        />
      </div>
    </BasicLayout>
  );
};
