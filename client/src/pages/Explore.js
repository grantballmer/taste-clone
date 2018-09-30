import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import Row from "../components/Layout/Row";

const Explore = () => {
  return (
    <div className="main-padding">
      <SmallBanner />
      {/* <div className="main-padding"> */}
        <div className="row-wrapper">
          <div className="row">
            <Link to="/explore/trending" className="row__item">
              <div className="row__item--image">
                <img
                  src="./assets/images/audience.jpg"
                  alt="audience in auditorium"
                />
              </div>
              <p>Trending Movies</p>
            </Link>
            <Link to="/explore/newest" className="row__item">
              <div className="row__item--image">
                <img src="./assets/images/projector.jpg" alt="old projector" />
              </div>
              <p>Newest Movies</p>
            </Link>
            <Link to="/explore/highest-rated" className="row__item">
              <div className="row__item--image">
                <img src="../assets/images/oscars.jpg" alt="oscars" />
              </div>
              <p>Highest Rated Movies</p>
            </Link>
          </div>
        </div>

        <hr />
        <h2 className="categories__heading">Explore More</h2>
        <div className="row row__categories">
          <div className="categories">
            <div className="categories__column">
              <Link to="/explore/trending">Trending</Link>
              <Link to="/explore/newest">Newest</Link>
              <Link to="/explore/highest-rated">Highest Rated</Link>
              <Link to="/explore/lowest-rated">Lowest Rated</Link>
              <Link to="/explore/best-picture">Best Picture Winners</Link>
              <Link to="/explore/highest-grossing">Top Grossing Movies</Link>
            </div>
            <div className="categories__column">
              <Link to="/explore/disney">Disney Movies</Link>
              <Link to="/explore/marvel">Marvel Movies</Link>
              <Link to="/explore/dc">DC Movies</Link>
              <Link to="./">A-Z</Link>
              <Link to="./">Z-A</Link>
            </div>
          </div>
        </div>
        <hr />

        <Row
          heading="Genre"
          parentRoute="genres"
          items={[
            { type: "Comedy", imageName: "superbad" },
            { type: "Drama", imageName: "godfather" },
            { type: "Action", imageName: "terminator2" }
          ]}
        />

        <hr />

        <Row
          heading="Time Period"
          parentRoute="times"
          items={[
            { type: "1950s", imageName: "12-angry-men" },
            { type: "1990s", imageName: "titanic" },
            { type: "2010s", imageName: "inception" }
          ]}
        />
      {/* </div> */}
    </div>
  );
};

export default Explore;
