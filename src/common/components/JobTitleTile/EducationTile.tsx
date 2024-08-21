import clsx from "clsx";
import { useCallback, useState } from "react";
import DiplomaIcon from "@/common/assets/images/icons/diploma_icon.svg";
import { IExperience } from "@/types";

type IEducationTile = {
  education: IExperience;
  selected: boolean;
  onClicked(work: IExperience): void;
};

export const EducationTile = ({
  education,
  selected,
  onClicked,
}: IEducationTile) => {
  const [showDescription, setShowDescription] = useState(false);

  const _onEducationClicked = useCallback(() => {
    onClicked(education);
    setShowDescription((_showDescription) => !_showDescription);
  }, [education, onClicked]);

  return (
    <div
      className={clsx(
        "mx-auto flex cursor-pointer flex-col items-center rounded-2xl bg-menu-top p-5 shadow-md sm:hover:shadow-lg",
        {
          "outline outline-4 outline-job-selected-bar": selected,
        },
      )}
      onClick={() => _onEducationClicked()}
    >
      <div className="size-8">
        <DiplomaIcon />
      </div>
      {showDescription && (
        <div className="sm:hidden">{education.organization}</div>
      )}
    </div>
  );
};
