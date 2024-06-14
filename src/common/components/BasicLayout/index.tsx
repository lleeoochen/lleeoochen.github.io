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
      <div className="mx-0 my-5 flex justify-between sm:my-16 xl:mx-40 xl:my-24">
        <MusicalColumn />
        <div className="w-full px-5 xl:px-[5vw]">{children}</div>
        <MusicalColumn />
      </div>
    </>
  );
};
