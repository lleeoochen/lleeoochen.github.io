import { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import { BasicLayout } from "@/common/components/BasicLayout";
import { RouteDefinitions } from "@/main";
import { IWork } from "@/types";
import { workExperiences } from "@/common/data/workExperiences";
import { TopMenuHeader } from "@/common/components/TopMenuHeader";

const JobTitleTile = ({
  work,
  onWorkClicked,
  selected,
}: {
  work: IWork;
  onWorkClicked(work: IWork): void;
  selected: boolean;
}) => (
  <div
    className={classNames(
      "job-title-tile flex flex-row items-center rounded-2xl cursor-pointer py-1 px-3 hover:drop-shadow-md",
      {
        "shadow-md": selected,
      },
    )}
    onClick={() => onWorkClicked(work)}
  >
    <img className="size-24 rounded-2xl" src={work.logo} />
    <div className="ml-5 flex flex-1 flex-col">
      <div className="font-bold">{work.title}</div>
      <div>{work.time}</div>
      <div className="mt-5">{work.company}</div>
    </div>
    {selected && (
      <div className="my-auto ml-3 h-4/5 w-2 rounded-2xl bg-job-selected-bar"></div>
    )}
  </div>
);

export const Resume = () => {
  const jobSelectionRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [selectedWork, setSelectedWork] = useState<IWork | undefined>();

  const onWorkClicked = useCallback(
    (work: IWork) => {
      setSelectedWork((selectedWork) =>
        work === selectedWork ? undefined : work,
      );

      if (work !== selectedWork) {
        descriptionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    [selectedWork],
  );

  const onBackClicked = useCallback(() => {
    jobSelectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
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
          className="flex min-w-[calc(100vw-2.5rem)] snap-start flex-col gap-3 overflow-y-auto px-4 sm:mr-12 sm:min-w-96 sm:pb-3"
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
          className={classNames(
            "min-w-[calc(100vw-2.5rem)] sm:min-w-0 overflow-y-auto snap-start whitespace-pre-wrap",
          )}
        >
          <a className="block sm:hidden" onClick={onBackClicked}>
            {"← Back"}
          </a>
          <div className="mt-5 max-h-[70dvh]">
            {selectedWork?.descriptions.join("\n")}
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};
