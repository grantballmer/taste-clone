import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   movies: []
    // };
  }

  render() {
    const movie = this.props.movie;

    return (
      <div className="movie" data-movieid={movie.id}>
        <div className="movie__top">
          <p className="movie__top--watchlist">
            <span className="watchlist-text">Watchlist</span>
            <span className="watchlist-star">{"\u2606"} </span>
          </p>
        </div>
        <div className="movie__poster--wrapper">
          <div className="movie__poster">
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
        </div>
        <div className="movie__btm">
          <p className="movie__title">{movie.title}</p>
          <div className="btn">
            <p>{"\u2714"} I've seen this</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
