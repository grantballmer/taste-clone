import React from "react";
import { connect } from "react-redux";
import { likeMovie, dislikeMovie, deleteRating } from "../../store/actions/ratingsActions";

class RateMovie extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      seen: false, 
      like: null
    };
  }
  
  //set state according to if movie has already been rated by like then dislike or not rated
  componentDidUpdate(previousProps, previousState) {
      if (previousProps.info.overlayInfo !== this.props.info.overlayInfo) {
          const {overlayInfo } = this.props.info;
          if (overlayInfo.seenMovie && overlayInfo.like ) {
            this.setState({ seen: true, like: true });
          } else if (overlayInfo.seenMovie) {
            this.setState({ seen: true, like: false });
          } else {
            this.setState({ seen: false, like: null});
          }
      }
  }
  
  handleRatingClick = e => {
    const movieID = this.props.info.movie.id;
    const { likeMovie, dislikeMovie } = this.props;
    
    if (e.target.dataset.rating === 'like') {
      likeMovie(movieID);
      this.setState({ seen: true, like: true});
    } 
    
    else {
      dislikeMovie(movieID);
      this.setState({ seen: true, like: false });
    }
    
    setTimeout(this.props.remove, 800);
  };
  
  handleClearClick = () => {
    const movieID = this.props.info.movie.id;
    const { deleteRating } = this.props;
    deleteRating(movieID);
    this.setState({seen: false, like: null});
  }
  

  render() {
    const { movie, displayOverlay } = this.props.info;
    const { remove } = this.props;
    const { seen, like } = this.state;
    const overlayClass = displayOverlay ? "overlay-show" : "";
    
    let middleElClass, likeBubbleClass, dislikeBubbleClass, clearClass;
    if (seen && like) {
      middleElClass = 'popup-movie__middle--like';
      dislikeBubbleClass = 'bubble-grey';
      clearClass = 'displayClear';
    } else if (seen) {
      middleElClass = 'popup-movie__middle--dislike';
      likeBubbleClass = 'bubble-grey';
      clearClass = 'displayClear';
    }

    return (
      <div className={`overlay overlay-rateMovie ${overlayClass}`}>
        <p className="overlay__cancel" onClick={remove}>
          {"\u2716"}
        </p>
        <div className="popup popup-movie">
          <div className={`popup-movie__middle ${middleElClass}`} />
          <div className="popup-movie__poster">
            <p className="popup-movie__poster--title" />
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
          <div className="popup-movie__ratings">
            <div
              className={`bubble bubble__dislike ${dislikeBubbleClass}`}
              data-rating="dislike"
              onClick={this.handleRatingClick}
            >
              <img src="/assets/icons/dislike.svg" alt="thumbs down" />
            </div>
            <div
              className={`bubble bubble__like ${likeBubbleClass}`}
              data-rating="like"
              onClick={this.handleRatingClick}
            >
              <img src="/assets/icons/like.svg" alt="thumbs up" />
            </div>
          </div>
          <p className={`popup-movie__clear ${clearClass}`} onClick={this.handleClearClick} >Clear</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    likeMovie: movieID => dispatch(likeMovie(movieID)),
    dislikeMovie: movieID => dispatch(dislikeMovie(movieID)),
    deleteRating: movieID => dispatch(deleteRating(movieID))
  };
};

const mapStateToProps = state => {
  return {
    seen: state.ratings.seen
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateMovie);
