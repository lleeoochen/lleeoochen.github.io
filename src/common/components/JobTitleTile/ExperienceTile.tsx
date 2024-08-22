import clsx from "clsx";
import { useCallback, useState } from "react";
import { IExperience } from "@/types";
import { outlineThickClsx } from "@/common/utils/commonStylings";

type IExperienceTile = {
  experience: IExperience;
  className?: string;
  selected: boolean;
  onClick(work: IExperience): void;
  children?: React.ReactNode;
  expandedContent?: React.ReactNode;
};

export const ExperienceTile = ({
  experience,
  className,
  selected,
  onClick,
  children,
  expandedContent,
}: IExperienceTile) => {
  const [showContent, setShowContent] = useState(false);

  const _onClick = useCallback(() => {
    onClick(experience);
    setShowContent((_showContent) => !_showContent);
  }, [experience, onClick]);

  return (
    <div
      className={clsx(
        "bg-bg-content-color flex cursor-pointer flex-col rounded-2xl p-5 shadow-md sm:hover:shadow-lg",
        className,
        {
          [outlineThickClsx]: selected,
        },
      )}
      onClick={_onClick}
    >
      {children}
      {showContent && expandedContent}
    </div>
  );
};
