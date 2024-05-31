import { useSwipeable } from "react-swipeable";
import { useCallback, useState } from "react";
import classNames from "classnames";
import { BasicLayout } from "@/common/components/BasicLayout";
import { menuRoutes } from "@/main";
import { IWork } from "@/types";
import { workExperiences } from "@/data/workExperiences";
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
      "job-title-tile flex flex-row rounded-2xl cursor-pointer py-1 px-3 hover:shadow-lg selected:shadow-lg",
      {
        selected,
      },
    )}
    onClick={() => onWorkClicked(work)}
  >
    <img className="w-24 h-24 rounded-2xl" src={work.logo} />
    <div className="flex flex-col flex-1 ml-5">
      <div className="font-bold">{work.title}</div>
      <div>{work.time}</div>
      <div className="mt-5">{work.company}</div>
    </div>
    {selected && (
      <div className="bg-job-selected-bar rounded-2xl w-2 h-4/5 my-auto ml-3"></div>
    )}
  </div>
);

export const Resume = () => {
  const [selectedWork, setSelectedWork] = useState<IWork>();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      window.location.href = "/";
    },
  });

  const onWorkClicked = useCallback(
    (work: IWork) => {
      setSelectedWork((selectedWork) =>
        work === selectedWork ? undefined : work,
      );
    },
    [setSelectedWork],
  );

  return (
    <div {...handlers}>
      <BasicLayout
        topMenuHeader={
          <TopMenuHeader
            title="RESUME"
            subtitle="A full stack software engineer focused on front-end and user experience."
            leftRoute={menuRoutes[1]}
          />
        }
      >
        <div className="resume flex flex-row m-auto">
          <div className="flex flex-col min-w-96 gap-3 max-h-[600px] overflow-auto mr-12 p-3">
            {workExperiences.map((work) => (
              <JobTitleTile
                key={work.time}
                work={work}
                onWorkClicked={onWorkClicked}
                selected={selectedWork === work}
              />
            ))}
          </div>

          {selectedWork && (
            <div className="flex-1 whitespace-pre-wrap">
              {selectedWork.descriptions.join("\n")}
            </div>
          )}
        </div>
      </BasicLayout>
    </div>
  );
};
