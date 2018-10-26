import React from "react";
import { connect } from "react-redux";
import { removeOverlay } from "../../store/actions/movieActions";
import { likeMovie, dislikeMovie, deleteRating } from "../../store/actions/ratingsActions";
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

class RateMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seen: false,
      like: null,
      display: false,
      movie: null
    };
  }

  componentDidUpdate(previousProps, previousState) {

    if (previousProps.overlay.displayOverlay !== this.props.overlay.displayOverlay) {

      const { displayOverlay, like, movie, seenMovie } = this.props.overlay;

      this.setState({
        movie: movie,
        seen: seenMovie,
        like: like,
        display: displayOverlay
      });
    }
  }

  handleRatingClick = e => {
    const movieID = this.props.overlay.movie.id;
    const { likeMovie, dislikeMovie, removeOverlay } = this.props;

    if (e.target.dataset.rating === 'like') {
      likeMovie(movieID);
      this.setState({ seen: true, like: true });
    }

    else {
      dislikeMovie(movieID);
      this.setState({ seen: true, like: false });
    }

    setTimeout(removeOverlay, 800);
  };

  handleClearClick = () => {
    const { like } = this.state;
    const movieID = this.props.overlay.movie.id;
    const { deleteRating } = this.props;
    deleteRating(movieID, like);
    this.setState({ seen: false, like: null });
  }


  render() {
    const { removeOverlay } = this.props;
    const { seen, like, movie, display } = this.state;

    const overlayClass = display ? "overlay-show" : "";
    let middleElClass = seen ?
      (like ? 'popup-movie__middle--like' : 'popup-movie__middle--dislike') :
      '';

    return (
      <div className={`overlay overlay-rateMovie ${overlayClass}`}>
        <p className="overlay__cancel" onClick={removeOverlay}>
          {"\u2716"}
        </p>
        <div className="popup popup-movie">
          <div className={`popup-movie__middle ${middleElClass}`} />
          <div className="popup-movie__poster">
            <p className="popup-movie__poster--title" />
            {movie && 
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={`${movie.title} poster`}
              /> 
            }
          </div>
          <div className="popup-movie__ratings">
            <div
              className={`bubble bubble__dislike ${seen && like ? 'bubble-grey' : ''}`}
              data-rating="dislike"
              onClick={this.handleRatingClick}
            >
              <img src={`${iconPath}/dislike.svg`} alt="thumbs down" />
            </div>
            <div
              className={`bubble bubble__like ${seen && !like ? 'bubble-grey' : ''}`}
              data-rating="like"
              onClick={this.handleRatingClick}
            >
              <img src={`${iconPath}/like.svg`} alt="thumbs up" />
            </div>
          </div>
          <p className={`popup-movie__clear ${seen ? 'displayClear' : ''}`} onClick={this.handleClearClick} >Clear</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    overlay: state.movies.overlay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    likeMovie: movieID => dispatch(likeMovie(movieID)),
    dislikeMovie: movieID => dispatch(dislikeMovie(movieID)),
    deleteRating: (movieID, like) => dispatch(deleteRating(movieID, like)),
    removeOverlay: () => dispatch(removeOverlay())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateMovie);
