import React from "react";
import Movie from "./components/Movie";
import { withRouter } from "react-router-dom";
import Pagination from "./components/Pagination";

class MovieGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      movies: [],
      dataInfo: {}
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

  render() {
    const { isLoaded, movies, dataInfo } = this.state;

    if (!isLoaded) {
      return <div />;
    } else {
      return (
        <div className="container">
          <div className="movieGrid">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  movie={movie}
                />
              );
            })}
          </div>
          <Pagination
            page={this.props.page}
            path={this.props.match.url}
            dataInfo={dataInfo}
          />
        </div>
      );
    }
  }
}

export default withRouter(MovieGrid);
