import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import LandingGrid from "../components/Grids/LandingGrid";
import APICalls from "../services/apiCalls/apiCalls";

class GenreLanding extends React.Component {
  render() {
    const { genre } = this.props.match.params;
    const capitalizeGenre = genre.charAt(0).toUpperCase() + genre.substr(1);
    return (
      <div className="main-padding">
        <SmallBanner />
        <h1 className="title">Trending {capitalizeGenre} Movies</h1>
        <LandingGrid
          url={APICalls.genres(genre)}
          getActiveMovie={this.props.getActiveMovie}
        />
        <Link to={`/explore/genres/${genre}/trending`} className="pageLink">
          See All Trending {capitalizeGenre} Movies >>
        </Link>
      </div>
    );
  }
}

export default GenreLanding;
