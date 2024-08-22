import DiplomaIcon from "@/common/assets/images/icons/diploma_icon.svg";
import { IExperience } from "@/types";
import { ExperienceTile } from "./ExperienceTile";

type IEducationTile = {
  education: IExperience;
  selected: boolean;
  onClick(work: IExperience): void;
};

export const EducationTile = ({
  education,
  selected,
  onClick,
}: IEducationTile) => {
  return (
    <ExperienceTile
      className="mx-auto items-center"
      experience={education}
      onClick={onClick}
      selected={selected}
      expandedContent={education.organization}
    >
      <div className="size-8">
        <DiplomaIcon />
      </div>
    </ExperienceTile>
  );
};
