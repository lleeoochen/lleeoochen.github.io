import { useSwipeable } from "react-swipeable";
import { TopMenuHeader } from "@/common/components/TopMenuHeader";
import { BasicLayout } from "@/layouts/BasicLayout";
import { menuRoutes } from "@/main";
import { projects } from "@/data/projects";
import { recordings } from "@/data/recordings";
import "./index.scss";

export const ProjectRow = ({ children }: { children: React.ReactNode }) => {
  return <div className="project-row">{children}</div>;
};

export const Hobbies = () => {
  const handlers = useSwipeable({ onSwipedLeft: () => {
    window.location.href = "/";
  } });

  return (
    <div {...handlers}>
      <BasicLayout
        topMenuHeader={
          <TopMenuHeader title="HOBBIES" rightRoute={menuRoutes[1]} />
        }
      >
        <ProjectRow>
          {projects
            .filter((project) => project.image)
            .map((project) => (
              <img
                key={project.id}
                src={project.image}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 15
                }}
              />
            ))}
        </ProjectRow>
        <ProjectRow>
          {recordings
            .filter((recording) => recording.image)
            .map((recording) => (
              <img
                key={recording.id}
                src={recording.image}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 15
                }}
              />
            ))}
        </ProjectRow>
      </BasicLayout>
    </div>
  );
};
