import React from "react";
import { withRouter } from "react-router-dom";

import Preloader from "../Overlays/PreloaderOverlay";
import Movie from "../Movies/Movie";
import Pagination from "./components/Pagination";

class MovieGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      movies: [],
      dataInfo: {},
      displayLoader: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.setState({ isLoaded: false });
      this.fetchData();
    }
  }

  fetchData = () => {
    const { url } = this.props;

    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          movies: result.results,
          dataInfo: {
            pageNum: result.page,
            total_results: result.total_results,
            total_pages: result.total_pages,
            numResults: result.results.length
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  showLoadingOverlay = () => {
    this.setState({ displayLoader: true });
  };

  render() {
    const { isLoaded, movies, dataInfo, displayLoader } = this.state;

    if (!isLoaded) {
      return <div />;
    } else {
      return (
        <React.Fragment>
          {displayLoader && <Preloader />}
          <div className="movieGrid">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  movie={movie}
                  showLoadingOverlay={this.showLoadingOverlay}
                />
              );
            })}
          </div>
          <Pagination
            page={this.props.page}
            path={this.props.match.url}
            dataInfo={dataInfo}
          />
        </React.Fragment>
      );
    }
  }
}

export default withRouter(MovieGrid);
