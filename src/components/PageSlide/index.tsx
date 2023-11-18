import React, { forwardRef } from "react";
import downArrowSvg from "@/assets/images/icons/down-arrow.svg";
import "./index.scss";

type Props = {
  style?: React.CSSProperties;
  targetHash?: string;
  children: React.ReactNode;
};

export const PageSlide = forwardRef<HTMLDivElement, Props>(function PageSlide (props, ref) {
  const {
    style, children, targetHash
  } = props;
  const isPortrait = window.innerHeight > window.innerWidth;

  return (
    <div ref={ref} className="page-slide" style={style}>
      {children}
      {
        targetHash && !isPortrait && (
          <a href={targetHash} className="scroll-indicator">
            <img src={downArrowSvg} alt="scroll" />
          </a>
        )
      }
    </div>
  );
});
