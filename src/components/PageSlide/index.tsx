import React, { forwardRef } from "react";
import downArrowSvg from "@/assets/images/icons/down-arrow.svg";
import "./index.scss";

type Props = {
  style?: React.CSSProperties;
  handleNavigate?: () => void;
  children: React.ReactNode;
};

export const PageSlide = forwardRef<HTMLDivElement, Props>(function PageSlide (props, ref) {
  const {
    style, children, handleNavigate
  } = props;
  const isPortrait = window.innerHeight > window.innerWidth;

  return (
    <div ref={ref} className="page-slide" style={style}>
      {children}
      {
        handleNavigate && !isPortrait && (
          <a className="scroll-indicator" onClick={handleNavigate}>
            <img src={downArrowSvg} alt="scroll" />
          </a>
        )
      }
    </div>
  );
});
