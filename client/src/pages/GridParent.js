import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import APICalls from "../services/apiCalls/apiCalls";
import MovieGrid from "../components/Grids/MovieGrid";

const GridParent = props => {
  return (
    <div className="main-padding">
      <SmallBanner />
      <PageNavigation route={props.location.pathname} />
      <h1 className="page-heading">{props.heading}</h1>
      <h2 className="page-description">
        Here's a list of the {props.heading.toLowerCase()}. Save movies to the
        watchlist to track them or rate the ones you’ve seen to build your
        profile.
      </h2>
      <MovieGrid
        url={APICalls[props.funcName]}
        getActiveMovie={props.getActiveMovie}
      />
    </div>
  );
};

export default GridParent;
