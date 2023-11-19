import React from "react";
import { Background } from "@/components/Background";
import "./index.scss";

type Props = {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <Background/>
      {children}
    </>
  );
};
