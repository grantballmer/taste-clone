import React from "react";
import { Link } from "react-router-dom";
import MainBanner from "../components/Banners/MainBanner";
import LandingGrid from "../components/Grids/LandingGrid";

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainBanner />
        <div className="main-padding">
          <h1 className="title">Trending Movies</h1>
          <LandingGrid />
          <Link to="/explore/trending" className="pageLink">
            See All Trending Movies >>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
