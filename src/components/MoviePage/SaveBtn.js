import React from 'react';
import { connect } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from "../../store/actions/watchlistActions";
import { updateOverlay } from "../../store/actions/movieActions";

class SaveBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inWatchlist: false,
    };
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {

      const { movie, watchlist } = this.props;
      const watchlistIndex = watchlist.findIndex(item => item.id === movie.id);
      if (watchlistIndex !== -1) { this.setState({ inWatchlist: true }) }
    }
  }

  handleClick = () => {

    if (this.props.isLoggedIn) {
      const { addToWatchlist, removeFromWatchlist, movie } = this.props;
      const { inWatchlist } = this.state;
      const toggleWatchlist = !inWatchlist;

      toggleWatchlist ? addToWatchlist(movie) : removeFromWatchlist(movie);
      this.setState({ inWatchlist: toggleWatchlist });

    }
    else {
      const { updateOverlay } = this.props;
      updateOverlay({ displayOverlay: true });
    }
  }

  render() {
    const { inWatchlist } = this.state;
    const activeClass = inWatchlist ? 'seen__item--active' : '';

    return (
      <div className={`seen__item ${activeClass}`} onClick={this.handleClick} >
        {inWatchlist ? <i className="fas fa-star"></i> : <i className="far fa-star"></i> }
        <p>{inWatchlist ? 'Saved' : 'Save'}</p>
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
    addToWatchlist: movie => dispatch(addToWatchlist(movie)),
    removeFromWatchlist: movie => dispatch(removeFromWatchlist(movie)),
    updateOverlay: data => dispatch(updateOverlay(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveBtn);
