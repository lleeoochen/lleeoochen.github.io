import { TopMenuHeader } from "@/common/components/TopMenuHeader";
import { BasicLayout } from "@/common/components/BasicLayout";
import { menuRoutes } from "@/main";
import { projects } from "@/common/data/projects";
import { recordings } from "@/common/data/recordings";
import { ProjectRow } from "@/common/components/ProjectRow";
import { shuffleArray } from "@/common/utils/listUtils";

export const Hobbies = () => {
  const projectAndRecordings = shuffleArray(projects, recordings);

  return (
    <BasicLayout
      topMenuHeader={
        <TopMenuHeader title="HOBBIES" rightRoute={menuRoutes[1]} />
      }
    >
      <div className="sm:mx-36">
        <ProjectRow projects={projectAndRecordings} />
      </div>
    </BasicLayout>
  );
};
