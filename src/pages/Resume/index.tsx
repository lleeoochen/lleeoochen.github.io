import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { BasicLayout } from "@/common/components/BasicLayout";
import { RouteDefinitions } from "@/main";
import { IWork } from "@/types";
import { workExperiences } from "@/common/data/workExperiences";
import { TopMenuHeader } from "@/common/components/TopMenuHeader";
import { JobTitleTile } from "./JobTitleTile";

const isPortraitMode = () => {
  return window.screen.orientation.type.includes("portrait");
};

export const Resume = () => {
  const jobSelectionRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [selectedWork, setSelectedWork] = useState<IWork | undefined>();

  useEffect(() => {
    if (!isPortraitMode()) {
      setSelectedWork(workExperiences[1]);
    }
  }, []);

  const onWorkClicked = useCallback((work: IWork) => {
    setSelectedWork(work);
    if (isPortraitMode()) {
      descriptionRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  const onBackClicked = useCallback(() => {
    if (isPortraitMode()) {
      jobSelectionRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    setSelectedWork(undefined);
  }, []);

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
      <div className="resume flex snap-x snap-mandatory overflow-x-auto">
        <div
          ref={jobSelectionRef}
          className="flex h-[calc(100dvh-15rem)] min-w-[calc(100vw-2.5rem)] snap-start flex-col gap-3 overflow-y-auto pb-4 pt-2 sm:mr-4 sm:h-full sm:min-w-[22rem] sm:px-4 sm:pb-3"
        >
          {workExperiences.map((work) => (
            <JobTitleTile
              key={work.time}
              work={work}
              onWorkClicked={onWorkClicked}
              selected={selectedWork === work}
            />
          ))}
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
          <div className="mt-5 h-[calc(100dvh-15rem)] overflow-y-auto text-pretty sm:mt-0 sm:h-full">
            {selectedWork?.descriptions.join("\n")}
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};
