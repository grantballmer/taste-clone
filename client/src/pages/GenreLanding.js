import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import LandingGrid from "../components/Grids/LandingGrid";
import APICalls from "../services/apiCalls/apiCalls";

class GenreLanding extends React.Component {
  render() {
    const param = this.props.match.params.genre || this.props.match.params.time;
    const {location, getActiveMovie} = this.props;

    // const capitalizeGenre = params.charAt(0).toUpperCase() + params.substr(1);
    let heading;
    location.pathname.includes('times') ? heading = `Movies From The ${param}` : heading = `Trending ${param} Movies`;
    
    
    console.log(this.props);
    
    return (
      <div className="main-padding">
        <SmallBanner />
        { /* <h1 className="title">Trending {capitalizeGenre} Movies</h1> */}
        <PageNavigation route={location.pathname} />
        <h1 className="page-heading">{heading}</h1>
        <h2 className="page-description">
          Browse through the best of {param} movies over the years.
        </h2>
        <LandingGrid
          url={APICalls.genre(param)}
          getActiveMovie={getActiveMovie}
        />
        <Link to={`${location.pathname}/trending`} className="pageLink">
          See All Trending {param} Movies >>
        </Link>
      </div>
    );
  }
}

export default GenreLanding;
