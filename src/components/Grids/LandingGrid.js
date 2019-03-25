import React from "react";

import Preloader from "../Overlays/PreloaderOverlay";
import LandingMovie from "../Movies/LandingMovie";
import TrendingLink from "./components/TrendingLink";

class LandingGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      movies: [],
      displayLoader: false
    };
  }

  componentDidMount() {
    const { url } = this.props;

    window
      .fetch(url)
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

  showLoadingOverlay = () => {
    this.setState({ displayLoader: true });
  };

  render() {
    const { isLoaded, movies, displayLoader } = this.state;
    if (!isLoaded) {
      return <div />;
    } else {
      return (
        <React.Fragment>
          {displayLoader && <Preloader />}
          <div className="landingGrid">
            {movies.map((movie, index) => {
              if (index < 5) {
                return (
                  <LandingMovie
                    movie={movie}
                    key={movie.id}
                    showLoadingOverlay={this.showLoadingOverlay}
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
