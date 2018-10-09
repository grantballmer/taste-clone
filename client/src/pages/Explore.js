import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import Row from "../components/Layout/Row";

const Explore = ({ match }) => {
  return (
    <div className="main-padding">
      <SmallBanner />

      <Row
        path={`${match.url}`}
        items={[
          {
            type: "Trending Movies",
            imageName: "audience",
            altTag: "audience in auditorium"
          },
          {
            type: "Newest Movies",
            imageName: "projector",
            altTag: "old projector"
          },
          {
            type: "Highest Rated Movies",
            imageName: "oscars",
            altTag: "oscars"
          }
        ]}
      />

      <hr />

      <h2 className="categories__heading">Explore More</h2>
      <div className="row row__categories">
        <div className="categories">
          <div className="categories__column">
            <Link to={`${match.url}/trending`} className="row__links">
              <p>Trending</p>
            </Link>
            <Link to={`${match.url}/newest`} className="row__links">
              <p>Newest</p>
            </Link>
            <Link to={`${match.url}/highest-rated`} className="row__links">
              <p>Highest Rated</p>
            </Link>
            <Link to={`${match.url}/lowest-rated`} className="row__links">
              <p>Lowest Rated</p>
            </Link>
            <Link to={`${match.url}/best-picture`} className="row__links">
              <p>Best Picture Winners</p>
            </Link>
            <Link to={`${match.url}/highest-grossing`} className="row__links">
              <p>Top Grossing Movies</p>
            </Link>
          </div>
          <div className="categories__column">
            <Link to="/explore/disney" className="row__links">
              <p>Disney Movies</p>
            </Link>
            <Link to="/explore/marvel" className="row__links">
              <p>Marvel Movies</p>
            </Link>
            <Link to="/explore/dc" className="row__links">
              <p>DC Movies</p>
            </Link>
            <Link to="./" className="row__links">
              <p>A-Z</p>
            </Link>
            <Link to="./" className="row__links">
              <p>Z-A</p>
            </Link>
          </div>
        </div>
      </div>
      <hr />

      <Row
        heading="Genre"
        path={`${match.url}/genres`}
        items={[
          { type: "Comedy", imageName: "superbad", altTag: "movie poster" },
          { type: "Drama", imageName: "godfather", altTag: "movie poster" },
          { type: "Action", imageName: "terminator2", altTag: "movie poster" }
        ]}
      />

      <hr />

      <Row
        heading="Time Period"
        path={`${match.url}/times`}
        items={[
          { type: "1950s", imageName: "12-angry-men", altTag: "movie poster" },
          { type: "1990s", imageName: "titanic", altTag: "movie poster" },
          { type: "2010s", imageName: "inception", altTag: "movie poster" }
        ]}
      />
    </div>
  );
};

export default Explore;
