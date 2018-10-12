import React from 'react';
import {connect} from "react-redux";
import { likeMovie, dislikeMovie } from "../../store/actions/ratingsActions";

class RateMovie extends React.Component {
    
    handleClick = e => {
        const { id } = this.props.info.movie;
        const { likeMovie, dislikeMovie } = this.props;
        e.target.dataset.rating === 'like' ? likeMovie(id) : dislikeMovie(id);
    }
    
    
    render() {
        const { movie, display, remove } = this.props.info;
        const overlayClass = display ? 'overlay-show' : '';
        return (
            <div className={`overlay overlay-rateMovie ${overlayClass}`}>
                <p className="overlay__cancel" onClick={remove}>{"\u2716"}</p>
                <div className="popup popup-movie">
                    <div className="popup-movie__middle"></div>
                    <div className="popup-movie__poster">
                        <p className="popup-movie__poster--title"></p>
                        <img 
                            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                            alt={`${movie.title} poster`}
                        />
                    </div>
                    <div className="popup-movie__ratings">
                        <div className="bubble bubble__dislike" data-rating="dislike" onClick={this.handleClick}>
                            <img src="/assets/icons/dislike.svg" alt="thumbs down" />
                        </div>
                        <div className="bubble bubble__like" data-rating="like" onClick={this.handleClick}>
                            <img src="/assets/icons/like.svg" alt="thumbs up" />
                        </div>
                    </div>
                    <p className="popup-movie__clear">Clear</p>
                </div>
            </div>
        )
    }    
};

const mapDispatchToProps = dispatch => {
  return {
    likeMovie: movieID => dispatch(likeMovie(movieID)),
    dislikeMovie: movieID => dispatch(dislikeMovie(movieID))
  };
};

const mapStateToProps = state => {
    return {
        seen: state.ratings.seen
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RateMovie); 