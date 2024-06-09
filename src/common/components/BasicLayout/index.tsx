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
      <div className="mx-0 my-5 flex justify-between sm:mx-[15vh] sm:my-32">
        <MusicalColumn />
        <div className="w-full px-5 sm:px-[5vw]">{children}</div>
        <MusicalColumn />
      </div>
    </>
  );
};
