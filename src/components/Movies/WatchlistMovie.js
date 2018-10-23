import React from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { getFormattedTitle } from "../../services/utilityFuncs/formatTitle";
import APICalls from "../../services/apiCalls/apiCalls";
import { connect } from "react-redux";
import { getMovie } from "../../store/actions/movieActions";

class Movie extends React.Component {
  
  handleClick = e => {
    e.preventDefault();
    const formatTitle = getFormattedTitle(this.props.movie.title);
    const movieID = this.props.movie.id;
    const url = APICalls.movieFunc(movieID);

    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.props.getActiveMovie(result);
        history.push(`/movies/${formatTitle}-${movieID}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { movie } = this.props;
    const formatTitle = getFormattedTitle(movie.title);
    
    return (
      <Link
        to={{
          pathname: `/movies/${formatTitle}-${movie.id}`,
          state: movie.id
        }}
        className="movie"
        data-movieid={movie.id}
        onClick={this.handleClick}
        data-click="link"
      >
        <div className="movie__poster--wrapper">
          <div className="movie__poster">
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
        </div>
        <div className="movie__btm movie__btm--watchlist">
          <p className="movie__title">{movie.title}</p>
        </div> 
      </Link>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActiveMovie: data => dispatch(getMovie(data))
  };
};

export default connect(null, mapDispatchToProps)(Movie);
