import React from "react";
import { Link } from "react-router-dom";
import RowChild from "./components/RowChild";

const Row = props => {
  return (
    <div className="row-wrapper">
      {props.heading && <h2>Movies By {props.heading}</h2>}

      <div className="row">
        {props.items.map(item => {
          return (
            <RowChild
              key={item.type}
              item={item}
              parentRoute={props.parentRoute}
            />
          );
        })}
      </div>
      {props.heading && (
        <Link to={`/explore/${props.parentRoute}`}>
          <p className="row__link">See All {props.heading}s >></p>
        </Link>
      )}
    </div>
  );
};

export default Row;
