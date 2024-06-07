import musicNoteSvg from "@/common/assets/images/icons/music_note.svg";
import codingIconSvg from "@/common/assets/images/icons/coding_icon.svg";

export const MusicalColumn = () => {
  return (
    <div className="hidden sm:flex flex-col gap-20 mt-2.5">
      <img className="w-[3vw] max-w-12" src={musicNoteSvg} alt="scroll" />
      <img className="w-[3vw] max-w-12" src={codingIconSvg} alt="scroll" />
      <img className="w-[3vw] max-w-12" src={musicNoteSvg} alt="scroll" />
      <img className="w-[3vw] max-w-12" src={musicNoteSvg} alt="scroll" />
      <img className="w-[3vw] max-w-12" src={codingIconSvg} alt="scroll" />
    </div>
  );
};
