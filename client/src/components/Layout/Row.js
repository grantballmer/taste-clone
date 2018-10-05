import React from "react";
import { Link } from "react-router-dom";
import RowChild from "./components/RowChild";

const Row = props => {
  const {heading, items, path} = props;
  return (
    <div className="row-wrapper">
      {heading && <h2>Movies By {heading}</h2>}

      <div className="row">
        {items.map(item => {
          return (
            <RowChild
              key={item.type}
              item={item}
              path={path}
            />
          );
        })}
      </div>
      {heading && (
        <Link to={path}>
          <p className="row__link">See All {heading}s >></p>
        </Link>
      )}
    </div>
  );
};

export default Row;
