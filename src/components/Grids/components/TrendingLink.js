import React from "react";
import { Link } from "react-router-dom";

const TrendingLink = props => {
  const { path } = props.linkInfo;
  return (
    <Link to={`${path}/trending`} className="btn btn__pageLink">
      {props.linkInfo.type !== "time"
        ? `See All Trending ${props.linkInfo.param || ""} Movies >>`
        : `See All Highest Rated Movies From ${props.linkInfo.param} >>`}
    </Link>
  );
};

export default TrendingLink;
