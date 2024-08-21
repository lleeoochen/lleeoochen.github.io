import { useState } from "react";
import { BasicLayout } from "@/common/components/BasicLayout";
import { ResumeTimeline } from "@/common/components/ResumeTimeline/ResumeTimeline";
import { TopMenuHeader } from "@/common/components/TopMenuHeader";
import { RouteDefinitions } from "@/main";
import { IExperience } from "@/types";
import { ResumeContentArea } from "../../common/components/ResumeContent/ResumeContentArea";

export const Resume = () => {
  const [selectedExperience, setSelectedExperience] = useState<
    IExperience | undefined
  >();

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
      <div className="resume flex h-full snap-x snap-mandatory justify-center overflow-x-auto sm:overflow-x-clip">
        <ResumeTimeline
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
        />
        <ResumeContentArea selectedExperience={selectedExperience} />
      </div>
    </BasicLayout>
  );
};
