import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import GridParent from "./pages/GridParent";
import Genres from "./pages/Genres";
import CategoryLanding from "./pages/CategoryLanding";
import Times from "./pages/Times";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";

class App extends React.Component {
  render() {
    return (
      <div className="pageBkgrd">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:movie" component={MoviePage} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/explore/genres" component={Genres} />
          <Route exact path="/explore/times" component={Times} />
          <Route path="/explore/genres/:genre/trending" component={GridParent} />
          {/* <Route
            path="/explore/genres/:genre/trending"
            render={props => (
              <GridParent
                heading="Trending"
                funcName="genre"
                getActiveMovie={this.getActiveMovie}
                {...props}
              />
            )}
          /> */}
          <Route path="/explore/genres/:genre" component={CategoryLanding} />
          <Route path="/explore/:page" component={GridParent} />

         {/* <Route
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
          /> */}
          
          <Route path="/explore/times/:time" component={CategoryLanding} />

          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;

// https://github.com/ReactTraining/react-router/issues/4105


          {/* <Route
            path="/explore/times/:time"
            render={props => (
              <CategoryLanding
                getActiveMovie={this.getActiveMovie}
                {...props}
              />
            )}
          /> */}
          
            // constructor(props) {
  //   super(props);

  //   this.state = {
  //     activeMovie: {}
  //   };
  // }

  // getActiveMovie = movie => {
  //   this.setState({ activeMovie: movie }, function() {
  //     const formatTitle = this.state.activeMovie.title
  //       .toLowerCase()
  //       .replace(" - ", "-")
  //       .replace(/\s/g, "-")
  //       .replace(/:/g, "");
  //     history.push(`/movies/${formatTitle}-${this.state.activeMovie.id}`);
  //   });
  // };