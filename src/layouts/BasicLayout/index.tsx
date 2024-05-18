import React from "react";
import musicNoteSvg from "@/assets/images/icons/music_note.svg";
import codingIconSvg from "@/assets/images/icons/coding_icon.svg";
import "./index.scss";

type Props = {
  children: React.ReactNode;
  topMenuHeader: React.ReactNode;
}

export const BasicLayout = ({
  children, topMenuHeader
}: Props) => {
  return (
    <>
      {topMenuHeader}
      <div className="main-container">
        <div className="musical-border">
          <img className="music-icon" src={musicNoteSvg} alt="scroll" />
          <img className="music-icon" src={codingIconSvg} alt="scroll" />
          <img className="music-icon" src={musicNoteSvg} alt="scroll" />
          <img className="music-icon" src={musicNoteSvg} alt="scroll" />
          <img className="music-icon" src={codingIconSvg} alt="scroll" />
        </div>

        <div className="content">
          {children}
        </div>

        <div className="musical-border">
          <img className="music-icon" src={codingIconSvg} alt="scroll" />
          <img className="music-icon" src={musicNoteSvg} alt="scroll" />
          <img className="music-icon" src={codingIconSvg} alt="scroll" />
          <img className="music-icon" src={codingIconSvg} alt="scroll" />
          <img className="music-icon" src={musicNoteSvg} alt="scroll" />
        </div>
      </div>
    </>
  );
};
