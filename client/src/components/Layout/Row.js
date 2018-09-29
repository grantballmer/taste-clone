import React from "react";
import { Link } from "react-router-dom";

const Row = props => {
  return (
    <div className="row-wrapper">
      {props.heading && <h2>Movies By {props.heading}</h2>}

      <div className="row">
        <Link
          to={`/explore/${
            props.parentRoute
          }/${props.items[0].type.toLowerCase()}`}
          className="row__item"
        >
          <div className="row__item--image">
            <img
              src={`../assets/images/${props.items[0].imageName}.jpg`}
              alt={`${props.items[0].imageName.replace("-", " ")} movie poster`}
            />
          </div>
          <p>{props.items[0].type}</p>
        </Link>
        <Link
          to={`/explore/${
            props.parentRoute
          }/${props.items[1].type.toLowerCase()}`}
          className="row__item"
        >
          <div className="row__item--image">
            <img
              src={`../assets/images/${props.items[1].imageName}.jpg`}
              alt={`${props.items[1].imageName.replace("-", " ")} movie poster`}
            />
          </div>
          <p>{props.items[1].type}</p>
        </Link>
        <Link
          to={`/explore/${
            props.parentRoute
          }/${props.items[2].type.toLowerCase()}`}
          className="row__item"
        >
          <div className="row__item--image">
            <img
              src={`../assets/images/${props.items[2].imageName}.jpg`}
              alt={`${props.items[2].imageName.replace("-", " ")} movie poster`}
            />
          </div>
          <p>{props.items[2].type}</p>
        </Link>
      </div>
      {props.heading && (
        <Link to="explore/genres">
          <p className="row__link">See All {props.heading}s >></p>
        </Link>
      )}
    </div>
  );
};

export default Row;
