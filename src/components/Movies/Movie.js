import React from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { getFormattedTitle } from "../../services/utilityFuncs/formatTitle";
import APICalls from "../../services/apiCalls/apiCalls";
import MovieTop from "./components/MovieTop";
import SeenItBtn from "./components/SeenItBtn";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { getMovie } from "../../store/actions/movieActions";
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

class Movie extends React.Component {
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
    const { movie } = this.props;
    const formatTitle = getFormattedTitle(movie.title);

    return (
      <Link to={`/movies/${formatTitle}-${movie.id}`} className="movie" onClick={this.handleClick} >
      
        <MovieTop item={this.state} movie={movie} /> 
        
        <div className = "movie__poster--wrapper" >
          <div className="movie__poster">
            {movie.poster_path != null ? (
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
            ) : (
              <img
                src={`${iconPath}/popcorn.svg`}
                alt={`popcorn`}
                style={{alignSelf: 'center', maxWidth: '85%'}}
              />
            )} 
          </div> 
        </div> 
        
        <div className = "movie__btm" >
          <p className="movie__title">{movie.title}</p> 
          <SeenItBtn item = { this.state }  movie = { movie } />
        </div > 
        
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    user: state.firestore.ordered.users,
    isLoggedIn: state.auth.authenticated,
    seen: state.ratings.seen,
    watchlist: state.watchlist.watchlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getActiveMovie: data => dispatch(getMovie(data)),
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [{ collection: "users", doc: props.auth.uid }])
)(Movie);


{
  /* <Link to={`/movies/${formatTitle}-${movie.id}`}
  //         // to={{
  //         //   pathname: `/movies/${formatTitle}-${movie.id}`,
  //         //   state: movie.id
  //         // }}
  //         className="movie"
  //         //data-movieid={movie.id}
  //         onClick={this.handleClick}
  //         //data-click="link"
  //       >
  */
}
