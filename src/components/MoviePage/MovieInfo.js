import React from 'react';
import Credits from './Credits';
import Reviews from './Reviews';
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

const MovieInfo = ({ movie }) => {

  const genres = movie.genres.map((genre, index) => {
    const comma = index !== movie.genres.length - 1 ? ', ' : '';
    return <p key={`${genre.id}${index}`}>{genre.name + comma}</p>;
  });

  // const rating = movie.vote_average * 10;

  return (
    <div className="movieInfo">
            
      <div className="movieInfo__poster">
      
        {
          movie.poster_path != null ? (
            <img 
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
            alt={`${movie.title} movie poster`}
          />
          ) : (
            <img
            src={`${iconPath}/popcorn.svg`}
            alt={`popcorn`}
            style={{alignSelf: 'center', maxWidth: '25%', marginRight: "4%"}}
          />
          )
        }
      
      </div>
      
      <div className="movieInfo__details">
        <div className="yearGenre-wrapper">
          <p>{movie.release_date.split('-')[0]} - </p> 
          { genres }
        </div>
        
        <p className="movieInfo__details--desc">{movie.overview}</p>
        
        <Credits movie={movie} />
        
        <Reviews movie={movie} /> 
        
      </div>
      
      <div className="movieInfo__mobile--top">
      
        <div className="movieInfo__poster--mobile">
          {
            movie.poster_path != null ? (
              <img 
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
              alt={`${movie.title} movie poster`}
            />
            ) : (
              <img
              src={`${iconPath}/popcorn.svg`}
              alt={`popcorn`}
              style={{alignSelf: 'center', maxWidth: '25%', marginRight: "4%"}}
            />
            )
          }
      </div>
      
      <div className="movieInfo__mobile--right">
      
        <h2 className="movieInfo__title">{movie.title}</h2>
      
        <div className="yearGenre-wrapper">
          <p>{movie.release_date.split('-')[0]} - </p> 
          { genres }
        </div>
        
      </div>
      
      </div>
      <div className="movieInfo__mobile--bottom">
        <p className="movieInfo__details--desc">{movie.overview}</p>
        
        <Credits movie={movie} />
        
        <Reviews movie={movie} />
      </div>
    </div>
  );
};

export default MovieInfo;
