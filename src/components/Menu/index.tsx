import homeWhiteIcon from "@/assets/images/menu/white/home.png";
import computerWhiteIcon from "@/assets/images/menu/white/computer.png";
import musicWhiteIcon from "@/assets/images/menu/white/music.png";
import workWhiteIcon from "@/assets/images/menu/white/work.png";
import "./index.scss";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="tab-group">
        <a className="tab menu-icon-wrap" href="/#home">
          <img className="menu-icon" src={homeWhiteIcon} alt={"Home"} />
          <span className="menu-label">Home</span>
        </a>
        <a className="tab menu-icon-wrap" href="#programming">
          <img
            className="menu-icon"
            src={computerWhiteIcon}
            alt={"Programming"}
          />
          <span className="menu-label">Coding</span>
        </a>
        <a id="music-icon-link" className="tab menu-icon-wrap" href="#music">
          <img className="menu-icon" src={musicWhiteIcon} alt={"Music"} />
          <span className="menu-label">Music</span>
        </a>
        <a className="tab menu-icon-wrap" href="#career">
          <img className="menu-icon" src={workWhiteIcon} alt={"Work"} />
          <span className="menu-label">Career</span>
        </a>
      </div>
    </div>
  );
};
