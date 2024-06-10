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
      <div className="mx-0 my-5 flex justify-between lg:mx-[15vh] lg:my-32">
        <MusicalColumn />
        <div className="w-full px-5 lg:px-[5vw]">{children}</div>
        <MusicalColumn />
      </div>
    </>
  );
};
