import React from "react";
import { Link } from "react-router-dom";

const ExploreRow = props => {
  const items = props.items.map(item =>
    item.replace(" Movies", "").replace(" ", "-")
  );

  return (
    <div className="row-wrapper">
      <h2>{props.heading ? props.heading : ""}</h2>
      <div className="row">
        <Link to={`/explore/${items[0].toLowerCase()}`} className="row__item">
          <div
            className={`row__item--background row__item--${items[0].toLowerCase()}`}
          />
          <p>{props.items[0]}</p>
        </Link>
        <Link to={`/explore/${items[1].toLowerCase()}`} className="row__item">
          <div
            className={`row__item--background row__item--${items[1].toLowerCase()}`}
          />
          <p>{props.items[1]}</p>
        </Link>
        <Link to={`/explore/${items[2].toLowerCase()}`} className="row__item">
          <div
            className={`row__item--background row__item--${items[2].toLowerCase()}`}
          />
          <p>{props.items[2]}</p>
        </Link>
      </div>
      {props.link && (
        <Link to={props.link}>
          <p>{props.linkText}</p>
        </Link>
      )}
    </div>
  );
};

export default ExploreRow;
