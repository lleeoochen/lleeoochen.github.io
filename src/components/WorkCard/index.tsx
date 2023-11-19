import { IWork } from "@/types";
import "./index.scss";

type Props = IWork;

const WorkCard = ({
  title,
  company,
  location,
  time,
  logo,
  descriptions
}: Props) => {
  return(
    <div className="work-experience-wrap">
      <div className="work-experience">
        <div className="title-main">
          {title}
        </div>
        <div className="work-content">
          <div className="metadata-side">
            <img className="logo" src={logo} />
            <div className="metadata-info">
              <div className="company">
                {company}
              </div>
              <div className="location">
                {location}
              </div>
              <div className="time">
                {time}
              </div>
            </div>
          </div>
          <div className="description-side">
            <div className="description">
              {descriptions.map((paragraph, index) => <div key={index}>{paragraph}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
