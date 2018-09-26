import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Newest from "./pages/Newest";
import HighestRated from "./pages/HighestRated";
import Genres from "./pages/Genres";
import Search from "./pages/Search";

class App extends React.Component {
  render() {
    return (
      <div class="pageBkgrd">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/explore/trending" component={Trending} />
        <Route exact path="/explore/newest" component={Newest} />
        <Route exact path="/explore/highest-rated" component={HighestRated} />
        <Route exact path="/explore/genres" component={Genres} />
        <Route exact path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
