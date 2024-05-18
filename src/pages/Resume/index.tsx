import { BasicLayout } from "@/layouts/BasicLayout";
import { TopMenuHeader } from "../../components/TopMenuHeader/index";
import { menuRoutes } from "@/main";
import { useSwipeable } from "react-swipeable";
import { IWork } from "@/types";
import { workExperiences } from "@/data/workExperiences";
import {
  useCallback, useState
} from "react";
import "./index.scss";

const JobTitleTile = ({
  work,
  onWorkClicked,
  selected
}: {
  work: IWork;
  onWorkClicked(work: IWork): void;
  selected: boolean;
}) => (
  <div className={"work-experience flex-row " + (selected ? "selected" : "")} onClick={() => onWorkClicked(work)}>
    <img className="company-icon" src={work.logo} />
    <div className="job-summary flex-column">
      <div className="job-title">{work.title}</div>
      <div className="tenure">{work.time}</div>
      <div className="company-title">{work.company}</div>
    </div>
    {selected && <div className="selected-bar"></div>}
  </div>
);

export const Resume = () => {
  const [selectedWork, setSelectedWork] = useState<IWork>();

  const handlers = useSwipeable({ onSwipedRight: () => {
    window.location.href = "/";
  } });

  const onWorkClicked = useCallback(
    (work: IWork) => {
      setSelectedWork((selectedWork) =>
        work === selectedWork ? undefined : work);
    },
    [setSelectedWork]
  );

  return (
    <div {...handlers}>
      <BasicLayout topMenuHeader={
        <TopMenuHeader
          title="RESUME"
          subtitle="A full stack software engineer focused on front-end and user experience."
          leftRoute={menuRoutes[1]}
        />
      }>
        <div className="resume-container flex-row">
          <div className="flex-column work-experience-list">
            {workExperiences.map((work) => (
              <JobTitleTile
                key={work.time}
                work={work}
                onWorkClicked={onWorkClicked}
                selected={selectedWork === work}
              />
            ))}
          </div>

          {selectedWork && <div className="job-description">{selectedWork.descriptions.join("\n")}</div>}
        </div>
      </BasicLayout>
    </div>
  );
};
