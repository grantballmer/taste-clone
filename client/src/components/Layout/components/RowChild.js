import React from "react";
import { Link } from "react-router-dom";

const RowChild = props => {
  return (
    <Link
      to={`/explore/${props.parentRoute}/${props.item.type.toLowerCase()}`}
      className="row__item"
    >
      <div className="row__item--image">
        <img
          src={`../assets/images/${props.item.imageName}.jpg`}
          alt={`${props.item.imageName.replace("-", " ")} movie poster`}
        />
      </div>
      <p>{props.item.type}</p>
    </Link>
  );
};

export default RowChild;
