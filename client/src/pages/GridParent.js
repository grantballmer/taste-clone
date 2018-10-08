import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import APICalls from "../services/apiCalls/apiCalls";
import MovieGrid from "../components/Grids/MovieGrid";
import {pageDetails} from "../services/pageDetails/pageDetails";

const GridParent = props => {
  const {params} = props.match;
  const {location} = props;
  const page = location.search.split("?page=")[1] || 1;
  const param = Object.keys(params)[0];
  let heading, funcName;
  param === 'page' ? {heading, funcName} = pageDetails[params.page] : {heading, funcName} = pageDetails.genre;
  
  const optionalArg = props.match.params.genre || props.match.params.time || null;
  
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
        url={APICalls[funcName](page, optionalArg)}
      />
    </div> 
  );
};

export default GridParent;
