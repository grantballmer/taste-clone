import React from 'react';
import Credits from './Credits';

const MovieInfo = ({ movie }) => {

  const genres = movie.genres.map((genre, index) => {
    const comma = index !== movie.genres.length - 1 ? ', ' : '';
    return <p key={`${genre.id}${index}`}>{genre.name + comma}</p>;
  });

  const rating = movie.vote_average * 10;

  return (
    <div className="movieInfo">
            
      <div className="movieInfo__poster">
          <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
      </div>
      
      <div className="movieInfo__details">
        <div className="yearGenre-wrapper">
          <p>{movie.release_date.split('-')[0]} - </p> 
          { genres }
            
        </div>
        
        <p className="movieInfo__details--desc">{movie.overview}</p>
        
        <Credits movie={movie} />
        
        <div class="flex-row">
            <p>Ratings: </p>
            <div class="ratings">
              <div className="empty-stars"></div>
              <div className="full-stars" style={{ width: rating}}></div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default MovieInfo;
