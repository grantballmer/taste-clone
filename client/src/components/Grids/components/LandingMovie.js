import React from "react";

class LandingMovie extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   movies: []
    // };
  }

  render() {
    return (
      <div className="landingMovie" data-movieid={this.props.movie.id}>
        <img
          src={`http://image.tmdb.org/t/p/w780/${
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
      </div>
    );
  }
}

export default LandingMovie;
