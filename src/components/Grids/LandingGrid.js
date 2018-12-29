import React from "react";
import LandingMovie from "../Movies/LandingMovie";
import TrendingLink from "./components/TrendingLink";

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

    window.fetch(url)
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
    }
    else {
      return (
        <React.Fragment>
          <div className="landingGrid">
            {movies.map((movie, index) => {
              if (index < 5) {
                return (
                  <LandingMovie
                    movie={movie}
                    key={movie.id}
                    // getActiveMovie={this.props.getActiveMovie}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <TrendingLink linkInfo={this.props.linkInfo} />
        </React.Fragment>
      );
    }
  }
}

export default LandingGrid;
