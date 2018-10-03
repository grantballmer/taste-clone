import React from "react";
import LandingMovie from "./components/LandingMovie";

// const apiKey = "d35fc236a158c3b822381b3271c75664";
// const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2018-08-15&release_date.lte=2018-09-30&with_release_type=3%7C2&with_original_language=en`;

class LandingGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      movies: []
    };
  }

  componentDidMount() {
    const { url } = this.props;

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
    const { isLoaded, movies } = this.state;
    if (!isLoaded) {
      return <div />;
    } else {
      return (
        <div className="landingGrid">
          {movies.map((movie, index) => {
            if (index < 5) {
              return (
                <LandingMovie
                  movie={movie}
                  key={movie.id}
                  getActiveMovie={this.props.getActiveMovie}
                />
              );
            }
          })}
          ;
        </div>
      );
    }
  }
}

export default LandingGrid;
