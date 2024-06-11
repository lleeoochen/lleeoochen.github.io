import { TopMenuHeader } from "@/common/components/TopMenuHeader";
import { BasicLayout } from "@/common/components/BasicLayout";
import { RouteDefinitions } from "@/main";
import { projects } from "@/common/data/projects";
import { recordings } from "@/common/data/recordings";
import { ProjectRow } from "@/common/components/ProjectRow";
import { shuffleArray } from "@/common/utils/listUtils";

export const Hobbies = () => {
  const projectAndRecordings = shuffleArray(projects, recordings);

  return (
    <BasicLayout
      topMenuHeader={
        <TopMenuHeader
          title="HOBBIES"
          subtitle="These are the fun projects and music recordings I've created."
          leftRoute={RouteDefinitions.RESUME}
          rightRoute={RouteDefinitions.HOME}
        />
      }
    >
      <div className="2xl:mx-5">
        <ProjectRow projects={projectAndRecordings} />
      </div>
    </BasicLayout>
  );
};
