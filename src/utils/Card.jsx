import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ imgSrc, text, title1, title2, fSize, urlLink }) => {
  return (
    <div className="card ">
      <div className="card-img">
        <img
          src={imgSrc}
          alt="place-holder-img"
          className="object-cover "
          style={{ width: "100%", height: "100%" }}
        />
        <div className="overlay">
          <div className="overlay-text-div">
            <p
              className="overlay-text-div-title"
              style={{
                fontSize: { fSize },
              }}
            >
              {title1}
            </p>
          </div>
        </div>
      </div>
      <div
      className="text-div"
      >
        <p
        className="overlay-text-div-text"
        >
          {text}
        </p>
        <Link to={urlLink}>
          <span
          className="overlay-text-div-span"
          >
            See details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
