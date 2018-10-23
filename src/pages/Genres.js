import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import Row from "../components/Layout/Row";

const Genres = props => {
  const { url } = props.match;
  let genres = [];

  const categories = ['comedy', 'drama', 'action', 'romance', 'horror', 'thriller', 'adventure', 'animation',
    'crime', 'documentary', 'family', 'fantasy', 'history', 'music', 'mystery', 'science fiction',
    'war', 'western'
  ];

  for (const genre of categories) {
    const formatPath = genre.replace(' ', '-');
    genres.push(
      <Link to={`${url}/${formatPath}`} key={genre} className="row__links row__links--genre"><p>{genre}</p></Link>
    );
  }


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

      <h2 className="row__header">All Genres</h2>
      <div className="row">
        <div className="categories categories__genres">
          {genres}
        </div> 
      </div>
    </div>
  );
};

export default Genres;
