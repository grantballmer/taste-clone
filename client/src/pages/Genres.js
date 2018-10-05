import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import Row from "../components/Layout/Row";

const Genres = props => {
  const {url} = props.match;
  return (
    <div className="main-padding">
      <SmallBanner />
      <PageNavigation route={props.location.pathname} />

      <h1 className="page-heading">Movie Genres</h1>
      <p className="page-description">
        Explore movies and recommendations by genre.{" "}
      </p>
      <Row
        path={url}
        items={[
          { type: "Comedy", imageName: "superbad", alt: "movie poster" },
          { type: "Drama", imageName: "godfather", alt: "movie poster" },
          { type: "Action", imageName: "terminator2", alt: "movie poster" }
        ]}
      />
      <Row
        path={url}
        items={[
          { type: "Romance", imageName: "notebook", alt: "movie poster" },
          { type: "Horror", imageName: "it", alt: "movie poster" },
          { type: "Thriller", imageName: "the-game", alt: "movie poster" }
        ]}
      />
      <hr />

      <h2>All Genres</h2>
      <div className="row">
        <div className="categories">
          <div className="categories__column thirds">
            <Link to={`${url}/comedy`}>Comedy</Link>
            <Link to={`${url}/drama`}>Drama</Link>
            <Link to={`${url}/action`}>Action</Link>
            <Link to={`${url}/romance`}>Romance</Link>
            <Link to="/explore/genres/horror">Horror</Link>
            <Link to="/explore/genres/thriller">Thriller</Link>
          </div>
          <div className="categories__column thirds">
            <Link to="/explore/genres/adventure">Adventure</Link>
            <Link to="/explore/genres/animation">Animation</Link>
            <Link to="/explore/genres/crime">Crime</Link>
            <Link to="/explore/genres/documentary">Documentary</Link>
            <Link to="/explore/genres/drama">Drama</Link>
            <Link to="/explore/genres/family">Family</Link>
            <Link to="/explore/genres/fantasy">Fantasy</Link>
          </div>
          <div className="categories__column thirds">
            <Link to="/explore/genres/history">History</Link>
            <Link to="/explore/genres/music">Music</Link>
            <Link to="/explore/genres/mystery">Mystery</Link>
            <Link to="/explore/genres/scienceFiction">Science Fiction</Link>
            <Link to="/explore/genres/thriller">Thriller</Link>
            <Link to="/explore/genres/war">War</Link>
            <Link to="/explore/genres/western">Western</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
