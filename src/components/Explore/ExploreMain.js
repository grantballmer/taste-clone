import React from 'react';
import { Link } from "react-router-dom";
import Row from "../Layout/Row";

const ExploreMain = props => {
  const { match } = props;
  return (
    <div>
      <Row
        path={`${match.url}`}
        items={[
          { type: "Trending Movies", imageName: "audience", altTag: 'audience in auditorium' },
          { type: "Newest Movies", imageName: "projector", altTag: 'old projector' },
          { type: "Highest Rated Movies", imageName: "oscars", altTag: 'oscars' }
        ]}
      /> 
    
      <hr />
            
      <h2 className="categories__heading">Explore More</h2>
      <div className="row row__categories">
        <div className="categories">
          <div className="categories__column">
            <Link to={`${match.url}/trending`}>Trending</Link>
            <Link to={`${match.url}/newest`}>Newest</Link>
            <Link to={`${match.url}/highest-rated`}>Highest Rated</Link>
            <Link to={`${match.url}/lowest-rated`}>Lowest Rated</Link>
            <Link to={`${match.url}/best-picture`}>Best Picture Winners</Link>
            <Link to={`${match.url}/highest-grossing`}>Top Grossing Movies</Link>
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
        path={`${match.url}/genres`}
        items={[
          { type: "Comedy", imageName: "superbad", altTag: 'movie poster' },
          { type: "Drama", imageName: "godfather", altTag: 'movie poster' },
          { type: "Action", imageName: "terminator2", altTag: 'movie poster' }
        ]}
      />
    
      <hr />
    
      <Row
        heading="Time Period"
        path={`${match.url}/times`}
        items={[
          { type: "1950s", imageName: "12-angry-men", altTag: 'movie poster' },
          { type: "1990s", imageName: "titanic", altTag: 'movie poster' },
          { type: "2010s", imageName: "inception", altTag: 'movie poster' }
        ]}
      />
    </div>
  );
};

export default ExploreMain;
