import React from "react";
import Movie from "../components/Movies/Movie";
import RatingOverlay from "../components/Overlays/RatingOverlay";
import Preloader from "../components/Overlays/PreloaderOverlay";
import SortMenu from "../components/Layout/SortMenu";
import { connect } from "react-redux";

class Recommendations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      numOfMovies: 20,
      iterator: 0,
      movies: [],
      moviesChuck: [],
      displayLoader: false
    };
  }

  componentDidMount() {
    this.filterRecommendations();
  }

  componentDidUpdate(previousProps, previousState) {
    const { search } = this.props.location;

    if (previousProps.location.search !== search) {
      const sortType = search.split("?sort=")[1];
      this.setState({ iterator: 0, moviesChunk: [] }, () => {
        this.sortRecommendations(sortType);
      });
    } else if (previousProps.seen !== this.props.seen) {
      this.filterRecommendations();
    }
  }

  filterRecommendations = () => {
    const { recommendations, seen } = this.props;
    const { search } = this.props.location;

    const seenMovieIds = seen.map(movie => movie.movieId);
    const filterRecs = recommendations.filter(
      movie => !seenMovieIds.includes(movie.id)
    );

    const sortType = search.split("?sort=")[1] || "relevant";

    this.setState(
      {
        movies: filterRecs,
        iterator: 0,
        moviesChunk: []
      },
      () => {
        this.sortRecommendations(sortType);
      }
    );
  };

  showLoadingOverlay = () => {
    this.setState({ displayLoader: true });
  };

  sortRecommendations = sortType => {
    const { numOfMovies, iterator } = this.state;
    let { movies } = this.state;

    switch (sortType) {
      case "highest-rated":
        movies.sort((a, b) => b.vote_average - a.vote_average);
        break;

      case "newest":
        movies.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;

      case "oldest":
        movies.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
        break;

      default:
        movies.sort((a, b) => b.count - a.count);
    }

    const items = movies
      .slice(iterator * numOfMovies, numOfMovies * (iterator + 1))
      .map(movie => {
        return (
          <Movie
            key={movie.poster_path}
            movie={movie}
            showLoadingOverlay={this.showLoadingOverlay}
          />
        );
      });

    this.setState({
      isLoaded: true,
      movies: movies,
      moviesChunk: items,
      iterator: iterator + 1
    });
  };

  handleClick = () => {
    const { numOfMovies, iterator, movies, moviesChunk } = this.state;

    const items = movies
      .slice(iterator * numOfMovies, numOfMovies * (iterator + 1))
      .map(movie => {
        return <Movie key={movie.poster_path} movie={movie} />;
      });

    this.setState({
      moviesChunk: [...moviesChunk, ...items],
      iterator: iterator + 1
    });
  };

  render() {
    const { location } = this.props;
    const { moviesChunk, isLoaded, displayLoader } = this.state;

    return (
      <div className="main-padding">
        {/* if user has clicked on movie box, loader should display while waiting for fetch data to come back */}
        {displayLoader && <Preloader />}
        <RatingOverlay />
        <h2 className="page-heading">Recommendations</h2>
        <SortMenu location={location} />
        {isLoaded && (
          <React.Fragment>
            <div className="movieGrid">{moviesChunk}</div>
            {/* <button onClick={this.handleClick}>See More</button> */}
            <button className="btn btn-loadMore" onClick={this.handleClick}>
              Load More Results
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    seen: state.ratings.seen,
    recommendations: state.ratings.recommendations
  };
};

export default connect(mapStateToProps)(Recommendations);
