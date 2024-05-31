import React from "react";
import { MusicalColumn } from "../MusicalColumn";

type Props = {
  children: React.ReactNode;
  topMenuHeader: React.ReactNode;
};

export const BasicLayout = ({ children, topMenuHeader }: Props) => {
  return (
    <>
      {topMenuHeader}
      <div className="flex mx-0 my-10 justify-center sm:mx-[10vh] sm:my-32">
        <MusicalColumn />
        <div className="px-[5vw] w-[calc(100%-15vw)]">{children}</div>
        <MusicalColumn />
      </div>
    </>
  );
};
