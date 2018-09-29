import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import Row from "../components/Layout/Row";
import ExploreRow from "../components/Layout/ExploreRow";

const Genres = props => {
  return (
    <div>
      <SmallBanner />
      <div className="main-padding">
        <PageNavigation route={props.location.pathname} />
        {/* <Link to="/explore">Explore</Link>
        <p>/</p>
        <Link to="/explore/genres">Genres</Link> */}

        <h1>Movie Genres</h1>
        <p>Explore movies and recommendations by genre. </p>
        <Row
          parentRoute="genres"
          items={[
            { type: "Comedy", imageName: "superbad" },
            { type: "Drama", imageName: "godfather" },
            { type: "Action", imageName: "terminator2" }
          ]}
        />
        <Row
          parentRoute="genres"
          items={[
            { type: "Romance", imageName: "notebook" },
            { type: "Horror", imageName: "it" },
            { type: "Thriller", imageName: "the-game" }
          ]}
        />
        <hr />

        <h2>All Genres</h2>
        <div class="row">
          <div class="categories">
            <div class="categories__column thirds">
              <a href="/explore/genres/comedy">Comedy</a>
              <a href="/explore/genres/drama">Drama</a>
              <a href="/explore/genres/action">Action</a>
              <a href="/explore/genres/romance">Romance</a>
              <a href="/explore/genres/horror">Horror</a>
              <a href="/explore/genres/thriller">Thriller</a>
            </div>
            <div class="categories__column thirds">
              <a href="/explore/genres/adventure">Adventure</a>
              <a href="/explore/genres/animation">Animation</a>
              <a href="/explore/genres/crime">Crime</a>
              <a href="/explore/genres/documentary">Documentary</a>
              <a href="/explore/genres/drama">Drama</a>
              <a href="/explore/genres/family">Family</a>
              <a href="/explore/genres/fantasy">Fantasy</a>
            </div>
            <div class="categories__column thirds">
              <a href="/explore/genres/history">History</a>
              <a href="/explore/genres/music">Music</a>
              <a href="/explore/genres/mystery">Mystery</a>
              <a href="/explore/genres/scienceFiction">Science Fiction</a>
              <a href="/explore/genres/thriller">Thriller</a>
              <a href="/explore/genres/war">War</a>
              <a href="/explore/genres/western">Western</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
