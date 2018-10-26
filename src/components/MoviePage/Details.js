import React from 'react';
import { connect } from "react-redux";
import SeenBtn from "./SeenBtn";
import SaveBtn from "./SaveBtn";
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasSeen: false,
      like: null,
      colorClass: ''
    };
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      const { movie, seen } = this.props;
      const seenIndex = seen.findIndex(item => item.movieId === movie.id);
      if (seenIndex !== -1) { this.setHasSeenState(seen, seenIndex) }
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.isLoggedIn) {
      let { movie, seen } = this.props;

      //when user rates a movie, component will update, so check to see if this movie was updated
      //then change WatchlistBtn and SeenItBtn accordingly
      const previousSeenIndex = previousProps.seen.findIndex(item => item.movieId === movie.id);
      const currentSeenIndex = seen.findIndex(item => item.movieId === movie.id);

      if (currentSeenIndex !== -1 && previousSeenIndex === -1) {
        this.setHasSeenState(seen, currentSeenIndex);
      }
      else if (currentSeenIndex === -1 && previousSeenIndex !== -1) {
        this.setState({ hasSeen: false, like: null, colorClass: '' });
      }
    }
  }

  setHasSeenState = (seen, index) => {
    const item = seen[index];
    const textClass = item.like ? 'btn__seen--like' : 'btn__seen--dislike';
    this.setState({ hasSeen: true, like: item.like, colorClass: textClass });
  }



  render() {
    const { movie } = this.props;

    return (
      <div className="trailer__title">
        <h2> {movie.title} </h2>
        <div className="seen">
            <SeenBtn movie={movie} item={this.state} />
            <SaveBtn movie={movie} />
            <div className="seen__item">
              <i className="fab fa-facebook-square"></i>
              <p>Share</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.authenticated,
    seen: state.ratings.seen,
    watchlist: state.watchlist.watchlist
  };
};


export default connect(mapStateToProps)(Details);
