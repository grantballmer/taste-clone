import React from 'react';
import { connect } from 'react-redux';
import { updateOverlay } from "../../store/actions/movieActions";

class SeenBtn extends React.Component {
  handleClick = () => {
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
    const { hasSeen } = this.props.item;
    const activeClass = hasSeen ? 'seen__item--active' : '';
    return (
      <div className={`seen__item ${activeClass}`} onClick={this.handleClick} >
        <i className="far fa-check-square"></i>
        <p>Seen</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.authenticated,
    seen: state.ratings.seen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateOverlay: data => dispatch(updateOverlay(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeenBtn);
