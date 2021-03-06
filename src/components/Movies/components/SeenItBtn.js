import React from "react";
import { connect } from "react-redux";
import { updateOverlay } from "../../../store/actions/movieActions";

class SeenItBtn extends React.Component {
  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const { movie, updateOverlay, seen } = this.props;

    const index = seen.findIndex(obj => obj.movieId === movie.id);
    const seenMovie = index !== -1;
    const movieRating = seenMovie ? seen[index].like : null;

    const data = {
      movie,
      seenMovie,
      like: movieRating,
      displayOverlay: true
    };

    updateOverlay(data);
  }

  render() {
    const { hasSeen, like, colorClass } = this.props.item;
    return (
      <button className={`btn ${colorClass}`} onClick={this.handleClick} >
        {"\u2714"}    
        {hasSeen  
        ? like ?  'Liked' : 'Disliked'
        : `I've seen this`}
      </button>
    );
  }

}

const mapStateToProps = state => {
  return {
    seen: state.ratings.seen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateOverlay: data => dispatch(updateOverlay(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeenItBtn);
