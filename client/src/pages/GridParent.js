import React from "react";
// import {Link} from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import APICalls from "../services/apiCalls/apiCalls";
import MovieGrid from "../components/Grids/MovieGrid";

const GridParent = props => {
  const { location, heading } = props;
  const optionalArg =
    props.match.params.genre || props.match.params.time || null;
  const page = location.search.split("?page=")[1] || 1;

  return (
    <div className="main-padding">
      <SmallBanner />
      <PageNavigation route={location.pathname} />
      <h1 className="page-heading">{heading}</h1>
      <h2 className="page-description">
        Here's a list of the {heading.toLowerCase()}. Save movies to the
        watchlist to track them or rate the ones you’ve seen to build your
        profile.
      </h2>
      <MovieGrid
        page={page}
        url={APICalls[props.funcName](page, optionalArg)}
        // getActiveMovie={props.getActiveMovie}
      />
    </div>
  );
};

export default GridParent;
