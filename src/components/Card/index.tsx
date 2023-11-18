import "./index.scss";

type Props = {
  title: string;
  description: string;
  product?: string;
  repository?: string;
  image?: string;
  video?: string;
};

const Card = ({
  title, description, product, repository, image, video
}: Props) => {
  return(

    <div className="info-card">
      <div className="image-text">
        <div className="title">
          {title}
        </div>
        <div className="description">
          {description}
        </div>
        <div className="bottom">
          {
            product && (
              <a className="btn hover-effect" href={product} target="_blank" rel="noreferrer">
            Visit
              </a>
            )
          }
          {
            repository && (
              <a className="btn hover-effect" href={repository} target="_blank" rel="noreferrer">
            GitHub
              </a>
            )
          }
        </div>
      </div>
      <div className="media image-shadow">
        {
          image && (
            <a href={product} target="_blank" rel="noreferrer">
              <img src={image} loading="lazy"/>
            </a>
          )
        }
        {
          video && (
            <iframe
              loading="lazy"
              title="video"
              src={video}
              allowFullScreen
            />
          )
        }
      </div>
    </div>
  );};

export default Card;
