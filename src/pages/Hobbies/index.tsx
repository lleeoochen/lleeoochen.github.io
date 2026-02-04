import { TopMenuHeader } from "@/common/components/TopMenuHeader";
import { BasicLayout } from "@/common/components/BasicLayout";
import { RouteName } from "@/main";
import { projects } from "@/common/data/projects";
import { recordings } from "@/common/data/recordings";
import { ProjectRow } from "@/common/components/ProjectRow";
import { shuffleArray } from "@/common/utils/listUtils";
import { useMemo } from "react";

export const Hobbies = () => {
  const projectAndRecordings = useMemo(() => shuffleArray(projects, recordings), []);

  return (
    <BasicLayout
      topMenuHeader={
        <TopMenuHeader
          title="HOBBIES"
          subtitle="These are the fun projects and music recordings I've created."
          currentRoute={RouteName.HOBBIES}
        />
      }
    >
      <div className="2xl:mx-5">
        <ProjectRow projects={projectAndRecordings} />
      </div>
    </BasicLayout>
  );
};
