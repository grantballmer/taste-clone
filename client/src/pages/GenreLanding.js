import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import LandingGrid from "../components/Grids/LandingGrid";

class GenreLanding extends React.Component {
  render() {
    return (
      <div className="main-padding">
        <SmallBanner />
          <h1 className="title">Trending Movies</h1>
          <LandingGrid />
          <Link to="/explore/trending" className="pageLink">
            See All Trending Movies >>
          </Link>
      </div>
    );
  }
}

export default GenreLanding;