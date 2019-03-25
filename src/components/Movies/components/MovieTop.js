import React from "react";
import {
  addToWatchlist,
  removeFromWatchlist
} from "../../../store/actions/watchlistActions";
import { updateOverlay } from "../../../store/actions/movieActions";
import { connect } from "react-redux";

class MovieTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inWatchlist: false
    };
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      const { movie, watchlist } = this.props;
      const watchlistIndex = watchlist.findIndex(item => item.id === movie.id);
      if (watchlistIndex !== -1) {
        this.setState({ inWatchlist: true });
      }
    }
  }

  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const { isLoggedIn, updateOverlay } = this.props;

    // // logged in, then updateWatchlist, else show signupOverlay
    if (isLoggedIn) {
      const { addToWatchlist, removeFromWatchlist, movie } = this.props;
      const { inWatchlist } = this.state;
      const toggleWatchlist = !inWatchlist;

      toggleWatchlist ? addToWatchlist(movie) : removeFromWatchlist(movie);
      this.setState({ inWatchlist: toggleWatchlist });
    } else {
      updateOverlay({ displayOverlay: true });
    }
  };

  render() {
    const { hasSeen } = this.props.item;
    const { inWatchlist } = this.state;

    const topClass = inWatchlist || hasSeen ? "display" : "";
    const starClass = inWatchlist ? "display" : "";

    return (
      <div className={`movie__top ${topClass}`}>
        {hasSeen && (
          <p className="movie__top--check">
            {"\u2714"}
            <span>Seen</span>
          </p>
        )}
        <p className="movie__top--watchlist" onClick={this.handleClick}>
          <span className="watchlist-text">Watchlist</span>
          <span className={`watchlist-star ${starClass}`}>
            {inWatchlist ? "\u2605" : "\u2606"}
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.authenticated,
    watchlist: state.watchlist.watchlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateOverlay: data => dispatch(updateOverlay(data)),
    addToWatchlist: movie => dispatch(addToWatchlist(movie)),
    removeFromWatchlist: movie => dispatch(removeFromWatchlist(movie))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieTop);
