import React from "react";
import { Route } from "react-router-dom";
// import history from "./history";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import GridParent from "./pages/GridParent";
// import Trending from "./pages/Trending";
// import Newest from "./pages/Newest";
// import HighestRated from "./pages/HighestRated";
import Genres from "./pages/Genres";
import GenreLanding from "./pages/GenreLanding";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";

class App extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      activeMovie: {}
    }
  }
  
  getActiveMovie = (movie) => {
    this.setState({activeMovie: movie}, function() {
      // history.push(`/movies/${this.state.activeMovie.id}`);
      // console.log(this.state.activeMovie);
    });
  }
  
  render() {
    return (
      <div className="pageBkgrd">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/explore/trending" render={()=><GridParent heading="Trending Movies" funcName="trending" getActiveMovie={this.getActiveMovie} />}/>
        <Route exact path="/explore/newest" render={()=><GridParent heading="Newest Movies" funcName="newest" getActiveMovie={this.getActiveMovie} />} />
        <Route exact path="/explore/highest-rated" render={()=><GridParent heading="Best Movies of All Time" funcName="highestRated" getActiveMovie={this.getActiveMovie} />} />
        <Route exact path="/explore/genres" component={Genres} />
        <Route exact path="/explore/genres/:genre" component={GenreLanding} />
        <Route path="/movies/:movie" render={()=><MoviePage movie={this.state.activeMovie} />} />
        <Route exact path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
