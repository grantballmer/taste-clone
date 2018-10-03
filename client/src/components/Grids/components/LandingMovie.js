import React from "react";
import { Link } from "react-router-dom";
import APICalls from "../../../services/apiCalls/apiCalls";

class LandingMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: {}
    };
  }

  handleClick = e => {
    e.preventDefault();
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
    const formatTitle = this.props.movie.title
      .toLowerCase()
      .replace(" - ", "-")
      .replace(/\s/g, "-")
      .replace(/:/g, "")
      .replace(`'`, "-");
    return (
      <Link
        to={`/movies/${formatTitle}-${this.props.movie.id}`}
        className="landingMovie"
        data-movieid={this.props.movie.id}
        onClick={this.handleClick}
      >
        <img
          src={`https://image.tmdb.org/t/p/w780/${
            this.props.movie.backdrop_path
          }`}
          alt="movie poster"
        />
        <div className="attributes">
          <div className="attributes__name">
            <h1>{this.props.movie.title}</h1>
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
        <p className="landingMovie__desc">{this.props.movie.overview}</p>
      </Link>
    );
  }
}

export default LandingMovie;
