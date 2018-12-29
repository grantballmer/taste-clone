import React from 'react';
import Movie from "../Movies/Movie";

const Similar = ({ movie }) => {
  const movies = movie.similar.results.slice(0, 10);

  return (
    <React.Fragment>
      <h1 className="page-heading">Similar Movies</h1>
      <div className="movieGrid">
        {movies.map(movie => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Similar;
