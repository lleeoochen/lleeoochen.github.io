import MusicNoteSvg from "@/common/assets/images/icons/music_note.svg";
import CodingIconSvg from "@/common/assets/images/icons/coding_icon.svg";

const iconSvgCountList = Array.from(Array(5).keys());

export const MusicalColumn = () => {
  return (
    <div className="mt-2.5 hidden h-full flex-col gap-20 text-clip xl:flex">
      {iconSvgCountList.map((index) => (
        <div key={index} className="w-8">
          {index % 2 === 0 ? <MusicNoteSvg /> : <CodingIconSvg />}
        </div>
      ))}
    </div>
  );
};
