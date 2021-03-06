import React from "react";
import { Link } from "react-router-dom";
import APICalls from "../../services/apiCalls/apiCalls";
// import history from "../../history";
import { connect } from "react-redux";
import { getFormattedTitle } from "../../services/utilityFuncs/formatTitle";
import { getMovie } from "../../store/actions/movieActions";

class LandingMovie extends React.Component {
  handleClick = e => {
    e.preventDefault();
    const { showLoadingOverlay } = this.props;
    showLoadingOverlay();
    const movieID = this.props.movie.id;
    const url = APICalls.movieFunc(movieID);

    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.props.getActiveMovie(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { movie } = this.props;
    const formatTitle = getFormattedTitle(movie.title);

    return (
      <Link
        to={`/movies/${formatTitle}-${movie.id}`}
        className="landingMovie"
        data-movieid={movie.id}
        onClick={this.handleClick}
      >
        <img
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          alt="movie poster"
        />
        <div className="attributes">
          <div className="attributes__name">
            <h1>{movie.title}</h1>
            <p className="attributes__release">New Release</p>
          </div>
          <div className="attributes__match">
            <p>-</p>
            <p>
              <span>%</span>
              match
            </p>
          </div>
        </div>
        <p className="landingMovie__desc">{movie.overview}</p>
      </Link>
    );
  }
}

// export default LandingMovie;

const mapDispatchToProps = dispatch => {
  return {
    getActiveMovie: data => dispatch(getMovie(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LandingMovie);

// const mapDispatchToProps = dispatch => {
//   return {
//     createProject: (project) => dispatch(createProject(project))
//   }
// }

// export default connect(null, mapDispatchToProps)(CreateProject)
