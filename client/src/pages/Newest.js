import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import APICalls from "../services/apiCalls/apiCalls";
import MovieGrid from "../components/Grids/MovieGrid";

class Newest extends React.Component {
  render() {
    return (
      <div>
        <div className="main-padding">
          <SmallBanner />
          <h1>Trending Movies</h1>
          <h2>Here's a list of trending movies.</h2>
          <MovieGrid url={APICalls.newest} />
          </div>
      </div>
    );
  }
}

export default Newest;
