import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import ExploreRow from "../components/Layout/ExploreRow";

const Explore = () => {
  return (
    <div>
      <SmallBanner />
      <div className="main-padding">
      {/*<ExploreRow items={["Trending Movies", "Newest Movies", "Highest Rated Movies"]} /> */}
      
      <div className="row">
        <Link to="/explore/trending" className="row__item">
          <div className="row__item--image">
            <img src="../assets/images/audience-crop.jpeg" alt="audience in auditorium" />
          </div>
          <p>Trending Movies</p>
        </Link>
        <Link to="/explore/newest" className="row__item">
          <div className="row__item--image">
            <img src="./assets/images/projector-crop.jpeg" alt="old projector" />
          </div>
          <p>Newest Movies</p>
        </Link>
        <Link to="/explore/highest-rated" className="row__item">
          <div className="row__item--image">
            <img src="./assets/images/oscar-crop.jpeg" alt="oscars" />
          </div>
          <p>Highest Rated Movies</p>
        </Link>
      </div> 
      
      <hr />
      <h2>Explore More</h2>
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
      <ExploreRow
        items={["Comedy", "Drama", "Action"]}
        heading="Movies By Genre"
        link="/explore/genres"
        linkText="See All Genres >>"
      />
      <hr />
      <ExploreRow
        items={["1950s", "1990s", "2010s"]}
        heading="Movies By Time Periods"
        link="/explore/time"
        linkText="See All Time Periods >>"
      />
      </div>
    </div>
  );
};

export default Explore;
