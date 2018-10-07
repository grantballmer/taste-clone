import React from "react";
// import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import LandingGrid from "../components/Grids/LandingGrid";
import APICalls from "../services/apiCalls/apiCalls";

class GenreLanding extends React.Component {
  render() {
    const { location, getActiveMovie, match } = this.props;
    const param = match.params.genre || match.params.time;
    const paramType = Object.keys(match.params)[0];

    // const capitalizeGenre = params.charAt(0).toUpperCase() + params.substr(1);
    let heading;
    paramType === "genre"
      ? (heading = param)
      : (heading = `Movies From The ${param}`);

    return (
      <div className="main-padding">
        <SmallBanner />
        <PageNavigation route={location.pathname} />
        <h1 className="page-heading">{heading}</h1>
        <h2 className="page-description">
          Browse through the best
          {paramType === "genre"
            ? ` ${param} movies over the years.`
            : ` movies from the ${param}.`}
        </h2>
        <LandingGrid
          url={APICalls[paramType](1, param)}
          getActiveMovie={getActiveMovie}
          linkInfo={{ type: paramType, param: param, path: location.pathname }}
        />
      </div>
    );
  }
}

export default GenreLanding;
