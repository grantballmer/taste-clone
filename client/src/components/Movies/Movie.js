import React from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { getFormattedTitle } from "../../services/utilityFuncs/formatTitle";
import APICalls from "../../services/apiCalls/apiCalls";
import MovieTop from "./components/MovieTop";
import SeenItBtn from "./components/SeenItBtn";
import { addToWatchlist, removeFromWatchlist } from "../../store/actions/watchlistActions";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { getMovie } from "../../store/actions/movieActions";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inWatchlist: false,
      hasSeen: false,
      like: null,
      colorClass: ''
    };
  }
  
  componentDidMount() {
      const { movie, seen, watchlist } = this.props;
      
      //When component first mounts check to see if movie is in ratings or watchlist reducer
      //if so, then set state accordingly so WatchlistBtn and SeenItBtn reflect correct state
      const watchlistIndex = watchlist.findIndex(item => item.id === movie.id);
      const seenIndex = seen.findIndex(item => item.movieId === movie.id);
      
      if (watchlistIndex !== -1) {this.setState({inWatchlist: true})}
      if (seenIndex !== -1) {this.setHasSeenState(seen, seenIndex)}
  }
    
  componentDidUpdate(previousProps, previousState) {
      let { movie, seen } = this.props;
      
      //when user rates a movie, component will update, so check to see if this movie was updated
      //then change WatchlistBtn and SeenItBtn accordingly
      const previousSeenIndex = previousProps.seen.findIndex(item => item.movieId === movie.id);
      const currentSeenIndex = seen.findIndex(item => item.movieId === movie.id);
      
      if (currentSeenIndex !== -1 && previousSeenIndex === -1) {
        this.setHasSeenState(seen, currentSeenIndex);
      } else if (currentSeenIndex === -1 && previousSeenIndex !== -1) {
        this.setState({hasSeen: false, like: null, colorClass: ''});
      }
  } 
    
  updateWatchlistState = newState => {
    const { addToWatchlist, removeFromWatchlist, movie } = this.props;
    newState ? addToWatchlist(movie) : removeFromWatchlist(movie);
    this.setState({ inWatchlist: newState });
  }
  
  setHasSeenState = (seen, index) => {
    const item = seen[index]; 
    const textClass = item.like ? 'btn__seen--like' : 'btn__seen--dislike';
    this.setState({hasSeen: true, like: item.like, colorClass: textClass });
  }
  
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
    const { movie, updateOverlayInfo } = this.props;
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
        <MovieTop item={this.state} updateWatchlistState={this.updateWatchlistState} />
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
          <SeenItBtn item={this.state} updateOverlayInfo={updateOverlayInfo} movie={movie} />
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    user: state.firestore.ordered.users,
    seen: state.ratings.seen,
    watchlist: state.watchlist.watchlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getActiveMovie: data => dispatch(getMovie(data)),
    addToWatchlist: movie => dispatch(addToWatchlist(movie)),
    removeFromWatchlist: movie => dispatch(removeFromWatchlist(movie))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [{ collection: "users", doc: props.auth.uid }])
)(Movie);
