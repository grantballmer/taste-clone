import React from "react";
import { Route } from "react-router-dom";
import history from "./history";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import GridParent from "./pages/GridParent";
import Genres from "./pages/Genres";
import GenreLanding from "./pages/GenreLanding";
import Times from "./pages/Times";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: {}
    };
  }

  getActiveMovie = movie => {
    this.setState({ activeMovie: movie }, function() {
      const formatTitle = this.state.activeMovie.title
        .toLowerCase()
        .replace(" - ", "-")
        .replace(/\s/g, "-")
        .replace(/:/g, "");
      history.push(`/movies/${formatTitle}-${this.state.activeMovie.id}`);
    });
  };

  render() {
    return (
      <div className="pageBkgrd">
        <Navigation />
        <Route
          exact
          path="/"
          render={() => <Home getActiveMovie={this.getActiveMovie} />}
        />
        <Route exact path="/explore" component={Explore} />
        <Route
          exact
          path="/explore/trending"
          render={props => (
            <GridParent
              heading="Trending Movies"
              funcName="trending"
              getActiveMovie={this.getActiveMovie}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/explore/newest"
          render={props => (
            <GridParent
              heading="Newest Movies"
              funcName="newest"
              getActiveMovie={this.getActiveMovie}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/explore/highest-rated"
          render={props => (
            <GridParent
              heading="Best Movies of All Time"
              funcName="highestRated"
              getActiveMovie={this.getActiveMovie}
              {...props}
            />
          )}
        />
        <Route exact path="/explore/genres" component={Genres} />
        {/* <Route path="/explore/genres/:genre" component={GenreLanding} /> */}
        <Route
          path="/explore/genres/:genre"
          render={props => (
            <GenreLanding getActiveMovie={this.getActiveMovie} {...props} />
          )}
        />

        <Route path="/explore/times" component={Times} />
        <Route
          path="/movies/:movie"
          render={() => <MoviePage movie={this.state.activeMovie} />}
        />
        <Route exact path="/search" component={Search} />
      </div>
    );
  }
}

export default App;

// https://github.com/ReactTraining/react-router/issues/4105
