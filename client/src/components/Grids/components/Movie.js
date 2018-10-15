import React from "react";
import { Link } from "react-router-dom";
import history from "../../../history";
import { getFormattedTitle } from "../../../services/utilityFuncs/formatTitle";
import APICalls from "../../../services/apiCalls/apiCalls";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { getMovie } from "../../../store/actions/movieActions";

class Movie extends React.Component {
  handleClick = e => {
    e.preventDefault();
    e.target.dataset.click === "seen"
      ? this.handleSeenClick(e)
      : this.handleLinkClick();
  };

  handleLinkClick = () => {
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

  handleSeenClick = e => {
    e.stopPropagation();
    const { movie, updateOverlayInfo } = this.props;
    updateOverlayInfo(movie);
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
          <div className="btn" data-click="seen" onClick={this.handleClick}>
            {"\u2714"} I've seen this
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    users: state.firestore,
    seen: state.ratings.seen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getActiveMovie: data => dispatch(getMovie(data))
  };
};

// export default withRouter(Movie);
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [{ collection: "users", doc: props.auth.uid }])
)(Movie);
