import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import APICalls from "../services/apiCalls/apiCalls";
import MovieGrid from "../components/Grids/MovieGrid";
import { headerDetails } from "../services/pageDetails/headerDetails";
// import Header from "../components/Layout/Header";

const GridParent = props => {
  const { params } = props.match;
  const { location } = props;
  const page = location.search.split("?page=")[1] || 1;
  const details = headerDetails(params);
  const funcName = params.page || Object.keys(params)[0];

  const optionalArg =
    props.match.params.genre || props.match.params.time || null;

  return (
    <div className="main-padding">
      <SmallBanner />
      <PageNavigation route={location.pathname} />
      <h1 className="page-heading">{details.heading}</h1>
      <h2 className="page-description">{details.desc}</h2>
      <MovieGrid page={page} url={APICalls[funcName](page, optionalArg)} />
    </div>
  );
};

export default GridParent;
