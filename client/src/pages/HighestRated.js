import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import APICalls from "../services/apiCalls/apiCalls";
import MovieGrid from "../components/Grids/MovieGrid";

class HighestRated extends React.Component {
  render() {
    return (
      <div>
        <SmallBanner />
        <div className="main-padding">
          <h1>Trending Movies</h1>
          <h2>Here's a list of trending movies.</h2>
          <MovieGrid url={APICalls.highestRated} />
        </div>
      </div>
    );
  }
}

export default HighestRated;
