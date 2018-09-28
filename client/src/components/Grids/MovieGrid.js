import React from "react";
import Movie from "./components/Movie";

class MovieGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      movies: []
    };
  }

  componentDidMount() {
    const url = this.props.url();

    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          movies: result.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {  movies } = this.state;
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
      return (
        <div className="movieGrid">
          {movies.map(movie => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      );
    // }
  }
}

export default MovieGrid;
