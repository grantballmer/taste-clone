import React from "react";
import MainBanner from "../components/Banners/MainBanner";
import LandingGrid from "../components/Grids/LandingGrid";
import APICalls from "../services/apiCalls/apiCalls";

class Home extends React.Component {
  render() {
    return (
      <div className="main-padding">
        <MainBanner />
        <h1 className="title">Trending Movies</h1>
        <LandingGrid
          url={APICalls.home()}
          linkInfo={{ path: "/explore" }}
        />
      </div>
    );
  }
}

export default Home;
