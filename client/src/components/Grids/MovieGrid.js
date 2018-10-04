import React from "react";
import Movie from "./components/Movie";
import {Link, withRouter} from "react-router-dom";

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
      this.setState({isLoaded: false});
      this.fetchData();
    }
  }
  
  fetchData = () => {
    console.log(this.props);
    const page = this.props.page;
    const url = this.props.url(page);
    
    fetch(url)
    .then(res => res.json())
    .then(result => {
      this.setState({
        isLoaded: true,
        movies: result.results,
        dataInfo: {
          page: result.page,
          total_results: result.total_results,
          total_pages: result.total_pages
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const { isLoaded, movies, dataInfo } = this.state;
    if (!isLoaded) {
      return <div></div>;
    } else {
    return (
      <div className="container">
        <div className="movieGrid">
          {movies.map(movie => {
            return (
              <Movie
                key={movie.id}
                movie={movie}
                getActiveMovie={this.props.getActiveMovie}
              />
            );
          })}
        </div>
        <div className="page-pagination">
          <Link to={`${this.props.match.path}?page=${Number(this.props.page) - 1}`} className="btn-pagination">Prev</Link>
          

          <Link to={`${this.props.match.path}?page=${Number(this.props.page) + 1}`} className="btn-pagination">Next</Link>
        </div>
      </div>
    );
    
    }
  }
}

export default withRouter(MovieGrid);

// <% if (data.page === data.total_pages) { %>
//                 <% movieNum[0] = data.total_results - data.results.length + 1; %>
//                 <% movieNum[1] = data.total_results; %>
//             <% } else { %> 
//                 <% movieNum[1] = data.page * 20; %>
//                 <% movieNum[0] = movieNum[1] - 19 %>
//             <% } %>
