import { useCallback, useEffect, useRef, useState } from "react";
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

const isPortraitMode = () => {
  return window.screen.orientation.type.includes("portrait");
};

export const Resume = () => {
  const jobSelectionRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const resumeContainerRef = useRef<HTMLDivElement>(null);

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
    if (isPortraitMode()) {
      if (resumeContainerRef.current) {
        resumeContainerRef.current.scroll({ left: 500, behavior: "smooth" });
      }
    }
  }, []);

  const onBackClicked = useCallback(() => {
    if (isPortraitMode()) {
      if (resumeContainerRef.current) {
        resumeContainerRef.current.scroll({ left: 0, behavior: "smooth" });
      }
    }
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
      <div
        ref={resumeContainerRef}
        className="resume flex h-full snap-x snap-mandatory overflow-x-auto sm:overflow-x-clip"
      >
        <div
          ref={jobSelectionRef}
          className="relative h-full min-w-[calc(100vw-2.5rem)] snap-start pb-4 pt-2 sm:-top-12 sm:mr-4 sm:h-full sm:min-w-[22rem] sm:px-4 sm:pb-3"
        >
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

        <div
          ref={descriptionRef}
          className={clsx(
            "min-w-[calc(100vw-2.5rem)] snap-start whitespace-pre-wrap sm:min-w-0",
          )}
        >
          <a className="block sm:hidden" onClick={onBackClicked}>
            {"← Back"}
          </a>
          <div className="mt-5 overflow-y-auto text-pretty sm:mt-0">
            <div className="mb-3 text-2xl">
              {selectedExperience?.title}
              {" at "}
              {selectedExperience?.organization}
            </div>
            {selectedExperience?.descriptions.join("\n")}
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};
